import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Printing Services',
  description: 'Professional printing services in Kenya. High-quality business cards, brochures, flyers, banners, stationery, and large-format printing. Offset and digital printing solutions for your business needs.',
  keywords: [
    'printing services Kenya',
    'business cards printing',
    'brochure printing Nairobi',
    'flyer printing',
    'banner printing Kenya',
    'stationery printing',
    'large format printing',
    'offset printing',
    'digital printing Kenya',
  ],
  openGraph: {
    title: 'Printing Services | Brown Paper',
    description: 'Professional printing services in Kenya. High-quality business cards, brochures, banners, and more.',
    url: 'https://brownpaper.co.ke/services/printing-services',
    type: 'website',
  },
  twitter: {
    title: 'Printing Services | Brown Paper',
    description: 'Professional printing services in Kenya for all your business needs.',
  },
  alternates: {
    canonical: '/services/printing-services',
  },
}

export default function PrintingServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

