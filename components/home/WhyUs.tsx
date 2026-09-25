'use client'

import { SectionLabel, Reveal, pad, CharReveal, WordReveal } from './ui'

const points = [
  {
    title: 'Design and print under one roof',
    body: 'The people who design the work see it through production, so nothing gets lost between the file and the press.',
  },
  {
    title: 'Colour you can trust',
    body: 'Proofs are checked against your brand colours before any full run goes to press.',
  },
  {
    title: 'Honest timelines',
    body: 'A clear schedule upfront, and an early heads-up if anything changes.',
  },
  {
    title: 'Built for real use',
    body: 'Materials and finishes chosen for how the piece will be handled, stacked, carried and seen.',
  },
  {
    title: 'Work that scales with you',
    body: 'From a first run of 100 business cards to a rollout across branches, events and uniforms.',
  },
  {
    title: 'Cleaner printing',
    body: 'Clean energy and sustainable practices in production, plus the Okiyo range of eco-conscious products.',
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="px-2.5 md:px-3">
      <div className="grid grid-cols-1 gap-12 rounded-[1.75rem] bg-chrome px-6 py-20 text-paper md:px-10 md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-14">
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <SectionLabel code="06" title="What you get" dark />
          <WordReveal as="h2" className="text-display mt-10 text-[clamp(2.75rem,6vw,6rem)] leading-[0.92] font-semibold tracking-[-0.05em]">
            What we
            <br />
            deliver
          </WordReveal>
          <CharReveal className="mt-8 max-w-sm text-[15px] leading-relaxed text-paper/55 md:text-[17px]">
            Designed, proofed and produced by one studio in Nairobi.
          </CharReveal>
        </Reveal>

        <ul>
          {points.map((p, i) => (
            <Reveal key={p.title} delay={0.05 * i} x={-30} y={0}>
              <li className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-4 border-t border-paper/10 py-8 md:grid-cols-[6rem_minmax(0,1fr)] md:py-10">
                <span className="font-mono text-[12px] tracking-[0.06em] text-primary/80">{pad(i + 1)}.</span>
                <div>
                  <h3 className="text-display text-[clamp(1.5rem,2.2vw,2.25rem)] font-semibold tracking-[-0.04em]">
                    {p.title}
                  </h3>
                  <CharReveal className="mt-3 max-w-lg text-[15px] leading-relaxed text-paper/55">{p.body}</CharReveal>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
