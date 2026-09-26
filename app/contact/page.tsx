'use client'

import { site } from '@/lib/site'

import Navigation from '@/components/Navigation'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import { faqs } from '@/lib/faqs'
import PageHero, { PageShell } from '@/components/PageHero'
import HomeContact from '@/components/home/HomeContact'
import { SectionLabel, Reveal, pad, WordReveal } from '@/components/home/ui'

const details = [
  {
    label: 'Visit',
    value: `${site.address.building}, ${site.address.floor}, ${site.address.city}`,
    action: { text: 'Get directions', href: site.address.mapsUrl, external: true },
  },
  { label: 'Call', value: site.phone, action: { text: 'Call now', href: site.phoneHref, external: false } },
  { label: 'Email', value: site.email, action: { text: 'Send an email', href: `mailto:${site.email}`, external: false } },
]

const hours = site.hours

export default function ContactPage() {
  return (
    <main className="min-h-svh bg-chrome">
      <Navigation />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />

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
                  <span className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55 group-hover:text-paper/50">
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
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper/55">04. Studio hours</span>
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

        <FAQ code="04" items={faqs.enquiries} title="Before you write" sub="Response times, consultations and what to include in your enquiry." />
      </PageShell>

      <Footer />
    </main>
  )
}
