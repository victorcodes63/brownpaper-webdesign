'use client'

import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

const NAIROBI_LNG = 36.8219

/**
 * Slowly rotating dotted globe (screen-blended so only the dots show). Pauses off-screen.
 * Performance: cobe multiplies width/height by devicePixelRatio itself, so we pass CSS
 * pixels and cap the ratio at 1. The globe sits at 30% opacity, so extra resolution is
 * invisible but was costing a ~4500px square canvas redrawn every frame.
 */
export default function Globe({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 1)
    let size = canvas.offsetWidth
    // Start with Nairobi facing the viewer
    let phi = 4.7 - (NAIROBI_LNG * Math.PI) / 180
    let visible = true
    let raf = 0

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: size,
      height: size,
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

    // ~30 fps is plenty for a slow background rotation
    let last = 0
    const tick = (now: number) => {
      if (visible && !reduce && now - last >= 33) {
        phi += 0.0024
        globe.update({ phi })
        last = now
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting))
    io.observe(canvas)

    const ro = new ResizeObserver(() => {
      size = canvas.offsetWidth
      globe.update({ width: size, height: size })
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
