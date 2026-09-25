'use client'

import { ArrowSwap, CharReveal, ImageReveal, RollText, WordReveal } from './home/ui'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'

const ease = [0.16, 1, 0.3, 1] as const

const services = [
  {
    slug: 'brand-identity',
    tag: 'Identity systems',
    title: 'Brand Identity',
    description:
      'We define how your brand looks, sounds and behaves, then build the system that keeps it consistent everywhere it appears.',
    images: [
      { src: '/images/hero/hero5.jpg', alt: 'Printed brand collateral laid out on a desk', pos: 'center' },
      { src: '/images/services/stationery.jpg', alt: 'Branded stationery and desk items', pos: 'center' },
    ],
    listLabel: 'What we build',
    items: ['Logo design and marks', 'Colour and typography systems', 'Brand guidelines', 'Visual language and applications'],
    output: 'A brand system ready for print and screen.',
  },
  {
    slug: 'packaging-design',
    tag: 'Shelf & retail',
    title: 'Packaging Design',
    description:
      'Packaging that protects the product and helps it sell, sized to fit and produced in the right material.',
    images: [
      { src: '/images/services/packaging.jpg', alt: 'Kraft paper bag and food containers', pos: 'center' },
      { src: '/images/hero/hero6.jpg', alt: 'Branded product packaging on a teal background', pos: 'center 60%' },
    ],
    listLabel: 'What we make',
    items: ['Product boxes and pouches', 'Kraft, jute and tote bags', 'Labels and product stickers', 'Gift and wine bags'],
    output: 'Shelf-ready packaging, proofed and produced.',
  },
  {
    slug: 'printing-services',
    tag: 'Print production',
    title: 'Printing',
    description:
      'Offset, digital and large-format print, with colour checked against your brand before anything goes to press.',
    images: [
      { src: '/images/services/printing.jpg', alt: 'Large-format printer producing a print run', pos: 'center' },
      { src: '/images/hero/hero1.jpg', alt: 'Custom notebooks in a leather tray', pos: 'center 65%' },
    ],
    listLabel: 'What we print',
    items: [
      'Business cards, letterheads and envelopes',
      'Company profiles, brochures and flyers',
      'Notebooks, calendars and certificates',
      'Invoice, receipt and delivery books',
    ],
    output: 'Press-ready files to finished run.',
  },
  {
    slug: 'display',
    tag: 'Events & retail',
    title: 'Display & Signage',
    description:
      'Displays that can be seen from across a busy hall and go up in minutes when the doors open.',
    images: [
      { src: '/images/services/display.jpg', alt: 'Person setting up a display board in a retail space', pos: 'center' },
      { src: '/images/hero/hero4.jpg', alt: 'Illuminated storefront signage at night', pos: 'center' },
    ],
    listLabel: 'What we produce',
    items: ['Pull-up, teardrop and X-banners', 'Backdrops and stage banners', 'Pop-ups and A-frames', 'Gazebo tents, flags and parasols'],
    output: 'Event-ready displays, produced & installed.',
  },
]

const pad = (n: number) => String(n).padStart(3, '0')

function StepBadge({ active, total }: { active: number; total: number }) {
  const ring = 'DESIGN · PRINT · DELIVER · DESIGN · PRINT · DELIVER · '
  return (
    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-paper">
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
        aria-hidden
      >
        <defs>
          <path id="svc-ring" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-primary font-mono text-[7.4px] uppercase tracking-[0.12em]">
          <textPath href="#svc-ring">{ring}</textPath>
        </text>
      </motion.svg>
      <span className="relative flex items-baseline font-display text-[1.6rem] font-semibold tracking-[-0.04em] text-ink">
        <span className="relative inline-flex h-[1.9rem] w-[0.9rem] justify-center overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={active}
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.45, ease }}
              className="absolute"
            >
              {active + 1}
            </motion.span>
          </AnimatePresence>
        </span>
        /{total}
      </span>
    </div>
  )
}

export default function Services() {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index))
        })
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="services" className="relative bg-paper p-2.5 md:p-3">
      <div className="relative grid grid-cols-1 lg:grid-cols-2">
        {/* ── STICKY LEFT ── */}
        <div className="relative z-10 lg:sticky lg:top-3 lg:h-[calc(100svh-1.5rem)]">
          <div className="relative flex h-full min-h-[30rem] flex-col justify-center overflow-hidden rounded-[1.5rem] bg-chrome px-8 py-16 md:rounded-[1.75rem] md:px-14 lg:px-[clamp(3rem,6vw,6.5rem)]">
            <ImageReveal>
<Image
              src="/images/hero/hero3.jpg"
              alt=""
              fill
              sizes="50vw"
              className="object-cover opacity-45"
            />
</ImageReveal>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(23,23,23,0.92),rgba(23,23,23,0.55)_70%)]" />

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="flex flex-col gap-1.5 font-mono text-[12px] uppercase tracking-[0.08em]">
                <span className="flex items-center gap-2 text-paper/45">
                  <span className="flex items-center gap-1" aria-hidden>
                    <span className="h-3 w-3 rounded-[3px] border-[1.5px] border-primary" />
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </span>
                  (BP® 03)
                </span>
                <span className="text-paper/90">Our services</span>
              </p>

              <WordReveal as="h2" className="text-display mt-10 text-[clamp(2.75rem,5.4vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.045em] text-paper">
                Brand, print
                <br />& production.
              </WordReveal>

              <CharReveal className="mt-8 max-w-sm text-[15px] leading-relaxed text-paper/55 md:text-[17px]">
                Four core services that take a brand from first sketch to finished piece, designed,
                printed and delivered from Nairobi.
              </CharReveal>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-10 rounded-2xl border border-paper/10 bg-paper/8 px-7 py-4 font-mono text-[12px] uppercase tracking-[0.1em] text-paper backdrop-blur-md transition-colors hover:bg-paper/15"
                >
                  <RollText>Start a project</RollText>
                  <ArrowSwap />
                </Link>
                <Link
                  href="/services"
                  className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/50 underline-offset-4 transition-colors hover:text-paper hover:underline"
                >
                  All services
                </Link>
              </div>
            </motion.div>
          </div>

          {/* rotating counter on the seam */}
          <div className="absolute top-1/2 right-0 z-20 hidden translate-x-1/2 -translate-y-1/2 lg:block">
            <StepBadge active={active} total={services.length} />
          </div>
        </div>

        {/* ── SCROLLING RIGHT ── */}
        <div className="relative">
          {services.map((s, i) => (
            <article
              key={s.slug}
              ref={(el) => {
                refs.current[i] = el
              }}
              data-index={i}
              className="flex flex-col justify-center px-4 py-16 md:px-10 md:py-20 lg:min-h-[calc(100svh-1.5rem)] lg:pr-[clamp(3rem,5vw,5.5rem)] lg:pl-[clamp(4rem,6vw,6.5rem)]"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 0.75, ease }}
              >
                <p className="font-mono text-[12px] uppercase tracking-[0.08em]">
                  <span className="text-primary/70">{pad(i + 1)}.</span>
                  <span className="text-ink/85">{s.tag}</span>
                </p>
                <h3 className="text-display mt-4 text-[clamp(2.25rem,3.6vw,3.6rem)] font-semibold tracking-[-0.045em] text-ink">
                  {s.title}
                </h3>
                <CharReveal className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink/55 md:text-[17px]">{s.description}</CharReveal>

                <div className="mt-10 grid grid-cols-2 gap-3">
                  {s.images.map((img) => (
                    <div key={img.src} className="relative aspect-[16/11] overflow-hidden rounded-[1.1rem] bg-mist">
                      <ImageReveal>
<Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(min-width: 1024px) 24vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                        style={{ objectPosition: img.pos }}
                      />
</ImageReveal>
                    </div>
                  ))}
                </div>

                <div className="mt-12 grid grid-cols-1 gap-4 font-mono text-[12px] uppercase tracking-[0.06em] sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
                  <p className="text-ink/85">{s.listLabel}</p>
                  <ul>
                    {s.items.map((item, j) => (
                      <li key={item} className="flex gap-5 border-b border-ink/8 py-3 first:pt-0">
                        <span className="text-primary/70">{pad(j + 1)}.</span>
                        <span className="text-ink/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 flex items-center gap-3">
                  <Link
                    href={`/services/${s.slug}`}
                    aria-label={`Explore ${s.title}`}
                    className="flex h-7 w-11 shrink-0 items-center justify-center rounded-lg bg-ink text-[13px] text-paper transition-colors hover:bg-primary"
                  >
                    →
                  </Link>
                  <p className="flex-1 bg-[repeating-linear-gradient(135deg,rgba(15,20,20,0.1)_0_1px,transparent_1px_6px)] py-1.5 pl-3 font-mono text-[11px] uppercase tracking-[0.05em] text-ink/80 min-[1400px]:text-[12px] min-[1400px]:tracking-[0.06em]">
                    <span className="bg-paper pr-1">
                      Output: {s.output}
                      <span className="ml-1 inline-block h-3.5 w-2 animate-pulse bg-primary align-middle" aria-hidden />
                    </span>
                  </p>
                </div>
              </motion.div>
            </article>
          ))}

          {/* progress dots */}
          <div className="pointer-events-none absolute inset-y-0 right-1 hidden lg:block">
            <div className="sticky top-1/2 flex -translate-y-1/2 flex-col items-center gap-2.5">
              {services.map((s, i) => (
                <span
                  key={s.slug}
                  className={`w-1.5 rounded-full transition-all duration-500 ${
                    i === active ? 'h-5 bg-primary' : 'h-1.5 bg-ink/15'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
