# Brown Paper Website

A modern, animated website for Brown Paper - a printing, design, and branding agency based in Kenya.

## Features

- 🎨 **Framer Motion Animations** - Smooth, professional animations throughout
- 🎯 **Conversion-Focused Design** - Modern layout designed to convert visitors to clients
- 🎨 **Brand Colors** - Teal (#008080) and Taupe (#91785d) integrated throughout
- 📱 **Fully Responsive** - Works beautifully on all devices
- ⚡ **Next.js 14** - Built with the latest Next.js App Router
- 🔷 **TypeScript** - Type-safe development

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


