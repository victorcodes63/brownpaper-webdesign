'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FAQ, { type FaqItem } from '@/components/FAQ'
import PageHero, { PageShell } from '@/components/PageHero'
import { SectionLabel, Reveal, PillLink, Marquee, ease, pad, ImageReveal, WordReveal } from '@/components/home/ui'

const projects = [
  { title: 'Brand Identity Design', category: 'Branding', image: '/images/services/branding.jpg', description: 'Logo design, colour palettes and brand guidelines for businesses across industries.' },
  { title: 'Corporate Stationery', category: 'Print', image: '/images/services/stationery.jpg', description: 'Letterheads, envelopes and business cards that carry the brand with consistency.' },
  { title: 'Product Packaging', category: 'Packaging', image: '/images/hero/hero6.jpg', description: 'Packaging that protects the product and makes the unboxing part of the brand.' },
  { title: 'Graphic Design', category: 'Design', image: '/images/indiv_services/design.jpg', description: 'Campaign and marketing materials designed to communicate one clear message.' },
  { title: 'Branding Collateral', category: 'Branding', image: '/images/hero/hero5.jpg', description: 'Printed brand collateral that keeps every touchpoint looking like one company.' },
  { title: 'Retail Packaging', category: 'Packaging', image: '/images/services/packaging.jpg', description: 'Kraft bags, containers and labels built for the counter and the shelf.' },
  { title: 'Print Production', category: 'Print', image: '/images/services/printing.jpg', description: 'Offset, digital and large-format runs, colour-checked before they go to press.' },
  { title: 'Display & Signage', category: 'Display', image: '/images/services/display.jpg', description: 'Banners, backdrops and displays designed to be seen across a busy room.' },
  { title: 'Custom Notebooks', category: 'Print', image: '/images/hero/hero1.jpg', description: 'Branded notebooks and desk items finished for gifting and everyday use.' },
]

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

const clients = [
  { name: 'KenGen', logo: '/images/clients/Kengen Logo.png' },
  { name: 'Nation Media Group', logo: '/images/clients/Nation Media Group Logo.png' },
  { name: 'KIPPRA', logo: '/images/clients/KIPPRA-LOGO-.webp' },
  { name: 'Eagle HR Consultants', logo: '/images/clients/logo_dark_ubxaCll.png' },
  { name: 'Baraka Credit', logo: '/images/clients/baraka.png' },
  { name: 'Ikigai', logo: '/images/clients/Ikigai Logo Black.png' },
  { name: 'Verto', logo: '/images/clients/verto.svg' },
  { name: 'ESSA', logo: '/images/clients/ESSA Logo.png' },
  { name: 'Riara', logo: '/images/clients/riara.png' },
  { name: 'Crown Dental', logo: '/images/clients/crowndent.png' },
  { name: 'KAWI Restaurant', logo: '/images/clients/KAWI-150x150.png' },
  { name: 'Jaza Capital', logo: '/images/clients/JAZA-150x150.png' },
]

const faqs: FaqItem[] = [
  { question: 'How do you approach a new project?', answer: 'Every project begins with a consultation to understand your goals, audience and brand. We look at the market and competitors and agree an approach before any design starts.' },
  { question: 'Can you work within our existing brand guidelines?', answer: 'Yes. We work within established guidelines and look for chances to strengthen them, or create guidelines if you don’t have them yet.' },
  { question: 'What’s included in a typical project?', answer: 'Usually a consultation, concept development, design rounds, final files for print and digital, and brand guidelines where relevant, with a clear timeline upfront.' },
  { question: 'How long does a project take?', answer: 'A logo refresh may take 2 to 3 weeks; a full brand identity 4 to 8 weeks; packaging typically 3 to 6 weeks. You get a detailed timeline at the consultation.' },
  { question: 'Do you provide support after the project?', answer: 'Yes. Many clients stay with us for seasonal campaigns, new product launches and ongoing brand assets.' },
  { question: 'Can we see work from our industry?', answer: 'Yes. During the consultation we share relevant examples from your sector and walk through how similar projects were approached.' },
]

export default function PortfolioPage() {
  const [cat, setCat] = useState('All')
  const shown = useMemo(() => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)), [cat])

  return (
    <main className="min-h-svh bg-chrome">
      <Navigation />

      <PageHero
        code="01"
        label="Selected work"
        lead="A cross-section of identity, print, packaging and display work for brands across Kenya and East Africa."
        title="Our work"
      >
        <PillLink href="/contact" dark>
          Start a project
        </PillLink>
      </PageHero>

      <PageShell>
        <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionLabel code="02" title="Projects" />
              <WordReveal as="h2" className="text-display mt-10 text-[clamp(2.5rem,5.2vw,5.25rem)] leading-[0.95] font-semibold tracking-[-0.05em] text-ink">
                What leaves the <span className="text-kraft-fill">studio</span>
              </WordReveal>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    role="tab"
                    aria-selected={cat === c}
                    onClick={() => setCat(c)}
                    className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.06em] transition-colors ${
                      cat === c ? 'border-ink bg-ink text-paper' : 'border-ink/15 text-ink/60 hover:border-ink/40'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <motion.ul layout className="mt-14 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {shown.map((p, i) => (
                <motion.li
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease }}
                  className="group"
                >
                  <div className={`relative overflow-hidden rounded-[1.25rem] bg-mist ${i % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[4/4.4]'}`}>
                    <ImageReveal>
<Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
</ImageReveal>
                    <span className="absolute top-4 left-4 rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[10px] tracking-[0.08em] text-ink uppercase backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4 px-1">
                    <div>
                      <h3 className="text-display text-[1.5rem] font-semibold tracking-[-0.035em] text-ink">{p.title}</h3>
                      <p className="mt-1.5 max-w-sm text-[14px] leading-relaxed text-ink/55">{p.description}</p>
                    </div>
                    <span className="font-mono text-[11px] text-primary/70">{pad(projects.indexOf(p) + 1)}.</span>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </section>

        {/* Client wall */}
        <section className="px-2.5 md:px-3">
          <div className="rounded-[1.75rem] bg-mist px-6 py-20 md:px-10 md:py-24 lg:px-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-8">
              <Reveal>
                <SectionLabel code="03" title="Clients" />
              </Reveal>
              <Reveal delay={0.05}>
                <WordReveal as="h2" className="text-display text-[clamp(2.25rem,4.4vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.05em] text-ink">
                  Trusted by 100+ organisations
                </WordReveal>
              </Reveal>
            </div>
            <ul className="mt-14 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
              {clients.map((c, i) => (
                <Reveal key={c.name} delay={Math.min(0.03 * i, 0.15)}>
                  <li className="flex aspect-[4/3] items-center justify-center rounded-[1.1rem] bg-white p-6">
                    <span className="relative h-full w-full">
                      <Image src={c.logo} alt={c.name} fill sizes="12rem" className="object-contain" />
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <FAQ code="04" items={faqs} title="Project questions" sub="How projects run, how long they take and what you get at the end." />
        <div className="pb-2">
          <Marquee />
        </div>
      </PageShell>

      <Footer />
    </main>
  )
}
