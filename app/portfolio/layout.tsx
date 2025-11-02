import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore Brown Paper\'s portfolio of successful projects. See our work in printing, graphic design, brand identity, and packaging design. Over 100+ completed projects for clients across Kenya and East Africa.',
  keywords: [
    'brown paper portfolio',
    'design portfolio Kenya',
    'branding examples',
    'printing projects',
    'graphic design work',
    'packaging design portfolio',
  ],
  openGraph: {
    title: 'Portfolio | Brown Paper',
    description: 'Explore Brown Paper\'s portfolio of successful projects in printing, design, and branding.',
    url: 'https://brownpaper.co.ke/portfolio',
    type: 'website',
  },
  twitter: {
    title: 'Portfolio | Brown Paper',
    description: 'Explore Brown Paper\'s portfolio of successful projects.',
  },
  alternates: {
    canonical: '/portfolio',
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

