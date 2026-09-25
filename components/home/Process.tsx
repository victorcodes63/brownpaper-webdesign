'use client'

import { motion } from 'motion/react'
import { SectionLabel, Reveal, PillLink, ease, pad, CharReveal, WordReveal } from './ui'

const steps = [
  {
    tag: 'Brief',
    title: 'Brief & discovery',
    body: 'We learn about the product, the audience and where the work will be used, then agree scope, quantities and deadlines.',
    items: ['Goals and audience', 'Sizes, quantities and materials', 'Budget and timeline'],
  },
  {
    tag: 'Design',
    title: 'Concept & design',
    body: 'Concepts are shown as real mockups, then refined with you until the direction is locked.',
    items: ['Concept routes', 'Mockups in context', 'Revisions and sign-off'],
  },
  {
    tag: 'Proof',
    title: 'Proof & production',
    body: 'Colour-checked proofs before any full run, with production tracked against the agreed date.',
    items: ['Digital and physical proofs', 'Material and finish checks', 'Production run'],
  },
  {
    tag: 'Deliver',
    title: 'Delivery & installation',
    body: 'Finished work delivered to your office or venue, and installed on site for displays and signage.',
    items: ['Quality check before dispatch', 'Delivery to your door', 'On-site installation'],
  },
]

export default function Process({ code = '05' }: { code?: string }) {
  return (
    <section id="process" className="px-6 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[14rem_minmax(0,1fr)_auto] lg:items-end lg:gap-8">
        <Reveal className="lg:self-start">
          <SectionLabel code={code} title="Process" />
        </Reveal>
        <Reveal delay={0.05}>
          <WordReveal as="h2" className="text-display text-[clamp(2.75rem,6vw,6rem)] leading-[0.92] font-semibold tracking-[-0.05em] text-ink">
            How a job moves
          </WordReveal>
          <CharReveal className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/55 md:text-[17px]">
            The same clear steps from first conversation to finished piece, whether it is a flyer run or a full
            rebrand.
          </CharReveal>
        </Reveal>
        <Reveal delay={0.1}>
          <PillLink href="/contact">Start a project</PillLink>
        </Reveal>
      </div>

      <div className="relative mt-16 md:mt-20">
        {/* progress rail */}
        <div className="absolute top-[1.1rem] right-0 left-0 hidden h-px bg-ink/10 lg:block">
          <motion.div
            className="h-full origin-left bg-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 1.6, ease }}
          />
        </div>

        <ol className="grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * i} x={30} y={0}>
              <li className="flex h-full flex-col">
                <span className="relative z-10 mb-6 flex h-9 w-fit items-center rounded-full bg-ink px-4 font-mono text-[11px] tracking-[0.08em] text-paper">
                  {pad(i + 1)}. {s.tag.toUpperCase()}
                </span>
                <div className="flex flex-1 flex-col rounded-[1.5rem] bg-mist p-7 md:p-8">
                  <h3 className="text-display text-[clamp(1.6rem,2.1vw,2.1rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink/55">{s.body}</p>
                  <ul className="mt-auto pt-8 font-mono text-[11px] uppercase tracking-[0.06em]">
                    {s.items.map((it, j) => (
                      <li key={it} className="flex gap-4 border-t border-ink/10 py-2.5">
                        <span className="text-primary/70">{pad(j + 1)}.</span>
                        <span className="text-ink/75">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
