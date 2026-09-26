/**
 * Case studies (Route to 10, item 012). The template is live; content arrives
 * with Brown Paper's real projects (client item B1). Only `published: true`
 * entries are built and linked. Drafts render in development only.
 */
export type CaseStudy = {
  slug: string
  published: boolean
  client: string
  title: string
  year: string
  category: 'Branding' | 'Print' | 'Packaging' | 'Design' | 'Display' | 'Workwear' | 'Promotional'
  services: string[] // service slugs from lib/services.ts
  summary: string
  brief: string
  produced: string[]
  spec: { quantity?: string; stock?: string; finish?: string; turnaround?: string }
  cover: string
  gallery: { src: string; alt: string }[]
  quote?: { text: string; name: string; role: string }
}

export const projects: CaseStudy[] = [
  {
    slug: 'example-case-study',
    published: false, // template preview only: never ships
    client: 'Client name',
    title: 'Example: brand rollout for a Nairobi business',
    year: '2026',
    category: 'Branding',
    services: ['brand-identity', 'printing-services'],
    summary: 'One-line summary of the job and the result.',
    brief: 'What the client needed, the audience, the deadline and any constraints.',
    produced: ['Logo and identity system', '500 business cards', 'Letterheads and envelopes'],
    spec: { quantity: '500 units', stock: '350gsm matte', finish: 'Spot UV', turnaround: '5 working days' },
    cover: '/images/hero/hero5.jpg',
    gallery: [
      { src: '/images/services/stationery.jpg', alt: 'Stationery set' },
      { src: '/images/services/branding.jpg', alt: 'Colour selection' },
    ],
  },
]

const isDev = process.env.NODE_ENV !== 'production'
export const visibleProjects = () => projects.filter((p) => p.published || isDev)
export const publishedProjects = () => projects.filter((p) => p.published)
export const getProject = (slug: string) => visibleProjects().find((p) => p.slug === slug)
