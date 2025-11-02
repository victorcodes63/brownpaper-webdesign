'use client'

import { motion, useInView } from 'framer-motion'
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

// Duplicate for seamless loop
const duplicatedLogos = [...clientLogos, ...clientLogos]

export default function ClientTicker() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="relative w-full bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center py-3 px-6"
        >
          <p className="text-xs font-light text-gray-500 uppercase tracking-wider">
            Trusted by Leading Organizations
          </p>
        </motion.div>

        {/* Ticker */}
        <div className="relative w-full overflow-hidden py-2">
        <motion.div
          className="flex gap-8 md:gap-12 items-center whitespace-nowrap"
          animate={{
            x: [0, -(120 + 32) * clientLogos.length], // Move by width of one set (logo width + gap) * number of logos
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
        {duplicatedLogos.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            style={{ width: '120px', height: '50px' }}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition-all"
              style={{ 
                width: '120px', 
                height: '50px', 
                objectFit: 'contain',
                maxWidth: '120px',
                maxHeight: '50px'
              }}
              onError={(e) => {
                // Fallback if image doesn't exist
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>
        ))}
      </motion.div>
        </div>
      </div>
    </div>
  )
}


