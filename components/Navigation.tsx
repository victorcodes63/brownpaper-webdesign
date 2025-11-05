'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import ContactModal from './ContactModal'

// SVG Icon Components - Solid Teal Color
const PrintingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
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

const DesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
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

const BrandingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
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

const PackagingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
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
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
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
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
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
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
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
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
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
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
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

// Sauti Audio Events Icons
const EventGearIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
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
  </svg>
)

const PhotographyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
    <path
      d="M3 9C3 7.89543 3.89543 7 5 7H7.5L9 5H15L16.5 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V9Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="13" r="3" stroke="#008080" strokeWidth="1.5" />
  </svg>
)

const InstrumentalistsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
    <path
      d="M9 18V5L21 3V16"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="6" cy="18" r="3" stroke="#008080" strokeWidth="1.5" />
    <circle cx="18" cy="16" r="3" stroke="#008080" strokeWidth="1.5" />
  </svg>
)

const EventBrandingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
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

const EventPlanningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
    <path
      d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 14H8.01M12 14H12.01M16 14H16.01"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

// Sauti Audio Events services
const sautiAudioServices = [
  {
    title: 'Event Gear',
    icon: EventGearIcon,
    href: '/sauti-audio-events/event-gear',
    description: 'Audio, lighting, and stage equipment',
  },
  {
    title: 'Media Production',
    icon: PhotographyIcon,
    href: '/sauti-audio-events/photography-videography',
    description: 'Professional visual documentation',
  },
  {
    title: 'Instrumentalists',
    icon: InstrumentalistsIcon,
    href: '/sauti-audio-events/instrumentalists',
    description: 'DJs, MCs, musicians, and performers',
  },
  {
    title: 'Event Branding',
    icon: EventBrandingIcon,
    href: '/sauti-audio-events/event-branding',
    description: 'Custom branding solutions',
  },
  {
    title: 'Event Planning',
    icon: EventPlanningIcon,
    href: '/sauti-audio-events/event-planning',
    description: 'Complete event management',
  },
]

// Services organized by category
const serviceCategories = [
  {
    category: 'Graphic Design',
    icon: DesignIcon,
    href: '/services/graphic-design',
    services: [
      'Social Media Management',
      'Unlimited Graphic Design',
      'Marketing Materials',
      'Infographics',
      'Presentation Design',
      'Business Listing & Ads',
    ],
  },
  {
    category: 'Printing',
    icon: PrintingIcon,
    href: '/services/printing-services',
    services: [
      'Business Cards',
      'Brochures & Flyers',
      'Company Profiles',
      'Certificates',
      'Stickers & Labels',
      'Calendars',
    ],
  },
  {
    category: 'Packaging',
    icon: PackagingIcon,
    href: '/services/packaging-design',
    services: [
      'Branded Gift Bags',
      'Product Packaging',
      'Tote Bags',
      'Packaging Boxes',
      'Jute Bags',
      'Kraft Bags',
    ],
  },
  {
    category: 'Display',
    icon: DisplayIcon,
    href: '/services/display',
    services: [
      'Pull Up Banners',
      'X-Banner',
      'Backdrop',
      'Stage Banners',
      'Gazebo Tents',
      'Pop Up Displays',
    ],
  },
  {
    category: 'Workwear',
    icon: WorkwearIcon,
    href: '/services/workwear',
    services: [
      'Corporate Shirts',
      'Formal Shirts & Blouses',
      'T-Shirts',
      'Chef Attire',
      'Safety Boots',
      'Reflective Wear',
    ],
  },
  {
    category: 'Promotional Items',
    icon: PromotionalItemsIcon,
    href: '/services/promotional-items',
    services: [
      'Umbrellas',
      'Tumblers & Mugs',
      'Water Bottles',
      'Pens & Notebooks',
      'Gift Sets',
      'Bluetooth Speakers',
    ],
  },
  {
    category: 'Office Stationery',
    icon: StationeryIcon,
    href: '/services/office-stationery',
    services: [
      'Tape Dispenser',
      'Calculator',
      'Sticky Notes',
      'Notebook',
      'Folders',
      'Staplers',
    ],
  },
  {
    category: 'Fun Times',
    icon: FunTimesIcon,
    href: '/services/fun-times',
    services: [
      'Office Parties',
      'Team Buildings',
      'Conference and Expos',
      'Outdoor Events',
    ],
  },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSautiOpen, setIsSautiOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [navHeight, setNavHeight] = useState(73)
  const servicesRef = useRef<HTMLDivElement>(null)
  const sautiRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 100], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.95)'])
  const backdropBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(20px)'])

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  // Calculate navbar height for dropdown positioning
  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight)
      }
    }
    updateNavHeight()
    window.addEventListener('resize', updateNavHeight)
    return () => window.removeEventListener('resize', updateNavHeight)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
      if (sautiRef.current && !sautiRef.current.contains(event.target as Node)) {
        setIsSautiOpen(false)
      }
    }

    if (isServicesOpen || isSautiOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isServicesOpen, isSautiOpen])

  // NavItems are now inline in the navigation, keeping this empty for mobile menu compatibility
  const navItems: Array<{ name: string; href: string }> = []

  return (
    <motion.nav
      ref={navRef}
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-16"
      id="main-nav"
    >
      <div className="w-full flex items-center justify-between">
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-auto flex items-center"
        >
          <Image
            src="/logo/bp_1.png"
            alt="Brown Paper Logo"
            width={110}
            height={44}
            className="h-[20px] md:h-[24px] w-auto object-contain"
            priority
          />
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {/* Home Link */}
          <motion.a
            href="/"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm font-light hover:text-primary transition-colors relative group"
          >
            Home
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"
            />
          </motion.a>

          {/* About Link */}
          <motion.a
            href="/about"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-light hover:text-primary transition-colors relative group"
          >
            About
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"
            />
          </motion.a>

          {/* Services Dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            {/* Backdrop overlay */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/10 backdrop-blur-sm z-30"
                  onClick={() => setIsServicesOpen(false)}
                  style={{ top: `${navHeight}px` }}
                />
              )}
            </AnimatePresence>
            <motion.a
              href="/services"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm font-light hover:text-primary transition-colors relative group flex items-center gap-1"
            >
              Services
              <motion.svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                animate={{ rotate: isServicesOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-0.5"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"
              />
            </motion.a>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
                  className="fixed left-0 right-0 w-screen bg-white shadow-2xl border-t border-gray-100 overflow-hidden z-40"
                  style={{ top: `${navHeight}px` }}
                >
                  <div className="px-6 md:px-12 py-8">
                    <div className="max-w-7xl mx-auto">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {serviceCategories.map((category, index) => (
                          <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            className="group"
                          >
                            <a
                              href={category.href}
                              onClick={() => setIsServicesOpen(false)}
                              className="flex items-center gap-3 mb-4 hover:text-primary transition-colors cursor-pointer"
                            >
                              <category.icon />
                              <h3 className="text-lg font-light text-gray-900 group-hover:text-primary transition-colors">{category.category}</h3>
                            </a>
                            <ul className="space-y-2">
                              {category.services.map((service) => (
                                <li key={service}>
                                  <span className="text-sm font-light text-gray-600 block py-1 cursor-default">
                                    {service}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 pt-6 border-t border-gray-100 text-center"
                      >
                        <a
                          href="/services"
                          className="inline-flex items-center gap-2 text-sm font-light text-primary hover:gap-3 transition-all"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <span>View All Services</span>
                          <span>→</span>
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sauti Audio Events Dropdown */}
          <div
            ref={sautiRef}
            className="relative"
            onMouseEnter={() => setIsSautiOpen(true)}
            onMouseLeave={() => setIsSautiOpen(false)}
          >
            {/* Backdrop overlay */}
            <AnimatePresence>
              {isSautiOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/10 backdrop-blur-sm z-30"
                  onClick={() => setIsSautiOpen(false)}
                  style={{ top: `${navHeight}px` }}
                />
              )}
            </AnimatePresence>
            <motion.a
              href="/sauti-audio-events"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm font-light hover:text-primary transition-colors relative group flex items-center gap-1"
            >
              Sauti Audio Events
              <motion.svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                animate={{ rotate: isSautiOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-0.5"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"
              />
            </motion.a>

            <AnimatePresence>
              {isSautiOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
                  className="fixed left-0 right-0 w-screen bg-white shadow-2xl border-t border-gray-100 overflow-hidden z-40"
                  style={{ top: `${navHeight}px` }}
                >
                  <div className="px-6 md:px-12 py-8">
                    <div className="max-w-7xl mx-auto">
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
                        {sautiAudioServices.map((service, index) => (
                          <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            className="group flex flex-col"
                          >
                            <a
                              href={service.href}
                              onClick={() => setIsSautiOpen(false)}
                              className="flex items-start gap-3 mb-3 hover:text-primary transition-colors cursor-pointer"
                            >
                              <service.icon />
                              <h3 className="text-lg font-light text-gray-900 group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
                            </a>
                            <p className="text-sm font-light text-gray-600 leading-relaxed flex-grow">
                              {service.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 pt-6 border-t border-gray-100 text-center"
                      >
                        <a
                          href="/sauti-audio-events"
                          className="inline-flex items-center gap-2 text-sm font-light text-primary hover:gap-3 transition-all"
                          onClick={() => setIsSautiOpen(false)}
                        >
                          <span>View All Sauti Audio Events</span>
                          <span>→</span>
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Portfolio Link */}
          <motion.a
            href="/portfolio"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm font-light hover:text-primary transition-colors relative group"
          >
            Portfolio
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"
            />
          </motion.a>

          {/* Contact Link */}
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm font-light hover:text-primary transition-colors relative group"
          >
            Contact
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"
            />
          </motion.a>
        </div>

        <motion.button
          onClick={() => setIsContactModalOpen(true)}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block px-6 py-2 bg-primary text-white font-light text-sm rounded-full hover:bg-opacity-90 transition-all"
        >
          Get Started
        </motion.button>

        {/* Mobile Menu Button - Minimum 44x44px touch target */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              d={isMobileMenuOpen ? "M6 6L18 18M6 18L18 6" : "M3 12H21M3 6H21M3 18H21"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.button>
      </div>

          {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="px-6 py-6 space-y-4">
              {/* Mobile Home Link */}
              <motion.a
                href="/"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
                className="block text-sm font-light text-gray-600 hover:text-primary transition-colors py-3 border-b border-gray-100 min-h-[44px] flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </motion.a>

              {/* Mobile Services Section */}
              <div className="border-b border-gray-100 pb-4">
                <motion.button
                  type="button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsServicesOpen(!isServicesOpen)
                  }}
                  className="w-full flex items-center justify-between text-sm font-light text-gray-600 hover:text-primary transition-colors py-3 min-h-[44px]"
                >
                  <span>Services</span>
                  <motion.svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.button>
                
                {/* Services Link - Clickable to go to services page */}
                <a
                  href="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs font-light text-primary hover:underline py-1 pl-2"
                >
                  View All Services →
                </a>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2 space-y-2">
                        {serviceCategories.map((category, index) => (
                          <motion.a
                            key={category.category}
                            href={category.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setIsServicesOpen(false)
                            }}
                            className="flex items-center gap-3 py-3 hover:text-primary transition-colors cursor-pointer min-h-[44px]"
                          >
                            <category.icon />
                            <span className="text-sm font-light text-gray-700">{category.category}</span>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Sauti Audio Events Section */}
              <div className="border-b border-gray-100 pb-4">
                <motion.button
                  type="button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsSautiOpen(!isSautiOpen)
                  }}
                  className="w-full flex items-center justify-between text-sm font-light text-gray-600 hover:text-primary transition-colors py-3 min-h-[44px]"
                >
                  <span>Sauti Audio Events</span>
                  <motion.svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    animate={{ rotate: isSautiOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.button>
                
                {/* Sauti Audio Events Link - Clickable to go to main page */}
                <a
                  href="/sauti-audio-events"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs font-light text-primary hover:underline py-1 pl-2"
                >
                  View All Sauti Audio Events →
                </a>
                
                <AnimatePresence>
                  {isSautiOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2 space-y-2">
                        {sautiAudioServices.map((service, index) => (
                          <motion.a
                            key={service.title}
                            href={service.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setIsSautiOpen(false)
                            }}
                            className="flex items-center gap-3 py-2 hover:text-primary transition-colors cursor-pointer"
                          >
                            <service.icon />
                            <span className="text-sm font-light text-gray-700">{service.title}</span>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Nav Links */}
              <motion.a
                href="/about"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="block text-sm font-light text-gray-600 hover:text-primary transition-colors py-3 border-b border-gray-100 min-h-[44px] flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </motion.a>
              <motion.a
                href="/portfolio"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="block text-sm font-light text-gray-600 hover:text-primary transition-colors py-3 border-b border-gray-100 min-h-[44px] flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </motion.a>
              <motion.a
                href="/contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="block text-sm font-light text-gray-600 hover:text-primary transition-colors py-3 border-b border-gray-100 last:border-0 min-h-[44px] flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </motion.a>

              <motion.button
                onClick={() => {
                  setIsContactModalOpen(true)
                  setIsMobileMenuOpen(false)
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full text-center py-3 text-sm font-light bg-primary text-white rounded-full hover:bg-opacity-90 transition-all mt-6"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </motion.nav>
  )
}

