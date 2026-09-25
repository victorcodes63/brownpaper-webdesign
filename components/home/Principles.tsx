'use client'

import { SectionLabel, Reveal, PillLink, CharReveal, WordReveal } from './ui'

export default function Principles() {
  return (
    <section id="principles" className="px-6 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal>
          <SectionLabel code="10" title="Our principles" />
          <WordReveal as="h2" className="text-display mt-10 text-[clamp(2.75rem,6vw,6rem)] leading-[0.92] font-semibold tracking-[-0.05em] text-ink">
            What
            <br />
            we believe
          </WordReveal>
          <CharReveal className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink/55 md:text-[17px]">
            We make brands that work as well in print and in the hand as they do on screen.
          </CharReveal>
          <div className="mt-10">
            <PillLink href="/about">About the studio</PillLink>
          </div>
        </Reveal>

        <div className="flex flex-col gap-12 lg:pt-24">
          <Reveal delay={0.05}>
            <p className="text-display text-[clamp(1.6rem,2.6vw,2.6rem)] leading-[1.15] font-medium tracking-[-0.035em] text-ink">
              Good design has to hold up in real use. It gets printed, handled, stacked and seen in every kind of
              light, and it should look right every time.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-display text-[clamp(1.6rem,2.6vw,2.6rem)] leading-[1.15] font-medium tracking-[-0.035em] text-ink/40">
              Our job is to make every part of a brand say the same thing clearly, wherever someone meets it.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
