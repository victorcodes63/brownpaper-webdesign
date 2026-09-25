'use client'

import type { CSSProperties } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { SectionLabel, Reveal, PillLink, CharReveal, WordReveal, ScrollScale } from './ui'
import ServiceIndexList from '@/components/ServiceIndexList'

const disciplines = [
  { title: 'Brand Identity', meta: 'Logos · Guidelines · Systems', slug: 'brand-identity', image: '/images/hero/hero5.jpg' },
  { title: 'Packaging Design', meta: 'Boxes · Bags · Labels', slug: 'packaging-design', image: '/images/hero/hero6.jpg' },
  { title: 'Printing', meta: 'Stationery · Brochures · Books', slug: 'printing-services', image: '/images/indiv_services/printing.png' },
  { title: 'Display & Signage', meta: 'Banners · Backdrops · Pop-ups', slug: 'display', image: '/images/indiv_services/display.png' },
  { title: 'Office Stationery', meta: 'Letterheads · Notebooks · Folders', slug: 'office-stationery', image: '/images/indiv_services/office-stationery.jpg' },
  {
    title: 'Workwear',
    meta: 'Uniforms · Branded apparel',
    slug: 'workwear',
    image: '/images/services/workwear.jpg',
    imagePosition: 'object-[center_82%]',
  },
  { title: 'Promotional Items', meta: 'Merchandise · Giveaways', slug: 'promotional-items', image: '/images/indiv_services/promotional-items.jpg' },
]

/** Mono marks (white on black) — screen-blend so black drops out on chrome */
const alsoTrusted = [
  { name: 'Nation Media Group', logo: '/images/clients/mono/nation-media-group.png' },
  { name: 'KIPPRA', logo: '/images/clients/mono/kippra.png' },
  { name: 'Riara', logo: '/images/clients/mono/riara.png' },
  { name: 'Baraka', logo: '/images/clients/mono/baraka.png' },
  { name: 'Ikigai', logo: '/images/clients/mono/ikigai.png' },
  { name: 'Verto', logo: '/images/clients/mono/verto.svg' },
  { name: 'ESSA', logo: '/images/clients/mono/essa.png' },
  { name: 'Eagle HR', logo: '/images/clients/mono/eagle-hr.png' },
]

export default function Work() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="work" className="px-6 py-24 md:px-10 md:py-32 lg:px-14">
      {/* Header */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[14rem_minmax(0,1fr)_auto] lg:items-end lg:gap-8">
        <Reveal className="lg:self-start">
          <SectionLabel code="04" title="Selected work" />
        </Reveal>
        <Reveal delay={0.05}>
          <WordReveal as="h2" className="text-display text-[clamp(3rem,8vw,8rem)] leading-[0.9] font-semibold tracking-[-0.05em] text-ink">
            Selected <span className="text-kraft-fill">work</span>
          </WordReveal>
          <CharReveal className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink/55 md:text-[17px]">
            From a single run of business cards to a full brand rollout. Here is some of what leaves the studio.
          </CharReveal>
        </Reveal>
        <Reveal delay={0.1}>
          <PillLink href="/portfolio">View portfolio</PillLink>
        </Reveal>
      </div>

      {/* Featured — headline client */}
      <ScrollScale className="mt-16 origin-top md:mt-20">
        <article className="grid grid-cols-1 gap-2.5 rounded-[1.75rem] bg-chrome p-2.5 text-paper lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="relative flex min-h-[20rem] items-center justify-center rounded-[1.35rem] bg-paper p-12 lg:min-h-[32rem]">
            <span className="absolute top-5 left-5 rounded-full bg-ink px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] text-paper">
              FEATURED CLIENT
            </span>
            <div className="relative h-48 w-full max-w-xs md:h-56">
              <Image src="/images/clients/Kengen Logo.png" alt="KenGen logo" fill sizes="20rem" className="object-contain" />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 p-6 md:p-10">
            <div>
              <h3 className="text-display text-[clamp(2rem,3.2vw,3.25rem)] font-semibold tracking-[-0.045em] text-paper">
                KenGen
              </h3>
              <CharReveal className="mt-4 max-w-md text-[15px] leading-relaxed text-paper/55 md:text-base">
                Kenya&apos;s leading electricity generator, and one of the national institutions that trust
                Brown Paper to carry their brand into print.
              </CharReveal>
            </div>

            <dl className="grid grid-cols-1 gap-x-8 gap-y-5 font-mono text-[12px] uppercase tracking-[0.06em] sm:grid-cols-2">
              <div className="border-t border-paper/10 pt-3">
                <dt className="text-paper/40">Sector</dt>
                <dd className="mt-1 text-paper/85">Energy &amp; power generation</dd>
              </div>
              <div className="border-t border-paper/10 pt-3">
                <dt className="text-paper/40">Scale</dt>
                <dd className="mt-1 text-paper/85">Listed on the NSE</dd>
              </div>
            </dl>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper/40">Also trusted by</p>
              <div
                className="mt-4 overflow-hidden"
                style={{
                  maskImage: 'linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)',
                }}
              >
                <motion.div
                  className="flex w-max items-center gap-10 py-1"
                  animate={shouldReduceMotion ? undefined : { x: ['0%', '-50%'] }}
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : { duration: 32, ease: 'linear', repeat: Infinity }
                  }
                >
                  {[...alsoTrusted, ...alsoTrusted].map((c, i) => (
                    <span
                      key={`${c.name}-${i}`}
                      role="img"
                      aria-label={i < alsoTrusted.length ? c.name : undefined}
                      aria-hidden={i >= alsoTrusted.length}
                      className="block h-9 w-[6.5rem] shrink-0 bg-paper"
                      style={
                        {
                          maskImage: `url("${c.logo}")`,
                          WebkitMaskImage: `url("${c.logo}")`,
                          maskMode: 'luminance',
                          WebkitMaskSourceType: 'luminance',
                          maskSize: 'contain',
                          WebkitMaskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          WebkitMaskRepeat: 'no-repeat',
                          maskPosition: 'center',
                          WebkitMaskPosition: 'center',
                        } as CSSProperties
                      }
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </article>
      </ScrollScale>

      {/* More work — discipline index with hover preview */}
      <div className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-8">
        <Reveal>
          <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink/85">More from the studio</p>
        </Reveal>

        <ServiceIndexList items={disciplines} />
      </div>
    </section>
  )
}
