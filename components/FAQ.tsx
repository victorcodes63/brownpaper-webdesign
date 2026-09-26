'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { faqs as faqsSource } from '@/lib/faqs'
import { SectionLabel, Reveal, PillLink, ease, pad, CharReveal, WordReveal } from './home/ui'

export type FaqItem = { question: string; answer: string }

const defaultFaqs: FaqItem[] = faqsSource.general

export default function FAQ({
  code = '08',
  items = defaultFaqs,
  title = 'Core questions',
  sub = 'Straight answers on timelines, minimums and how we work.',
  schema = false,
}: {
  code?: string
  items?: FaqItem[]
  title?: string
  sub?: string
  schema?: boolean
}) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="px-6 py-24 md:px-10 md:py-32 lg:px-14">
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: items.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
              })),
            }),
          }}
        />
      )}
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
                  className="group grid w-full grid-cols-[2.5rem_minmax(0,1fr)_2rem] items-center gap-3 py-6 md:py-7 text-left md:grid-cols-[4.5rem_minmax(0,1fr)_2.5rem]"
                >
                  <span className="font-mono text-[12px] text-primary">{pad(i + 1)}.</span>
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
                      <p className="max-w-xl pb-8 pl-[3.25rem] pr-2 text-[15px] leading-relaxed text-ink/60 md:pl-[5.25rem] md:text-base">
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
