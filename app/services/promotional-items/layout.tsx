import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Promotional Items & Branded Merchandise in Nairobi',
  description: 'High-quality branded merchandise and promotional products in Kenya. Corporate gifts, event giveaways, custom products, and logo items. Increase brand visibility with promotional items.',
  openGraph: {
    title: 'Promotional Items | Brown Paper',
    description: 'High-quality branded merchandise and promotional products in Kenya. Increase brand visibility with promotional items.',
    url: 'https://brownpaper.co.ke/services/promotional-items',
    type: 'website',
  },
  twitter: {
    title: 'Promotional Items | Brown Paper',
    description: 'High-quality branded merchandise and promotional products in Kenya for all your marketing needs.',
  },
  alternates: {
    canonical: '/services/promotional-items',
  },
}

export default function PromotionalItemsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


