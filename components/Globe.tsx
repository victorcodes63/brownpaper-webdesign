'use client'

import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

const NAIROBI_LNG = 36.8219
const NAIROBI_LAT = -1.2921

/** Slowly rotating dotted globe. Pauses off-screen. */
export default function Globe({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let size = Math.max(canvas.offsetWidth, 1)
    // Start with Nairobi facing the viewer
    let phi = 4.7 - (NAIROBI_LNG * Math.PI) / 180
    let visible = true
    let raf = 0

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: size * dpr,
      height: size * dpr,
      phi,
      theta: 0.28,
      dark: 1,
      diffuse: 0.85,
      mapSamples: 160000,
      mapBrightness: 12,
      mapBaseBrightness: 0.05,
      baseColor: [0.75, 0.75, 0.75],
      markerColor: [0.2, 0.85, 0.75],
      // Soft limb — bright enough to read the sphere, not a white streak
      glowColor: [0.35, 0.35, 0.35],
      opacity: 1,
      markers: [{ location: [NAIROBI_LAT, NAIROBI_LNG], size: 0.08 }],
    })

    const tick = () => {
      if (visible && !reduce) {
        phi += 0.0012
        globe.update({ phi })
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), {
      rootMargin: '20% 0px',
    })
    io.observe(canvas)

    const ro = new ResizeObserver(() => {
      size = Math.max(canvas.offsetWidth, 1)
      globe.update({ width: size * dpr, height: size * dpr })
    })
    ro.observe(canvas)

    canvas.style.opacity = '1'

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      ro.disconnect()
      globe.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`aspect-square w-full opacity-0 mix-blend-screen transition-opacity duration-1000 ${className}`}
    />
  )
}
