'use client'

import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

const NAIROBI_LNG = 36.8219

/** Slowly rotating dotted globe (screen-blended so only the dots show). Pauses off-screen. */
export default function Globe({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    let size = canvas.offsetWidth
    // Start with Nairobi facing the viewer
    let phi = 4.7 - (NAIROBI_LNG * Math.PI) / 180
    let visible = true
    let raf = 0

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: size * dpr,
      height: size * dpr,
      phi,
      theta: 0.35,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 140000,
      mapBrightness: 2.4,
      mapBaseBrightness: 0,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0, 0, 0],
      glowColor: [0.09, 0.09, 0.09],
      opacity: 1,
      markers: [],
    })

    const tick = () => {
      if (visible && !reduce) {
        phi += 0.0012
        globe.update({ phi })
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting))
    io.observe(canvas)

    const ro = new ResizeObserver(() => {
      size = canvas.offsetWidth
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
