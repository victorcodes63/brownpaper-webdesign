'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const sautiAudioClientLogos = [
  { name: 'Exinity', logo: '/logo/sauti_audio_clients/exinity.png' },
  { name: 'Ikigai', logo: '/logo/sauti_audio_clients/ikigai.png' },
  { name: 'Konza', logo: '/logo/sauti_audio_clients/Konza.png' },
  { name: 'MOH', logo: '/logo/sauti_audio_clients/moh.png' },
  { name: 'Simon Page', logo: '/logo/sauti_audio_clients/simon_page.png' },
  { name: 'Tatu', logo: '/logo/sauti_audio_clients/tatu.png' },
  { name: 'JKUAT', logo: '/logo/sauti_audio_clients/jkuat.png' },
]

// Duplicate for seamless loop
const duplicatedLogos = [...sautiAudioClientLogos, ...sautiAudioClientLogos]

export default function SautiAudioClientTicker() {
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
              x: [0, -(120 + 32) * sautiAudioClientLogos.length], // Move by width of one set (logo width + gap) * number of logos
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

