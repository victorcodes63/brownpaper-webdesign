import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand Identity & Logo Design in Nairobi',
  description: 'Complete brand identity services in Kenya. Logo design, brand guidelines, color palettes, typography, and visual language. Create a cohesive brand that resonates with your audience.',
  openGraph: {
    title: 'Brand Identity Services | Brown Paper',
    description: 'Complete brand identity services in Kenya. Logo design, brand guidelines, and visual identity.',
    url: 'https://brownpaper.co.ke/services/brand-identity',
    type: 'website',
  },
  twitter: {
    title: 'Brand Identity Services | Brown Paper',
    description: 'Complete brand identity services in Kenya. Logo design and brand guidelines.',
  },
  alternates: {
    canonical: '/services/brand-identity',
  },
}

export default function BrandIdentityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}



