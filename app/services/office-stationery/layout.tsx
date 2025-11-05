import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Office Stationery',
  description: 'Professional office stationery sets in Kenya. Custom letterheads, business cards, envelopes, notepads, and folders. Complete stationery solutions that create a cohesive brand identity.',
  keywords: [
    'office stationery Kenya',
    'letterheads Nairobi',
    'business cards printing',
    'custom envelopes',
    'notepads printing',
    'presentation folders',
    'stationery sets Kenya',
    'corporate stationery',
  ],
  openGraph: {
    title: 'Office Stationery | Brown Paper',
    description: 'Professional office stationery sets in Kenya. Complete stationery solutions for your business.',
    url: 'https://brownpaper.co.ke/services/office-stationery',
    type: 'website',
  },
  twitter: {
    title: 'Office Stationery | Brown Paper',
    description: 'Professional office stationery sets in Kenya for all your business needs.',
  },
  alternates: {
    canonical: '/services/office-stationery',
  },
}

export default function OfficeStationeryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


