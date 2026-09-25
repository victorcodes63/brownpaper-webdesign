'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import PageHero, { PageShell } from '@/components/PageHero'
import Process from '@/components/home/Process'
import { SectionLabel, Reveal, PillLink, Marquee, WordReveal } from '@/components/home/ui'
import ServiceIndexList from '@/components/ServiceIndexList'
import { services } from '@/lib/services'

const serviceItems = services.map((s) => ({
  slug: s.slug,
  title: s.name,
  meta: s.tag,
  description: `${s.statement} ${s.items.length} ${s.slug === 'fun-times' ? 'event formats' : 'products & services'}.`,
  image: s.image,
}))

export default function ServicesIndex() {
  return (
    <main className="min-h-svh bg-chrome">
      <Navigation />

      <PageHero
        code="01"
        label="Our services"
        lead="Design, printing, branding and promotional items under one roof, with tailor-made packages for clients with different needs."
        title="Services"
      >
        <PillLink href="/contact" dark>
          Start a project
        </PillLink>
      </PageHero>

      <PageShell>
        <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-8">
            <Reveal>
              <SectionLabel code="02" title="What we do" />
            </Reveal>
            <Reveal delay={0.05}>
              <WordReveal as="h2" className="text-display max-w-[18ch] text-[clamp(2.5rem,5.2vw,5.25rem)] leading-[0.95] font-semibold tracking-[-0.05em] text-ink">
                Everything a brand needs to <span className="text-kraft-fill">show up</span>
              </WordReveal>
            </Reveal>
          </div>

          <div className="mt-16 md:mt-20">
            <ServiceIndexList items={serviceItems} />
          </div>
        </section>

        <Process code="03" />
        <FAQ code="04" />
        <div className="pb-2">
          <Marquee />
        </div>
      </PageShell>

      <Footer />
    </main>
  )
}
