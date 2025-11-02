'use client'

import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, Eagle HR Consultants',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    quote: 'Brown Paper transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations. The new logo and brand guidelines have significantly elevated our professional image.',
    rating: 5,
  },
  {
    name: 'Michael Ochieng',
    role: 'Marketing Director, The Bar Next Door',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    quote: 'Outstanding packaging design that boosted our product sales by 40%. Professional, timely, and incredibly creative. Our customers love the new branding.',
    rating: 5,
  },
  {
    name: 'Amina Hassan',
    role: 'Operations Manager, Civil Registration Services',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    quote: 'From concept to final product, the team delivered exceptional quality. Our business cards and stationery are now conversation starters. Highly recommend their services.',
    rating: 5,
  },
  {
    name: 'David Kimani',
    role: 'Founder, Jaza Credit',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    quote: 'Working with Brown Paper has been a game-changer. Their design expertise and print quality are unmatched in the industry. They truly understand our vision and bring it to life.',
    rating: 5,
  },
  {
    name: 'Grace Wanjiku',
    role: 'CEO, Baraka Credit',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80',
    quote: 'The quality of their printing services is outstanding. Every piece reflects professionalism and attention to detail. Our marketing materials look absolutely stunning.',
    rating: 5,
  },
  {
    name: 'James Mutua',
    role: 'Restaurant Manager, Kawi Restaurant',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
    quote: 'Exceptional graphic design work that perfectly captured our brand essence. Fast turnaround and incredible creativity. The menu design and promotional materials exceeded our expectations.',
    rating: 5,
  },
]

// Split testimonials into two rows
const firstRow = testimonials.slice(0, 3)
const secondRow = testimonials.slice(3, 6)

// Duplicate for seamless infinite scroll
const duplicatedFirstRow = [...firstRow, ...firstRow, ...firstRow]
const duplicatedSecondRow = [...secondRow, ...secondRow, ...secondRow]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [30, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  // Motion values to track current positions
  const firstRowX = useMotionValue(-((360 + 24) * firstRow.length))
  const secondRowX = useMotionValue(0)
  
  // Hover states for each row
  const [isFirstRowHovered, setIsFirstRowHovered] = useState(false)
  const [isSecondRowHovered, setIsSecondRowHovered] = useState(false)
  
  // Animation state
  const [shouldAnimateFirst, setShouldAnimateFirst] = useState(false)
  const [shouldAnimateSecond, setShouldAnimateSecond] = useState(false)

  // Start animations when in view
  useEffect(() => {
    if (isInView) {
      setShouldAnimateFirst(true)
      setShouldAnimateSecond(true)
    }
  }, [isInView])

  // Update animation based on hover state
  useEffect(() => {
    setShouldAnimateFirst(isInView && !isFirstRowHovered)
  }, [isInView, isFirstRowHovered])

  useEffect(() => {
    setShouldAnimateSecond(isInView && !isSecondRowHovered)
  }, [isInView, isSecondRowHovered])

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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
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
      id="testimonials"
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
              radial-gradient(circle at 50% 30%, rgba(0, 128, 128, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 70%, rgba(145, 120, 93, 0.08) 0%, transparent 50%)
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
            Client Stories
          </motion.span>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
              Don&apos;t just take our word for it - hear from businesses we&apos;ve helped succeed
            </p>
          </div>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {/* First Row - Sliding Right (Left to Right) */}
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsFirstRowHovered(true)}
            onMouseLeave={() => setIsFirstRowHovered(false)}
          >
            <motion.div
              className="flex gap-6 md:gap-8"
              style={{ x: firstRowX }}
              animate={
                shouldAnimateFirst
                  ? {
                      x: [-((360 + 24) * firstRow.length), 0],
                    }
                  : false
              }
              transition={
                shouldAnimateFirst
                  ? {
                      duration: 35,
                      repeat: Infinity,
                      ease: 'linear',
                    }
                  : undefined
              }
              onUpdate={(latest) => {
                if (typeof latest === 'object' && 'x' in latest && typeof latest.x === 'number') {
                  firstRowX.set(latest.x)
                }
              }}
            >
              {duplicatedFirstRow.map((testimonial, index) => (
                <motion.div
                  key={`first-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative flex flex-col flex-shrink-0 w-[360px] md:w-[380px] min-h-[280px] p-6 md:p-7 rounded-2xl bg-white border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl"
                >
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 text-primary/10 text-5xl font-serif">&quot;</div>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote - Flex grow to push author to bottom */}
                  <p className="text-gray-700 font-light text-base md:text-lg leading-relaxed mb-6 relative z-10 flex-grow">
                    {testimonial.quote}
                  </p>

                  {/* Author - Always at bottom */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-light text-base text-gray-900">{testimonial.name}</h4>
                      <p className="font-light text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Sliding Left (Right to Left) */}
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsSecondRowHovered(true)}
            onMouseLeave={() => setIsSecondRowHovered(false)}
          >
            <motion.div
              className="flex gap-6 md:gap-8"
              style={{ x: secondRowX }}
              animate={
                shouldAnimateSecond
                  ? {
                      x: [0, -((360 + 24) * secondRow.length)],
                    }
                  : false
              }
              transition={
                shouldAnimateSecond
                  ? {
                      duration: 35,
                      repeat: Infinity,
                      ease: 'linear',
                    }
                  : undefined
              }
              onUpdate={(latest) => {
                if (typeof latest === 'object' && 'x' in latest && typeof latest.x === 'number') {
                  secondRowX.set(latest.x)
                }
              }}
            >
              {duplicatedSecondRow.map((testimonial, index) => (
                <motion.div
                  key={`second-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative flex flex-col flex-shrink-0 w-[360px] md:w-[380px] min-h-[280px] p-6 md:p-7 rounded-2xl bg-white border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl"
                >
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 text-primary/10 text-5xl font-serif">&quot;</div>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote - Flex grow to push author to bottom */}
                  <p className="text-gray-700 font-light text-base md:text-lg leading-relaxed mb-6 relative z-10 flex-grow">
                    {testimonial.quote}
                  </p>

                  {/* Author - Always at bottom */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-light text-base text-gray-900">{testimonial.name}</h4>
                      <p className="font-light text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

