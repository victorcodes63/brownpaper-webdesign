import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Display Solutions',
  description: 'Professional display solutions in Kenya. Custom retail displays, trade show booths, exhibition stands, point of sale displays, and window displays. Expert design and installation services.',
  keywords: [
    'display solutions Kenya',
    'retail displays Nairobi',
    'trade show booths',
    'exhibition stands',
    'point of sale displays',
    'window displays',
    'custom displays Kenya',
    'display installation',
  ],
  openGraph: {
    title: 'Display Solutions | Brown Paper',
    description: 'Professional display solutions in Kenya. Custom retail displays, trade show booths, and exhibition stands.',
    url: 'https://brownpaper.co.ke/services/display',
    type: 'website',
  },
  twitter: {
    title: 'Display Solutions | Brown Paper',
    description: 'Professional display solutions in Kenya for all your business needs.',
  },
  alternates: {
    canonical: '/services/display',
  },
}

export default function DisplayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


