import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Branding | Sauti Audio Events',
  description: 'Comprehensive event branding solutions including customized banners, signage, branded backdrops, and promotional materials. Create a cohesive and impactful event identity.',
  keywords: [
    'event branding Kenya',
    'event signage',
    'custom banners',
    'event backdrops',
    'promotional materials',
    'event identity',
  ],
  openGraph: {
    title: 'Event Branding | Sauti Audio Events',
    description: 'Comprehensive event branding solutions that create a cohesive and impactful identity for your events.',
    url: 'https://brownpaper.co.ke/sauti-audio-events/event-branding',
    type: 'website',
  },
  twitter: {
    title: 'Event Branding | Sauti Audio Events',
    description: 'Comprehensive event branding solutions for your events.',
  },
  alternates: {
    canonical: '/sauti-audio-events/event-branding',
  },
}

export default function EventBrandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


