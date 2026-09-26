'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { site } from '@/lib/site'
import { track } from '@/lib/track'
import { SectionLabel, Reveal, CharReveal, WordReveal, RollText, ArrowSwap } from './ui'

const interests = ['Brand identity', 'Packaging', 'Printing', 'Display & signage', 'Workwear', 'Promotional items', 'Something else']
const timelines = ['This week', 'This month', '1 to 3 months', 'Just exploring']

// Vercel functions accept ~4.5 MB request bodies; keep uploads under that.
const MAX_UPLOAD_BYTES = 4 * 1024 * 1024
const ACCEPT = '.pdf,.ai,.eps,.psd,.svg,.png,.jpg,.jpeg,.zip'

type Status = 'idle' | 'sending' | 'error'
type Errors = Partial<Record<'name' | 'email' | 'message' | 'files' | 'consent', string>>

const field =
  'w-full border-b border-paper/15 bg-transparent pt-2 pb-3 text-[15px] text-paper placeholder:text-paper/30 transition-colors focus:border-primary focus:outline-none aria-[invalid=true]:border-red-400'
const lbl = 'font-mono text-[11px] uppercase tracking-[0.08em] text-paper/55'
const err = 'mt-2 block font-mono text-[11px] tracking-[0.04em] text-red-300'

function Chip({ active, children, onClick }: { active: boolean; children: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.06em] transition-colors ${
        active ? 'border-primary bg-primary text-paper' : 'border-paper/15 text-paper/70 hover:border-paper/40'
      }`}
    >
      {active ? '✓ ' : ''}
      {children}
    </button>
  )
}

const fmtSize = (b: number) => (b > 1024 * 1024 ? `${(b / 1024 / 1024).toFixed(1)} MB` : `${Math.round(b / 1024)} KB`)

export default function HomeContact({
  code = '09',
  heading = 'Let’s talk',
}: {
  code?: string
  heading?: string
}) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const [picked, setPicked] = useState<string[]>([])
  const [timeline, setTimeline] = useState('')
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', quantity: '', size: '', needBy: '', message: '' })
  const [files, setFiles] = useState<File[]>([])
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const toggle = (v: string) => setPicked((p) => (p.includes(v) ? p.filter((x) => x !== v) : [...p, v]))
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value })

  const validate = (): Errors => {
    const e: Errors = {}
    if (!form.name.trim()) e.name = 'Please tell us your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (form.message.trim().length < 10) e.message = 'A sentence or two about the project helps us quote.'
    const total = files.reduce((n, f) => n + f.size, 0)
    if (total > MAX_UPLOAD_BYTES) e.files = `Files total ${fmtSize(total)}. Keep uploads under 4 MB, or send large artwork by email or WhatsApp.`
    if (!consent) e.consent = 'Please agree so we can use your details to reply.'
    return e
  }

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) {
      const first = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')
      first?.focus()
      return
    }
    setStatus('sending')
    try {
      const interest = picked.length ? picked.join(', ') : 'General enquiry'
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => fd.append(k, v))
      fd.append('interest', interest)
      fd.append('timeline', timeline)
      fd.append('consent', 'yes')
      fd.append('website', (formRef.current?.elements.namedItem('website') as HTMLInputElement)?.value || '')
      files.forEach((f) => fd.append('artwork', f))
      const res = await fetch('/api/contact', { method: 'POST', body: fd })
      if (!res.ok) throw new Error()
      track('quote_submitted', { interest, files: files.length })
      router.push('/contact/thank-you')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-2.5 pb-2.5 md:px-3 md:pb-3">
      <div className="grid grid-cols-1 gap-14 rounded-[1.75rem] bg-chrome px-6 py-20 text-paper md:px-10 md:py-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-14">
        <Reveal className="flex flex-col">
          <SectionLabel code={code} title="Contact" dark />
          <WordReveal as="h2" className="text-display mt-10 text-[clamp(3.25rem,7vw,7rem)] leading-[0.9] font-semibold tracking-[-0.05em]">
            {heading}
          </WordReveal>
          <CharReveal className="mt-6 max-w-sm text-[15px] leading-relaxed text-paper/55 md:text-[17px]">
            Bring the brief, the rough idea or just the deadline. We&apos;ll tell you what it takes to make it.
          </CharReveal>

          <dl className="mt-12 grid grid-cols-1 gap-6 font-mono text-[12px] uppercase tracking-[0.06em] sm:grid-cols-2 lg:mt-auto lg:pt-16">
            <div>
              <dt className="text-paper/55">Call</dt>
              <dd className="mt-1.5">
                <a href={site.phoneHref} onClick={() => track('phone_click', { from: 'contact_card' })} className="text-paper/90 hover:text-primary">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-paper/55">Email</dt>
              <dd className="mt-1.5 normal-case">
                <a href={`mailto:${site.email}`} className="text-paper/90 hover:text-primary">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-paper/55">Studio</dt>
              <dd className="mt-1.5">
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/90 hover:text-primary"
                >
                  {site.address.floor}, {site.address.city} ↗
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-paper/55">Hours</dt>
              <dd className="mt-1.5 text-paper/90">{site.hours[0].day}, {site.hours[0].time}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.08}>
          <form ref={formRef} onSubmit={submit} noValidate className="rounded-[1.5rem] bg-paper/[0.04] p-6 ring-1 ring-paper/8 md:p-9">
            <fieldset>
              <legend className={lbl}>What do you need?</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {interests.map((v) => (
                  <Chip key={v} active={picked.includes(v)} onClick={() => toggle(v)}>
                    {v}
                  </Chip>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-8">
              <legend className={lbl}>When do you need it?</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {timelines.map((v) => (
                  <Chip key={v} active={timeline === v} onClick={() => setTimeline(timeline === v ? '' : v)}>
                    {v}
                  </Chip>
                ))}
              </div>
            </fieldset>

            {/* spam trap: hidden from people, filled by bots */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              <label className="block">
                <span className={lbl}>Your name *</span>
                <input
                  className={field}
                  value={form.name}
                  onChange={set('name')}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'err-name' : undefined}
                />
                {errors.name && <span id="err-name" className={err}>{errors.name}</span>}
              </label>
              <label className="block">
                <span className={lbl}>Company</span>
                <input className={field} value={form.company} onChange={set('company')} autoComplete="organization" />
              </label>
              <label className="block">
                <span className={lbl}>Email *</span>
                <input
                  type="email"
                  className={field}
                  value={form.email}
                  onChange={set('email')}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'err-email' : undefined}
                />
                {errors.email && <span id="err-email" className={err}>{errors.email}</span>}
              </label>
              <label className="block">
                <span className={lbl}>Phone / WhatsApp</span>
                <input type="tel" className={field} value={form.phone} onChange={set('phone')} autoComplete="tel" />
              </label>
              <label className="block">
                <span className={lbl}>Quantity</span>
                <input className={field} value={form.quantity} onChange={set('quantity')} placeholder="e.g. 500 cards" />
              </label>
              <label className="block">
                <span className={lbl}>Size</span>
                <input className={field} value={form.size} onChange={set('size')} placeholder="e.g. A5, 85 × 55 mm" />
              </label>
              <label className="block">
                <span className={lbl}>Needed by</span>
                <input type="date" className={`${field} [color-scheme:dark]`} value={form.needBy} onChange={set('needBy')} />
              </label>
              <label className="block">
                <span className={lbl}>Artwork (optional, under 4 MB)</span>
                <input
                  type="file"
                  multiple
                  accept={ACCEPT}
                  onChange={(e) => setFiles(Array.from(e.target.files || []))}
                  aria-invalid={!!errors.files}
                  aria-describedby={errors.files ? 'err-files' : 'files-hint'}
                  className="mt-2 block w-full text-[13px] text-paper/70 file:mr-4 file:rounded-full file:border-0 file:bg-paper/10 file:px-4 file:py-2 file:font-mono file:text-[11px] file:uppercase file:tracking-[0.06em] file:text-paper hover:file:bg-paper/20"
                />
                <span id="files-hint" className="mt-2 block font-mono text-[10px] tracking-[0.04em] text-paper/55">
                  PDF, AI, EPS, PSD, SVG, PNG, JPG or ZIP
                  {files.length > 0 && ` · ${files.length} file${files.length > 1 ? 's' : ''}, ${fmtSize(files.reduce((n, f) => n + f.size, 0))}`}
                </span>
                {errors.files && <span id="err-files" className={err}>{errors.files}</span>}
              </label>
              <label className="block sm:col-span-2">
                <span className={lbl}>Tell us about the project *</span>
                <textarea
                  rows={3}
                  className={`${field} resize-none`}
                  value={form.message}
                  onChange={set('message')}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'err-message' : undefined}
                />
                {errors.message && <span id="err-message" className={err}>{errors.message}</span>}
              </label>
            </div>

            <label className="mt-8 flex items-start gap-3 text-[13px] leading-relaxed text-paper/60">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? 'err-consent' : undefined}
                className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
              />
              <span>
                I agree to {site.name} using these details to respond to my enquiry, as set out in the{' '}
                <Link href="/privacy-policy" className="text-paper underline underline-offset-4 hover:text-primary">
                  privacy policy
                </Link>
                .
                {errors.consent && <span id="err-consent" className={err}>{errors.consent}</span>}
              </span>
            </label>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex items-center gap-10 rounded-2xl bg-paper px-7 py-4 font-mono text-[12px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-primary hover:text-paper disabled:opacity-60"
              >
                <RollText>{status === 'sending' ? 'Sending…' : 'Request a quote'}</RollText> <ArrowSwap />
              </button>
              <p role="status" aria-live="polite" className="font-mono text-[11px] uppercase tracking-[0.08em]">
                {Object.keys(errors).length > 0 && <span className="text-red-300">Please check the highlighted fields.</span>}
                {status === 'error' && (
                  <span className="text-red-300">
                    Something went wrong. Call {site.phone} or email {site.email}.
                  </span>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
