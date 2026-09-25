'use client'

import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { motion } from 'motion/react'
import { ease } from './home/ui'

/**
 * Giant one-line display title (md+) that scales to fill its row, with an
 * outlined "(®)"-style mark pinned to the right edge. Wraps normally on phones.
 */
export default function FitTitle({
  children,
  mark = null,
  max = 224, // px cap
  className = '',
  as: As = 'h1',
  tone = 'text-paper',
}: {
  children: ReactNode
  mark?: string | null
  max?: number
  className?: string
  as?: 'h1' | 'h2'
  tone?: string
}) {
  const wrap = useRef<HTMLDivElement>(null)
  const text = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const el = wrap.current
    const t = text.current
    if (!el || !t) return
    const fit = () => {
      if (window.innerWidth < 768) {
        el.style.removeProperty('--fit')
        return
      }
      // measure at a reference size, then scale linearly
      const ref = 100
      el.style.setProperty('--fit', `${ref}px`)
      const markW = mark ? ref * 1.55 : 0 // mark ≈ 1.55em wide incl. gap
      const w = t.scrollWidth
      const avail = el.clientWidth
      const size = Math.min(max, (avail / (w + markW)) * ref * 0.985)
      el.style.setProperty('--fit', `${size}px`)
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(el)
    document.fonts?.ready.then(fit)
    return () => ro.disconnect()
  }, [mark, max])

  return (
    <motion.div
      ref={wrap}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 1, ease, delay: 0.1 }}
      className={`relative flex w-full items-start justify-between gap-[0.15em] text-[clamp(3.25rem,13vw,6rem)] md:text-[length:var(--fit,10vw)] ${className}`}
    >
      <As className={`text-display leading-[0.84] font-semibold tracking-[-0.06em] md:whitespace-nowrap ${tone}`}>
        <span ref={text}>{children}</span>
      </As>
      {mark && (
        <span
          aria-hidden
          className="hidden shrink-0 items-center font-display text-[1em] leading-[0.84] font-extralight tracking-[-0.02em] text-transparent select-none [-webkit-text-stroke:1.5px_rgba(247,246,243,0.22)] md:flex"
        >
          (
          <span className="mx-[0.04em] flex h-[0.58em] w-[0.58em] items-center justify-center rounded-full border-[1.5px] border-paper/20 font-mono text-[0.34em] font-normal text-paper/25 [-webkit-text-stroke:0]">
            {mark}
          </span>
          )
        </span>
      )}
    </motion.div>
  )
}
