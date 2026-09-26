import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branded Workwear & Uniforms in Nairobi',
  description: 'Professional branded workwear and corporate uniforms in Kenya. Custom corporate uniforms, branded apparel, safety wear, and team shirts. Expert embroidery and printing services.',
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


