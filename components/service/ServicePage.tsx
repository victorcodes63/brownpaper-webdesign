'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHero, { PageShell } from '@/components/PageHero'
import { SectionLabel, Reveal, PillLink, Marquee, pad, CharReveal, ImageReveal, WordReveal } from '@/components/home/ui'
import ServiceIndexList from '@/components/ServiceIndexList'
import { services, getService, serviceCategory } from '@/lib/services'
import JsonLd from '@/components/JsonLd'
import PricingFacts from '@/components/service/PricingFacts'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'

const px = 'px-6 md:px-10 lg:px-14'

export default function ServicePage({ slug }: { slug: string }) {
  const s = getService(slug)
  if (!s) notFound()
  const index = services.findIndex((x) => x.slug === slug)
  const others = services.filter((x) => x.slug !== slug)
  const prev = services[(index - 1 + services.length) % services.length]
  const next = services[(index + 1) % services.length]
  const workCategory = serviceCategory[slug]
  const compact = s.items.length > 8

  return (
    <main className="min-h-svh bg-chrome">
      <Navigation />
      <JsonLd
        data={[
          serviceSchema(s),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: s.name, path: `/services/${s.slug}` },
          ]),
        ]}
      />

      <PageHero code={`S${pad(index + 1).slice(1)}`} label={s.tag} lead={s.lead} title={s.name}>
        <PillLink href="/contact" dark>
          Get a quote
        </PillLink>
      </PageHero>

      <PageShell>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="px-6 pt-6 md:px-10 lg:px-14">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55">
            <li>
              <Link href="/" className="-my-3 inline-block py-3 hover:text-primary">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/services" className="-my-3 inline-block py-3 hover:text-primary">
                Services
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-ink/85">
              {s.name}
            </li>
          </ol>
        </nav>

        {/* Overview */}
        <section className="grid grid-cols-1 gap-2.5 p-2.5 md:p-3 lg:grid-cols-2">
          <Reveal>
            <div className="relative min-h-[26rem] overflow-hidden rounded-[1.5rem] bg-mist lg:min-h-[40rem]">
              <ImageReveal clarity>
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  quality={90}
                  sizes="(min-width: 1280px) 720px, (min-width: 1024px) 50vw, 100vw"
                  className={`object-cover ${s.slug === 'workwear' ? 'object-[center_82%]' : 'object-center'}`}
                />
              </ImageReveal>
              <span className="absolute top-5 left-5 rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] text-ink uppercase backdrop-blur">
                {s.name}
              </span>
            </div>
          </Reveal>
          <div className="flex flex-col justify-center gap-10 px-4 py-14 md:px-10 lg:px-14">
            <Reveal>
              <SectionLabel code="01" title="Overview" />
              <WordReveal as="h2" className="text-display mt-10 text-[clamp(2.25rem,4.4vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.05em] text-ink">
                {s.statement}
              </WordReveal>
            </Reveal>
            {s.pricing && (
              <Reveal delay={0.04}>
                <PricingFacts pricing={s.pricing} />
              </Reveal>
            )}
            <Reveal delay={0.06}>
              <dl className="grid grid-cols-2 gap-2.5">
                <div className="rounded-[1.25rem] border border-ink/8 p-6">
                  <dd className="text-display text-[clamp(2.25rem,3.6vw,3.5rem)] leading-none font-semibold tracking-[-0.05em] text-ink">
                    {s.items.length}
                  </dd>
                  <dt className="mt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55">
                    {s.slug === 'fun-times' ? 'Event formats' : 'Products & services'}
                  </dt>
                </div>
                <div className="rounded-[1.25rem] border border-ink/8 p-6">
                  <dd className="text-display text-[clamp(2.25rem,3.6vw,3.5rem)] leading-none font-semibold tracking-[-0.05em] text-ink">
                    {s.steps.length}
                  </dd>
                  <dt className="mt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55">Step process</dt>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-11 shrink-0 items-center justify-center rounded-lg bg-ink text-[13px] text-paper">→</span>
                <p className="flex-1 bg-[repeating-linear-gradient(135deg,rgba(15,20,20,0.1)_0_1px,transparent_1px_6px)] py-1.5 pl-3 font-mono text-[12px] uppercase tracking-[0.06em] text-ink/80">
                  <span className="bg-paper pr-1">
                    Designed, produced &amp; delivered from Nairobi
                    <span className="ml-1 inline-block h-3.5 w-2 animate-pulse bg-primary align-middle" aria-hidden />
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* What we make */}
        <section className={`${px} py-24 md:py-32`}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-8">
            <Reveal>
              <SectionLabel code="02" title={s.slug === 'fun-times' ? 'What we run' : 'What we make'} />
            </Reveal>
            <Reveal delay={0.05}>
              <WordReveal as="h2" className="text-display text-[clamp(2.5rem,5.2vw,5.25rem)] leading-[0.95] font-semibold tracking-[-0.05em] text-ink">
                What we <span className="text-kraft-fill">offer</span>
              </WordReveal>
            </Reveal>
          </div>

          {compact ? (
            <ul className="mt-16 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
              {s.items.map((it, i) => (
                <Reveal key={it.title} delay={Math.min(0.03 * (i % 6), 0.15)} className="h-full">
                  <li className="flex h-full flex-col rounded-[1.25rem] bg-mist p-6 md:p-7">
                    <span className="font-mono text-[11px] text-primary">{pad(i + 1)}.</span>
                    <h3 className="text-display mt-6 text-[1.4rem] leading-[1.1] font-semibold tracking-[-0.035em] text-ink">
                      {it.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-ink/55">{it.description}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          ) : (
            <ul className="mt-16 md:mt-20">
              {s.items.map((it, i) => (
                <Reveal key={it.title} delay={0.04 * i} x={-30} y={0}>
                  <li className="grid grid-cols-1 gap-3 border-t border-ink/10 py-8 md:grid-cols-[4rem_minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-8 md:py-10">
                    <span className="font-mono text-[12px] text-primary">{pad(i + 1)}.</span>
                    <h3 className="text-display text-[clamp(1.6rem,2.4vw,2.4rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-ink">
                      {it.title}
                    </h3>
                    <p className="max-w-xl text-[15px] leading-relaxed text-ink/60 md:text-[17px]">{it.description}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          )}

          {/* Social media packages (graphic design) */}
          {s.packages && (
            <div className="mt-20">
              <Reveal>
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink/85">Social media packages</p>
              </Reveal>
              <div className="mt-6 grid grid-cols-1 gap-2.5 md:grid-cols-3">
                {s.packages.map((p, i) => (
                  <Reveal key={p.name} delay={0.06 * i} className="h-full">
                    <article className={`flex h-full flex-col rounded-[1.5rem] p-8 ${i === 2 ? 'bg-chrome text-paper' : 'bg-mist text-ink'}`}>
                      <span className={`font-mono text-[11px] ${i === 2 ? 'text-primary' : 'text-primary'}`}>{pad(i + 1)}.</span>
                      <h3 className="text-display mt-6 text-[2.25rem] font-semibold tracking-[-0.045em]">{p.name}</h3>
                      <ul className="mt-8 font-mono text-[12px] uppercase tracking-[0.06em]">
                        {p.features.map((f) => (
                          <li key={f} className={`border-t py-3 ${i === 2 ? 'border-paper/10 text-paper/80' : 'border-ink/10 text-ink/75'}`}>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-8">
                        <PillLink href="/contact" dark={i === 2}>
                          {`Ask about ${p.name}`}
                        </PillLink>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* Deliverables (brand identity) */}
          {s.deliverables && (
            <Reveal className="mt-20">
              <div className="grid grid-cols-1 gap-8 rounded-[1.5rem] bg-mist p-8 md:p-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
                <div>
                  <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink/85">What you receive</p>
                  <p className="text-display mt-4 text-[clamp(1.75rem,2.6vw,2.6rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-ink">
                    A complete brand kit, ready to use.
                  </p>
                </div>
                <ul className="grid grid-cols-1 gap-x-8 font-mono text-[12px] uppercase tracking-[0.05em] sm:grid-cols-2">
                  {s.deliverables.map((x, i) => (
                    <li key={x} className="flex gap-4 border-t border-ink/10 py-3.5">
                      <span className="text-primary">{pad(i + 1)}.</span>
                      <span className="text-ink/80">{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {/* Benefits (packaging) */}
          {s.benefits && (
            <div className="mt-20 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {s.benefits.map((b, i) => (
                <Reveal key={b.title} delay={0.05 * i} className="h-full">
                  <div className="h-full rounded-[1.25rem] border border-ink/10 p-6 md:p-7">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary block" aria-hidden />
                    <h3 className="text-display mt-6 text-[1.4rem] font-semibold tracking-[-0.035em] text-ink">{b.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink/55">{b.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </section>

        {/* Process */}
        <section className="px-2.5 md:px-3">
          <div className="grid grid-cols-1 gap-12 rounded-[1.75rem] bg-chrome px-6 py-20 text-paper md:px-10 md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-14">
            <Reveal className="lg:sticky lg:top-24 lg:self-start">
              <SectionLabel code="03" title="Process" dark />
              <WordReveal as="h2" className="text-display mt-10 text-[clamp(2.75rem,5.5vw,5.5rem)] leading-[0.92] font-semibold tracking-[-0.05em]">
                How it works
              </WordReveal>
              <CharReveal className="mt-8 max-w-md text-[15px] leading-relaxed text-paper/55 md:text-[17px]">
                {s.steps.length} clear steps from first conversation to finished {s.slug === 'fun-times' ? 'event' : 'piece'}.
              </CharReveal>
              <div className="mt-10">
                <PillLink href="/contact" dark>
                  Start a project
                </PillLink>
              </div>
            </Reveal>
            <ol>
              {s.steps.map((st, i) => (
                <Reveal key={st.title} delay={0.05 * i} x={-30} y={0}>
                  <li className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-4 border-t border-paper/10 py-8 md:grid-cols-[6rem_minmax(0,1fr)] md:py-10">
                    <span className="font-mono text-[12px] tracking-[0.06em] text-primary/80">{pad(i + 1)}.</span>
                    <div>
                      <h3 className="text-display text-[clamp(1.5rem,2.2vw,2.25rem)] font-semibold tracking-[-0.04em]">{st.title}</h3>
                      <CharReveal className="mt-3 max-w-lg text-[15px] leading-relaxed text-paper/55">{st.description}</CharReveal>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Get a quote — the page's one teal moment */}
        <section className="px-2.5 pt-2.5 md:px-3 md:pt-3">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-10 rounded-[1.75rem] bg-primary px-8 py-14 text-paper md:px-14 md:py-20 lg:flex-row lg:items-end">
              <WordReveal
                as="h2"
                className="text-display max-w-[18ch] text-[clamp(2.25rem,4.2vw,4.25rem)] leading-[0.98] font-semibold tracking-[-0.045em]"
              >
                {`Ready to start your ${s.name.toLowerCase()} project?`}
              </WordReveal>
              <div className="flex flex-col items-start gap-5 lg:items-end">
                <p className="max-w-xs text-[15px] leading-relaxed text-paper/80 lg:text-right">
                  Tell us what you need and when. We reply within 24 hours on business days.
                </p>
                <PillLink href="/contact">Get a quote</PillLink>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Previous / next service + related work */}
        <nav aria-label="More services" className="grid grid-cols-1 gap-2.5 px-2.5 pt-2.5 md:grid-cols-3 md:px-3 md:pt-3">
          <Link href={`/services/${prev.slug}`} className="group rounded-[1.5rem] border border-ink/10 p-7 transition-colors hover:border-primary">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55">← Previous service</span>
            <span className="text-display mt-3 block text-[1.6rem] font-semibold tracking-[-0.035em] text-ink group-hover:text-primary">
              {prev.name}
            </span>
          </Link>
          <Link
            href={workCategory ? `/portfolio?c=${encodeURIComponent(workCategory)}` : '/portfolio'}
            className="group rounded-[1.5rem] bg-mist p-7 transition-colors hover:bg-ink hover:text-paper"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55 group-hover:text-paper/50">Proof of work</span>
            <span className="text-display mt-3 block text-[1.6rem] font-semibold tracking-[-0.035em]">
              See related work ↗
            </span>
          </Link>
          <Link href={`/services/${next.slug}`} className="group rounded-[1.5rem] border border-ink/10 p-7 text-right transition-colors hover:border-primary">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55">Next service →</span>
            <span className="text-display mt-3 block text-[1.6rem] font-semibold tracking-[-0.035em] text-ink group-hover:text-primary">
              {next.name}
            </span>
          </Link>
        </nav>

        {/* Other services */}
        <section className={`${px} py-24 md:py-32`}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-8">
            <Reveal>
              <SectionLabel code="04" title="More services" />
            </Reveal>
            <ServiceIndexList
              compact
              items={others.map((o) => ({
                slug: o.slug,
                title: o.name,
                meta: o.tag,
                image: o.image,
              }))}
            />
          </div>
        </section>

        <div className="pb-2">
          <Marquee items={s.items.slice(0, 6).map((x) => x.title)} />
        </div>
      </PageShell>

      <Footer />
    </main>
  )
}
