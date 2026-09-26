import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import StructuredData from './structured-data'
import SmoothScroll from '@/components/SmoothScroll'
import Analytics from '@/components/Analytics'
import ContactDock from '@/components/ContactDock'
import { site } from '@/lib/site'

const baseUrl =
  process.env.VERCEL_ENV === 'production'
    ? site.url
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'

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
  description: site.description,
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
  metadataBase: new URL(baseUrl),
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
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brown Paper | Printing, Design & Branding Agency',
    description: site.description,
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
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : {},
  other: {
    'contact:phone_number': site.phone,
    'contact:email': site.email,
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
        <meta name="theme-color" content="#0f1414" />
        <meta name="msapplication-TileColor" content="#0f1414" />
        <StructuredData />
        {/* Content must never depend on JS animations to become visible (item 021) */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important}[style*="transform"]{transform:none!important}[style*="clip-path"]{clip-path:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <ContactDock />
        <Analytics />
      </body>
    </html>
  )
}
