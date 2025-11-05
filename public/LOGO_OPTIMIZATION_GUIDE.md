# Logo Optimization Guide for Brown Paper

This guide explains the optimized logo files you need to create for the website.

## Required Logo Files

Place all logo files in the `/public` directory.

### 1. Favicon Files
- **favicon.ico** - 16x16, 32x32, 48x48 (multi-size ICO file)
- **favicon-16x16.png** - 16x16 PNG
- **favicon-32x32.png** - 32x32 PNG
- **icon.svg** - SVG version (scalable, preferred for modern browsers)

### 2. Apple Touch Icon
- **apple-touch-icon.png** - 180x180 PNG (for iOS devices)

### 3. PWA Icons (for Progressive Web App)
- **icon-192x192.png** - 192x192 PNG
- **icon-512x512.png** - 512x512 PNG

### 4. Open Graph Image (for social media sharing)
- **og-image.jpg** - 1200x630 JPG (Facebook, LinkedIn, Twitter)
  - Should include Brown Paper branding
  - Optimized file size (under 300KB recommended)

## Logo Specifications

### Source Logo
The main logo file is located at: `/public/logo/bp_1.png`

### Recommended Formats & Sizes

| File | Size | Format | Purpose |
|------|------|--------|---------|
| favicon.ico | 16x16, 32x32, 48x48 | ICO | Browser tab icon |
| icon.svg | Scalable | SVG | Modern browsers, best quality |
| favicon-16x16.png | 16x16 | PNG | Fallback favicon |
| favicon-32x32.png | 32x32 | PNG | High-DPI displays |
| apple-touch-icon.png | 180x180 | PNG | iOS home screen |
| icon-192x192.png | 192x192 | PNG | Android, PWA |
| icon-512x512.png | 512x512 | PNG | Android, PWA |
| og-image.jpg | 1200x630 | JPG | Social media preview |

## Optimization Tips

1. **Use proper image optimization tools:**
   - [Squoosh](https://squoosh.app/) - For PNG/JPG compression
   - [RealFaviconGenerator](https://realfavicongenerator.net/) - For generating all favicon sizes
   - [SVGOMG](https://jakearchibald.github.io/svgomg/) - For SVG optimization

2. **For ICO files:**
   - Use [Favicon.io](https://favicon.io/) or [RealFaviconGenerator](https://realfavicongenerator.net/)

3. **For OG Image:**
   - Create a branded image with Brown Paper logo and tagline
   - Ensure text is readable at small sizes
   - Use high contrast colors

4. **File Size Recommendations:**
   - favicon.ico: < 10KB
   - PNG files: < 50KB each
   - og-image.jpg: < 300KB
   - SVG: < 5KB

## Current Logo Usage

- **Navigation Bar**: `/logo/bp_1.png` (110x44px)
- **Footer**: `/logo/bp_1.png` (140x56px, inverted)
- **Structured Data**: `/logo/bp_1.png` (referenced in schema.org)

## Quick Setup

1. Start with your high-resolution logo (recommended: 1024x1024 or larger)
2. Use [RealFaviconGenerator](https://realfavicongenerator.net/) to generate all favicon sizes
3. Create the OG image using a design tool (1200x630px)
4. Place all files in the `/public` directory
5. Test using browser dev tools and [Favicon Checker](https://realfavicongenerator.net/favicon_checker)

## Testing

After adding the files, test:
1. Browser favicon appears in tab
2. Mobile home screen icon (iOS & Android)
3. Social media sharing preview (use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/))
4. PWA installation (if enabled)



