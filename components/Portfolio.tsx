'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useMemo } from 'react'
import Image from 'next/image'

/**
 * HOW TO GET IMAGES FROM UNSPLASH:
 * 
 * 1. Visit https://unsplash.com/
 * 2. Search for your keyword (e.g., "product packaging", "corporate stationery")
 * 3. Click on an image you like
 * 4. Click the "Download" button (or right-click and copy image address)
 * 5. Copy the image URL - it will look like: https://images.unsplash.com/photo-[ID]?w=800&q=80
 * 6. Replace the image URL in the project object below
 * 
 * Alternative: Use Unsplash Source URLs:
 * Format: https://source.unsplash.com/800x600/?product-packaging
 * (Replace keywords with your search terms, no spaces - use hyphens)
 * 
 * Note: Make sure images are relevant to the project type!
 */

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

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

// Portfolio Card Component
function PortfolioCard({ 
  project, 
  index, 
  hoveredIndex, 
  setHoveredIndex, 
  variants 
}: {
  project: typeof projects[0]
  index: number
  hoveredIndex: number | null
  setHoveredIndex: (index: number | null) => void
  variants: any
}) {
  return (
    <motion.div
      variants={variants}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-3xl h-[240px] md:h-[280px] lg:h-[320px] cursor-pointer shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-500"
    >
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
                      quality={75}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      
      {/* Gradient overlay with animation - Darker for better text contrast */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40"
        initial={false}
        animate={{
          opacity: hoveredIndex === index ? 0.85 : 0.75,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
      
      {/* Animated border on hover */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-3xl"
        initial={false}
        animate={{
          borderColor: hoveredIndex === index ? 'rgba(0, 128, 128, 0.5)' : 'transparent',
        }}
        transition={{ duration: 0.4 }}
      />
      
      <motion.div
        className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end text-white"
        initial={false}
      >
        <motion.div
          className="mb-2"
          initial={false}
          animate={{
            y: hoveredIndex === index ? 0 : 8,
            opacity: hoveredIndex === index ? 1 : 0.8,
          }}
          transition={{ duration: 0.4 }}
        >
          <motion.span
            className="text-[10px] md:text-xs font-light text-primary/90 uppercase tracking-wider mb-1.5 inline-block"
            initial={false}
            animate={{
              x: hoveredIndex === index ? 0 : -10,
              opacity: hoveredIndex === index ? 1 : 0.7,
            }}
            transition={{ duration: 0.4 }}
          >
            {project.category}
          </motion.span>
        </motion.div>
        
        <motion.h3
          className="text-lg md:text-xl lg:text-2xl font-light"
          initial={false}
          animate={{
            y: hoveredIndex === index ? 0 : 10,
            scale: hoveredIndex === index ? 1.02 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.title}
        </motion.h3>
        
        <motion.div
          className="h-[2px] bg-primary origin-left mt-2"
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: hoveredIndex === index ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
        
        {/* Subtle glow effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          initial={false}
          animate={{
            opacity: hoveredIndex === index ? 0.1 : 0,
          }}
          transition={{ duration: 0.4 }}
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 128, 128, 0.3) 0%, transparent 70%)',
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects
    return projects.filter(p => p.category === selectedCategory)
  }, [selectedCategory])
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-30, 30])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="portfolio"
      ref={ref}
      className="pt-16 md:pt-20 pb-32 md:pb-40 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden"
    >
      {/* Parallax background effect */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ y, opacity }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 15% 30%, rgba(0, 128, 128, 0.06) 0%, transparent 50%),
              radial-gradient(circle at 85% 70%, rgba(145, 120, 93, 0.06) 0%, transparent 50%)
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
            Work
          </motion.span>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
              Showcasing excellence in every project we deliver
            </p>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full font-light text-sm md:text-base transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary/30 hover:text-primary'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            exit="hidden"
            className="space-y-5 lg:space-y-6"
          >
            {/* Top Row - Even Width (50/50) */}
            {filteredProjects.length > 0 && (
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
              >
                {filteredProjects.slice(0, 2).map((project, index) => (
                  <PortfolioCard
                    key={project.title}
                    project={project}
                    index={index}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    variants={itemVariants}
                  />
                ))}
              </motion.div>
            )}

            {/* Second Row - Uneven Width (60/40) */}
            {filteredProjects.length > 2 && (
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-5 lg:gap-6"
              >
                {filteredProjects.slice(2, 4).map((project, index) => (
                  <PortfolioCard
                    key={project.title}
                    project={project}
                    index={index + 2}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    variants={itemVariants}
                  />
                ))}
              </motion.div>
            )}

            {/* Third Row - Uneven Width Complementing Row 2 (40/60) */}
            {filteredProjects.length > 4 && (
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-5 lg:gap-6"
              >
                {filteredProjects.slice(4, 6).map((project, index) => (
                  <PortfolioCard
                    key={project.title}
                    project={project}
                    index={index + 4}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    variants={itemVariants}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}


