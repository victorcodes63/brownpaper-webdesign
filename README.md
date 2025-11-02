# Brown Paper Website

A modern, animated website for Brown Paper - a printing, design, and branding agency based in Kenya.

## 🚀 Live Site

Deployed on Vercel: [https://brownpaper.co.ke](https://brownpaper.co.ke)

## Features

- 🎨 **Framer Motion Animations** - Smooth, professional animations throughout
- 🎯 **Conversion-Focused Design** - Modern layout designed to convert visitors to clients
- 🎨 **Brand Colors** - Teal (#008080) and Taupe (#91785d) integrated throughout
- 📱 **Fully Responsive** - Works beautifully on all devices
- ⚡ **Next.js 14** - Built with the latest Next.js App Router
- 🔷 **TypeScript** - Type-safe development
- 🔍 **SEO Optimized** - Complete metadata, structured data, sitemap, and social tags
- 📊 **Performance** - Optimized images and code splitting

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with font configuration
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles and Tailwind config
├── components/
│   ├── Navigation.tsx  # Fixed navigation with scroll effects
│   ├── Hero.tsx        # Animated hero section
│   ├── Services.tsx    # Services showcase with hover cards
│   ├── Portfolio.tsx   # Portfolio gallery with animations
│   ├── About.tsx       # About section with stats
│   ├── Contact.tsx     # Contact form with animations
│   └── Footer.tsx      # Footer component
└── package.json
```

## Design Highlights

- **Thin Sans-Serif Typography**: Inter font with light weights (100-700)
- **Smooth Scroll Animations**: Content reveals as you scroll
- **Interactive Elements**: Hover effects and micro-interactions
- **Gradient Accents**: Beautiful color transitions using brand colors
- **Glassmorphism Effects**: Modern blur effects in navigation

## Customization

- Update brand colors in `tailwind.config.ts`
- Modify content in individual component files
- Adjust animations in component files using Framer Motion props

## Deployment

This project is configured for deployment on Vercel:

1. **Automatic Deployment**: Connected to GitHub repository
   - Repository: https://github.com/victorcodes63/brownpaper-webdesign
   - Main branch deploys automatically on push

2. **Manual Deployment**:
   ```bash
   npm install -g vercel
   vercel --prod
   ```

3. **Environment Variables**: If needed, add in Vercel dashboard:
   - No environment variables required for basic setup

## SEO & Metadata

- ✅ Comprehensive metadata for all pages
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Structured data (Schema.org)
- ✅ Sitemap (auto-generated at `/sitemap.xml`)
- ✅ Robots.txt (auto-generated at `/robots.txt`)
- ✅ PWA manifest configured

## Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services pages
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── layout.tsx         # Root layout with SEO
│   └── sitemap.ts         # Dynamic sitemap
├── components/            # React components
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   └── ...
├── public/               # Static assets
│   ├── images/
│   └── logo/
└── scripts/              # Utility scripts
```

## Deployment

Deploy to Vercel for the best Next.js experience:

```bash
npm run build
```

Then deploy to Vercel or your preferred hosting platform.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Inter Font (Google Fonts)


