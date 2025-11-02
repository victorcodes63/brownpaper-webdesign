import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Packaging Design Services',
  description: 'Innovative packaging design in Kenya. Product packaging, labels, boxes, and sustainable packaging solutions. Make your products stand out on the shelf with eye-catching packaging design.',
  keywords: [
    'packaging design Kenya',
    'product packaging',
    'label design',
    'box design',
    'sustainable packaging',
    'retail packaging',
    'package design Nairobi',
    'custom packaging',
  ],
  openGraph: {
    title: 'Packaging Design Services | Brown Paper',
    description: 'Innovative packaging design in Kenya. Product packaging, labels, and sustainable solutions.',
    url: 'https://brownpaper.co.ke/services/packaging-design',
    type: 'website',
  },
  twitter: {
    title: 'Packaging Design Services | Brown Paper',
    description: 'Innovative packaging design in Kenya for products that stand out.',
  },
  alternates: {
    canonical: '/services/packaging-design',
  },
}

export default function PackagingDesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

