'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SautiAudioClientTicker from '@/components/SautiAudioClientTicker'

// SVG Icon for Audio Events
const AudioIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 flex-shrink-0">
    <path
      d="M12 2V22M8 6V18M16 6V18M4 10V14M20 10V14"
      stroke="#f69001"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2" fill="#f69001" fillOpacity="0.3" />
  </svg>
)

const stats = [
  { value: '50+', label: 'Events' },
  { value: '10+', label: 'Brands' },
  { value: '20+', label: 'Cities' },
]

const experiencePillars = [
  {
    title: 'Signature Sound Design',
    description:
      'Audiophile-grade PA systems, custom stage plots, and smart mixing ensure clarity for conferences, concerts, and hybrid experiences.',
  },
  {
    title: 'Immersive Visuals',
    description:
      'LED walls, intelligent lighting, scenic builds, and content direction bring stories to life with cinematic precision.',
  },
  {
    title: 'End-to-End Production',
    description:
      'Producers, technical directors, and on-site crews manage every detail—from rehearsals to show-call—to guarantee seamless execution.',
  },
]

const services = [
  {
    title: 'Event Gear',
    description: 'Complete audio, lighting, and stage equipment solutions for events of all sizes.',
    href: '/sauti-audio-events/event-gear',
    icon: '🎵',
  },
  {
    title: 'Media Production',
    description: 'Professional visual documentation and live streaming services for your events.',
    href: '/sauti-audio-events/photography-videography',
    icon: '📸',
  },
  {
    title: 'Event Branding',
    description: 'Custom branding solutions that make your events visually memorable.',
    href: '/sauti-audio-events/event-branding',
    icon: '🎨',
  },
  {
    title: 'Instrumentalists',
    description: 'Talented musicians and performers to elevate your event experience.',
    href: '/sauti-audio-events/instrumentalists',
    icon: '🎹',
  },
  {
    title: 'Event Planning & Management',
    description: 'End-to-end event planning and management services for seamless execution.',
    href: '/sauti-audio-events/event-planning',
    icon: '📅',
  },
]

export default function SautiAudioEventsPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(heroScrollProgress, [0, 1], [1, 0])

  return (
    <main className="relative overflow-hidden min-h-screen">
      <Navigation customLogo="/logo/sauti_audio_logo.png" />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-16 px-6 md:px-12 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 30%, rgba(246, 144, 1, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(1, 1, 1, 0.15) 0%, transparent 50%)
              `
            }}
          />
        </motion.div>

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -100, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <AudioIcon />
            </motion.div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6">
              Sauti <span className="sauti-gradient-text">Audio Events</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Creating unforgettable and immersive audio experiences through expertly curated events, blending cutting-edge sound technology with creativity.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow-lg"
                >
                  <p className="text-4xl md:text-5xl font-light text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-sm uppercase tracking-[0.35em] text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Sauti Audio */}
      <section className="pt-12 md:pt-16 pb-28 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-light text-gray-500 uppercase tracking-[0.4em]">Why Sauti Audio</p>
            <h2 className="text-4xl md:text-5xl font-light mt-4">
              Experience the <span className="sauti-gradient-text">difference</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiencePillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                className="p-8 rounded-3xl bg-neutral-900 text-white shadow-2xl"
              >
                <div className="w-12 h-1 rounded-full mb-5" style={{ background: 'linear-gradient(135deg,#f69001,#010101)' }} />
                <h3 className="text-2xl font-medium mb-4">{pillar.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="pt-16 md:pt-20 pb-32 md:pb-40 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-lg"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
                Our <span className="sauti-gradient-text">Mission</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
                To create unforgettable and immersive audio experiences through expertly curated events, blending cutting-edge sound technology with creativity, ensuring every occasion resonates with lasting memories.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-lg"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
                Our <span className="sauti-gradient-text">Vision</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
                To be the leading event company in transforming the way people experience sound, setting new benchmarks in audio innovation, and delivering exceptional quality for every event globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-16 md:pt-20 pb-32 md:pb-40 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm font-light text-gray-500 uppercase tracking-widest mb-4 block text-center"
            >
              What We Offer
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-6">
              Our <span className="sauti-gradient-text">Services</span>
            </h2>
          </motion.div>

          {/* Top Row: First 2 services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8 max-w-4xl mx-auto">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Link href={service.href}>
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl h-full cursor-pointer flex flex-col items-center text-center">
                    <div className="text-4xl md:text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-xl md:text-2xl font-normal text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom Row: Last 3 services, centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {services.slice(2).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (index + 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Link href={service.href}>
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl h-full cursor-pointer flex flex-col items-center text-center">
                    <div className="text-4xl md:text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-xl md:text-2xl font-normal text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Ticker Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-white border-t border-gray-100">
        <SautiAudioClientTicker />
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6"
            >
              Ready to Create <span className="sauti-gradient-text">Unforgettable Events?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Let us transform your next event into an immersive audio experience that resonates with lasting memories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 px-8 md:px-12 py-4 md:py-5 bg-primary text-white font-light text-base md:text-lg rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30 overflow-hidden"
              >
                <span className="relative z-10">Get a Quote</span>
                <motion.svg
                  className="relative z-10 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.a>
              <motion.a
                href="/services/fun-times"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 md:px-12 py-4 md:py-5 border-2 border-primary text-primary font-light text-base md:text-lg rounded-full hover:bg-primary hover:text-white transition-all bg-white/50 backdrop-blur-sm"
              >
                Explore Event Services
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer customLogo="/logo/sauti_audio_logo.png" />
    </main>
  )
}


