'use client'

import Script from 'next/script'
import { Analytics as VercelAnalytics } from '@vercel/analytics/next'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function Analytics() {
  return (
    <>
      <VercelAnalytics />
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
    </>
  )
}
