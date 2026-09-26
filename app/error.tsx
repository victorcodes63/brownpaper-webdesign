'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHero, { PageShell } from '@/components/PageHero'
import { SectionLabel, Reveal, PillLink, WordReveal, CharReveal } from '@/components/home/ui'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-svh bg-chrome">
      <Navigation />

      <PageHero
        code="ERR"
        label="Unexpected stop"
        lead="Something on this page broke before it could finish loading. The studio is still here — try again, or head back home."
        title="Oops"
      />

      <PageShell>
        <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-8">
            <Reveal>
              <SectionLabel code="01" title="What happened" />
            </Reveal>
            <div className="max-w-xl">
              <Reveal delay={0.05}>
                <WordReveal
                  as="h2"
                  className="text-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-ink"
                >
                  Something went wrong
                </WordReveal>
              </Reveal>
              <Reveal delay={0.1}>
                <CharReveal className="mt-6 text-[15px] leading-relaxed text-ink/55 md:text-[17px]">
                  We’re sorry — an unexpected error interrupted this page. Try again, or return to the homepage and
                  pick up from there.
                </CharReveal>
              </Reveal>
              {error.digest && (
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55">
                  Ref {error.digest}
                </p>
              )}
              <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={reset}
                  className="group inline-flex items-center gap-10 rounded-2xl bg-ink px-7 py-4 font-mono text-[12px] uppercase tracking-[0.1em] text-paper transition-colors duration-500 hover:bg-primary"
                >
                  Try again
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-sm bg-paper text-[13px] text-ink transition-colors group-hover:bg-ink group-hover:text-paper"
                    aria-hidden
                  >
                    ↺
                  </span>
                </button>
                <PillLink href="/">Go home</PillLink>
                <PillLink href="/contact">Contact us</PillLink>
              </Reveal>
            </div>
          </div>
        </section>
      </PageShell>

      <Footer />
    </main>
  )
}
