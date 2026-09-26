import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Printing, design and branding services in Nairobi, from business cards and brochures to brand identity, packaging and event displays.',
  openGraph: {
    title: 'Our Services | Brown Paper',
    description: 'Printing, design and branding services in Nairobi.',
    url: 'https://brownpaper.co.ke/services',
    type: 'website',
  },
  twitter: {
    title: 'Our Services | Brown Paper',
    description: 'Comprehensive printing, design, and branding services in Kenya.',
  },
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}



