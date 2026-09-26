import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Brown Paper is a design, printing and branding studio in Nairobi, founded in 2022. Meet the studio, how we work and what drives us.',
  openGraph: {
    title: 'About Us | Brown Paper',
    description: 'A design, printing and branding studio in Nairobi, founded in 2022.',
    url: 'https://brownpaper.co.ke/about',
    type: 'website',
  },
  twitter: {
    title: 'About Us | Brown Paper',
    description: 'Learn about Brown Paper, a leading printing and design agency in Kenya. Founded in 2022.',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}



