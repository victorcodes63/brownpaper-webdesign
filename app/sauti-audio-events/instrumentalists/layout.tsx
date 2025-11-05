import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instrumentalists | Sauti Audio Events',
  description: 'Professional entertainment services including DJ services, MC services, saxophonists, and violinists. Elevate your event with talented musicians and performers.',
  keywords: [
    'DJ services Kenya',
    'MC services',
    'saxophonist Kenya',
    'violinist Kenya',
    'event entertainment',
    'professional DJ',
    'event MC',
  ],
  openGraph: {
    title: 'Instrumentalists | Sauti Audio Events',
    description: 'Professional entertainment services to elevate your event experience.',
    url: 'https://brownpaper.co.ke/sauti-audio-events/instrumentalists',
    type: 'website',
  },
  twitter: {
    title: 'Instrumentalists | Sauti Audio Events',
    description: 'Professional entertainment services to elevate your event experience.',
  },
  alternates: {
    canonical: '/sauti-audio-events/instrumentalists',
  },
}

export default function InstrumentalistsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


