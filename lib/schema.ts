import { site } from './site'
import type { Service } from './services'

/** JSON-LD builders (Route to 10, item 032). All facts come from lib/site.ts. */

const addressSchema = () => ({
  '@type': 'PostalAddress',
  streetAddress: [site.address.building, site.address.floor, site.address.street].filter(Boolean).join(', '),
  addressLocality: site.address.area || site.address.city,
  addressRegion: site.address.city,
  postalCode: site.address.postalCode || undefined,
  addressCountry: site.address.country,
})

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#business`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/android-chrome-512x512.png`,
  image: `${site.url}/opengraph-image`,
  description: site.description,
  slogan: site.tagline,
  email: site.email,
  telephone: site.phone.replace(/\s/g, ''),
  foundingDate: String(site.foundedYear),
  address: addressSchema(),
  openingHours: site.hours.map((h) => h.schema).filter(Boolean),
  areaServed: [{ '@type': 'Country', name: 'Kenya' }],
  sameAs: site.socials.map((s) => s.href),
})

export const serviceSchema = (s: Service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.name,
  serviceType: s.name,
  description: s.lead,
  url: `${site.url}/services/${s.slug}`,
  provider: { '@id': `${site.url}/#business` },
  areaServed: { '@type': 'Country', name: 'Kenya' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: s.name,
    itemListElement: s.items.map((it) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: it.title } })),
  },
})

export const breadcrumbSchema = (trail: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    item: `${site.url}${t.path}`,
  })),
})
