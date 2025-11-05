'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const currentYear = new Date().getFullYear()
const foundedYear = 2022
const yearsExperience = currentYear - foundedYear

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '100+', label: 'Happy Clients' },
  { number: `${yearsExperience}+`, label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
]

const timeline = [
  { year: '2022', milestone: 'Founded', description: 'Started in June 2022 with a vision to revolutionize printing and design in Kenya' },
  { year: '2023', milestone: 'Growth', description: 'Expanded our team and services, building strong client relationships' },
  { year: '2024', milestone: '150+ Projects', description: 'Reached a major milestone of completing over 150 successful projects' },
  { year: '2024', milestone: '100+ Clients', description: 'Proudly serving over 100 satisfied clients across Kenya and East Africa' },
  { year: '2025', milestone: 'Industry Leader', description: 'Recognized as a leading design and printing agency in East Africa' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [30, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      id="about"
      ref={ref}
      className="pt-16 md:pt-20 pb-32 md:pb-40 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ y, opacity }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 40%, rgba(0, 128, 128, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 60%, rgba(145, 120, 93, 0.08) 0%, transparent 50%)
            `
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-light text-gray-500 uppercase tracking-widest mb-4 block text-left"
          >
            About Us
          </motion.span>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
              About <span className="gradient-text">Us</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
              Transforming ideas into powerful visual experiences since {foundedYear}
            </p>
          </div>
        </motion.div>

        {/* Main Content - Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero/team.jpg"
                alt="Brown Paper team"
                fill
                className="object-cover"
                quality={75}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-sm uppercase tracking-wider mb-2 font-light">Our Team</p>
                <p className="text-white text-2xl font-light">Where Creativity Meets Craft</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
              Our <span className="gradient-text">Story</span>
            </h3>
            <p className="text-lg font-light text-gray-600 mb-6 leading-relaxed">
              Based in Nairobi, Kenya, Brown Paper is a premier printing, design, and branding agency 
              dedicated to transforming your ideas into powerful visual experiences.
            </p>
            <p className="text-lg font-light text-gray-600 mb-8 leading-relaxed">
              Since our founding in June {foundedYear}, we combine traditional craftsmanship with 
              modern innovation to deliver solutions that not only look stunning but drive measurable results 
              for your business.
            </p>
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-10 py-5 bg-primary text-white font-light text-lg rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30"
            >
              Work With Us
            </motion.a>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
              transition={{ duration: 0.7, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/50 hover:border-primary/30 transition-all duration-500 cursor-default"
            >
              <motion.div
                className="text-4xl md:text-5xl lg:text-6xl font-light mb-3 gradient-text"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6 + index * 0.1, 
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm md:text-base font-light text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h3 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Our <span className="gradient-text">Journey</span>
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-primary via-primary/50 to-secondary transform md:-translate-x-1/2" />
            
            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.7, delay: 0.7 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-center gap-8 md:gap-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary border-4 border-white shadow-lg" />
                  
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-block p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <div className="text-primary text-2xl md:text-3xl font-light mb-2">{item.year}</div>
                      <div className="text-xl md:text-2xl font-light text-gray-900 mb-2">{item.milestone}</div>
                      <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-shrink-0 w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-sm font-light text-gray-500 uppercase tracking-widest mb-4 block text-center"
          >
            Trusted By
          </motion.span>
          <h3 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Our <span className="gradient-text">Clients</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { name: 'Kengen', logo: '/images/clients/Kengen Logo.png' },
              { name: 'KIPPRA', logo: '/images/clients/KIPPRA-LOGO-.webp' },
              { name: 'Nation Media Group', logo: '/images/clients/Nation Media Group Logo.png' },
              { name: 'Baraka', logo: '/images/clients/baraka.png' },
              { name: 'Ikigai', logo: '/images/clients/Ikigai Logo Black.png' },
              { name: 'Verto', logo: '/images/clients/verto.svg' },
              { name: 'Bar Next Door', logo: '/images/clients/barnextdoor.jpg' },
              { name: 'Civil Registration Services', logo: '/images/clients/civilregservices.jpg' },
              { name: 'Crown Dent', logo: '/images/clients/crowndent.png' },
              { name: 'Dida', logo: '/images/clients/Dida-150x150.png' },
              { name: 'JAZA', logo: '/images/clients/JAZA-150x150.png' },
              { name: 'KAAA', logo: '/images/clients/KAAA-150x150.png' },
              { name: 'KAWI', logo: '/images/clients/KAWI-150x150.png' },
              { name: 'Eagle HR Consultants', logo: '/images/clients/logo_dark_ubxaCll.png' },
              { name: 'Riara', logo: '/images/clients/riara.png' },
              { name: 'ESSA', logo: '/images/clients/ESSA Logo.png' },
            ].map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex items-center justify-center p-6 rounded-2xl bg-white border border-gray-200/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition-all max-h-12 md:max-h-16 w-auto"
                  style={{ 
                    maxWidth: '150px',
                    height: 'auto',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


