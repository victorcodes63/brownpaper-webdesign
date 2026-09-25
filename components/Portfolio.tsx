'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Graphic Design Solutions',
    category: 'Graphic Design',
    image: '/images/indiv_services/design.jpg',
  },
  {
    title: 'Printing Services',
    category: 'Printing',
    image: '/images/indiv_services/printing.png',
  },
  {
    title: 'Packaging Design',
    category: 'Packaging',
    image: '/images/indiv_services/product_packaging.png',
  },
  {
    title: 'Display Solutions',
    category: 'Display',
    image: '/images/indiv_services/display.png',
  },
  {
    title: 'Workwear & Uniforms',
    category: 'Workwear',
    image: '/images/indiv_services/workwear.png',
  },
  {
    title: 'Promotional Items',
    category: 'Promotional Items',
    image: '/images/indiv_services/promotional items .jpg',
  },
]

const categories = ['All', 'Graphic Design', 'Printing', 'Packaging', 'Display', 'Workwear', 'Promotional Items']
const ease = [0.16, 1, 0.3, 1] as const

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="section-pad bg-mist/50">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease }}
          className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mono-label mb-4">
              <span className="text-ink/55">(BP® — 03)</span> Selected work
            </p>
            <h2 className="text-display text-4xl text-ink md:text-5xl lg:text-6xl">Our portfolio</h2>
          </div>
          <p className="max-w-xs text-base leading-relaxed text-ink/55">
            A cross-section of print, packaging, and identity work.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs tracking-tight transition-colors ${
                active === cat ? 'bg-ink text-paper' : 'bg-transparent text-ink/50 hover:text-ink'
              }`}
              style={{ borderRadius: 'var(--radius-control)' }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.25), ease }}
              className="group relative aspect-[4/5] overflow-hidden bg-ink"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                quality={80}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/20 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="text-[11px] uppercase tracking-[0.16em] text-primary/90">{project.category}</p>
                <h3 className="mt-2 text-display text-xl text-paper md:text-2xl">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/portfolio" className="btn-primary">
            View all work
          </Link>
        </div>
      </div>
    </section>
  )
}
