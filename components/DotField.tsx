'use client'

import { useEffect, useRef } from 'react'

/**
 * Faint animated dot field: dots trace slowly drifting wave contours
 * (sum-of-sines field), plus sparse speckle. Pauses off-screen; static
 * for reduced-motion users.
 */
export default function DotField({
  className = '',
  spacing = 9,
  color = '255,255,255',
  strength = 0.22,
}: {
  className?: string
  spacing?: number
  color?: string
  strength?: number
}) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0
    let pts: { x: number; y: number; s: number }[] = []
    let t = Math.random() * 100
    let raf = 0
    let visible = true
    let last = 0

    const build = () => {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      pts = []
      for (let y = 0; y < h; y += spacing)
        for (let x = (y / spacing) % 2 ? spacing / 2 : 0; x < w; x += spacing)
          pts.push({ x, y, s: Math.random() })
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        const nx = p.x / 260
        const ny = p.y / 260
        // flowing field
        const f =
          Math.sin(nx * 1.3 + t * 0.35) +
          Math.sin(ny * 1.7 - t * 0.25 + Math.sin(nx * 0.6)) +
          Math.sin((nx + ny) * 0.8 + t * 0.15)
        // distance to nearest contour line
        const band = Math.abs(((f * 2.2) % 1 + 1) % 1 - 0.5)
        let a = band < 0.09 ? (0.09 - band) / 0.09 : 0
        a *= 0.55 + 0.45 * Math.sin(p.s * 6.28 + t)
        if (p.s > 0.985) a = Math.max(a, 0.35) // sparse speckle
        if (a < 0.04) continue
        ctx.fillStyle = `rgba(${color},${(a * strength).toFixed(3)})`
        ctx.fillRect(p.x, p.y, 1.3, 1.3)
      }
    }

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop)
      if (!visible || now - last < 42) return // ~24fps is plenty
      last = now
      t += 0.02
      draw()
    }

    build()
    draw()
    if (!reduce) raf = requestAnimationFrame(loop)

    const ro = new ResizeObserver(() => {
      build()
      draw()
    })
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting))
    io.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [spacing, color, strength])

  return <canvas ref={ref} aria-hidden className={`pointer-events-none h-full w-full ${className}`} />
}
