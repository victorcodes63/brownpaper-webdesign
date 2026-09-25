'use client'

import { ReactLenis, type LenisRef } from 'lenis/react'
import { cancelFrame, frame } from 'motion/react'
import { useEffect, useRef } from 'react'
import 'lenis/dist/lenis.css'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp)
    }

    frame.update(update, true)
    return () => cancelFrame(update)
  }, [])

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        lerp: 0.1,
        anchors: true,
        syncTouch: false,
        respectReducedMotion: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
