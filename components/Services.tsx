'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Printing Services',
    description: 'Elevated printing solutions that bring your designs to life with precision and quality.',
    tags: ['Printing', 'Design'],
    slug: 'printing-services',
    mainImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
  },
  {
    title: 'Brand Identity',
    description: 'Complete brand identity packages that establish your visual presence and elevate your brand.',
    tags: ['Branding', 'Identity'],
    slug: 'brand-identity',
    mainImage: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
  },
  {
    title: 'Graphic Design',
    description: 'Creative graphic design that transforms ideas into impactful visual communications.',
    tags: ['Design', 'Creative'],
    slug: 'graphic-design',
    mainImage: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=800&q=80',
  },
  {
    title: 'Packaging Design',
    description: 'Innovative packaging solutions that make your products stand out and engage customers.',
    tags: ['Packaging', 'Design'],
    slug: 'packaging-design',
    mainImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80',
  },
]

// Horizontal Scrolling Showcase Component
function ShowcaseGallery({ items, isInView }: { items: Array<{ image: string; service: string }>, isInView: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full overflow-hidden"
    >
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-light mb-2">
          Our <span className="gradient-text">Work</span>
        </h3>
        <p className="text-gray-600 font-light text-sm md:text-base">
          Scroll to explore our branded products
        </p>
      </div>
      
      <div className="relative overflow-x-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-6 md:gap-8"
        >
          {items.map((item, index) => (
            <motion.div
              key={`${item.service}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex-shrink-0 relative w-[280px] md:w-[380px] h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
            >
              <Image
                src={item.image}
                alt={`${item.service} showcase`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                quality={90}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Service label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <p className="text-xs uppercase tracking-widest text-primary/90 mb-2 font-light">
                  {item.service}
                </p>
                <p className="text-xl md:text-2xl font-light">
                  Premium Quality
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="services"
      ref={ref}
      className="pt-16 md:pt-20 pb-32 md:pb-40 px-6 md:px-12 bg-gradient-to-b from-white via-white to-gray-50/30 relative"
    >
      {/* Subtle background effect */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ y, opacity }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 10% 20%, rgba(0, 128, 128, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(145, 120, 93, 0.08) 0%, transparent 50%)
            `
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            Services
          </motion.span>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
              What We <span className="gradient-text">Do</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
              We Build Brands with Meaning and Momentum
            </p>
          </div>
        </motion.div>

        {/* Service Cards with Images - Emulating Reference Design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer bg-white"
            >
              {/* Main Image at Top */}
              <div className="relative h-[240px] md:h-[280px] lg:h-[300px] overflow-hidden">
                <Image
                  src={service.mainImage}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={90}
                />
              </div>

              {/* Content Section Below Image */}
              <div className="relative p-5 md:p-6 bg-white">
                {/* Tags - Top Left */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-md bg-gray-900 text-white text-[10px] md:text-xs font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title - Matching Portfolio size */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-light text-gray-900 mb-2 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base font-light text-gray-700 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Learn More Link - Bottom Right */}
                <Link
                  href={`/services/${service.slug}`}
                  className="absolute bottom-5 right-5 md:bottom-6 md:right-6"
                >
                  <motion.div
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary font-light text-sm md:text-base flex items-center gap-1 hover:gap-2 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <span>→</span>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Horizontal Scrolling Showcase Gallery - Reserved for future use */}
        {/* Uncomment below when ready to use */}
        {/* <ShowcaseGallery items={allShowcaseItems} isInView={isInView} /> */}
      </div>
    </section>
  )
}


