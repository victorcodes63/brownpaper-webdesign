import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import StructuredData from './structured-data'
import SmoothScroll from '@/components/SmoothScroll'

const satoshi = localFont({
  src: '../fonts/satoshi/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
  display: 'swap',
  weight: '300 900',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Brown Paper | Printing, Design & Branding Agency in Kenya',
    template: '%s | Brown Paper'
  },
  description: 'Premium printing, design, and branding solutions in Kenya. Since 2018, we\'ve transformed ideas into impactful visual experiences. Expert services in printing, graphic design, brand identity, and packaging design. Based in Nairobi, serving clients across East Africa.',
  keywords: [
    'printing services Kenya',
    'graphic design Nairobi',
    'brand identity agency',
    'packaging design Kenya',
    'printing company Kenya',
    'design agency Nairobi',
    'branding services Kenya',
    'logo design Kenya',
    'marketing materials printing',
    'business cards Kenya',
    'brochures design',
    'corporate branding',
    'visual identity',
    'print solutions Kenya'
  ],
  authors: [{ name: 'Brown Paper', url: 'https://brownpaper.co.ke' }],
  creator: 'Brown Paper',
  publisher: 'Brown Paper',
  applicationName: 'Brown Paper',
  category: 'Design & Printing',
  classification: 'Business',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://brownpaper.co.ke'),
  alternates: {
    canonical: '/',
    languages: {
      'en-KE': 'https://brownpaper.co.ke',
      'en': 'https://brownpaper.co.ke',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://brownpaper.co.ke',
    siteName: 'Brown Paper',
    title: 'Brown Paper | Printing, Design & Branding Agency in Kenya',
    description: 'Premium printing, design, and branding solutions in Kenya. Since 2018, transforming ideas into impactful visual experiences.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Brown Paper - Printing, Design & Branding Agency in Kenya',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brown Paper | Printing, Design & Branding Agency',
    description: 'Premium printing, design, and branding solutions in Kenya. Transforming ideas into impactful visual experiences.',
    images: ['/og-image.jpg'],
    creator: '@brownpaper',
    site: '@brownpaper',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {},
  other: {
    'contact:phone_number': '+254 716 286 489',
    'contact:email': 'info@brownpaper.co.ke',
    'contact:website': 'https://brownpaper.co.ke',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${satoshi.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#008080" />
        <meta name="msapplication-TileColor" content="#008080" />
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
