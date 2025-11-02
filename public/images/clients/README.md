# Client Logos Directory

Upload your client logo images to this directory.

## File Naming Convention
- Use lowercase with hyphens: `client-name.png` or `client-name.svg`
- Supported formats: PNG, JPG, SVG
- Recommended size: 120px - 200px wide (height will auto-scale)

## Adding Logos to the Ticker

Update the `clientLogos` array in `components/MiniClientTicker.tsx`:

```typescript
const clientLogos = [
  { name: 'Client 1', logo: '/images/clients/client1.png' },
  { name: 'Client 2', logo: '/images/clients/client2.png' },
  // Add more clients here
]
```

## Example Client Logos
- client1.png
- client2.png
- client3.png
- etc.

