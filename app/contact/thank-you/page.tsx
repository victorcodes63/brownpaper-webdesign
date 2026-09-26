import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHero, { PageShell } from '@/components/PageHero'
import { PillLink } from '@/components/home/ui'
import { site, whatsappLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Thank you',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <main className="min-h-svh bg-chrome">
      <Navigation />
      <PageHero
        code="✓"
        label="Enquiry received"
        lead={`Thanks for getting in touch. We'll reply ${site.responseTime}, and a confirmation is on its way to your inbox.`}
        title="Thank you"
      />
      <PageShell>
        <section className="grid grid-cols-1 gap-2.5 p-2.5 md:grid-cols-3 md:p-3">
          <div className="rounded-[1.5rem] bg-mist p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-primary">001. Next</p>
            <p className="text-display mt-6 text-[1.5rem] leading-[1.15] font-semibold tracking-[-0.035em] text-ink">
              We review your brief and come back with questions or a quote.
            </p>
          </div>
          <a
            href={whatsappLink('Hi Brown Paper, I just sent an enquiry through the website about ')}
            className="rounded-[1.5rem] bg-primary p-8 text-paper transition-colors hover:bg-ink"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper/70">002. In a hurry?</p>
            <p className="text-display mt-6 text-[1.5rem] leading-[1.15] font-semibold tracking-[-0.035em]">
              Message us on WhatsApp ↗
            </p>
          </a>
          <div className="rounded-[1.5rem] border border-ink/10 p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-primary">003. Meanwhile</p>
            <p className="text-display mt-6 text-[1.5rem] leading-[1.15] font-semibold tracking-[-0.035em] text-ink">
              Browse the <Link href="/portfolio" className="underline underline-offset-4 hover:text-primary">portfolio</Link> or our{' '}
              <Link href="/services" className="underline underline-offset-4 hover:text-primary">services</Link>.
            </p>
          </div>
        </section>
        <div className="flex justify-center px-6 pt-10 pb-20">
          <PillLink href="/">Back to home</PillLink>
        </div>
      </PageShell>
      <Footer />
    </main>
  )
}
