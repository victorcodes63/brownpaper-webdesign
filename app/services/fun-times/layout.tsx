import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fun Times - Event Planning & Management',
  description: 'Complete event planning and management services in Kenya. Office parties, team building, conferences, expos, and outdoor events. Professional event coordination and management.',
  keywords: [
    'event planning Kenya',
    'office parties Nairobi',
    'team building activities',
    'conference management',
    'expo management',
    'outdoor events Kenya',
    'corporate events',
    'event coordination',
  ],
  openGraph: {
    title: 'Fun Times - Event Planning & Management | Brown Paper',
    description: 'Complete event planning and management services in Kenya. Make your events memorable and engaging.',
    url: 'https://brownpaper.co.ke/services/fun-times',
    type: 'website',
  },
  twitter: {
    title: 'Fun Times - Event Planning & Management | Brown Paper',
    description: 'Complete event planning and management services in Kenya for all your corporate event needs.',
  },
  alternates: {
    canonical: '/services/fun-times',
  },
}

export default function FunTimesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


