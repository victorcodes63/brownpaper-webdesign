import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive printing, design, and branding services in Kenya. From business cards and brochures to complete brand identity and packaging design. Expert solutions for businesses across East Africa.',
  keywords: [
    'printing services Kenya',
    'design services Nairobi',
    'branding services',
    'graphic design Kenya',
    'packaging design',
    'brand identity services',
    'marketing materials',
  ],
  openGraph: {
    title: 'Our Services | Brown Paper',
    description: 'Comprehensive printing, design, and branding services in Kenya. Expert solutions for businesses across East Africa.',
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

