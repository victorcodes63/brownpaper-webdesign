'use client'

import { ImageReveal } from './home/ui'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

const statement =
  "A brand holds together when the logo, the packaging and the print all tell the same story. That is what we build."

function Word({
  children,
  progress,
  range,
}: {
  children: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.16, 1])
  return (
    <motion.span style={{ opacity }} className="inline-block indent-0">
      {children}
    </motion.span>
  )
}

export default function Philosophy() {
  const textRef = useRef<HTMLParagraphElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['start 0.85', 'end 0.45'],
  })

  const words = statement.split(' ')

  return (
    <section className="relative overflow-hidden bg-chrome px-6 pt-16 pb-24 text-paper md:px-10 md:pt-20 md:pb-32 lg:px-14 lg:pt-24 lg:pb-36">
      {/* faint dot field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 0.8px, transparent 0.8px)',
          backgroundSize: '14px 14px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 30% 55%, #000 10%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 30% 55%, #000 10%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto grid max-w-[110rem] grid-cols-1 gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col gap-1.5 font-mono text-[12px] uppercase tracking-[0.08em]"
        >
          <span className="flex items-center gap-2 text-paper/45">
            <span className="flex items-center gap-1" aria-hidden>
              <span className="h-3 w-3 rounded-[3px] border-[1.5px] border-primary" />
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
            (BP® 02)
          </span>
          <span className="text-paper/90">How we think about brands</span>
        </motion.div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
            className="relative aspect-[4/5] w-full max-w-sm shrink-0 overflow-hidden rounded-[1.25rem] bg-ink lg:w-[clamp(18rem,24vw,26rem)] lg:max-w-none"
          >
            <ImageReveal>
<Image
              src="/images/services/branding.jpg"
              alt="Designer reviewing colour swatches for a brand identity"
              fill
              sizes="(min-width: 1024px) 26rem, 90vw"
              className="object-cover object-[45%_center]"
            />
</ImageReveal>
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-chrome/40 via-transparent to-transparent" />
          </motion.div>

          {/* Statement — overlaps the card on desktop */}
          <div className="relative z-10 lg:ml-12 lg:pt-1 xl:ml-16">
            <span
              aria-hidden
              className="absolute top-0 left-0 font-display text-[clamp(4.5rem,6.5vw,7rem)] leading-[0.75] font-bold text-transparent select-none [-webkit-text-stroke:1.5px_var(--color-primary)]"
            >
              “
            </span>

            <p
              ref={textRef}
              className="font-display max-w-[23ch] indent-[clamp(4rem,6vw,6.5rem)] text-[clamp(1.9rem,3.5vw,3.6rem)] leading-[1.08] font-semibold tracking-[-0.045em] text-paper"
            >
              {reduce
                ? statement
                : words.map((w, i) => (
                    <span key={i}>
                      <Word progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
                        {w}
                      </Word>{' '}
                    </span>
                  ))}
            </p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="mt-10 max-w-lg text-[15px] leading-relaxed text-paper/50 md:text-[17px]"
            >
              Every project starts with where your brand will be seen and handled. The colours, type and materials
              follow from that.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="mt-12 flex items-center gap-5"
            >
              {/* folded-paper mark */}
              <svg viewBox="0 0 44 44" className="h-11 w-11 text-primary" fill="none" aria-hidden>
                <path d="M5 5h24l10 10v24H5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M29 5v10h10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M12 30h14M12 24h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="flex flex-col gap-1 font-mono text-[12px] uppercase tracking-[0.08em]">
                <span className="text-paper/90">Brown Paper Studio</span>
                <span className="text-paper/40">Design &amp; print · Nairobi</span>
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
