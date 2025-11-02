import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from './structured-data'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-inter',
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
  verification: {
    // Add these when you have verification codes
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
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
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicons - Using bp_1.png logo, with fallbacks for optimized versions */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        {/* Fallback to logo if optimized versions don't exist */}
        <link rel="icon" type="image/png" href="/logo/bp_1.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme and colors */}
        <meta name="theme-color" content="#008080" />
        <meta name="msapplication-TileColor" content="#008080" />
        
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

