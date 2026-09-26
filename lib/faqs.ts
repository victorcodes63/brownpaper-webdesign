import type { FaqItem } from '@/components/FAQ'

/**
 * Single FAQ source (Route to 10, item 011). Each question lives in exactly one
 * set, so pages never repeat each other. FAQPage schema is emitted for `general`
 * on the home page only. Answers need Brown Paper's sign-off (client item B12).
 */
export const faqs: Record<'general' | 'projects' | 'enquiries', FaqItem[]> = {
  "general": [
    {
      "question": "What printing services do you offer?",
      "answer": "Business cards, brochures, flyers, banners, stationery, catalogues, posters and large-format printing, using offset and digital presses."
    },
    {
      "question": "Do you offer design services along with printing?",
      "answer": "Yes. We are a full-service studio: logos, brand systems, marketing materials, packaging and digital assets, with or without print."
    },
    {
      "question": "What is your minimum order quantity?",
      "answer": "It varies by product. Business cards usually start at 100 units. Specialty packaging may need higher minimums, so we quote per project."
    },
    {
      "question": "Can you work with my existing brand guidelines?",
      "answer": "Absolutely. We work within established brand systems to keep every piece consistent across print and production."
    },
    {
      "question": "What payment methods do you accept?",
      "answer": "Bank transfer, M-Pesa, Airtel Money, cards, and cash for local clients. Larger projects typically start with a 50% deposit."
    }
  ],
  "projects": [
    {
      "question": "How do you approach a new project?",
      "answer": "Every project begins with a consultation to understand your goals, audience and brand. We look at the market and competitors and agree an approach before any design starts."
    },
    {
      "question": "What’s included in a typical project?",
      "answer": "Usually a consultation, concept development, design rounds, final files for print and digital, and brand guidelines where relevant, with a clear timeline upfront."
    },
    {
      "question": "How long does a project take?",
      "answer": "A logo refresh may take 2 to 3 weeks; a full brand identity 4 to 8 weeks; packaging typically 3 to 6 weeks. You get a detailed timeline at the consultation."
    },
    {
      "question": "Do you provide support after the project?",
      "answer": "Yes. Many clients stay with us for seasonal campaigns, new product launches and ongoing brand assets."
    },
    {
      "question": "Can we see work from our industry?",
      "answer": "Yes. During the consultation we share relevant examples from your sector and walk through how similar projects were approached."
    }
  ],
  "enquiries": [
    {
      "question": "How quickly will you respond?",
      "answer": "We reply to all enquiries within 24 hours on business days. For urgent jobs, call us directly on +254 716 286 489."
    },
    {
      "question": "Do you offer free consultations?",
      "answer": "Yes. We can meet at the studio, by phone or by video call. Use the form above to book one."
    },
    {
      "question": "What should I include in my enquiry?",
      "answer": "Project type, deadline, approximate budget, quantities or specifications, and any references or inspiration you have. The more detail, the faster we can quote."
    },
    {
      "question": "Can I visit the studio?",
      "answer": "Yes. We’re at Mayhouse 680 Hotel Building, 3rd Floor, Nairobi. Book an appointment, or walk in during business hours."
    },
    {
      "question": "Do you quote by email or phone?",
      "answer": "Yes, for straightforward jobs. For complex projects we recommend a free consultation so the quote reflects everything you need."
    },
    {
      "question": "Do you work with clients outside Nairobi?",
      "answer": "Yes, across Kenya and East Africa. We work remotely by phone, email and video, and arrange shipping for finished work."
    }
  ]
}
