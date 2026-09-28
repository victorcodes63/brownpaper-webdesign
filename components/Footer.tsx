'use client'

import { site } from '@/lib/site'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { useLenis } from 'lenis/react'
import { SectionLabel, Reveal, pad, ease } from './home/ui'
import Globe from './Globe'
import Logo from './Logo'

const nav = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact us', href: '/contact' },
]

const groups = [
  {
    label: 'Socials',
    links: site.socials.map((x) => ({ name: x.name, href: x.href, external: true })),
  },
  {
    label: 'Contact',
    links: [
      { name: site.phone, href: site.phoneHref, external: false },
      { name: site.email, href: `mailto:${site.email}`, external: false },
      { name: 'Get directions', href: site.address.mapsUrl, external: true },
    ],
  },
  {
    label: 'Legal',
    links: [
      { name: 'Privacy policy', href: '/privacy-policy', external: false },
      { name: 'Terms of service', href: '/terms-of-service', external: false },
    ],
  },
]

// White-on-transparent versions (public/images/clients/mono) — originals have mixed backgrounds
const clientLogos = [
  { name: 'KenGen', logo: '/images/clients/mono/kengen.png' },
  { name: 'Nation Media Group', logo: '/images/clients/mono/nation-media-group.png' },
  { name: 'KIPPRA', logo: '/images/clients/mono/kippra.png' },
  { name: 'Eagle HR Consultants', logo: '/images/clients/mono/eagle-hr.png' },
  { name: 'Baraka Credit', logo: '/images/clients/mono/baraka.png' },
  { name: 'Ikigai', logo: '/images/clients/mono/ikigai.png' },
  { name: 'Verto', logo: '/images/clients/mono/verto.svg' },
  { name: 'ESSA', logo: '/images/clients/mono/essa.png' },
  { name: 'Riara', logo: '/images/clients/mono/riara.png' },
  { name: 'Crown Dental', logo: '/images/clients/mono/crown-dental.png' },
  { name: 'KAWI Restaurant', logo: '/images/clients/mono/kawi.png' },
  { name: 'Jaza Capital', logo: '/images/clients/mono/jaza.png' },
]

export default function Footer() {
  const reduce = useReducedMotion()
  const lenis = useLenis()
  const year = 2026

  const toTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.4 })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden bg-chrome text-paper">
      {/* quarter globe — huge sphere centred just past the bottom-right corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-75vw] bottom-[-78vw] w-[150vw] opacity-30 [mask-image:linear-gradient(to_bottom,transparent,#000_35%)] lg:right-[-68vw] lg:bottom-[-72vw] lg:w-[140vw]"
      >
        <Globe />
      </div>

      <div className="relative px-6 pt-6 md:px-10 md:pt-10 lg:px-14 lg:pt-14">
        {/* ── Top ── */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.75fr)_minmax(0,1.1fr)] lg:gap-10">
          <Reveal>
            <SectionLabel code="FINAL" title="Closing frame" dark />
            <p className="text-display mt-14 text-[clamp(3.25rem,6.5vw,6.5rem)] leading-[0.9] font-semibold tracking-[-0.05em]">
              Built to last.
            </p>
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-paper/55 md:text-[17px]">
              Design, printing and branding for businesses and events, from one studio in Nairobi.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <nav aria-label="Footer">
              <ul className="flex flex-col gap-1">
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className="text-display inline-block text-[clamp(2rem,3vw,2.75rem)] leading-[1.15] font-semibold tracking-[-0.04em] text-paper transition-[color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-2 hover:text-primary"
                    >
                      {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-12">
            {groups.map((g) => (
              <div
                key={g.label}
                className="grid grid-cols-1 gap-3 font-mono text-[12px] uppercase tracking-[0.06em] sm:grid-cols-[7rem_minmax(0,1fr)]"
              >
                <p className="text-paper/85 sm:pt-3">{g.label}</p>
                <ul>
                  {g.links.map((l, i) => (
                    <li key={l.name} className="border-b border-paper/10">
                      <a
                        href={l.href}
                        {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className={`group flex gap-5 py-3 text-paper/80 transition-colors hover:text-primary ${
                          l.href.startsWith('mailto:') ? 'normal-case' : ''
                        }`}
                      >
                        <span className="text-primary/80">{pad(i + 1)}.</span>
                        <span className="flex-1">{l.name}</span>
                        <span className="text-paper/25 transition-colors group-hover:text-primary" aria-hidden>
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>

        {/* ── Client marquee ── */}
        <div className="mt-24 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)] md:mt-32">
          <motion.ul
            className="flex w-max items-center gap-16 md:gap-24"
            animate={reduce ? undefined : { x: ['0%', '-50%'] }}
            transition={reduce ? undefined : { duration: 45, ease: 'linear', repeat: Infinity }}
          >
            {[...clientLogos, ...clientLogos].map((c, i) => (
              <li key={`${c.name}-${i}`} className="relative h-9 w-28 shrink-0 md:h-10 md:w-32">
                <Image
                  src={c.logo}
                  alt={i < clientLogos.length ? c.name : ''}
                  fill
                  sizes="8rem"
                  className="object-contain opacity-50 transition-opacity hover:opacity-100"
                />
              </li>
            ))}
          </motion.ul>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-20 flex flex-col items-start gap-8 border-t border-paper/10 py-8 md:mt-24 md:mb-16 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" aria-label="Brown Paper home" className="flex items-center gap-1.5">
            <Logo className="h-8 w-auto text-paper md:h-9" />
            <span className="self-start text-[13px] text-paper/70">®</span>
          </Link>

          <div className="flex flex-col gap-2.5 lg:items-center">
            <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.08em] text-paper/55 lg:whitespace-nowrap">
              © {year} {site.legalName}.{' '}
              <span className="block text-paper/80 lg:inline">All rights reserved.</span>
            </p>
            <a
              href="https://www.raventechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] tracking-wide text-paper/55 transition-colors hover:text-paper/70"
            >
              Website by Raven Tech Group
            </a>
          </div>

          <motion.button
            type="button"
            onClick={toTop}
            aria-label="Back to top"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3, ease }}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-paper text-lg text-ink transition-colors hover:bg-primary hover:text-paper md:justify-self-end"
          >
            ↑
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
