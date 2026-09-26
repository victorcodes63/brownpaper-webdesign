import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy policy',
  robots: { index: false, follow: true }, // index once approved (B16)
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy"
      updated="September 2026"
      lead="How we collect, use and protect your personal data, in line with Kenya's Data Protection Act, 2019."
      sections={[
        {
          heading: 'Who we are',
          body: [
            `${site.legalName} ("Brown Paper", "we") is a design, printing and branding studio at ${site.address.short}. We are the data controller for personal data collected through this website. Contact us at ${site.email} or ${site.phone}.`,
          ],
        },
        {
          heading: 'What we collect',
          body: [
            'When you send an enquiry we collect your name, email address, and any details you choose to give us: company, phone number, project details, quantities, deadlines and artwork files.',
            'We also collect anonymous usage statistics (pages visited, device type) to understand how the website is used. These do not identify you personally.',
          ],
        },
        {
          heading: 'How we use it',
          body: [
            'We use your details to respond to your enquiry, prepare quotes, deliver the work you order and keep records required by law. We do not sell your data or use it for unrelated marketing without your consent.',
          ],
        },
        {
          heading: 'Lawful basis',
          body: ['We process enquiry data with your consent, given when you submit the form, and where necessary to take steps towards a contract you have asked for.'],
        },
        {
          heading: 'Sharing and storage',
          body: [
            'Your data is shared only with service providers that help us run this website and our email (for example hosting and email delivery), under appropriate safeguards. Some providers may store data outside Kenya; where they do, we rely on the safeguards the Act requires.',
            'We keep enquiry data for as long as needed to respond and to meet legal and accounting obligations, then delete it.',
          ],
        },
        {
          heading: 'Your rights',
          body: [
            'You have the right to be informed, to access your data, to object to processing, to have inaccurate data corrected and to have your data deleted. To exercise these rights, email us at ' +
              site.email +
              '. You may also lodge a complaint with the Office of the Data Protection Commissioner (ODPC).',
          ],
        },
      ]}
    />
  )
}
