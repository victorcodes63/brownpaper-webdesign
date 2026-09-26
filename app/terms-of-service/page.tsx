import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of service',
  robots: { index: false, follow: true }, // index once approved (B16)
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms"
      updated="September 2026"
      lead="The terms that apply when you use this website and request quotes or work from us."
      sections={[
        {
          heading: 'Using this website',
          body: [`This website is operated by ${site.legalName}. By using it you agree to these terms. Content is provided for general information and may change without notice.`],
        },
        {
          heading: 'Quotes and orders',
          body: [
            'Quotes are based on the information you provide and are valid for the period stated on the quote. Work begins once a quote is accepted in writing and any agreed deposit is received.',
            'Final artwork, colours and quantities must be approved by you before production. We are not responsible for errors in artwork or proofs you have approved.',
          ],
        },
        {
          heading: 'Artwork and intellectual property',
          body: [
            'You confirm you have the right to use any logos, images or text you send us. Design work we create remains ours until paid for in full, after which the agreed rights transfer to you.',
          ],
        },
        {
          heading: 'Payment',
          body: ['Payment terms, deposits and accepted methods are stated on each quote or invoice.'],
        },
        {
          heading: 'Liability',
          body: ['To the extent permitted by law, our liability for any order is limited to the value of that order.'],
        },
        {
          heading: 'Governing law',
          body: ['These terms are governed by the laws of Kenya.'],
        },
      ]}
    />
  )
}
