'use client'

import type { ReactNode } from 'react'
import { SectionLabel, Reveal, CharReveal } from './home/ui'
import FitTitle from './FitTitle'

/**
 * Dark page hero with a giant display title — the white shell that follows
 * overlaps its bottom edge (use <PageShell> directly after).
 */
export default function PageHero({
  code,
  label,
  lead,
  title,
  children,
}: {
  code: string
  label: string
  lead: ReactNode
  title: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-0 text-paper md:px-10 md:pt-40 lg:px-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 0.8px, transparent 0.8px)',
          backgroundSize: '12px 12px',
          maskImage: 'radial-gradient(ellipse 60% 70% at 80% 20%, #000, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 70% at 80% 20%, #000, transparent 70%)',
        }}
      />
      <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <SectionLabel code={code} title={label} dark />
        </Reveal>
        <Reveal delay={0.05} className="flex flex-col items-start gap-8">
          <CharReveal as="div" className="max-w-xl text-[17px] leading-relaxed text-paper/55 md:text-xl">
            {lead}
          </CharReveal>
          {children}
        </Reveal>
      </div>

      <FitTitle className="mt-16 md:mt-24">
        {title}
      </FitTitle>
    </section>
  )
}

/** White rounded shell that rises over the bottom of the hero title. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 -mt-[clamp(1rem,2.6vw,2.75rem)] px-2.5 pb-2.5 md:px-3 md:pb-3 lg:px-3.5 lg:pb-3.5">
      <div className="page-shell">{children}</div>
    </div>
  )
}
