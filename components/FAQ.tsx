'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { SectionLabel, Reveal, PillLink, ease, pad, CharReveal, WordReveal } from './home/ui'

export type FaqItem = { question: string; answer: string }

const defaultFaqs: FaqItem[] = [
  {
    question: 'What printing services do you offer?',
    answer:
      'Business cards, brochures, flyers, banners, stationery, catalogues, posters and large-format printing, using offset and digital presses.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Simple print jobs often take 5 to 7 business days. Full brand identity work typically runs 4 to 6 weeks. We share a clear timeline upfront.',
  },
  {
    question: 'Do you offer design services along with printing?',
    answer:
      'Yes. We are a full-service studio: logos, brand systems, marketing materials, packaging and digital assets, with or without print.',
  },
  {
    question: 'What is your minimum order quantity?',
    answer:
      'It varies by product. Business cards usually start at 100 units. Specialty packaging may need higher minimums, so we quote per project.',
  },
  {
    question: 'Can you work with my existing brand guidelines?',
    answer:
      'Absolutely. We work within established brand systems to keep every piece consistent across print and production.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'Bank transfer, M-Pesa, Airtel Money, cards, and cash for local clients. Larger projects typically start with a 50% deposit.',
  },
]

export default function FAQ({
  code = '08',
  items = defaultFaqs,
  title = 'Core questions',
  sub = 'Straight answers on timelines, minimums and how we work.',
}: {
  code?: string
  items?: FaqItem[]
  title?: string
  sub?: string
}) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="px-6 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <SectionLabel code={code} title="Frequently asked questions" />
          <WordReveal as="h2" className="text-display mt-10 text-[clamp(2.75rem,5.5vw,5.5rem)] leading-[0.92] font-semibold tracking-[-0.05em] text-ink">
            {title}
          </WordReveal>
          <CharReveal className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink/55 md:text-[17px]">
            {sub}
          </CharReveal>
          <div className="mt-10">
            <PillLink href="/contact">Ask us directly</PillLink>
          </div>
        </Reveal>

        <ul>
          {items.map((f, i) => {
            const isOpen = open === i
            return (
              <li key={f.question} className="border-b border-ink/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group grid w-full grid-cols-[3.5rem_minmax(0,1fr)_2rem] items-center gap-3 py-7 text-left md:grid-cols-[4.5rem_minmax(0,1fr)_2.5rem]"
                >
                  <span className="font-mono text-[12px] text-primary/70">{pad(i + 1)}.</span>
                  <span className="font-mono text-[13px] uppercase tracking-[0.06em] text-ink transition-colors group-hover:text-primary md:text-[14px]">
                    {f.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 md:h-9 md:w-9 ${
                      isOpen ? 'rotate-45 border-ink bg-ink text-paper' : 'border-ink/20 text-ink'
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-8 pl-[3.5rem] text-[15px] leading-relaxed text-ink/60 md:pl-[4.5rem] md:text-base">
                        {f.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
