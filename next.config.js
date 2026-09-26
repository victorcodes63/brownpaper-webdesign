/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets a verification build run beside `next dev` without sharing .next
  distDir: process.env.NEXT_DIST_DIR || '.next',
  turbopack: {
    root: __dirname,
  },
  images: {
    // Prefer sharper encodes for large service/hero frames
    qualities: [75, 85, 90, 95, 100],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
}

// 301s from the old WordPress site's URLs (Route to 10, item 033)
nextConfig.redirects = async () => [
  { source: '/who-we-are', destination: '/about', permanent: true },
  { source: '/sdg', destination: '/about', permanent: true },
  { source: '/clean-energy-conaustralia-africa', destination: '/about', permanent: true },
  { source: '/contact-us', destination: '/contact', permanent: true },
  { source: '/projects', destination: '/portfolio', permanent: true },
  { source: '/projects/:path*', destination: '/portfolio', permanent: true },
  { source: '/design', destination: '/services/graphic-design', permanent: true },
  { source: '/printing', destination: '/services/printing-services', permanent: true },
  { source: '/packaging', destination: '/services/packaging-design', permanent: true },
  { source: '/display', destination: '/services/display', permanent: true },
  { source: '/workwear', destination: '/services/workwear', permanent: true },
  { source: '/promotional-items', destination: '/services/promotional-items', permanent: true },
  { source: '/office-stationery', destination: '/services/office-stationery', permanent: true },
  { source: '/fun-times', destination: '/services/fun-times', permanent: true },
  { source: '/blog', destination: '/', permanent: true },
  { source: '/blog/:path*', destination: '/', permanent: true },
  { source: '/my-account', destination: '/contact', permanent: true },
  { source: '/shop', destination: '/services', permanent: true },
  { source: '/product/:path*', destination: '/services', permanent: true },
  { source: '/product-category/:path*', destination: '/services', permanent: true },
]

module.exports = nextConfig
