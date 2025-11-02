import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Brown Paper | Printing, Design & Branding Agency',
    short_name: 'Brown Paper',
    description: 'Premium printing, design, and branding solutions in Kenya',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#008080',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      // Fallback to logo
      {
        src: '/logo/bp_1.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}

