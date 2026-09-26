import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHero, { PageShell } from '@/components/PageHero'
import { SectionLabel, Reveal, PillLink, ImageReveal } from '@/components/home/ui'

const pad = (n: number) => String(n).padStart(3, '0')
import { getProject, publishedProjects, visibleProjects } from '@/lib/projects'
import { services } from '@/lib/services'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export function generateStaticParams() {
  return publishedProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) return {}
  return {
    title: `${p.client}: ${p.title}`,
    description: p.summary,
    alternates: { canonical: `/portfolio/${p.slug}` },
    robots: p.published ? undefined : { index: false, follow: false },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) notFound()
  const list = visibleProjects()
  const next = list[(list.indexOf(p) + 1) % list.length]
  const specRows = [
    ['Client', p.client],
    ['Year', p.year],
    ['Quantity', p.spec.quantity],
    ['Stock', p.spec.stock],
    ['Finish', p.spec.finish],
    ['Turnaround', p.spec.turnaround],
  ].filter((r): r is [string, string] => Boolean(r[1]))
  const serviceLinks = services.filter((s) => p.services.includes(s.slug))

  return (
    <main className="min-h-svh bg-chrome">
      <Navigation />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' },
          { name: p.client, path: `/portfolio/${p.slug}` },
        ])}
      />
      <PageHero code="CS" label={p.category} lead={p.summary} title={p.client}>
        <PillLink href="/contact" dark>
          Start a similar project
        </PillLink>
      </PageHero>

      <PageShell>
        {!p.published && (
          <p className="bg-primary px-6 py-3 text-center font-mono text-[11px] uppercase tracking-[0.08em] text-paper">
            Draft template preview: not published
          </p>
        )}

        {/* Hero artefact */}
        <section className="p-2.5 md:p-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-mist">
            <ImageReveal>
              <Image src={p.cover} alt={`${p.client}: ${p.title}`} fill priority sizes="100vw" className="object-cover" />
            </ImageReveal>
          </div>
        </section>

        {/* Brief + spec */}
        <section className="grid grid-cols-1 gap-14 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-14">
          <div>
            <Reveal>
              <SectionLabel code="01" title="The brief" />
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display mt-8 text-[clamp(2rem,3.6vw,3.5rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-ink">
                {p.title}
              </h2>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink/60 md:text-[17px]">{p.brief}</p>
            </Reveal>
            <Reveal className="mt-12">
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink/85">What we produced</p>
              <ul className="mt-4 font-mono text-[12px] uppercase tracking-[0.05em]">
                {p.produced.map((x, i) => (
                  <li key={x} className="flex gap-4 border-t border-ink/10 py-3">
                    <span className="text-primary">{pad(i + 1)}.</span>
                    <span className="text-ink/80">{x}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="lg:sticky lg:top-24 lg:self-start">
            <dl className="rounded-[1.5rem] bg-chrome p-8 text-paper md:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-primary">Spec sheet</p>
              {specRows.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 border-t border-paper/10 py-3.5 font-mono text-[12px] uppercase tracking-[0.05em]">
                  <dt className="text-paper/55">{k}</dt>
                  <dd className="text-right text-paper/90">{v}</dd>
                </div>
              ))}
              {serviceLinks.length > 0 && (
                <div className="border-t border-paper/10 pt-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper/55">Services</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="rounded-full border border-paper/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-paper/80 hover:border-primary hover:text-primary"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </dl>
          </Reveal>
        </section>

        {/* Gallery */}
        {p.gallery.length > 0 && (
          <section className="grid grid-cols-1 gap-2.5 px-2.5 md:grid-cols-2 md:px-3">
            {p.gallery.map((g) => (
              <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-mist">
                <ImageReveal>
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </ImageReveal>
              </div>
            ))}
          </section>
        )}

        {p.quote && (
          <section className="px-6 py-20 md:px-10 lg:px-14">
            <figure className="max-w-4xl">
              <blockquote className="text-display text-[clamp(1.6rem,2.6vw,2.6rem)] leading-[1.15] font-medium tracking-[-0.035em] text-ink">
                “{p.quote.text}”
              </blockquote>
              <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-ink/50">
                {p.quote.name}, {p.quote.role}
              </figcaption>
            </figure>
          </section>
        )}

        {/* Next project */}
        {next && next.slug !== p.slug && (
          <section className="px-6 py-20 md:px-10 lg:px-14">
            <Link href={`/portfolio/${next.slug}`} className="group flex items-end justify-between gap-6 border-t border-ink/10 pt-10">
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55">Next project</span>
                <span className="text-display mt-3 block text-[clamp(2rem,4vw,4rem)] font-semibold tracking-[-0.045em] text-ink transition-colors group-hover:text-primary">
                  {next.client}
                </span>
              </span>
              <span className="text-2xl text-ink/55 group-hover:text-primary" aria-hidden>
                ↗
              </span>
            </Link>
          </section>
        )}
      </PageShell>
      <Footer />
    </main>
  )
}
