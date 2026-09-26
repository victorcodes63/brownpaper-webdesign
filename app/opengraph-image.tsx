import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const alt = `${site.name}: design, printing and branding in Nairobi`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#171717',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#f7f6f3', fontSize: 22, letterSpacing: 3 }}>
          <div style={{ width: 18, height: 18, border: '3px solid #008080', borderRadius: 4 }} />
          <div style={{ width: 12, height: 12, background: '#008080', borderRadius: 999 }} />
          <span style={{ marginLeft: 8, opacity: 0.7 }}>DESIGN · PRINTING · BRANDING · PROMOTIONAL ITEMS</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#f7f6f3', fontSize: 132, fontWeight: 800, letterSpacing: -6, lineHeight: 1 }}>Brown Paper</div>
          <div style={{ width: 360, height: 6, marginTop: 18, marginLeft: 360, background: '#91785d', borderRadius: 99 }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#f7f6f3', fontSize: 30 }}>
          <span>{site.tagline}.</span>
          <span style={{ color: '#91785d' }}>Nairobi, Kenya</span>
        </div>
      </div>
    ),
    size,
  )
}
