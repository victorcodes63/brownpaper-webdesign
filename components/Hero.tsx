'use client'

import { motion, useReducedMotion } from 'motion/react'
import Link from 'next/link'
import Navigation from './Navigation'
import HeroMorphImage from './HeroMorphImage'
import Image from 'next/image'
import { site } from '@/lib/site'

const ease = [0.16, 1, 0.3, 1] as const

const tickerItems = [
  'Design through production',
  'Fast on-demand printing',
  'Tailor-made packages for every brief',
  'Printed with clean energy',
  'Design · Printing · Branding · Promotional items',
  'Brands that refuse to blend in',
]

// Faces for the clients notch (stock portraits from /testimonials)
// Real client marks (white versions) in place of stock faces (Route to 10, item 007)
const clientMarks = [
  { name: 'KenGen', src: '/images/clients/mono/kengen.png' },
  { name: 'Nation Media Group', src: '/images/clients/mono/nation-media-group.png' },
  { name: 'KIPPRA', src: '/images/clients/mono/kippra.png' },
  { name: 'Eagle HR Consultants', src: '/images/clients/mono/eagle-hr.png' },
]

// Every client mark on file (mono/white versions), for the mobile logo loop
const allClientMarks = [
  ...clientMarks,
  { name: 'Baraka Credit', src: '/images/clients/mono/baraka.png' },
  { name: 'Ikigai', src: '/images/clients/mono/ikigai.png' },
  { name: 'Verto', src: '/images/clients/mono/verto.svg' },
  { name: 'ESSA', src: '/images/clients/mono/essa.png' },
  { name: 'Riara', src: '/images/clients/mono/riara.png' },
  { name: 'Crown Dental', src: '/images/clients/mono/crown-dental.png' },
  { name: 'KAWI Restaurant', src: '/images/clients/mono/kawi.png' },
  { name: 'Jaza Capital', src: '/images/clients/mono/jaza.png' },
]

const socials = [
  {
    name: 'LinkedIn',
    href: site.socials[0].href,
    icon: (
      <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor" aria-hidden>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: site.socials[1].href,
    icon: (
      <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor" aria-hidden>
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: site.socials[2].href,
    icon: (
      <svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="currentColor" aria-hidden>
        <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.77.12V9.77a5.7 5.7 0 0 0-.77-.05 5.68 5.68 0 1 0 5.68 5.68V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.24-1.48z" />
      </svg>
    ),
  },
]

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative bg-chrome px-2.5 pt-2.5 md:px-3 md:pt-3 lg:px-3.5 lg:pt-3.5">
      {/* Solid chrome (no dot texture) so the notches blend seamlessly */}
      <div className="relative grid min-h-[calc(100svh-1.25rem)] w-full grid-cols-1 grid-rows-[1fr_auto] gap-2.5 lg:min-h-[calc(100svh-1.75rem)] lg:grid-cols-[minmax(0,1fr)_minmax(16rem,30%)] lg:grid-rows-1">
        {/* ── WHITE SLAB ── */}
        <div className="relative min-h-[32rem] min-w-0 lg:min-h-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="hero-white-card relative z-10 flex h-full min-h-0 flex-col rounded-[1.5rem] bg-paper md:rounded-[2rem] lg:rounded-[2.25rem]"
          >
            <Navigation variant="inline" />

            <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-12 pt-6 md:px-10 md:pb-16 lg:px-14 lg:pb-36 lg:pt-4 xl:px-16">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-ink/30" />
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <p className="mono-label">
                  <span className="text-ink/55">(BP® 01)</span>{' '}
                  <span className="text-ink/70">Studio · Nairobi</span>
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease, delay: 0.16 }}
                className="text-display max-w-[13ch] text-[clamp(2.6rem,7.2vw,5.75rem)] font-extrabold leading-[0.92] tracking-[-0.045em] text-ink"
              >
                <span className="text-kraft-fill">Our work</span>{' '}
                <span className="block">refuses to</span>{' '}
                <span className="block">blend in.</span>
              </motion.h1>

              <h2 className="mt-5 font-mono text-[12px] uppercase tracking-[0.1em] text-ink/60 md:text-[13px]">
                Printing, design and branding in Nairobi
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.32 }}
                className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/55 md:mt-7 md:text-base"
              >
                Bringing your ideas to life. Design, printing, branding and promotional items for brands
                and events, produced in Nairobi.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease, delay: 0.42 }}
                className="mt-8 flex flex-wrap items-center gap-3 md:mt-9"
              >
                <Link href="/portfolio" className="btn-pill group">
                  Explore our approach
                  <span className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-sm bg-paper/15">
                    <span
                      className="text-[12px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0"
                      aria-hidden
                    >
                      ↗
                    </span>
                    <span
                      className="absolute text-[12px] -translate-x-4 translate-y-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                      aria-hidden
                    >
                      ↗
                    </span>
                  </span>
                </Link>
                <Link href="/contact" className="btn-pill-outline group">
                  <span className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-current/30">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-5 group-hover:opacity-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M4 6h16v12H4z" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      className="absolute h-3 w-3 -translate-x-5 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:opacity-100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span>Contact us</span>
                    <span className="text-[10px] tracking-[0.12em] text-ink/55 transition-colors group-hover:text-paper/55">
                      Start a project
                    </span>
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Ticker — stops before the clients notch */}
            <div className="relative z-10 hidden border-t border-ink/8 py-4 md:block lg:pr-[calc(var(--clients-w)+var(--notch-r))]">
              <div className="overflow-hidden">
                <motion.div
                  className="flex w-max gap-10 px-10 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55"
                  animate={shouldReduceMotion ? undefined : { x: ['0%', '-50%'] }}
                  transition={
                    shouldReduceMotion ? undefined : { duration: 42, ease: 'linear', repeat: Infinity }
                  }
                >
                  {[...tickerItems, ...tickerItems].map((item, i) => (
                    <span key={`${item}-${i}`} className="flex items-center gap-10">
                      {item}
                      <span className="text-primary/45" aria-hidden>
                        •
                      </span>
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Social notch — inside the card so it moves with it */}
            <aside aria-label="Social links" className="hero-socket hero-social-socket hidden lg:block">
              <div className="hero-social-list flex flex-col items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-paper/55 transition-colors hover:bg-paper/10 hover:text-paper"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </aside>

            {/* Clients notch (desktop: cut into the white card) */}
            <ClientsNotch className="hidden lg:flex" />
          </motion.div>
        </div>

        {/* ── KRAFT MORPH SLAB ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.12 }}
          className="hero-kraft-card relative z-10 h-[7.5rem] w-full overflow-hidden rounded-[1.5rem] bg-ink md:h-[8.5rem] md:rounded-[2rem] lg:h-auto lg:min-h-0 lg:rounded-[2.25rem]"
        >
          <HeroMorphImage src="/images/hero/hero3.jpg" alt="Close-up of folded brown kraft paper" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-ink/25 via-transparent to-ink/40 lg:from-ink/80 lg:via-ink/20 lg:to-ink/35" />

          {/* The name, literally: ties the kraft texture back to the brand */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden p-7 lg:block">
            <p className="mono-label text-paper/70">
              <span className="text-paper/50">(BP®)</span> The name
            </p>
            <p className="text-display mt-4 max-w-[14ch] text-[clamp(1.9rem,7vw,2.75rem)] leading-[0.98] font-bold tracking-[-0.04em] text-paper lg:text-[clamp(1.5rem,2.1vw,2.25rem)]">
              This is brown paper. It&rsquo;s also our name.
            </p>
            <p className="mt-4 max-w-[30ch] text-[14px] leading-relaxed text-paper/70 lg:text-[13px]">
              Kraft, card and ink are where every job starts.
            </p>
          </div>

          {/* Clients notch (mobile and tablet: cut into the kraft slab) */}
          <ClientsNotch compact className="flex lg:hidden" />
        </motion.div>
      </div>

      <div className="h-6 md:h-8" />
    </section>
  )
}

/** "100+ clients" socket. Desktop: cut into the white card. Mobile: cut into the kraft slab. */
function ClientsNotch({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  const projects = (
    <div className="hidden flex-col gap-1.5 sm:flex">
      <div className="flex items-center gap-3">
        <span className="flex gap-1" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="h-3.5 w-2 rounded-full bg-primary" />
          ))}
        </span>
        <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-paper/90">{site.stats.projects}+ Projects</span>
      </div>
      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/55">
        Delivered since {site.foundedYear}
      </span>
    </div>
  )

  // Phones/tablets: logos only, looping slowly inside the cutout
  if (compact) {
    const loop = [...allClientMarks, ...allClientMarks]
    return (
      <div className={`hero-socket hero-clients-socket hero-clients-socket--wide hero-clients-socket--top ${className}`} aria-label={`Clients include ${allClientMarks.map((m) => m.name).join(', ')}`}>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="hero-logo-marquee flex w-max items-center" aria-hidden>
            {loop.map((m, i) => (
              <span key={i} className="relative mr-2 flex h-10 w-16 shrink-0 items-center justify-center rounded-[0.75rem] bg-[#242424] px-2.5 py-2">
                <span className="relative h-full w-full">
                  <Image src={m.src} alt="" fill sizes="64px" className="object-contain opacity-85" />
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`hero-socket hero-clients-socket items-center gap-6 ${className}`}>
      <div className="flex items-center">
        {clientMarks.map((m, i) => (
          <span
            key={m.src}
            className="relative -ml-1.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.9rem] bg-[#262626] p-2 ring-2 ring-chrome first:ml-0"
            style={{ zIndex: i + 1 }}
          >
            <span className="relative h-full w-full">
              <Image src={m.src} alt={m.name} fill sizes="48px" className="object-contain opacity-85" />
            </span>
          </span>
        ))}
        <span className="relative z-10 -ml-4 flex h-12 items-center rounded-r-[0.9rem] bg-[linear-gradient(to_right,rgba(42,42,42,0),#2a2a2a_1rem)] pr-4 pl-6 font-mono text-[12px] uppercase tracking-[0.08em] whitespace-nowrap text-paper/90">
          {site.stats.clients}+ Clients
        </span>
      </div>
      {projects}
    </div>
  )
}
