import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Brown Paper for your printing, design, and branding needs. Located in Nairobi, Kenya. Call +254 716 286 489 or email info@brownpaper.co.ke. Free consultations available.',
  keywords: [
    'contact brown paper',
    'printing company contact',
    'design agency Nairobi contact',
    'branding services Kenya',
    'printing quote Kenya',
    'design consultation Nairobi',
  ],
  openGraph: {
    title: 'Contact Us | Brown Paper',
    description: 'Get in touch with Brown Paper for your printing, design, and branding needs. Located in Nairobi, Kenya.',
    url: 'https://brownpaper.co.ke/contact',
    type: 'website',
  },
  twitter: {
    title: 'Contact Us | Brown Paper',
    description: 'Get in touch with Brown Paper for your printing, design, and branding needs in Kenya.',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

