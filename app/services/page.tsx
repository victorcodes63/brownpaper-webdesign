'use client'

import { motion, useScroll, useTransform, useAnimationControls, useMotionValue } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// SVG Icon Components - Solid Teal Color
const PrintingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M6 9V2H18V9"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 18H4C2.89543 18 2 17.1046 2 16V11C2 9.89543 2.89543 9 4 9H20C21.1046 9 22 9.89543 22 11V16C22 17.1046 21.1046 18 20 18H18"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 14H18V22H6V14Z"
      fill="#008080"
      fillOpacity="0.1"
    />
    <path
      d="M9 18H15"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const BrandingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" fill="#008080" fillOpacity="0.2" />
    <circle cx="12" cy="12" r="1.5" fill="#008080" />
  </svg>
)

const DesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="7" r="1.5" fill="#008080" />
    <circle cx="12" cy="12" r="1.5" fill="#008080" />
    <circle cx="12" cy="17" r="1.5" fill="#008080" />
  </svg>
)

const PackagingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M3 7H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 7L12 12L21 7"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12V21"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 3L5 4V7"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 3L19 4V7"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="11" r="1" fill="#008080" />
    <circle cx="16" cy="11" r="1" fill="#008080" />
  </svg>
)

const DisplayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M2 6H22V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 2V6M16 2V6"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 10V14M10 12H14"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const WorkwearIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M12 2C10.3431 2 9 3.34315 9 5V7H7C5.89543 7 5 7.89543 5 9V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V9C19 7.89543 18.1046 7 17 7H15V5C15 3.34315 13.6569 2 12 2Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 7H15V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V7Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11V13M12 15V17"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const PromotionalItemsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2" fill="#008080" fillOpacity="0.3" />
  </svg>
)

const StationeryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M4 6H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 4V6M16 4V6M8 10H16M8 14H12"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const FunTimesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12Z"
      stroke="#008080"
      strokeWidth="1.5"
    />
    <path
      d="M8 8V8.01M16 8V8.01"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

// Process Step Icons - Solid Teal Color
const ConsultationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 8C8 8 9 6 12 6C15 6 16 8 16 8"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const StrategyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="7" r="1.5" fill="#008080" />
    <circle cx="12" cy="12" r="1.5" fill="#008080" />
    <circle cx="12" cy="17" r="1.5" fill="#008080" />
  </svg>
)

const RefinementIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="#008080"
      fillOpacity="0.2"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2" fill="#008080" />
  </svg>
)

const ProductionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const services = [
  {
    title: 'Graphic Design',
    description: 'Creative graphic design services for marketing materials, packaging, and digital assets. We create visually stunning designs that capture attention and communicate your message effectively.',
    icon: DesignIcon,
    slug: 'graphic-design',
    image: '/images/services/design.jpg',
    shortDescription: 'Creative designs that capture attention and communicate effectively.',
    features: [
      'Marketing Materials',
      'Social Media Graphics',
      'Infographics',
      'Web Design',
      'Presentation Design',
      'Digital Assets',
    ],
  },
  {
    title: 'Printing',
    description: 'High-quality offset and digital printing for business cards, brochures, banners, and more. We offer comprehensive printing solutions that bring your designs to life with precision and quality.',
    icon: PrintingIcon,
    slug: 'printing-services',
    image: '/images/services/printing.jpg',
    shortDescription: 'High-quality offset and digital printing solutions that bring your designs to life.',
    features: [
      'Business Cards',
      'Brochures & Flyers',
      'Banners & Signage',
      'Catalogs',
      'Posters',
      'Large Format',
    ],
  },
  {
    title: 'Packaging',
    description: 'Innovative packaging solutions that make your products stand out on the shelf. We combine creativity with functionality to create packaging that protects and promotes.',
    icon: PackagingIcon,
    slug: 'packaging-design',
    image: '/images/services/packaging.jpg',
    shortDescription: 'Innovative packaging that makes products stand out on the shelf.',
    features: [
      'Product Packaging',
      'Label Design',
      'Box Design',
      'Sustainable Packaging',
      'Retail Packaging',
      'Custom Solutions',
    ],
  },
  {
    title: 'Display',
    description: 'Professional display solutions that showcase your products and brand. From retail displays to trade show booths, we create impactful visual experiences that attract attention and drive engagement.',
    icon: DisplayIcon,
    slug: 'display',
    image: '/images/services/display.jpg',
    shortDescription: 'Custom display solutions for maximum visual impact and brand presence.',
    features: [
      'Retail Displays',
      'Trade Show Booths',
      'Exhibition Stands',
      'Point of Sale',
      'Window Displays',
      'Custom Displays',
    ],
  },
  {
    title: 'Workwear',
    description: 'Professional branded workwear and corporate uniforms that represent your brand with style. From safety wear to team apparel, we create comfortable and durable workwear solutions.',
    icon: WorkwearIcon,
    slug: 'workwear',
    image: '/images/services/workwear.jpg',
    shortDescription: 'Professional branded workwear and corporate uniforms for your team.',
    features: [
      'Corporate Uniforms',
      'Branded Apparel',
      'Safety Wear',
      'Custom Embroidery',
      'Team Shirts',
      'Professional Attire',
    ],
  },
  {
    title: 'Promotional Items',
    description: 'High-quality branded merchandise and promotional products that increase brand visibility and customer loyalty. From corporate gifts to event giveaways, we help you create memorable brand experiences.',
    icon: PromotionalItemsIcon,
    slug: 'promotional-items',
    image: '/images/services/promotional_items.jpg',
    shortDescription: 'Branded merchandise and promotional products that increase brand visibility.',
    features: [
      'Branded Merchandise',
      'Corporate Gifts',
      'Event Giveaways',
      'Custom Products',
      'Logo Items',
      'Marketing Swag',
    ],
  },
  {
    title: 'Office Stationery',
    description: 'Professional office stationery sets that create a cohesive brand identity across all business communications. From letterheads to business cards, we ensure consistent brand representation.',
    icon: StationeryIcon,
    slug: 'office-stationery',
    image: '/images/services/stationery.jpg',
    shortDescription: 'Professional stationery sets that create a cohesive brand identity.',
    features: [
      'Letterheads',
      'Business Cards',
      'Envelopes',
      'Notepads',
      'Folders',
      'Complete Sets',
    ],
  },
  {
    title: 'Fun Times',
    description: 'Complete event planning and management services for corporate events, team building, conferences, and outdoor activities. We make your events memorable and engaging.',
    icon: FunTimesIcon,
    slug: 'fun-times',
    image: '/images/services/funtimes.jpg',
    shortDescription: 'Complete event planning and management for memorable corporate experiences.',
    features: [
      'Office Parties',
      'Team Buildings',
      'Conference and Expos',
      'Outdoor Events',
    ],
  },
]

// Benefits SVG Icons - Solid Teal Color
const FastTurnaroundIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
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

const ResultDrivenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <circle cx="12" cy="12" r="10" stroke="#008080" strokeWidth="1.5" fill="#008080" fillOpacity="0.1" />
    <circle cx="12" cy="12" r="3" fill="#008080" />
    <path
      d="M12 2L12 12L17 17"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const PremiumQualityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="#008080"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
)

const DedicatedSupportIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="7" r="1" fill="#008080" />
    <path
      d="M9 18L15 18"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const benefits = [
  {
    icon: FastTurnaroundIcon,
    title: 'Fast Turnaround',
    description: 'Streamlined processes and efficient workflows ensure your projects are delivered on time, every time. We understand that time is money, so we optimize our production pipeline to meet your deadlines without compromising on quality.',
    details: 'Standard projects completed in 7-14 business days',
  },
  {
    icon: ResultDrivenIcon,
    title: 'Result-Driven Approach',
    description: 'Every project is strategically designed to deliver measurable business impact. We focus on outcomes that matter—increased brand recognition, improved customer engagement, and tangible growth for your business.',
    details: 'Data-backed strategies that drive real results',
  },
  {
    icon: PremiumQualityIcon,
    title: 'Premium Quality Standards',
    description: 'We use only the finest materials, cutting-edge technology, and meticulous attention to detail. From premium paper stocks to state-of-the-art printing equipment, quality is non-negotiable in everything we produce.',
    details: 'Industry-leading materials and printing technology',
  },
  {
    icon: DedicatedSupportIcon,
    title: 'Dedicated Partnership',
    description: 'Your success is our success. We assign a dedicated account manager who works closely with you throughout every project, ensuring seamless communication, proactive problem-solving, and personalized service that goes beyond expectations.',
    details: 'One-on-one support from concept to delivery',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We start by understanding your vision, goals, and requirements through an in-depth consultation.',
    icon: ConsultationIcon,
  },
  {
    number: '02',
    title: 'Strategy & Design',
    description: 'Our team develops a comprehensive strategy and creates initial design concepts for your approval.',
    icon: StrategyIcon,
  },
  {
    number: '03',
    title: 'Refinement',
    description: 'We collaborate closely with you to refine and perfect the designs until they exceed expectations.',
    icon: RefinementIcon,
  },
  {
    number: '04',
    title: 'Production & Delivery',
    description: 'Once approved, we execute with precision and deliver your final products on time and on budget.',
    icon: ProductionIcon,
  },
]

const industries = [
  {
    name: 'Retail & E-commerce',
    icon: '🛍️',
    description: 'Packaging and branding solutions for retail businesses',
  },
  {
    name: 'Corporate',
    icon: '🏢',
    description: 'Professional stationery and corporate identity packages',
  },
  {
    name: 'Healthcare',
    icon: '🏥',
    description: 'Medical branding and patient communication materials',
  },
  {
    name: 'Food & Beverage',
    icon: '🍽️',
    description: 'Restaurant branding and food packaging design',
  },
  {
    name: 'Real Estate',
    icon: '🏠',
    description: 'Property marketing materials and signage',
  },
  {
    name: 'Technology',
    icon: '💻',
    description: 'Tech startup branding and digital-first design',
  },
]

export default function ServicesPage() {
  const ref = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const industriesRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isIndustriesInView = useInView(industriesRef, { once: true, margin: '-100px' })

  // Industries ticker hover state
  const [isIndustriesHovered, setIsIndustriesHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Mobile detection for performance optimization
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(heroScrollProgress, [0, 1], [1, 0])

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
              What We Offer
            </motion.span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Comprehensive solutions for all your printing, design, and branding needs. 
              From concept to delivery, we bring your vision to life.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-primary text-white font-light text-lg rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30"
              >
                Explore Services
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 border-2 border-primary text-primary font-light text-lg rounded-full hover:bg-primary hover:text-white transition-all"
              >
                Get Started
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        id="services"
        ref={ref}
        className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden"
      >
        {/* Background effects */}
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none"
          animate={{
            background: [
              'radial-gradient(circle at 10% 20%, rgba(0, 128, 128, 0.1) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(145, 120, 93, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 15% 25%, rgba(0, 128, 128, 0.12) 0%, transparent 50%), radial-gradient(circle at 85% 75%, rgba(145, 120, 93, 0.12) 0%, transparent 50%)',
              'radial-gradient(circle at 10% 20%, rgba(0, 128, 128, 0.1) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(145, 120, 93, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
              All Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-600 max-w-2xl mx-auto">
              Discover how we can help transform your brand and elevate your business
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const isEven = index % 2 === 0
              const IconComponent = service.icon
              
              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="flex flex-col md:flex-row gap-6"
                >
                  {/* Even index: Description left (1/4), Image right (3/4) */}
                  {isEven && (
                    <>
                      <div className="w-full md:w-1/4 h-[400px] md:h-[500px] flex flex-col gap-4">
                        <div className="p-6 md:p-8 bg-white flex flex-col justify-between rounded-3xl shadow-lg border border-gray-100 flex-1 overflow-hidden min-h-0">
                          <div className="flex-1 overflow-y-auto pr-2">
                            <div className="flex items-center gap-3 mb-3">
                              <IconComponent />
                              <h3 className="text-2xl md:text-3xl font-normal text-gray-900">
                                {service.title}
                              </h3>
                            </div>
                            <p className="text-sm md:text-base font-light text-gray-600 leading-relaxed mb-4">
                              {service.shortDescription}
                            </p>
                            <div>
                              <h4 className="text-xs font-light text-gray-500 mb-2 uppercase tracking-wider">What&apos;s Included:</h4>
                              <ul className="space-y-1.5">
                                {service.features.map((feature) => (
                                  <li key={feature} className="text-xs md:text-sm font-light text-gray-600 flex items-center">
                                    <span className="w-1 h-1 rounded-full bg-primary mr-2 flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center justify-center gap-2 bg-primary text-white font-light text-xs md:text-sm px-5 py-2.5 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg group flex-shrink-0"
                        >
                          <span>Learn More</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>
                      <div className="w-full md:w-3/4 relative h-[400px] md:h-[500px] overflow-hidden rounded-3xl shadow-lg border border-gray-100">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          style={service.slug === 'workwear' ? { objectPosition: 'center 75%' } : undefined}
                          quality={90}
                        />
                      </div>
                    </>
                  )}
                  
                  {/* Odd index: Image left (3/4), Description right (1/4) */}
                  {!isEven && (
                    <>
                      <div className="w-full md:w-3/4 relative h-[400px] md:h-[500px] overflow-hidden rounded-3xl shadow-lg border border-gray-100 order-first md:order-first">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          style={service.slug === 'workwear' ? { objectPosition: 'center 75%' } : undefined}
                          quality={90}
                        />
                      </div>
                      <div className="w-full md:w-1/4 h-[400px] md:h-[500px] flex flex-col gap-4 order-last md:order-last">
                        <div className="p-6 md:p-8 bg-white flex flex-col justify-between rounded-3xl shadow-lg border border-gray-100 flex-1 overflow-hidden min-h-0">
                          <div className="flex-1 overflow-y-auto pr-2">
                            <div className="flex items-center gap-3 mb-3">
                              <IconComponent />
                              <h3 className="text-2xl md:text-3xl font-normal text-gray-900">
                                {service.title}
                              </h3>
                            </div>
                            <p className="text-sm md:text-base font-light text-gray-600 leading-relaxed mb-4">
                              {service.shortDescription}
                            </p>
                            <div>
                              <h4 className="text-xs font-light text-gray-500 mb-2 uppercase tracking-wider">What&apos;s Included:</h4>
                              <ul className="space-y-1.5">
                                {service.features.map((feature) => (
                                  <li key={feature} className="text-xs md:text-sm font-light text-gray-600 flex items-center">
                                    <span className="w-1 h-1 rounded-full bg-primary mr-2 flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center justify-center gap-2 bg-primary text-white font-light text-xs md:text-sm px-5 py-2.5 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg group flex-shrink-0"
                        >
                          <span>Learn More</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>
                    </>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm font-light text-gray-500 uppercase tracking-widest mb-4 block"
            >
              How We Work
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-600 max-w-2xl mx-auto">
              A proven workflow designed to deliver exceptional results every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Connecting line (desktop only) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent z-0" style={{ width: 'calc(100% + 2.5rem)' }} />
                  )}

                  <div className="relative z-10 h-full p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <div className="text-4xl md:text-5xl font-light text-primary/20">{step.number}</div>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <IconComponent />
                      </motion.div>
                      <h3 className="text-base md:text-lg font-normal text-gray-900 whitespace-nowrap">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base flex-1">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm font-light text-gray-500 uppercase tracking-widest mb-4 block"
            >
              Industries We Serve
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Across <span className="gradient-text">Industries</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-600 max-w-2xl mx-auto">
              We&apos;ve helped businesses across various sectors build powerful brands and create impactful designs
            </p>
          </motion.div>

          <div 
            ref={industriesRef}
            className="relative overflow-hidden py-8"
            onMouseEnter={() => setIsIndustriesHovered(true)}
            onMouseLeave={() => setIsIndustriesHovered(false)}
          >
            {/* Infinite Scrolling Ticker - Single Row Horizontal Scroll */}
            <div className="relative">
              <motion.div
                className="flex gap-6"
                animate={
                  isIndustriesInView && !isIndustriesHovered
                    ? {
                        x: [0, -((280 + 24) * industries.length)],
                      }
                    : {}
                }
                transition={
                  isIndustriesInView && !isIndustriesHovered
                    ? {
                        duration: 50,
                        repeat: Infinity,
                        ease: 'linear',
                      }
                    : {}
                }
              >
                {/* Duplicate industries for seamless loop */}
                {[...industries, ...industries, ...industries].map((industry, index) => (
                  <motion.div
                    key={`${industry.name}-${index}`}
                    whileHover={{ scale: 1.08, y: -8 }}
                    className="group flex-shrink-0 w-[280px] md:w-[320px] p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-md hover:shadow-xl text-center cursor-default"
                  >
                    <motion.div
                      className="text-4xl md:text-5xl mb-3 flex justify-center"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {industry.icon}
                    </motion.div>
                    <h3 className="text-base md:text-lg font-normal text-gray-900 mb-2">{industry.name}</h3>
                    <p className="text-xs md:text-sm font-light text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Why Choose <span className="gradient-text">Us</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-600 max-w-2xl mx-auto">
              What sets us apart in delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <IconComponent />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-normal text-gray-900 mb-2">{benefit.title}</h3>
                      {benefit.details && (
                        <p className="text-xs md:text-sm font-light text-primary uppercase tracking-wider mb-4">
                          {benefit.details}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden">
        {/* Animated Background Orbs - Disabled on mobile for performance */}
        {!isMobile && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none hidden md:block"
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
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl pointer-events-none hidden md:block"
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
          </>
        )}

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
                <span className="text-sm md:text-base font-light text-gray-600">100+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm md:text-base font-light text-gray-600">Industry Leading Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm md:text-base font-light text-gray-600">7-14 Day Turnaround</span>
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
              Join 100+ businesses who&apos;ve trusted us to elevate their brand presence. 
              Let&apos;s discuss your project and create something extraordinary together.
            </motion.p>

            {/* CTA Buttons - Simplified animations on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mb-12"
            >
              {isMobile ? (
                // Simplified mobile buttons - no complex animations
                <>
                  <a
                    href="/contact"
                    className="group relative inline-flex items-center justify-center gap-2 px-8 md:px-12 py-4 md:py-5 bg-primary text-white font-light text-base md:text-lg rounded-full hover:bg-opacity-90 transition-opacity shadow-lg shadow-primary/30"
                  >
                    <span>Start Your Project</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 px-8 md:px-12 py-4 md:py-5 border-2 border-primary text-primary font-light text-base md:text-lg rounded-full hover:bg-primary hover:text-white transition-colors bg-white/50 backdrop-blur-sm"
                  >
                    View Our Work
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </a>
                </>
              ) : (
                // Desktop with full animations
                <>
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
                </>
              )}
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

