'use client'

import Link from 'next/link'
import { motion, useInView, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { Children, isValidElement, useEffect, useRef, useState, type ReactNode } from 'react'

export const ease = [0.16, 1, 0.3, 1] as const

export const pad = (n: number) => String(n).padStart(3, '0')

/** (BP® — 0X) / TITLE label with the square + dot glyph */
export function SectionLabel({ code, title, dark = false }: { code: string; title: string; dark?: boolean }) {
  return (
    <p className="flex flex-col gap-1.5 font-mono text-[12px] uppercase tracking-[0.08em]">
      <span className={`flex items-center gap-2 ${dark ? 'text-paper/45' : 'text-ink/40'}`}>
        <span className="flex items-center gap-1" aria-hidden>
          <span className="h-3 w-3 rounded-[3px] border-[1.5px] border-primary" />
          <span className="h-2 w-2 rounded-full bg-primary" />
        </span>
        (BP® {code})
      </span>
      <span className={dark ? 'text-paper/90' : 'text-ink/85'}>{title}</span>
    </p>
  )
}

export function Reveal({
  children,
  delay = 0,
  className,
  x = 0,
  y = 24,
}: {
  children: ReactNode
  delay?: number
  className?: string
  x?: number
  y?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Label that rolls to a fresh copy on hover (parent needs `group`). */
export function RollText({ children }: { children: string }) {
  return (
    <span className="relative inline-flex overflow-hidden">
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"
      >
        {children}
      </span>
    </span>
  )
}

/** ↗ that flies out top-right and is replaced from bottom-left on hover. */
export function ArrowSwap() {
  return (
    <span aria-hidden className="relative inline-flex h-[1em] w-[1em] overflow-hidden">
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-full group-hover:-translate-y-full">
        ↗
      </span>
      <span className="absolute inset-0 flex -translate-x-full translate-y-full items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0">
        ↗
      </span>
    </span>
  )
}

export function PillLink({
  href,
  children,
  dark = false,
}: {
  href: string
  children: string
  dark?: boolean
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-10 rounded-2xl px-7 py-4 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors duration-500 ${
        dark
          ? 'border border-paper/10 bg-paper/8 text-paper hover:bg-paper/15'
          : 'bg-ink text-paper hover:bg-primary'
      }`}
    >
      <RollText>{children}</RollText>
      <ArrowSwap />
    </Link>
  )
}

/* ─────────────────────────── text reveals ─────────────────────────── */

const MT = { h1: motion.h1, h2: motion.h2, h3: motion.h3, p: motion.p, div: motion.div, span: motion.span }
type Tag = keyof typeof MT

/**
 * Headline: each word rises from behind a mask as it enters view.
 * Strings are split into words; elements (e.g. <span className="text-kraft-fill">) move as one word;
 * <br /> is kept.
 */
export function WordReveal({
  children,
  as: As = 'h2',
  className,
  delay = 0,
  stagger = 0.05,
}: {
  children: ReactNode
  as?: Tag
  className?: string
  delay?: number
  stagger?: number
}) {
  const reduce = useReducedMotion()
  const parts: ReactNode[] = []
  Children.toArray(children).forEach((c) => {
    if (typeof c === 'string' || typeof c === 'number') {
      String(c)
        .split(/(\s+)/)
        .forEach((w) => w && parts.push(w))
    } else parts.push(c)
  })
  let i = 0
  const M = MT[As]
  return (
    <M
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
      >
        {parts.map((p, k) => {
          if (typeof p === 'string' && /^\s+$/.test(p)) return ' '
          if (isValidElement(p) && p.type === 'br') return <br key={k} />
          const idx = i++
          return (
            <span key={k} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
              <motion.span
                className="inline-block"
                variants={
                  reduce
                    ? undefined
                    : {
                        hidden: { y: '105%' },
                        show: { y: '0%', transition: { duration: 0.9, ease } },
                      }
                }
                data-i={idx}
              >
                {p}
              </motion.span>
            </span>
          )
        })}
    </M>
  )
}

/**
 * Body copy: characters fade up one after another (Quantum Flux style).
 * Words stay unbroken; non-string children fade in as a unit.
 */
export function CharReveal({
  children,
  as: As = 'p',
  className,
  delay = 0,
}: {
  children: ReactNode
  as?: Tag
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  if (reduce) return <As className={className}>{children}</As>
  const char = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  }
  const nodes: ReactNode[] = []
  Children.toArray(children).forEach((c, ci) => {
    if (typeof c === 'string' || typeof c === 'number') {
      String(c)
        .split(/(\s+)/)
        .forEach((w, wi) => {
          if (!w) return
          if (/^\s+$/.test(w)) return nodes.push(' ')
          nodes.push(
            <span key={`${ci}-${wi}`} className="inline-block whitespace-nowrap">
              {[...w].map((ch, k) => (
                <motion.span key={k} className="inline-block" variants={char}>
                  {ch}
                </motion.span>
              ))}
            </span>,
          )
        })
    } else {
      nodes.push(
        <motion.span key={`e-${ci}`} className="inline-block" variants={char}>
          {c}
        </motion.span>,
      )
    }
  })
  const M = MT[As]
  return (
    <M
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        transition={{ staggerChildren: 0.012, delayChildren: delay }}
      >
        {nodes}
    </M>
  )
}

/* ─────────────────────────── media reveals ─────────────────────────── */

/**
 * Wraps a `fill` <Image>: the layer wipes open from the bottom, then the
 * picture settles from a slight zoom and keeps a gentle scroll parallax.
 * Use `clarity` on large hero/service frames to avoid over-softening.
 */
export function ImageReveal({
  children,
  className = '',
  clarity = false,
}: {
  children: ReactNode
  className?: string
  /** Less zoom/inset so photos stay sharper on large frames */
  clarity?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const seen = useInView(ref, { once: true, margin: '-60px' })
  const [onScreenAtLoad, setOnScreenAtLoad] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], clarity ? ['-2%', '2%'] : ['-4%', '4%'])
  const [scrolledIn, setScrolledIn] = useState(false)
  // Fallback trigger driven by scroll position (not IntersectionObserver).
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (!scrolledIn && v > 0.06 && v < 1) setScrolledIn(true)
  })

  // Images already on screen when the page loads reveal immediately.
  useEffect(() => {
    const r = ref.current?.getBoundingClientRect()
    if (r && r.top < window.innerHeight && r.bottom > 0) {
      const id = requestAnimationFrame(() => setOnScreenAtLoad(true))
      return () => cancelAnimationFrame(id)
    }
  }, [])

  const show = seen || onScreenAtLoad || scrolledIn
  const insetClass = clarity ? 'absolute -inset-[1.5%]' : 'absolute -inset-[5%]'
  const fromScale = clarity ? 1.06 : 1.25

  if (reduce) return <div className={`absolute inset-0 ${className}`}>{children}</div>
  return (
    // The observed wrapper is never clipped, so it always registers as in view.
    <div ref={ref} className={`absolute inset-0 ${className}`}>
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        animate={show ? { clipPath: 'inset(0% 0% 0% 0%)' } : undefined}
        transition={{ duration: 1.1, ease }}
      >
        <motion.div
          className={insetClass}
          initial={{ scale: fromScale }}
          animate={show ? { scale: 1 } : undefined}
          transition={{ duration: 1.6, ease }}
          style={{ y }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

/** Card that grows from 0.9 → 1 as it scrolls into view. */
export function ScrollScale({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.35'] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const radius = useTransform(scrollYProgress, [0, 1], [48, 28])
  return (
    <motion.div ref={ref} className={className} style={reduce ? undefined : { scale, borderRadius: radius }}>
      {children}
    </motion.div>
  )
}

export const principles = [
  'Bringing your ideas to life',
  'Fast on-demand printing',
  'Tailor-made for every brief',
  'Printed with clean energy',
  'Made in Nairobi',
]

export function Marquee({ items = principles, dark = false }: { items?: string[]; dark?: boolean }) {
  const reduce = useReducedMotion()
  const row = [...items, ...items]
  return (
    <div className={`overflow-hidden border-y py-6 md:py-8 ${dark ? 'border-paper/10' : 'border-ink/8'}`}>
      <motion.div
        className="flex w-max items-center gap-10 md:gap-14"
        animate={reduce ? undefined : { x: ['0%', '-50%'] }}
        transition={reduce ? undefined : { duration: 40, ease: 'linear', repeat: Infinity }}
      >
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 md:gap-14">
            <span
              className={`text-display text-[clamp(1.75rem,3.2vw,3rem)] font-semibold tracking-[-0.04em] whitespace-nowrap ${
                dark ? 'text-paper' : 'text-ink'
              }`}
            >
              {t}
            </span>
            <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
