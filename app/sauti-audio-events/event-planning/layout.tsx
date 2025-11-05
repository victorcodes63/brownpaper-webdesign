import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Planning & Management | Sauti Audio Events',
  description: 'Comprehensive event planning and management services for corporate and social events. Professional logistics, vendor coordination, and on-site management for flawless event execution.',
  keywords: [
    'event planning Kenya',
    'event management Nairobi',
    'corporate events',
    'social events',
    'event coordination',
    'event logistics',
  ],
  openGraph: {
    title: 'Event Planning & Management | Sauti Audio Events',
    description: 'Comprehensive event planning and management services for flawless event execution.',
    url: 'https://brownpaper.co.ke/sauti-audio-events/event-planning',
    type: 'website',
  },
  twitter: {
    title: 'Event Planning & Management | Sauti Audio Events',
    description: 'Comprehensive event planning and management services for flawless event execution.',
  },
  alternates: {
    canonical: '/sauti-audio-events/event-planning',
  },
}

export default function EventPlanningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


