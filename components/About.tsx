'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

const foundedYear = 2022
const ease = [0.16, 1, 0.3, 1] as const

const milestones = [
  { year: '2022', label: 'Founded in Nairobi' },
  { year: '2023', label: 'Expanded studio & services' },
  { year: '2024', label: '150+ projects delivered' },
  { year: '2026', label: 'Trusted across East Africa' },
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-paper">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease }}
            className="relative aspect-[4/5] overflow-hidden bg-mist lg:col-span-5"
          >
            <Image
              src="/images/hero/team.jpg"
              alt="Brown Paper team"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-[center_35%]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, delay: 0.12, ease }}
            className="lg:col-span-7"
          >
            <p className="mono-label mb-4">
              <span className="text-ink/55">(BP® — 04)</span> About
            </p>
            <h2 className="text-display text-4xl text-ink md:text-5xl lg:text-6xl">
              Craft with commercial intent
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/60 md:text-lg">
              Since {foundedYear}, Brown Paper has helped brands across Kenya and East Africa turn ideas
              into print, packaging, and identity systems that work in the real world.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/60">
              We combine studio craft with production discipline — so every piece looks considered and
              ships on time.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-4">
              {milestones.map((item) => (
                <div key={`${item.year}-${item.label}`}>
                  <p className="text-display text-2xl text-primary">{item.year}</p>
                  <p className="mt-1 text-xs leading-snug text-ink/50">{item.label}</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-ghost mt-10 text-ink">
              Our story <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
