import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Graphic Design Services',
  description: 'Creative graphic design services in Kenya. Marketing materials, social media graphics, infographics, web design, presentations, and digital assets. Professional design that captures attention.',
  keywords: [
    'graphic design Kenya',
    'marketing materials design',
    'social media graphics',
    'infographic design',
    'web design Nairobi',
    'presentation design',
    'digital assets',
    'graphic designer Kenya',
  ],
  openGraph: {
    title: 'Graphic Design Services | Brown Paper',
    description: 'Creative graphic design services in Kenya. Marketing materials, social media graphics, and more.',
    url: 'https://brownpaper.co.ke/services/graphic-design',
    type: 'website',
  },
  twitter: {
    title: 'Graphic Design Services | Brown Paper',
    description: 'Creative graphic design services in Kenya for all your marketing needs.',
  },
  alternates: {
    canonical: '/services/graphic-design',
  },
}

export default function GraphicDesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}



