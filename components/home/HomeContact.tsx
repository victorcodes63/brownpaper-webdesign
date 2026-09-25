'use client'

import { useState } from 'react'
import { SectionLabel, Reveal, CharReveal, WordReveal, RollText, ArrowSwap } from './ui'

const interests = ['Brand identity', 'Packaging', 'Printing', 'Display & signage', 'Something else']
const timelines = ['This week', 'This month', '1 to 3 months', 'Just exploring']

type Status = 'idle' | 'sending' | 'success' | 'error'

const field =
  'w-full border-b border-paper/15 bg-transparent pt-2 pb-3 text-[15px] text-paper placeholder:text-paper/30 transition-colors focus:border-primary focus:outline-none'
const lbl = 'font-mono text-[11px] uppercase tracking-[0.08em] text-paper/45'

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
      {children}
    </button>
  )
}

export default function HomeContact({
  code = '09',
  heading = 'Let’s talk',
}: {
  code?: string
  heading?: string
}) {
  const [picked, setPicked] = useState<string[]>([])
  const [timeline, setTimeline] = useState('')
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const toggle = (v: string) => setPicked((p) => (p.includes(v) ? p.filter((x) => x !== v) : [...p, v]))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const interest = picked.length ? picked.join(', ') : 'General enquiry'
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          interest,
          message: [form.company && `Company: ${form.company}`, timeline && `Timeline: ${timeline}`, form.message]
            .filter(Boolean)
            .join('\n'),
          subject: `New project enquiry: ${interest}`,
        }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', company: '', email: '', phone: '', message: '' })
      setPicked([])
      setTimeline('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-2.5 md:px-3">
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
              <dt className="text-paper/40">Call</dt>
              <dd className="mt-1.5">
                <a href="tel:+254716286489" className="text-paper/90 hover:text-primary">
                  +254 716 286 489
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-paper/40">Email</dt>
              <dd className="mt-1.5 normal-case">
                <a href="mailto:info@bpe.co.ke" className="text-paper/90 hover:text-primary">
                  info@bpe.co.ke
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-paper/40">Studio</dt>
              <dd className="mt-1.5">
                <a
                  href="https://maps.app.goo.gl/oqN31Wxp6caDzvmD6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/90 hover:text-primary"
                >
                  3rd Floor, Nairobi ↗
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-paper/40">Working</dt>
              <dd className="mt-1.5 text-paper/90">Across Kenya &amp; East Africa</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={submit} className="rounded-[1.5rem] bg-paper/[0.04] p-6 ring-1 ring-paper/8 md:p-9">
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

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              <label className="block">
                <span className={lbl}>Your name *</span>
                <input required className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </label>
              <label className="block">
                <span className={lbl}>Company</span>
                <input className={field} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
              </label>
              <label className="block">
                <span className={lbl}>Email *</span>
                <input
                  required
                  type="email"
                  className={field}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>
              <label className="block">
                <span className={lbl}>Phone</span>
                <input type="tel" className={field} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </label>
              <label className="block sm:col-span-2">
                <span className={lbl}>Tell us about the project *</span>
                <textarea
                  required
                  rows={3}
                  className={`${field} resize-none`}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </label>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex items-center gap-10 rounded-2xl bg-paper px-7 py-4 font-mono text-[12px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-primary hover:text-paper disabled:opacity-60"
              >
                <RollText>{status === 'sending' ? 'Sending…' : 'Start the conversation'}</RollText> <ArrowSwap />
              </button>
              <p aria-live="polite" className="font-mono text-[11px] uppercase tracking-[0.08em]">
                {status === 'success' && <span className="text-primary">Thanks, we&apos;ll be in touch shortly.</span>}
                {status === 'error' && <span className="text-red-400">Something went wrong. Call or email us instead.</span>}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
