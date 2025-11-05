'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionValueEvent } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const currentYear = new Date().getFullYear()
const foundedYear = 2022
const yearsExperience = currentYear - foundedYear

const stats = [
  { number: 150, suffix: '+', label: 'Projects Completed' },
  { number: 100, suffix: '+', label: 'Happy Clients' },
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

// Additional Icons for Core Values
const CustomerCentricIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <circle cx="12" cy="8" r="4" fill="#008080" stroke="#008080" strokeWidth="1.5" />
    <path d="M6 21V19C6 17.3431 7.34315 16 9 16H15C16.6569 16 18 17.3431 18 19V21" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 12V16M10 14H14" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const EfficiencyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <circle cx="12" cy="12" r="9" stroke="#008080" strokeWidth="1.5" />
    <path d="M12 6V12L16 14" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2" fill="#008080" />
    <path d="M12 3L14 7L12 12L10 7L12 3Z" fill="#008080" fillOpacity="0.3" />
  </svg>
)

const ProfessionalismIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path d="M8 7C8 6.46957 8.21071 5.96086 8.58579 5.58579C8.96086 5.21071 9.46957 5 10 5H14C14.5304 5 15.0391 5.21071 15.4142 5.58579C15.7893 5.96086 16 6.46957 16 7V9H19C19.5304 9 20.0391 9.21071 20.4142 9.58579C20.7893 9.96086 21 10.4696 21 11V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V11C3 10.4696 3.21071 9.96086 3.58579 9.58579C3.96086 9.21071 4.46957 9 5 9H8V7Z" fill="#008080" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const QualityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#008080" stroke="#008080" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CreativityInnovationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" fill="#008080" />
    <path d="M18 10C19.1046 10 20 10.8954 20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10Z" fill="#008080" />
    <path d="M6 10C7.10457 10 8 10.8954 8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10Z" fill="#008080" />
    <path d="M12 18C13.1046 18 14 18.8954 14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18Z" fill="#008080" />
    <path d="M8 4L16 12M16 4L8 12" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="3" fill="#008080" fillOpacity="0.2" />
  </svg>
)

const values = [
  {
    title: 'Customer Centric',
    description: 'We prioritize our clients&apos; needs and success, ensuring every solution is tailored to enhance their visibility and brand.',
    icon: CustomerCentricIcon,
  },
  {
    title: 'Efficiency',
    description: 'We deliver quality, effective, and modern solutions with streamlined processes that maximize value and minimize waste.',
    icon: EfficiencyIcon,
  },
  {
    title: 'Professionalism',
    description: 'We maintain the highest standards of service, integrity, and expertise in every interaction and project delivery.',
    icon: ProfessionalismIcon,
  },
  {
    title: 'Quality Products & Services',
    description: 'We are committed to delivering exceptional quality in every product and service, ensuring lasting value for our clients.',
    icon: QualityIcon,
  },
  {
    title: 'Creativity & Innovation',
    description: 'We push boundaries and explore new possibilities to bring unique, modern, and innovative solutions to life.',
    icon: CreativityInnovationIcon,
  },
]

// Timeline Icons - More Creative and Unique
const FoundedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 md:w-20 md:h-20">
    {/* Paper/Scroll representing the beginning */}
    <path d="M4 4C4 3.44772 4.44772 3 5 3H11C11.5523 3 12 3.44772 12 4V20C12 20.5523 11.5523 21 11 21H5C4.44772 21 4 20.5523 4 20V4Z" fill="#008080" fillOpacity="0.1" stroke="#008080" strokeWidth="1.5" />
    <path d="M12 4H16C16.5523 4 17 4.44772 17 5V19C17 19.5523 16.5523 20 16 20H12V4Z" fill="#008080" fillOpacity="0.15" stroke="#008080" strokeWidth="1.5" />
    <path d="M6 7H10M6 10H10M6 13H9" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="14" cy="8" r="1.5" fill="#008080" />
    <path d="M14 11L16 13L14 15" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const GrowthIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 md:w-20 md:h-20">
    {/* Expanding circles/ripples representing growth */}
    <circle cx="12" cy="12" r="2" fill="#008080" />
    <circle cx="12" cy="12" r="5" stroke="#008080" strokeWidth="1.5" fill="none" opacity="0.4" />
    <circle cx="12" cy="12" r="8" stroke="#008080" strokeWidth="1.5" fill="none" opacity="0.3" />
    <circle cx="12" cy="12" r="11" stroke="#008080" strokeWidth="1.5" fill="none" opacity="0.2" />
    {/* Small dots representing expansion */}
    <circle cx="17" cy="7" r="1" fill="#008080" />
    <circle cx="7" cy="17" r="1" fill="#008080" />
    <circle cx="17" cy="17" r="1" fill="#008080" />
    <circle cx="7" cy="7" r="1" fill="#008080" />
  </svg>
)

const ProjectsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 md:w-20 md:h-20">
    {/* Stack of paper/documents representing projects */}
    <path d="M5 6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6Z" fill="#008080" fillOpacity="0.1" stroke="#008080" strokeWidth="1.5" />
    <path d="M7 8C7 7.44772 7.44772 7 8 7H16C16.5523 7 17 7.44772 17 8V16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16V8Z" fill="#008080" fillOpacity="0.15" stroke="#008080" strokeWidth="1.5" />
    <path d="M9 10C9 9.44772 9.44772 9 10 9H14C14.5523 9 15 9.44772 15 10V14C15 14.5523 14.5523 15 14 15H10C9.44772 15 9 14.5523 9 14V10Z" fill="#008080" fillOpacity="0.2" stroke="#008080" strokeWidth="1.5" />
    <path d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V16C17 16.5523 16.5523 17 16 17H4C3.44772 17 3 16.5523 3 16V4Z" fill="#008080" fillOpacity="0.05" stroke="#008080" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>
)

const ClientsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 md:w-20 md:h-20">
    {/* Network/connection nodes representing clients */}
    <circle cx="12" cy="12" r="3" fill="#008080" fillOpacity="0.2" stroke="#008080" strokeWidth="1.5" />
    <circle cx="6" cy="6" r="2" fill="#008080" fillOpacity="0.2" stroke="#008080" strokeWidth="1.5" />
    <circle cx="18" cy="6" r="2" fill="#008080" fillOpacity="0.2" stroke="#008080" strokeWidth="1.5" />
    <circle cx="6" cy="18" r="2" fill="#008080" fillOpacity="0.2" stroke="#008080" strokeWidth="1.5" />
    <circle cx="18" cy="18" r="2" fill="#008080" fillOpacity="0.2" stroke="#008080" strokeWidth="1.5" />
    <path d="M12 12L6 6M12 12L18 6M12 12L6 18M12 12L18 18" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    <circle cx="12" cy="12" r="1.5" fill="#008080" />
  </svg>
)

const LeaderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 md:w-20 md:h-20">
    {/* Mountain peak with flag representing leadership */}
    <path d="M3 21L12 3L21 21H3Z" fill="#008080" fillOpacity="0.1" stroke="#008080" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 3V21" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 21L12 13L16 21" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Flag at the peak */}
    <rect x="11" y="2" width="2" height="4" fill="#008080" />
    <path d="M13 2L16 4L13 6" fill="#008080" fillOpacity="0.3" stroke="#008080" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Stars representing excellence */}
    <path d="M6 16L6.5 17L7.5 17L6.75 17.75L7 19L6 18.25L5 19L5.25 17.75L4.5 17L5.5 17L6 16Z" fill="#008080" fillOpacity="0.6" />
    <path d="M18 16L18.5 17L19.5 17L18.75 17.75L19 19L18 18.25L17 19L17.25 17.75L16.5 17L17.5 17L18 16Z" fill="#008080" fillOpacity="0.6" />
  </svg>
)

const timeline = [
  { year: '2022', milestone: 'Founded', description: 'Started in June 2022 with a vision to revolutionize printing and design in Kenya', icon: FoundedIcon },
  { year: '2023', milestone: 'Growth', description: 'Expanded our team and services, building strong client relationships', icon: GrowthIcon },
  { year: '2024', milestone: '150+ Projects', description: 'Reached a major milestone of completing over 150 successful projects', icon: ProjectsIcon },
  { year: '2024', milestone: '100+ Clients', description: 'Proudly serving over 100 satisfied clients across Kenya and East Africa', icon: ClientsIcon },
  { year: '2025', milestone: 'Industry Leader', description: 'Recognized as a leading design and printing agency in East Africa', icon: LeaderIcon },
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
    description: '100+ satisfied clients across Kenya and East Africa',
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
              Transforming ideas into impactful visual experiences since June {foundedYear}. 
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
                src="/images/hero/about.jpg"
                alt="Brown Paper team"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-sm uppercase tracking-wider mb-2 font-light">Our Team</p>
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
                src="/images/hero/offices.jpg"
                alt="Our offices"
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
                Since our founding in June {foundedYear}, we&apos;ve grown from a small print shop into a full-service creative agency.
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

      {/* Milestones Section - Side by Side Flow */}
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
                Key <span className="gradient-text">Milestones</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                Moments that defined our growth
              </p>
            </div>
          </motion.div>

          {/* Side by Side Flow Layout */}
          <div className="space-y-12 md:space-y-16">
            {timeline.map((item, index) => {
              const IconComponent = item.icon
              const isEven = index % 2 === 0
              const stepNumber = String(index + 1).padStart(2, '0')
              
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col md:flex-row items-start gap-8 md:gap-12 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Number and Icon Section */}
                  <div className={`flex-shrink-0 flex items-start gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Large Number */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                      className="text-7xl md:text-8xl lg:text-9xl font-light text-primary/20 leading-none"
                    >
                      {stepNumber}
                    </motion.div>
                    
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 shadow-lg mt-2 md:mt-4"
                    >
                      {IconComponent && <IconComponent />}
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-block p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl max-w-2xl"
                    >
                      {/* Year Tagline */}
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                        className="text-sm font-light text-gray-500 uppercase tracking-widest mb-3 block"
                      >
                        {item.year}
                      </motion.span>
                      
                      {/* Milestone Heading */}
                      <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                        {item.milestone}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 font-light leading-relaxed text-base md:text-lg">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
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
                  className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl flex flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="mb-4"
                  >
                    <IconComponent />
                  </motion.div>
                  <h3 className="text-base md:text-lg font-light text-gray-900 leading-tight mb-3">{value.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed text-xs md:text-sm">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
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
              Our Purpose
            </motion.span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
                Mission & <span className="gradient-text">Vision</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                What drives us forward
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-light text-gray-900">Mission</h3>
              </div>
              <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
                To support individuals and businesses enhance their visibility and brand by providing quality, effective, modern, printing, branding and promotional solutions.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-light text-gray-900">Vision</h3>
              </div>
              <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
                To be the most efficient, diverse and customer centric design, printing, branding, and promotional supplier in Africa.
              </p>
            </motion.div>
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

      {/* Our Responsibility Section */}
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
              Our Commitment
            </motion.span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
                Our <span className="gradient-text">Responsibility</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                Contributing to sustainable development
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            {/* SDG 8: Decent Work and Economic Growth */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                <div className="text-8xl md:text-9xl font-light text-primary mb-4">8</div>
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="lg:col-span-10 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 uppercase tracking-wide">
                  Decent Work and Economic Growth
                </h3>
                <p className="text-sm md:text-base font-light text-primary/90 mb-4 uppercase tracking-wider">
                  Promote inclusive and sustainable economic growth employment and decent work for all
                </p>
                <div className="space-y-4 text-base md:text-lg font-light text-gray-700 leading-relaxed">
                  <p>
                    We provide and promote inclusive and sustainable economic growth employment and decent work for all.
                  </p>
                  <p>
                    We provide humane working conditions, an open door policy for employees to be heard as well as providing fair and proper salaries for each in consideration of the current standards in the country.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SDG 12: Responsible Consumption and Production */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                <div className="text-8xl md:text-9xl font-light text-secondary mb-4">12</div>
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
              <div className="lg:col-span-10 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 uppercase tracking-wide">
                  Responsible Consumption and Production
                </h3>
                <div className="space-y-4 text-base md:text-lg font-light text-gray-700 leading-relaxed">
                  <p>
                    We endeavor to provide sustainable products for our clients. We provide a range of Okiyo products powered by Amrod.
                  </p>
                  <p>
                    Okiyo brings you a range of products made entirely or partially from materials that are reusable, recycled, recyclable or harvested from sustainable natural resources.
                  </p>
                  <p>
                    The elements used to make these environmentally conscious items include; cork, bamboo, wheat straw, paper, jute, cotton, wood and glass.
                  </p>
                  <p>
                    By bringing these products together under one collection with a clear identity, we hope to reduce the impact we have on the world we all live in.
                  </p>
                </div>
              </div>
            </motion.div>
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
                <span className="text-sm md:text-base font-light text-gray-600">100+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm md:text-base font-light text-gray-600">150+ Projects Delivered</span>
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
              Join {yearsExperience}+ years of excellence and 100+ satisfied clients who&apos;ve trusted us to elevate their brand presence. 
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

