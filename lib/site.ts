/**
 * Single source of truth for Brown Paper's facts (Route to 10, item 008).
 * Every page, the metadata, structured data and the contact form read from here.
 * Items marked CONFIRM are waiting on Brown Paper (see client request list).
 */
export const site = {
  name: 'Brown Paper',
  legalName: 'Brown Paper Enterprises Ltd', // CONFIRM (B6)
  url: 'https://brownpaper.co.ke',
  tagline: 'Bringing your ideas to life',
  description:
    'Design, printing, branding and promotional items for brands and events. A Nairobi studio producing business stationery, packaging, displays and workwear.',

  email: 'info@bpe.co.ke', // CONFIRM (B6): metadata previously used info@brownpaper.co.ke
  phone: '+254 716 286 489',
  phoneHref: 'tel:+254716286489',
  whatsapp: '254716286489', // CONFIRM: is this number on WhatsApp Business?

  address: {
    building: 'Mayhouse 680 Hotel Building',
    floor: '3rd Floor',
    street: '', // CONFIRM (B7): road
    area: '', // CONFIRM (B7): area/estate
    city: 'Nairobi',
    postalCode: '', // CONFIRM (B7)
    country: 'KE',
    mapsUrl: 'https://maps.app.goo.gl/oqN31Wxp6caDzvmD6',
    short: 'Mayhouse 680 Hotel Bldg, 3rd Floor, Nairobi',
  },

  hours: [
    { day: 'Monday to Friday', time: '8:00 AM to 6:00 PM', schema: 'Mo-Fr 08:00-18:00' },
    { day: 'Saturday', time: '9:00 AM to 4:00 PM', schema: 'Sa 09:00-16:00' },
    { day: 'Sunday', time: 'Closed', schema: '' },
  ],

  foundedYear: 2022, // CONFIRM (B5): old metadata said 2018
  stats: {
    clients: 100, // CONFIRM (B8)
    projects: 150, // CONFIRM (B8)
    awards: 8, // CONFIRM (B8)
  },

  socials: [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/brownpaper' }, // CONFIRM (B17)
    { name: 'Instagram', href: 'https://instagram.com/brownpaperltd' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@brownpaperenterprisesltd' },
  ],

  responseTime: 'within 24 hours on business days',
} as const

export const whatsappLink = (message = 'Hi Brown Paper, I would like a quote for ') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`

export const yearsInBusiness = () => Math.max(1, new Date().getFullYear() - site.foundedYear)
