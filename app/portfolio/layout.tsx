import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Selected Brown Paper work in brand identity, printing, packaging and display, produced in Nairobi for more than 100 clients.',
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



