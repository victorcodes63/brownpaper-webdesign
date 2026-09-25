'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { animate, useInView } from 'motion/react'
import { Reveal, Marquee, ImageReveal } from './ui'

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setVal(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  )
}

const faces = [
  '/images/testimonials/amina.jpg',
  '/images/testimonials/david.png',
  '/images/testimonials/grace.jpg',
  '/images/testimonials/michael.jpg',
]

const tile = 'relative overflow-hidden rounded-[1.5rem] bg-chrome text-paper'

export default function Impact() {
  return (
    <section aria-label="Studio in numbers" className="px-2.5 md:px-3">
      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[repeat(2,minmax(15rem,auto))]">
        {/* Team — large */}
        <Reveal className="md:col-span-2 lg:row-span-2">
          <Link href="/about" className={`${tile} group block h-full min-h-[24rem]`}>
            <ImageReveal clarity>
              <Image
                src="/images/hero/team.jpg"
                alt="The Brown Paper team"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={90}
                className="object-cover object-[center_40%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
            </ImageReveal>
            <div className="absolute inset-0 bg-linear-to-t from-chrome/85 via-chrome/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 md:p-9">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/60">Inside Brown Paper</p>
                <p className="text-display mt-2 text-[clamp(1.75rem,2.6vw,2.6rem)] font-semibold tracking-[-0.04em]">
                  Meet the studio
                </p>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-paper text-ink transition-colors group-hover:bg-primary group-hover:text-paper">
                ↗
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Clients */}
        <Reveal delay={0.05} className="h-full">
          <div className={`${tile} flex h-full flex-col justify-between p-7`}>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/50">Clients served</p>
            <div>
              <p className="text-display text-[clamp(3.5rem,5vw,5rem)] leading-none font-semibold tracking-[-0.05em]">
                <CountUp to={100} suffix="+" />
              </p>
              <div className="mt-5 flex">
                {faces.map((f, i) => (
                  <span key={f} className="relative -ml-1.5 h-9 w-9 overflow-hidden rounded-[0.65rem] first:ml-0" style={{ zIndex: i }}>
                    <Image src={f} alt="" fill sizes="72px" className="object-cover" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Projects */}
        <Reveal delay={0.1} className="h-full">
          <div className={`${tile} flex h-full flex-col justify-between bg-primary p-7`}>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/70">Projects delivered</p>
            <div>
              <p className="text-display text-[clamp(3.5rem,5vw,5rem)] leading-none font-semibold tracking-[-0.05em]">
                <CountUp to={150} suffix="+" />
              </p>
              <p className="mt-4 max-w-[16rem] text-[14px] leading-snug text-paper/75">
                Identity, packaging, print and display since 2022.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Quote */}
        <Reveal delay={0.15} className="h-full md:col-span-2">
          <figure className={`${tile} flex h-full flex-col justify-between gap-8 p-7 md:p-9`}>
            <span
              aria-hidden
              className="font-display text-[4.5rem] leading-[0.6] font-bold text-transparent [-webkit-text-stroke:1.5px_var(--color-primary)]"
            >
              “
            </span>
            <blockquote className="text-display max-w-xl text-[clamp(1.35rem,2vw,1.9rem)] leading-[1.2] font-medium tracking-[-0.03em]">
              Fast and efficient service provider. Will do business with them again.
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-[0.7rem] bg-primary font-mono text-[12px] text-paper">
                SG
              </span>
              <span className="flex flex-col gap-0.5 font-mono text-[11px] uppercase tracking-[0.08em]">
                <span className="text-paper/90">Sarah Gachugi</span>
                <span className="text-paper/45">Precision Credit Limited</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <div className="mt-16 md:mt-24">
        <Marquee />
      </div>
    </section>
  )
}
