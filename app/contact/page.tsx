'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FAQ, { type FaqItem } from '@/components/FAQ'
import PageHero, { PageShell } from '@/components/PageHero'
import HomeContact from '@/components/home/HomeContact'
import { SectionLabel, Reveal, pad, WordReveal } from '@/components/home/ui'

const details = [
  {
    label: 'Visit',
    value: 'Mayhouse 680 Hotel Building, 3rd Floor, Nairobi',
    action: { text: 'Get directions', href: 'https://maps.app.goo.gl/oqN31Wxp6caDzvmD6', external: true },
  },
  { label: 'Call', value: '+254 716 286 489', action: { text: 'Call now', href: 'tel:+254716286489', external: false } },
  { label: 'Email', value: 'info@bpe.co.ke', action: { text: 'Send an email', href: 'mailto:info@bpe.co.ke', external: false } },
]

const hours = [
  { day: 'Monday to Friday', time: '8:00 AM to 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM to 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

const faqs: FaqItem[] = [
  { question: 'How quickly will you respond?', answer: 'We reply to all enquiries within 24 hours on business days. For urgent jobs, call us directly on +254 716 286 489.' },
  { question: 'Do you offer free consultations?', answer: 'Yes. We can meet at the studio, by phone or by video call. Use the form above to book one.' },
  { question: 'What should I include in my enquiry?', answer: 'Project type, deadline, approximate budget, quantities or specifications, and any references or inspiration you have. The more detail, the faster we can quote.' },
  { question: 'Can I visit the studio?', answer: 'Yes. We’re at Mayhouse 680 Hotel Building, 3rd Floor, Nairobi. Book an appointment, or walk in during business hours.' },
  { question: 'Do you quote by email or phone?', answer: 'Yes, for straightforward jobs. For complex projects we recommend a free consultation so the quote reflects everything you need.' },
  { question: 'Do you work with clients outside Nairobi?', answer: 'Yes, across Kenya and East Africa. We work remotely by phone, email and video, and arrange shipping for finished work.' },
]

export default function ContactPage() {
  return (
    <main className="min-h-svh bg-chrome">
      <Navigation />

      <PageHero
        code="01"
        label="Contact"
        lead="Bring the brief, the rough idea or just the deadline. We reply within 24 hours on business days."
        title="Let’s talk"
      />

      <PageShell>
        <div className="pt-2.5 md:pt-3">
          <HomeContact code="02" heading="Start a project" />
        </div>

        <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-8">
            <Reveal>
              <SectionLabel code="03" title="Find us" />
            </Reveal>
            <Reveal delay={0.05}>
              <WordReveal as="h2" className="text-display max-w-[18ch] text-[clamp(2.25rem,4.4vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.05em] text-ink">
                Visit, call or email us
              </WordReveal>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-4">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={0.05 * i} className="h-full">
                <a
                  href={d.action.href}
                  {...(d.action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex h-full flex-col justify-between gap-10 rounded-[1.5rem] bg-mist p-7 transition-colors hover:bg-ink hover:text-paper"
                >
                  <span className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.08em] text-ink/40 group-hover:text-paper/50">
                    <span>
                      {pad(i + 1)}. {d.label}
                    </span>
                    <span aria-hidden>↗</span>
                  </span>
                  <span>
                    <span className="text-display block text-[1.5rem] leading-[1.15] font-semibold tracking-[-0.035em]">
                      {d.value}
                    </span>
                    <span className="mt-3 block font-mono text-[11px] uppercase tracking-[0.08em] text-primary">
                      {d.action.text}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.15} className="h-full">
              <div className="flex h-full flex-col justify-between gap-10 rounded-[1.5rem] bg-chrome p-7 text-paper">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper/40">04. Studio hours</span>
                <ul className="font-mono text-[12px] uppercase tracking-[0.05em]">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4 border-t border-paper/10 py-2.5">
                      <span className="text-paper/60">{h.day}</span>
                      <span className="text-paper/90">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <FAQ code="04" items={faqs} title="Before you write" sub="Response times, consultations and what to include in your enquiry." />
      </PageShell>

      <Footer />
    </main>
  )
}
