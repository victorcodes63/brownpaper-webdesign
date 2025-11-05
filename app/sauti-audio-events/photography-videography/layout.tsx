import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Media Production | Sauti Audio Events',
  description: 'Professional media production services for events including photography, videography, and livestreaming. High-quality visual documentation and real-time engagement for audiences globally.',
  keywords: [
    'media production Kenya',
    'event photography',
    'event videography',
    'livestream events',
    'professional photography',
    'event documentation',
    'live streaming services',
    'visual content production',
  ],
  openGraph: {
    title: 'Media Production | Sauti Audio Events',
    description: 'Professional media production services including photography, videography, and livestreaming for all occasions.',
    url: 'https://brownpaper.co.ke/sauti-audio-events/photography-videography',
    type: 'website',
  },
  twitter: {
    title: 'Media Production | Sauti Audio Events',
    description: 'Professional media production services including photography, videography, and livestreaming for all occasions.',
  },
  alternates: {
    canonical: '/sauti-audio-events/photography-videography',
  },
}

export default function PhotographyVideographyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


