import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Brown Paper, a leading printing and design agency in Kenya. Founded in 2018, we combine traditional craftsmanship with modern innovation to deliver exceptional branding and printing solutions. Based in Nairobi, serving clients across East Africa.',
  keywords: [
    'about brown paper',
    'printing company Kenya history',
    'design agency Nairobi',
    'branding team Kenya',
    'creative agency about',
    'printing services company',
  ],
  openGraph: {
    title: 'About Us | Brown Paper',
    description: 'Learn about Brown Paper, a leading printing and design agency in Kenya. Founded in 2018, serving clients across East Africa.',
    url: 'https://brownpaper.co.ke/about',
    type: 'website',
  },
  twitter: {
    title: 'About Us | Brown Paper',
    description: 'Learn about Brown Paper, a leading printing and design agency in Kenya. Founded in 2018.',
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



