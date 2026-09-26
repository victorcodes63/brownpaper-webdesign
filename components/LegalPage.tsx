import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHero, { PageShell } from '@/components/PageHero'
import { site } from '@/lib/site'

export type LegalSection = { heading: string; body: string[] }

/** Draft legal page. Stays noindexed with a visible notice until Brown Paper approves it (client item B16). */
export default function LegalPage({ title, lead, sections, updated }: { title: string; lead: string; sections: LegalSection[]; updated: string }) {
  return (
    <main className="min-h-svh bg-chrome">
      <Navigation />
      <PageHero code="LG" label="Legal" lead={lead} title={title} />
      <PageShell>
        <p className="bg-primary px-6 py-3 text-center font-mono text-[11px] uppercase tracking-[0.08em] text-paper">
          Draft pending approval by {site.legalName}
        </p>
        <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55">Last updated {updated}</p>
          {sections.map((s, i) => (
            <section key={s.heading} className="mt-12">
              <h2 className="text-display text-[1.75rem] font-semibold tracking-[-0.035em] text-ink">
                <span className="mr-3 font-mono text-[13px] text-primary">{String(i + 1).padStart(2, '0')}.</span>
                {s.heading}
              </h2>
              {s.body.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-[16px] leading-relaxed text-ink/70">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </article>
      </PageShell>
      <Footer />
    </main>
  )
}
