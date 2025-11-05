import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Gear | Sauti Audio Events',
  description: 'Complete audio, lighting, and stage equipment solutions for events. Professional event gear including lighting, microphones, sound mixers, speakers, stages, and LED screens.',
  keywords: [
    'event gear rental Kenya',
    'audio equipment rental',
    'event lighting',
    'professional microphones',
    'sound mixers',
    'event speakers',
    'stage equipment',
    'LED screens rental',
  ],
  openGraph: {
    title: 'Event Gear | Sauti Audio Events',
    description: 'Complete audio, lighting, and stage equipment solutions for events of all sizes.',
    url: 'https://brownpaper.co.ke/sauti-audio-events/event-gear',
    type: 'website',
  },
  twitter: {
    title: 'Event Gear | Sauti Audio Events',
    description: 'Complete audio, lighting, and stage equipment solutions for events.',
  },
  alternates: {
    canonical: '/sauti-audio-events/event-gear',
  },
}

export default function EventGearLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


