import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Workwear Solutions',
  description: 'Professional branded workwear and corporate uniforms in Kenya. Custom corporate uniforms, branded apparel, safety wear, and team shirts. Expert embroidery and printing services.',
  keywords: [
    'workwear Kenya',
    'corporate uniforms Nairobi',
    'branded apparel',
    'safety wear Kenya',
    'custom embroidery',
    'team shirts',
    'professional attire',
    'workwear printing',
  ],
  openGraph: {
    title: 'Workwear Solutions | Brown Paper',
    description: 'Professional branded workwear and corporate uniforms in Kenya. Custom workwear solutions for your team.',
    url: 'https://brownpaper.co.ke/services/workwear',
    type: 'website',
  },
  twitter: {
    title: 'Workwear Solutions | Brown Paper',
    description: 'Professional branded workwear and corporate uniforms in Kenya for all your business needs.',
  },
  alternates: {
    canonical: '/services/workwear',
  },
}

export default function WorkwearLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


