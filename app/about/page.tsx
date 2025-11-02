'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionValueEvent } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const currentYear = new Date().getFullYear()
const foundedYear = 2018
const yearsExperience = currentYear - foundedYear

const stats = [
  { number: 100, suffix: '+', label: 'Projects Completed' },
  { number: 200, suffix: '+', label: 'Happy Clients' },
  { number: yearsExperience, suffix: '+', label: 'Years Experience' },
  { number: 100, suffix: '%', label: 'Client Satisfaction' },
]

// Stat card component
function StatCard({ stat, index }: { stat: { number: number; suffix: string; label: string }; index: number }) {
  const statRef = useRef<HTMLDivElement>(null)
  const isStatInView = useInView(statRef, { once: true, margin: '-50px' })
  
  return (
    <motion.div
      ref={statRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isStatInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="text-center p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl"
    >
      <motion.div
        className="text-4xl md:text-5xl lg:text-6xl font-light mb-3 gradient-text"
        initial={{ opacity: 0 }}
        animate={isStatInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.3 + index * 0.1,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {isStatInView && (
          <AnimatedCounter value={stat.number} suffix={stat.suffix} />
        )}
      </motion.div>
      <div className="text-sm md:text-base font-light text-gray-600">{stat.label}</div>
    </motion.div>
  )
}

// Animated counter component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })

  useEffect(() => {
    motionValue.set(value)
  }, [motionValue, value])

  useMotionValueEvent(springValue, 'change', (latest) => {
    setDisplayValue(Math.round(latest))
  })

  return <span>{displayValue}{suffix}</span>
}

// SVG Icons for Values - Solid Teal Color
const ExcellenceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="#008080"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
)

const InnovationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
      fill="#008080"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IntegrityIcon = () => (
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

const CreativityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z"
      fill="#008080"
    />
    <path
      d="M18 10C19.1046 10 20 10.8954 20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10Z"
      fill="#008080"
    />
    <path
      d="M6 10C7.10457 10 8 10.8954 8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10Z"
      fill="#008080"
    />
    <path
      d="M12 18C13.1046 18 14 18.8954 14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18Z"
      fill="#008080"
    />
    <path
      d="M8 4L16 12M16 4L8 12"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

// SVG Icons for Achievements - Solid Teal Color
const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M6 9C6 7.89543 6.89543 7 8 7H16C17.1046 7 18 7.89543 18 9V11C18 14.3137 15.3137 17 12 17C8.68629 17 6 14.3137 6 11V9Z"
      fill="#008080"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 17V21"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 21H16"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 5V7"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 5V7"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="#008080"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
)

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M8 7C8 6.46957 8.21071 5.96086 8.58579 5.58579C8.96086 5.21071 9.46957 5 10 5H14C14.5304 5 15.0391 5.21071 15.4142 5.58579C15.7893 5.96086 16 6.46957 16 7V9H19C19.5304 9 20.0391 9.21071 20.4142 9.58579C20.7893 9.96086 21 10.4696 21 11V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V11C3 10.4696 3.21071 9.96086 3.58579 9.58579C3.96086 9.21071 4.46957 9 5 9H8V7Z"
      fill="#008080"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 9H16V7C16 6.46957 15.7893 5.96086 15.4142 5.58579C15.0391 5.21071 14.5304 5 14 5H10C9.46957 5 8.96086 5.21071 8.58579 5.58579C8.21071 5.96086 8 6.46957 8 7V9Z"
      fill="#008080"
      fillOpacity="0.2"
    />
  </svg>
)

const ToolsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M14.7 6.3C15.0866 5.9134 15.0866 5.2866 14.7 4.9L13.8 4C13.4134 3.6134 12.7866 3.6134 12.4 4L11.5 4.9C11.1134 5.2866 11.1134 5.9134 11.5 6.3L14.7 6.3Z"
      fill="#008080"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 11.2L12.7 14.4"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 15L20 18"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 21L10 14"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const values = [
  {
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality in every project, ensuring that every detail meets our exacting standards.',
    icon: ExcellenceIcon,
  },
  {
    title: 'Innovation',
    description: 'We combine traditional craftsmanship with modern techniques and technologies to create cutting-edge solutions.',
    icon: InnovationIcon,
  },
  {
    title: 'Integrity',
    description: 'We build lasting relationships with our clients through transparency, honesty, and unwavering commitment to their success.',
    icon: IntegrityIcon,
  },
  {
    title: 'Creativity',
    description: 'We believe in pushing boundaries and exploring new possibilities to bring unique and memorable designs to life.',
    icon: CreativityIcon,
  },
]

const timeline = [
  { year: '2018', milestone: 'Founded', description: 'Started with a vision to revolutionize printing and design in Kenya', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80' },
  { year: '2020', milestone: 'Expansion', description: 'Opened our state-of-the-art facility and expanded our team', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80' },
  { year: '2022', milestone: '100+ Projects', description: 'Reached a major milestone of completing over 100 successful projects', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  { year: '2024', milestone: 'Industry Leader', description: 'Recognized as a leading design and printing agency in East Africa', image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=400&q=80' },
]

const achievements = [
  {
    icon: TrophyIcon,
    title: 'Industry Awards',
    description: 'Recognized for excellence in design and print quality',
  },
  {
    icon: StarIcon,
    title: 'Client Trust',
    description: '200+ satisfied clients across Kenya and East Africa',
  },
  {
    icon: BriefcaseIcon,
    title: 'Expert Team',
    description: 'Talented designers and craftspeople dedicated to your success',
  },
  {
    icon: ToolsIcon,
    title: 'State-of-the-Art',
    description: 'Modern equipment and technology for premium results',
  },
]

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(heroScrollProgress, [0, 1], [1, 0])

  return (
    <main className="relative overflow-hidden min-h-screen">
      <Navigation />
      
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
                radial-gradient(circle at 20% 30%, rgba(0, 128, 128, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(145, 120, 93, 0.15) 0%, transparent 50%)
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
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm font-light text-gray-500 uppercase tracking-widest mb-4 block"
            >
              Our Story
            </motion.span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6">
              About <span className="gradient-text">Brown Paper</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into impactful visual experiences since {foundedYear}. 
              A journey of excellence, innovation, and creative mastery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section with Masonry Grid */}
      <section ref={ref} className="pt-16 md:pt-20 pb-32 md:pb-40 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden">
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
              Chapter One
            </motion.span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
                How We Built a Brand<br />
                That <span className="gradient-text">Matters</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                From a small print shop in {foundedYear} to a creative powerhouse transforming brands across East Africa
              </p>
            </div>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {/* Large Card - Top Left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-1 lg:col-span-2 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
                alt="Brown Paper workspace"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-sm uppercase tracking-wider mb-2 font-light">Our Workspace</p>
                <p className="text-white text-2xl md:text-3xl font-light">Where Creativity Meets Craft</p>
              </div>
            </motion.div>

            {/* Text Card - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-xl flex flex-col justify-between"
            >
              <div>
                <p className="text-lg md:text-xl font-light text-gray-600 mb-4 leading-relaxed">
                  Based in Nairobi, Kenya, Brown Paper is a premier printing, design, and branding agency 
                  dedicated to transforming your ideas into powerful visual experiences.
                </p>
                <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed">
                  Founded in {foundedYear}, we started with a simple mission: to help businesses and 
                  individuals communicate their message beautifully and effectively.
                </p>
              </div>
            </motion.div>

            {/* Image Card - Middle Left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[250px] md:h-[300px] rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <Image
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
                alt="Our team at work"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            {/* Large Text Card - Middle Right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-1 lg:col-span-2 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-xl"
            >
              <p className="text-lg md:text-xl font-light text-gray-600 mb-4 leading-relaxed">
                Over the past {yearsExperience}+ years, we&apos;ve grown from a small print shop into a full-service creative agency.
              </p>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed">
                We combine traditional craftsmanship with modern innovation to deliver solutions that 
                not only look stunning but drive measurable results. Every project is an opportunity to create 
                something exceptional, and we approach each one with passion, attention to detail, and 
                a commitment to excellence.
              </p>
            </motion.div>

            {/* CTA Card - Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-2 lg:col-span-3 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 shadow-xl"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-normal text-gray-900 mb-3">Ready to Work Together?</h3>
                  <p className="text-lg font-light text-gray-600">
                    Let&apos;s bring your vision to life and create something extraordinary.
                  </p>
                </div>
                <motion.a
                  href="/contact"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block px-10 py-5 bg-primary text-white font-light text-lg rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30"
                >
                  Work With Us
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Stats Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              className="text-sm font-light text-gray-500 uppercase tracking-widest mb-4 block text-left"
            >
              Our Journey
            </motion.span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
                Years of <span className="gradient-text">Growth</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                Milestones that shaped who we are today
              </p>
            </div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-primary via-primary/50 to-secondary transform md:-translate-x-1/2" />
            
            <div className="space-y-12 md:space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary border-4 border-white shadow-lg" />
                  
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`relative w-full md:w-1/3 h-64 rounded-2xl overflow-hidden shadow-xl ${
                      index % 2 === 0 ? 'md:order-1' : 'md:order-3'
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.milestone}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </motion.div>
                  
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:order-2' : 'md:text-left md:order-2'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-block p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <div className="text-primary text-3xl md:text-4xl font-light mb-2">{item.year}</div>
                      <div className="text-2xl md:text-3xl font-light text-gray-900 mb-3">{item.milestone}</div>
                      <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              className="text-sm font-light text-gray-500 uppercase tracking-widest mb-4 block text-left"
            >
              What We Stand For
            </motion.span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                The principles that guide everything we do
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <IconComponent />
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-light text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
              className="text-sm font-light text-gray-500 uppercase tracking-widest mb-4 block text-left"
            >
              What Sets Us Apart
            </motion.span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
                What Sets Us <span className="gradient-text">Apart</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                The strengths and capabilities that make us the premier choice
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl text-center"
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <IconComponent />
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-light text-gray-900">{achievement.title}</h3>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                    {achievement.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden">
        {/* Animated Background Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-8"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm md:text-base font-light text-gray-600">{yearsExperience}+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm md:text-base font-light text-gray-600">200+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm md:text-base font-light text-gray-600">100+ Projects Delivered</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6"
            >
              Ready to Transform Your <span className="gradient-text">Brand?</span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Join {yearsExperience}+ years of excellence and 200+ satisfied clients who&apos;ve trusted us to elevate their brand presence. 
              Let&apos;s discuss your project and create something extraordinary together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mb-12"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 px-8 md:px-12 py-4 md:py-5 bg-primary text-white font-light text-base md:text-lg rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30 overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
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
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </motion.a>
              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 md:px-12 py-4 md:py-5 border-2 border-primary text-primary font-light text-base md:text-lg rounded-full hover:bg-primary hover:text-white transition-all bg-white/50 backdrop-blur-sm"
              >
                View Our Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Additional Value Props */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 pt-12 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-primary mb-2">Free</div>
                <div className="text-sm md:text-base font-light text-gray-600">Initial Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-primary mb-2">No</div>
                <div className="text-sm md:text-base font-light text-gray-600">Hidden Fees</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-primary mb-2">100%</div>
                <div className="text-sm md:text-base font-light text-gray-600">Satisfaction Guaranteed</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

