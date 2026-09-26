import { NextRequest, NextResponse } from 'next/server'
import { site } from '@/lib/site'

/**
 * Quote / contact endpoint (Route to 10, items 037–039).
 * Accepts multipart (quote form with artwork) or JSON (legacy modal).
 *
 * Email delivery uses Resend's HTTP API when these env vars are set:
 *   RESEND_API_KEY   – API key
 *   CONTACT_FROM     – verified sender, e.g. "Brown Paper <quotes@bpe.co.ke>"
 *   CONTACT_TO       – inbox for enquiries (defaults to site.email)
 * Without them, submissions are logged (development).
 */

const MAX_BYTES = 4 * 1024 * 1024
const ALLOWED = /\.(pdf|ai|eps|psd|svg|png|jpe?g|zip)$/i

type Payload = Record<string, string>
type Attachment = { filename: string; content: string }

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!)

async function readRequest(req: NextRequest): Promise<{ data: Payload; files: File[] }> {
  const type = req.headers.get('content-type') || ''
  if (type.includes('multipart/form-data')) {
    const fd = await req.formData()
    const data: Payload = {}
    const files: File[] = []
    fd.forEach((v, k) => {
      if (typeof v === 'string') data[k] = v
      else if (k === 'artwork' && v.size > 0) files.push(v)
    })
    return { data, files }
  }
  const json = (await req.json()) as Record<string, unknown>
  const data: Payload = {}
  Object.entries(json).forEach(([k, v]) => (data[k] = String(v ?? '')))
  return { data, files: [] }
}

async function sendEmail(body: Record<string, unknown>) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`)
}

export async function POST(req: NextRequest) {
  try {
    const { data, files } = await readRequest(req)

    // Honeypot: bots fill the hidden "website" field. Pretend success.
    if (data.website) return NextResponse.json({ success: true })

    const name = (data.name || '').trim()
    const email = (data.email || '').trim()
    const message = (data.message || '').trim()
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) {
      return NextResponse.json({ error: 'Missing or invalid required fields' }, { status: 400 })
    }
    // Multipart submissions come from the quote form, which requires consent (DPA 2019).
    if ((req.headers.get('content-type') || '').includes('multipart') && data.consent !== 'yes') {
      return NextResponse.json({ error: 'Consent is required' }, { status: 400 })
    }

    const total = files.reduce((n, f) => n + f.size, 0)
    if (total > MAX_BYTES) return NextResponse.json({ error: 'Attachments exceed 4 MB' }, { status: 413 })
    const bad = files.find((f) => !ALLOWED.test(f.name))
    if (bad) return NextResponse.json({ error: `File type not accepted: ${bad.name}` }, { status: 415 })

    const attachments: Attachment[] = await Promise.all(
      files.map(async (f) => ({ filename: f.name, content: Buffer.from(await f.arrayBuffer()).toString('base64') })),
    )

    const rows: [string, string | undefined][] = [
      ['Name', name],
      ['Company', data.company],
      ['Email', email],
      ['Phone', data.phone],
      ['Interested in', data.interest],
      ['Timeline', data.timeline],
      ['Quantity', data.quantity],
      ['Size', data.size],
      ['Needed by', data.needBy],
      ['Artwork', files.length ? files.map((f) => f.name).join(', ') : undefined],
    ]
    const table = rows
      .filter(([, v]) => v)
      .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td>${esc(v!)}</td></tr>`)
      .join('')
    const html = `<h2>New enquiry: ${esc(data.interest || 'General')}</h2><table>${table}</table><p style="white-space:pre-wrap">${esc(message)}</p>`

    if (process.env.RESEND_API_KEY && process.env.CONTACT_FROM) {
      await sendEmail({
        from: process.env.CONTACT_FROM,
        to: [process.env.CONTACT_TO || site.email],
        reply_to: email,
        subject: `New enquiry: ${data.interest || 'General'} (${name})`,
        html,
        attachments,
      })
      // Autoresponder (item 039)
      await sendEmail({
        from: process.env.CONTACT_FROM,
        to: [email],
        subject: `We've received your enquiry | ${site.name}`,
        html: `<p>Hi ${esc(name.split(' ')[0])},</p><p>Thanks for getting in touch with ${site.name}. We've received your enquiry and will reply ${site.responseTime}.</p><p>If it's urgent, call or WhatsApp us on ${site.phone}.</p><p>${site.name}<br/>${site.address.short}</p>`,
      })
    } else {
      console.log('[contact] email not configured, logging submission:', { ...data, files: files.map((f) => `${f.name} (${f.size} B)`) })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact] failed:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
