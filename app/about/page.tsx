'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'motion/react'
import Navigation from '@/components/Navigation'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { site, yearsInBusiness } from '@/lib/site'
import Footer from '@/components/Footer'
import FitTitle from '@/components/FitTitle'
import DotField from '@/components/DotField'
import FAQ from '@/components/FAQ'
import { SectionLabel, Reveal, PillLink, Marquee, ease, pad, CharReveal, ImageReveal, WordReveal, CountUp } from '@/components/home/ui'

const foundedYear = site.foundedYear
const years = yearsInBusiness()

const milestones = [
  { year: '2022', title: 'Founded in Nairobi', body: 'Started in June 2022 to change how businesses in Kenya approach print and design.' },
  { year: '2023', title: 'Studio growth', body: 'Expanded the team and services, building long-term client relationships.' },
  { year: '2024', title: '150+ projects', body: 'Passed 150 completed projects for more than 100 clients.' },
  { year: 'Today', title: 'Full-service studio', body: 'Design, print, packaging and display, all from one studio in Nairobi.' },
]

const metrics = [
  { value: site.stats.projects, suffix: '+', label: 'Projects completed' },
  { value: site.stats.clients, suffix: '+', label: 'Clients served' },
  { value: years, suffix: '+', label: 'Years in business' },
  { value: site.stats.awards, suffix: '', label: 'Awards won' },
]

const purpose = [
  {
    tag: 'Mission',
    title: 'Make brands more visible',
    body: 'To support individuals and businesses to enhance their visibility and brand by providing quality, effective, modern printing, branding and promotional solutions.',
  },
  {
    tag: 'Vision',
    title: 'Africa’s most customer-centric supplier',
    body: 'To be the most efficient, diverse and customer-centric design, printing, branding and promotional supplier in Africa.',
  },
]

const values = [
  { title: 'Customer centric', body: 'Every solution is shaped around the client’s visibility and success.' },
  { title: 'Efficiency', body: 'Streamlined processes that maximise value and minimise waste.' },
  { title: 'Professionalism', body: 'High standards of service, integrity and expertise on every job.' },
  { title: 'Quality products & services', body: 'Work built to last, and to be worth what it costs.' },
  { title: 'Creativity & innovation', body: 'New ideas, materials and finishes, used where they add something.' },
]

const collage = [
  {
    src: '/images/about/drives-palette.jpg',
    caption: 'Choosing the palette',
    sub: 'Colour decisions checked on paper',
    alt: 'Designer at a wooden desk reviewing a fan of neutral colour swatches over printed mockups',
    pos: 'center 30%',
  },
  {
    src: '/images/about/drives-press.jpg',
    caption: 'Running the press',
    sub: 'Large-format print, checked as it comes off the machine',
    alt: 'Printer in a dark apron checking a colourful large-format print as it leaves the press',
    pos: 'center 20%',
  },
  {
    src: '/images/about/drives-onsite.jpg',
    caption: 'Setting up on site',
    sub: 'Displays built to go up fast when the doors open',
    alt: 'Team member in a tan jacket raising a pull-up banner in a warehouse studio',
    pos: 'center 18%',
  },
  {
    src: '/images/about/drives-packing.jpg',
    caption: 'Packing the order',
    sub: 'Finished work, ready for the shelf and the street',
    alt: 'Two people packing printed cards and gift boxes into a kraft shipping carton on a workbench',
  },
  {
    src: '/images/about/drives-brief.jpg',
    caption: 'Reviewing the brief together',
    sub: 'Agreeing on what the work has to do',
    alt: 'Three designers reviewing printed layouts and stationery together under a pendant lamp',
    pos: 'center 28%',
  },
]

/**
 * "What drives us": the title block pins near the top while the collage
 * (children) scrolls over it, and the title fades back as the photos pass.
 */
function DrivesSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null)
  // 0 when the section top reaches the viewport top, 1 one viewport later.
  // Measured by hand so it stays reliable alongside Lenis smooth scroll.
  const progress = useMotionValue(0)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const el = ref.current
      if (!el) return
      const vh = window.innerHeight
      const top = el.getBoundingClientRect().top
      const p = (vh * 0.15 - top) / (vh * 1.1)
      progress.set(Math.min(1, Math.max(0, p)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [progress])
  const fade = useTransform(progress, [0, 1], [1, 0.2])
  const sink = useTransform(progress, [0, 1], [0, 40])

  return (
    <section ref={ref} className="relative px-6 pt-24 pb-24 text-paper [overflow:clip] md:px-10 md:pt-32 md:pb-32 lg:px-14">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <DotField />
      </div>
      <motion.div style={{ opacity: fade, y: sink }} className="sticky top-[12vh] z-0">
        <FitTitle as="h2" tone="text-paper/80">What drives us</FitTitle>
        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 lg:grid-cols-2">
          <Reveal>
            <SectionLabel code="05" title="Built around real use" dark />
          </Reveal>
          <CharReveal className="max-w-xs text-[15px] leading-relaxed text-paper/55 md:text-[17px]">
            What shapes how we think, design and produce work for the real world.
          </CharReveal>
        </div>
      </motion.div>

      {/* collage scrolls over the pinned title */}
      <div className="relative z-10 mt-16 lg:mt-[22vh]">{children}</div>
    </section>
  )
}

function Shot({
  src,
  caption,
  sub,
  alt,
  pos,
  aspect,
  className = '',
}: {
  src: string
  caption: string
  sub: string
  alt: string
  pos?: string
  aspect: string
  className?: string
}) {
  return (
    <figure className={className}>
      <div className={`relative overflow-hidden rounded-[1.25rem] bg-ink ${aspect}`}>
        <ImageReveal>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            quality={90}
            className="object-cover"
            style={pos ? { objectPosition: pos } : undefined}
          />
        </ImageReveal>
      </div>
      <figcaption className="mt-5 flex flex-col gap-1 font-mono text-[12px] uppercase tracking-[0.06em]">
        <span className="text-paper/90">{caption}</span>
        <span className="text-paper/55">{sub}</span>
      </figcaption>
    </figure>
  )
}

const commitments = [
  {
    tag: 'UN SDG 5',
    title: 'Gender equality',
    body: [
      'Women and girls, everywhere, must have equal rights and opportunity, and be able to live free of violence and discrimination.',
      'We work to achieve gender equality and empower all women and girls, in our team and in the work we take on.',
    ],
  },
  {
    tag: 'UN SDG 8',
    title: 'Decent work & economic growth',
    body: [
      'We promote inclusive and sustainable economic growth, employment and decent work for all.',
      'Humane working conditions, an open-door policy so every employee is heard, and fair salaries in line with current standards in Kenya.',
    ],
  },
  {
    tag: 'UN SDG 12',
    title: 'Responsible consumption & production',
    body: [
      'We offer the Okiyo range, powered by Amrod: products made entirely or partly from reusable, recycled, recyclable or sustainably harvested materials.',
      'Cork, bamboo, wheat straw, paper, jute, cotton, wood and glass: one collection with a clear identity, to reduce the impact we have on the world.',
    ],
  },
]


const shellPad = 'px-6 md:px-10 lg:px-14'

export default function AboutPage() {
  return (
    <main className="min-h-svh bg-chrome">
      <Navigation />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])} />

      {/* ── 01 HERO ── */}
      <section className={`relative overflow-hidden ${shellPad} pt-32 pb-0 text-paper md:pt-40`}>
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
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionLabel code="01" title="Our approach" dark />
          </Reveal>
          <Reveal delay={0.05}>
            <p className="max-w-xl text-[17px] leading-relaxed text-paper/55 md:text-xl">
              A Nairobi studio designing and producing brands that work in print, on the shelf and on screen.
            </p>
          </Reveal>
        </div>

        <FitTitle className="mt-16 md:mt-24">Who we are</FitTitle>
      </section>

      {/* ── WHITE SHELL (overlaps the heading) ── */}
      <div className="relative z-10 -mt-[clamp(1rem,2.6vw,2.75rem)] px-2.5 pb-2.5 md:px-3 md:pb-3 lg:px-3.5 lg:pb-3.5">
        <div className="page-shell">
          {/* How we work */}
          <section className="grid grid-cols-1 gap-2.5 p-2.5 md:p-3 lg:grid-cols-2">
            <Reveal>
              <div className="relative flex min-h-[32rem] flex-col justify-end overflow-hidden rounded-[1.5rem] bg-chrome p-8 text-paper md:p-12 lg:min-h-[44rem]">
                <ImageReveal>
                <Image
                  src="/images/hero/about.jpg"
                  alt="The Brown Paper team in the studio"
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  quality={100}
                  className="object-cover object-center"
                />
</ImageReveal>
                <div className="absolute inset-0 bg-linear-to-t from-chrome/90 via-chrome/45 to-chrome/10" />
                <div className="relative">
                  <SectionLabel code="02" title="Built for real use" dark />
                  <WordReveal as="h2" className="text-display mt-8 text-[clamp(2.75rem,5vw,5rem)] leading-[0.92] font-semibold tracking-[-0.05em]">
                    How we work
                  </WordReveal>
                  <CharReveal className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/70 md:text-[17px]">
                    Design and production under one roof, so what you approve on screen is what arrives at your door.
                  </CharReveal>
                  <div className="mt-8">
                    <PillLink href="/services" dark>
                      Explore our services
                    </PillLink>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col justify-center gap-12 px-4 py-14 md:px-10 lg:px-14">
              <Reveal>
                <p className="text-display text-[clamp(1.6rem,2.5vw,2.5rem)] leading-[1.15] font-medium tracking-[-0.035em] text-ink">
                  A brand should look the same everywhere it shows up, from the screen to the printed page.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-display text-[clamp(1.6rem,2.5vw,2.5rem)] leading-[1.15] font-medium tracking-[-0.035em] text-ink/55">
                  We make sure every business card, box and banner looks like it came from the same company.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="flex items-center gap-4 border-t border-ink/10 pt-6">
                  <svg viewBox="0 0 44 44" className="h-10 w-10 text-primary" fill="none" aria-hidden>
                    <path d="M5 5h24l10 10v24H5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M29 5v10h10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M12 30h14M12 24h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="flex flex-col gap-1 font-mono text-[11px] uppercase tracking-[0.08em]">
                    <span className="text-ink/85">Brown Paper Studio</span>
                    <span className="text-ink/55">Nairobi · Since {foundedYear}</span>
                  </span>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ── 02 JOURNEY ── */}
          <section className={`${shellPad} py-24 md:py-32`}>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-8">
              <Reveal>
                <SectionLabel code="03" title="Our journey" />
              </Reveal>
              <Reveal delay={0.05}>
                <WordReveal as="h2" className="text-display max-w-[18ch] text-[clamp(2.5rem,5.2vw,5.25rem)] leading-[0.95] font-semibold tracking-[-0.05em] text-ink">
                  From a small print shop to a full-service <span className="text-kraft-fill">studio</span>
                </WordReveal>
                <CharReveal className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink/55 md:text-[17px]">
                  Four years of turning briefs into finished pieces for brands across the region.
                </CharReveal>
              </Reveal>
            </div>

            <div className="relative mt-16 md:mt-24">
              <div className="absolute top-2 right-0 left-0 hidden h-px bg-ink/10 md:block">
                <motion.div
                  className="h-full origin-left bg-ink"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 1.8, ease }}
                />
              </div>
              <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
                {milestones.map((m, i) => (
                  <Reveal key={m.year} delay={0.1 * i} x={15} y={0}>
                    <li className="relative md:pt-10">
                      <span className="absolute top-0 left-0 hidden h-4 w-4 rounded-full border-[3px] border-paper bg-primary md:block" />
                      <p className="font-mono text-[12px] tracking-[0.08em] text-ink/55">{m.year}</p>
                      <h3 className="text-display mt-3 text-[clamp(1.5rem,2vw,2rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-ink">
                        {m.title}
                      </h3>
                      <CharReveal className="mt-3 max-w-[18rem] text-[15px] leading-relaxed text-ink/55">{m.body}</CharReveal>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>

            {/* Quote + image + metrics */}
            <div className="mt-24 grid grid-cols-1 gap-2.5 md:mt-32 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <Reveal className="h-full">
                <figure className="flex h-full flex-col justify-between gap-10 rounded-[1.5rem] bg-primary p-8 text-paper md:p-10">
                  <span
                    aria-hidden
                    className="font-display text-[5rem] leading-[0.6] font-bold text-transparent [-webkit-text-stroke:1.5px_var(--color-paper)]"
                  >
                    “
                  </span>
                  <blockquote className="text-display text-[clamp(1.5rem,2.2vw,2.1rem)] leading-[1.2] font-medium tracking-[-0.03em] text-paper">
                    Bringing your ideas to life, whether it’s one business card, a full rebrand or everything for your
                    next event.
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-[0.75rem] bg-ink font-mono text-[12px] text-paper">
                      BP
                    </span>
                    <span className="flex flex-col gap-0.5 font-mono text-[11px] uppercase tracking-[0.08em]">
                      <span className="text-paper">Brown Paper</span>
                      <span className="text-paper/65">Our promise</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] bg-mist">
                  <ImageReveal>
                    <Image
                      src="/images/hero/offices.jpg"
                      alt="Inside the Brown Paper studio — desks, print equipment and kraft paper rolls"
                      fill
                      sizes="(min-width: 1024px) 1024px, 100vw"
                      quality={100}
                      className="object-cover object-center"
                    />
                  </ImageReveal>
                  <span className="absolute top-5 left-5 rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] text-ink backdrop-blur">
                    THE STUDIO · NAIROBI
                  </span>
                </div>
              </Reveal>
            </div>

            <dl className="mt-2.5 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
              {metrics.map((m, i) => (
                <Reveal key={m.label} delay={0.05 * i}>
                  <div className="rounded-[1.5rem] border border-ink/8 p-6 md:p-8">
                    <dd className="text-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-none font-semibold tracking-[-0.05em] text-ink">
                      <CountUp to={m.value} suffix={m.suffix} />
                    </dd>
                    <dt className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55">{m.label}</dt>
                  </div>
                </Reveal>
              ))}
            </dl>
          </section>

          {/* ── 03 PURPOSE ── */}
          <section className={`${shellPad} pb-24 md:pb-32`}>
            <div className="grid grid-cols-1 gap-10 border-t border-ink/10 pt-24 md:pt-32 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-8">
              <Reveal>
                <SectionLabel code="04" title="Purpose" />
              </Reveal>
              <div>
                <Reveal>
                  <WordReveal as="h2" className="text-display max-w-[20ch] text-[clamp(2.25rem,4.4vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.05em] text-ink">
                    Why we do the work we do
                  </WordReveal>
                </Reveal>
                <ul className="mt-14">
                  {purpose.map((p, i) => (
                    <Reveal key={p.tag} delay={0.06 * i} x={-30} y={0}>
                      <li className="grid grid-cols-1 gap-4 border-t border-ink/10 py-10 md:grid-cols-[4rem_minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-8">
                        <span className="font-mono text-[12px] text-primary">{pad(i + 1)}.</span>
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-primary">{p.tag}</p>
                          <h3 className="text-display mt-2 text-[clamp(1.6rem,2.4vw,2.4rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-ink">
                            {p.title}
                          </h3>
                        </div>
                        <p className="max-w-lg text-[15px] leading-relaxed text-ink/60 md:text-[17px]">{p.body}</p>
                      </li>
                    </Reveal>
                  ))}
                </ul>

                <Reveal className="mt-16">
                  <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink/85">Our values</p>
                </Reveal>
                <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
                  {values.map((v, i) => (
                    <Reveal key={v.title} delay={0.05 * i} className="h-full">
                      <li className="flex h-full flex-col rounded-[1.25rem] bg-mist p-6">
                        <span className="font-mono text-[11px] text-primary">{pad(i + 1)}.</span>
                        <h3 className="text-display mt-6 text-[1.35rem] leading-[1.1] font-semibold tracking-[-0.035em] text-ink">
                          {v.title}
                        </h3>
                        <p className="mt-2 text-[14px] leading-relaxed text-ink/55">{v.body}</p>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* ── 05 WHAT DRIVES US — full-bleed on chrome, Quantum Flux collage ── */}
      <DrivesSection>
        {/* collage — row A */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-6">
          <Shot {...collage[0]} className="lg:col-span-4" aspect="aspect-[426/279]" />
          <Shot {...collage[1]} className="lg:col-span-6 lg:col-start-7" aspect="aspect-[685/434]" />
        </div>

        {/* row B */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-10 lg:grid-cols-12 lg:gap-6">
          <Shot {...collage[2]} className="lg:col-span-4 lg:col-start-2" aspect="aspect-[401/450]" />
          <div className="flex flex-col justify-center lg:col-span-4 lg:col-start-9">
            <WordReveal as="h3" className="text-display text-[clamp(1.5rem,2vw,1.85rem)] leading-[1.15] font-medium tracking-[-0.03em]">
              Our work is shaped by how <br />
              brands are actually used
            </WordReveal>
            <CharReveal className="mt-6 text-[15px] leading-relaxed text-paper/55 md:text-[17px]">
              We design for how things are really used. Colours shift on different papers, boxes get stacked and
              banners stand outside all day, so we plan for all of it.
            </CharReveal>
            <Reveal className="mt-8">
              <PillLink href="/contact" dark>
                Start with Brown Paper
              </PillLink>
            </Reveal>
          </div>
        </div>

        {/* row C */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-24 lg:grid-cols-12 lg:items-start lg:gap-6">
          <Shot {...collage[3]} className="lg:col-span-4 lg:mt-14" aspect="aspect-[484/323]" />
          <Shot {...collage[4]} className="lg:col-span-4 lg:col-start-7" aspect="aspect-[472/434]" />
        </div>
      </DrivesSection>

      {/* ── WHITE SHELL (continued) ── */}
      <div className="relative z-10 px-2.5 pb-2.5 md:px-3 md:pb-3 lg:px-3.5 lg:pb-3.5">
        <div className="page-shell">
          {/* ── 05 RESPONSIBILITY ── */}
          <section className={`${shellPad} py-24 md:py-32`}>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-8">
              <Reveal>
                <SectionLabel code="06" title="Responsibility" />
              </Reveal>
              <div>
                <Reveal>
                  <WordReveal as="h2" className="text-display max-w-[20ch] text-[clamp(2.25rem,4.4vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.05em] text-ink">
                    Contributing to sustainable development
                  </WordReveal>
                </Reveal>
                <div className="mt-14 grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-3">
                  {commitments.map((c, i) => (
                    <Reveal key={c.tag} delay={0.08 * i} className="h-full">
                      <article className="flex h-full flex-col rounded-[1.5rem] bg-mist p-8 md:p-10">
                        <span className="w-fit rounded-full bg-ink px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] text-paper">
                          {c.tag}
                        </span>
                        <h3 className="text-display mt-8 text-[clamp(1.6rem,2.3vw,2.3rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-ink">
                          {c.title}
                        </h3>
                        <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink/60">
                          {c.body.map((b) => (
                            <p key={b}>{b}</p>
                          ))}
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <FAQ code="07" />

          <div className="pb-2">
            <Marquee items={['Customer centric', 'Efficiency', 'Professionalism', 'Quality products', 'Creativity & innovation']} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
