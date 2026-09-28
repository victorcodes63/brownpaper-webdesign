'use client'

import { useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'

/**
 * Subscribe to scroll in a Lenis-aware way.
 * When Lenis is active, listen to its `scroll` event; otherwise use window scroll.
 * Always also listens to resize.
 */
export function useScrollSubscription(onScroll: () => void, enabled = true) {
  const lenis = useLenis()
  const cb = useRef(onScroll)
  cb.current = onScroll

  useEffect(() => {
    if (!enabled) return

    let raf = 0
    const tick = () => {
      raf = 0
      cb.current()
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    schedule()

    if (lenis) {
      lenis.on('scroll', schedule)
      window.addEventListener('resize', schedule)
      return () => {
        lenis.off('scroll', schedule)
        window.removeEventListener('resize', schedule)
        if (raf) cancelAnimationFrame(raf)
      }
    }

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [lenis, enabled])
}
