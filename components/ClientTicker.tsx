'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Image from 'next/image'

const clientLogos = [
  { name: 'Eagle HR Consultants', logo: '/images/clients/logo_dark_ubxaCll.png' },
  { name: 'Kengen', logo: '/images/clients/Kengen Logo.png' },
  { name: 'KIPPRA', logo: '/images/clients/KIPPRA-LOGO-.webp' },
  { name: 'Nation Media Group', logo: '/images/clients/Nation Media Group Logo.png' },
  { name: 'Baraka', logo: '/images/clients/baraka.png' },
  { name: 'Ikigai', logo: '/images/clients/Ikigai Logo Black.png' },
  { name: 'Verto', logo: '/images/clients/verto.svg' },
]

const duplicatedLogos = [...clientLogos, ...clientLogos]
const ease = [0.16, 1, 0.3, 1] as const

export default function ClientTicker() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="w-full bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-8 md:px-12 lg:px-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6 text-center text-[11px] uppercase tracking-[0.2em] text-ink/55"
        >
          Trusted by leading organizations
        </motion.p>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center gap-12 whitespace-nowrap md:gap-16"
            animate={{ x: [0, -(132) * clientLogos.length] }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          >
            {duplicatedLogos.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="relative h-10 w-[110px] shrink-0 opacity-50 grayscale transition-opacity hover:opacity-90 hover:grayscale-0"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="110px"
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-paper to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-paper to-transparent" />
        </div>
      </div>
    </div>
  )
}
