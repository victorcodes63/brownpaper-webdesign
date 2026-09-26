'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHero, { PageShell } from '@/components/PageHero'
import { SectionLabel, Reveal, PillLink, WordReveal, CharReveal, pad } from '@/components/home/ui'

const shortcuts = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function NotFound() {
  return (
    <main className="min-h-svh bg-chrome">
      <Navigation />

      <PageHero
        code="404"
        label="Page missing"
        lead="This URL doesn’t match anything in the studio. It may have moved, or the link might be out of date."
        title="404"
      >
        <PillLink href="/" dark>
          Back to home
        </PillLink>
      </PageHero>

      <PageShell>
        <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-8">
            <Reveal>
              <SectionLabel code="01" title="Lost the thread" />
            </Reveal>
            <div className="max-w-xl">
              <Reveal delay={0.05}>
                <WordReveal
                  as="h2"
                  className="text-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-ink"
                >
                  We couldn’t find that page
                </WordReveal>
              </Reveal>
              <Reveal delay={0.1}>
                <CharReveal className="mt-6 text-[15px] leading-relaxed text-ink/55 md:text-[17px]">
                  Check the address, or use one of the links below to get back into the site.
                </CharReveal>
              </Reveal>
              <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-3">
                <PillLink href="/">Go home</PillLink>
                <PillLink href="/services">View services</PillLink>
                <PillLink href="/contact">Contact us</PillLink>
              </Reveal>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-10 border-t border-ink/10 pt-16 md:mt-28 md:pt-20 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-8">
            <Reveal>
              <SectionLabel code="02" title="Quick links" />
            </Reveal>
            <ul>
              {shortcuts.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group grid grid-cols-[3rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-ink/10 py-5 md:grid-cols-[4rem_minmax(0,1fr)_2rem] md:py-6"
                  >
                    <span className="font-mono text-[12px] text-ink/30">{pad(i + 1)}.</span>
                    <span className="text-display text-[clamp(1.5rem,2.8vw,2.5rem)] font-semibold tracking-[-0.04em] text-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                      {item.name}
                    </span>
                    <span className="text-lg text-ink/55 transition-colors group-hover:text-primary" aria-hidden>
                      ↗
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </PageShell>

      <Footer />
    </main>
  )
}
