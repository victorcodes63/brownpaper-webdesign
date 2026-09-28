'use client'

import { ReactLenis, useLenis, type LenisRef } from 'lenis/react'
import { cancelFrame, frame } from 'motion/react'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import 'lenis/dist/lenis.css'

/** Lenis only on fine-pointer desktop — touch devices get native scroll. */
function useDesktopSmoothScroll() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const motionOk = window.matchMedia('(prefers-reduced-motion: no-preference)')
    const sync = () => setEnabled(fine.matches && motionOk.matches)
    sync()
    fine.addEventListener('change', sync)
    motionOk.addEventListener('change', sync)
    return () => {
      fine.removeEventListener('change', sync)
      motionOk.removeEventListener('change', sync)
    }
  }, [])

  return enabled
}

function NativeScrollToTop() {
  const pathname = usePathname()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function LenisScrollToTop() {
  const pathname = usePathname()
  const lenis = useLenis()
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true })
  }, [pathname, lenis])
  return null
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const enabled = useDesktopSmoothScroll()
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    if (!enabled) return
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp)
    }
    frame.update(update, true)
    return () => cancelFrame(update)
  }, [enabled])

  if (!enabled) {
    return (
      <>
        <NativeScrollToTop />
        {children}
      </>
    )
  }

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        lerp: 0.14,
        anchors: true,
        syncTouch: false,
        respectReducedMotion: true,
      }}
    >
      <LenisScrollToTop />
      {children}
    </ReactLenis>
  )
}
