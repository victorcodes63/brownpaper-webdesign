import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sauti Audio Events | Professional Audio & Event Solutions',
  description: 'Creating unforgettable and immersive audio experiences through expertly curated events. Professional event gear, photography, videography, livestream, event branding, instrumentalists, and event planning services.',
  keywords: [
    'audio events Kenya',
    'event gear rental',
    'professional sound systems',
    'event lighting',
    'stage equipment',
    'event photography',
    'event videography',
    'livestream events',
    'event management Kenya',
  ],
  openGraph: {
    title: 'Sauti Audio Events | Professional Audio & Event Solutions',
    description: 'Creating unforgettable and immersive audio experiences through expertly curated events.',
    url: 'https://brownpaper.co.ke/sauti-audio-events',
    type: 'website',
  },
  twitter: {
    title: 'Sauti Audio Events | Professional Audio & Event Solutions',
    description: 'Creating unforgettable and immersive audio experiences through expertly curated events.',
  },
  alternates: {
    canonical: '/sauti-audio-events',
  },
}

export default function SautiAudioEventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


