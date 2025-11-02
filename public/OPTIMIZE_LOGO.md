# Quick Logo Optimization

The site is currently using `/logo/bp_1.png` as the favicon. To optimize it properly:

## Option 1: Use Online Tool (Easiest)

1. Go to [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload `public/logo/bp_1.png`
3. Configure settings:
   - iOS: Use the logo as-is
   - Android: Use the logo
   - Windows Metro: Teal (#008080) tile color
   - Safari: Use the logo
4. Download the generated files
5. Place all files in `/public` directory

## Option 2: Manual Optimization (Using ImageMagick or similar)

If you have ImageMagick installed:

```bash
# Create favicon.ico from logo
convert public/logo/bp_1.png -resize 32x32 public/favicon.ico

# Create PNG sizes
convert public/logo/bp_1.png -resize 16x16 public/favicon-16x16.png
convert public/logo/bp_1.png -resize 32x32 public/favicon-32x32.png
convert public/logo/bp_1.png -resize 180x180 public/apple-touch-icon.png
convert public/logo/bp_1.png -resize 192x192 public/icon-192x192.png
convert public/logo/bp_1.png -resize 512x512 public/icon-512x512.png
```

## Current Setup

The site is currently using `bp_1.png` directly. This works but may not be optimally sized for all contexts. The logo will be automatically optimized by Next.js Image component where used, but for favicons, it's best to have properly sized versions.

## Testing

After adding optimized files, test:
- Browser tab icon
- Mobile home screen icon
- PWA installation

The current setup will work for basic favicon display using the existing logo.

