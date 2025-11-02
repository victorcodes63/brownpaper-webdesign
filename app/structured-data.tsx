export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Brown Paper',
    alternateName: 'Brown Paper Design & Printing',
    url: 'https://brownpaper.co.ke',
    logo: 'https://brownpaper.co.ke/logo/bp_1.png',
    image: 'https://brownpaper.co.ke/og-image.jpg',
    description: 'Premium printing, design, and branding solutions in Kenya. Since 2018, transforming ideas into impactful visual experiences.',
    foundingDate: '2018',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mayhouse 680 Hotel Building, 3rd Floor',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'info@brownpaper.co.ke',
        telephone: '+254-716-286-489',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        email: 'info@brownpaper.co.ke',
        telephone: '+254-716-286-489',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
    sameAs: [
      'https://www.linkedin.com/company/brownpaper',
      'https://www.instagram.com/brownpaper',
      'https://twitter.com/brownpaper',
      'https://www.facebook.com/brownpaper',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '100+',
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Printing, Design & Branding Services',
    provider: {
      '@type': 'Organization',
      name: 'Brown Paper',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Printing Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Cards' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brochures & Flyers' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Banners & Signage' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stationery' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Design Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Design' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Graphics' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Branding Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Logo Design' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Identity' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Guidelines' } },
          ],
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}


