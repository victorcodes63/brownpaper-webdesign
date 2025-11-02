'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const currentYear = new Date().getFullYear()
const foundedYear = 2018
const yearsExperience = currentYear - foundedYear

const stats = [
  { number: '100+', label: 'Projects Completed' },
  { number: '200+', label: 'Happy Clients' },
  { number: `${yearsExperience}+`, label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
]

// Icon Components - Solid Teal Color, Side by Side with Title
const ExcellenceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="#008080"
      stroke="#008080"
      strokeWidth="1.5"
    />
  </svg>
)

const PartnershipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M9 11C9 12.6569 7.65685 14 6 14C4.34315 14 3 12.6569 3 11C3 9.34315 4.34315 8 6 8C7.65685 8 9 9.34315 9 11Z"
      fill="#008080"
      stroke="#008080"
      strokeWidth="1.5"
    />
    <path
      d="M21 11C21 12.6569 19.6569 14 18 14C16.3431 14 15 12.6569 15 11C15 9.34315 16.3431 8 18 8C19.6569 8 21 9.34315 21 11Z"
      fill="#008080"
      stroke="#008080"
      strokeWidth="1.5"
    />
    <path
      d="M12 14V18C12 19.1046 12.8954 20 14 20H16"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 14V18C12 19.1046 11.1046 20 10 20H8"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 10L15 14L12 18L9 14L12 10Z"
      fill="#008080"
      opacity="0.3"
    />
  </svg>
)

const InnovationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M9.5 2C10.8807 2 12 3.11929 12 4.5C12 5.88071 10.8807 7 9.5 7C8.11929 7 7 5.88071 7 4.5C7 3.11929 8.11929 2 9.5 2Z"
      fill="#008080"
    />
    <path
      d="M17 12C17 13.6569 15.6569 15 14 15C12.3431 15 11 13.6569 11 12C11 10.3431 12.3431 9 14 9C15.6569 9 17 10.3431 17 12Z"
      fill="#008080"
    />
    <path
      d="M9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15C7.65685 15 9 16.3431 9 18Z"
      fill="#008080"
    />
    <path
      d="M9.5 7L11 12L9.5 17M14 9L11 12M14 15L11 12"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ResultsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="#008080"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="12"
      cy="12"
      r="6"
      stroke="#008080"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="12"
      cy="12"
      r="3"
      fill="#008080"
    />
    <path
      d="M12 3V12M12 12L15 9"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const values = [
  {
    icon: ExcellenceIcon,
    title: 'Excellence',
    description: 'We strive for perfection in every detail, ensuring the highest quality in design and print.',
  },
  {
    icon: PartnershipIcon,
    title: 'Partnership',
    description: 'Your success is our success. We work closely with you to bring your vision to life.',
  },
  {
    icon: InnovationIcon,
    title: 'Innovation',
    description: 'Combining traditional craftsmanship with cutting-edge technology and creative solutions.',
  },
  {
    icon: ResultsIcon,
    title: 'Results-Driven',
    description: 'Every project is designed to deliver measurable impact and drive your business forward.',
  },
]

const timeline = [
  { year: '2018', milestone: 'Founded', description: 'Started with a vision to revolutionize printing and design in Kenya' },
  { year: '2020', milestone: 'Expansion', description: 'Opened our state-of-the-art facility and expanded our team' },
  { year: '2022', milestone: '100+ Projects', description: 'Reached a major milestone of completing over 100 successful projects' },
  { year: '2024', milestone: 'Industry Leader', description: 'Recognized as a leading design and printing agency in East Africa' },
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
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
                alt="Brown Paper workspace"
                fill
                className="object-cover"
                quality={75}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-sm uppercase tracking-wider mb-2 font-light">Our Workspace</p>
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
              With over {yearsExperience} years of excellence, we combine traditional craftsmanship with 
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

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Our <span className="gradient-text">Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.9 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <value.icon />
                  </motion.div>
                  <h4 className="text-xl font-light text-gray-900">{value.title}</h4>
                </div>
                <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


