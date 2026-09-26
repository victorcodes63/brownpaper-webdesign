'use client'

import { CharReveal, PillLink, Reveal } from './ui'

export default function CtaBand() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24 lg:px-14">
        {/* CTA */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 rounded-[1.75rem] bg-primary px-8 py-14 text-paper md:px-14 md:py-20 lg:flex-row lg:items-end">
            <h2 className="text-display max-w-[18ch] text-[clamp(2.25rem,4.2vw,4.25rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-paper">
              Helping brands look as good on paper as they do on screen.
            </h2>
            <div className="flex flex-col items-start gap-5 lg:items-end">
              <CharReveal className="max-w-xs text-[15px] leading-relaxed text-paper/80 lg:text-right">
                Tell us what you&apos;re making. We&apos;ll tell you what it takes.
              </CharReveal>
              <PillLink href="/contact">Start with Brown Paper</PillLink>
            </div>
          </div>
        </Reveal>
    </section>
  )
}
