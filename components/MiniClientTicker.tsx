'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Client logo images
const clientLogos = [
  { name: 'Baraka', logo: '/images/clients/baraka.png' },
  { name: 'Bar Next Door', logo: '/images/clients/barnextdoor.jpg' },
  { name: 'Civil Registration Services', logo: '/images/clients/civilregservices.jpg' },
  { name: 'Crown Dental', logo: '/images/clients/crowndent.png' },
  { name: 'Dida', logo: '/images/clients/Dida-150x150.png' },
  { name: 'JAZA', logo: '/images/clients/JAZA-150x150.png' },
  { name: 'KAAA', logo: '/images/clients/KAAA-150x150.png' },
  { name: 'KAWI', logo: '/images/clients/KAWI-150x150.png' },
  { name: 'Logo Dark', logo: '/images/clients/logo_dark_ubxaCll.png' },
]

// Duplicate for seamless loop
const duplicatedLogos = [...clientLogos, ...clientLogos]

export default function MiniClientTicker() {
  return (
    <div className="relative w-full overflow-hidden mt-8 pt-8 border-t border-gray-200 bg-white">
      <p className="text-xs font-light text-gray-500 mb-4 text-center">Trusted by leading brands</p>
      <motion.div
        className="flex gap-8 items-center whitespace-nowrap"
        animate={{
          x: [0, -(120 + 32) * clientLogos.length], // Move by width of one set (logo width + gap) * number of logos
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedLogos.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            style={{ width: '120px', height: '60px' }}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={60}
              className="w-auto h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
              onError={(e) => {
                // Fallback if image doesn't exist
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>
        ))}
      </motion.div>
      
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-8 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-8 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  )
}

