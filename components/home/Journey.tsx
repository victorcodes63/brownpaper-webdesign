'use client'

import { motion } from 'motion/react'
import { SectionLabel, Reveal, PillLink, Marquee, ease, CharReveal, WordReveal } from './ui'

const milestones = [
  { year: '2022', title: 'Founded in Nairobi', body: 'Started in June 2022 to bring design and print together in one studio.' },
  { year: '2023', title: 'Studio growth', body: 'Expanded the team and the range of services on offer.' },
  { year: '2024', title: '150+ projects', body: 'Passed 150 projects delivered for more than 100 clients.' },
  { year: 'Today', title: 'Across East Africa', body: 'Working with brands across Kenya and the wider region.' },
]

export default function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32">
      <div className="px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-8">
          <Reveal>
            <SectionLabel code="07" title="Our journey" />
          </Reveal>
          <Reveal delay={0.05}>
            <WordReveal as="h2" className="text-display text-[clamp(2.5rem,5.2vw,5.25rem)] leading-[0.95] font-semibold tracking-[-0.05em] text-ink">
              A Nairobi studio built on <span className="text-kraft-fill">craft</span>
            </WordReveal>
            <CharReveal className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink/55 md:text-[17px]">
              From a small design-and-print shop to a studio trusted with full brand rollouts.
            </CharReveal>
          </Reveal>
        </div>

        <div className="relative mt-16 md:mt-24">
          <div className="absolute top-2 right-0 left-0 hidden h-px bg-ink/10 md:block">
            <motion.div
              className="h-full origin-left bg-ink"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 1.8, ease }}
            />
          </div>
          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={0.1 * i} x={15} y={0}>
                <li className="relative md:pt-10">
                  <span className="absolute top-0 left-0 hidden h-4 w-4 rounded-full border-[3px] border-paper bg-primary md:block" />
                  <p className="font-mono text-[12px] tracking-[0.08em] text-ink/40">{m.year}</p>
                  <h3 className="text-display mt-3 text-[clamp(1.5rem,2vw,2rem)] font-semibold tracking-[-0.04em] text-ink">
                    {m.title}
                  </h3>
                  <CharReveal className="mt-3 max-w-[18rem] text-[15px] leading-relaxed text-ink/55">{m.body}</CharReveal>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <Reveal className="mt-24 md:mt-32">
          <div className="flex flex-col items-start justify-between gap-10 rounded-[1.75rem] bg-primary px-8 py-14 text-paper md:px-14 md:py-20 lg:flex-row lg:items-end">
            <h3 className="text-display max-w-[18ch] text-[clamp(2.25rem,4.2vw,4.25rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-paper">
              Helping brands look as good on paper as they do on screen.
            </h3>
            <div className="flex flex-col items-start gap-5 lg:items-end">
              <CharReveal className="max-w-xs text-[15px] leading-relaxed text-paper/80 lg:text-right">
                Tell us what you&apos;re making. We&apos;ll tell you what it takes.
              </CharReveal>
              <PillLink href="/contact">Start with Brown Paper</PillLink>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-24">
        <Marquee />
      </div>
    </section>
  )
}
