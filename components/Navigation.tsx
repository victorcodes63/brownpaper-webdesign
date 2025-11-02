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

// Services organized by category
const serviceCategories = [
  {
    category: 'Printing',
    icon: PrintingIcon,
    href: '/services/printing-services',
    services: [
      'Business Cards',
      'Brochures & Flyers',
      'Banners & Signage',
      'Stationery',
      'Catalogs',
      'Posters',
    ],
  },
  {
    category: 'Design',
    icon: DesignIcon,
    href: '/services/graphic-design',
    services: [
      'Graphic Design',
      'Web Design',
      'Social Media Graphics',
      'Infographics',
      'Marketing Materials',
      'Presentation Design',
    ],
  },
  {
    category: 'Branding',
    icon: BrandingIcon,
    href: '/services/brand-identity',
    services: [
      'Logo Design',
      'Brand Identity',
      'Brand Guidelines',
      'Color Palettes',
      'Typography',
      'Visual Language',
    ],
  },
  {
    category: 'Packaging',
    icon: PackagingIcon,
    href: '/services/packaging-design',
    services: [
      'Product Packaging',
      'Label Design',
      'Box Design',
      'Sustainable Packaging',
      'Retail Packaging',
      'Custom Solutions',
    ],
  },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [navHeight, setNavHeight] = useState(73)
  const servicesRef = useRef<HTMLDivElement>(null)
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
    }

    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isServicesOpen])

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ]

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
                      <div className="grid grid-cols-4 gap-8">
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

          {/* Other Nav Items */}
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="text-sm font-light hover:text-primary transition-colors relative group"
            >
              {item.name}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"
              />
            </motion.a>
          ))}
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

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                className="block text-sm font-light text-gray-600 hover:text-primary transition-colors py-2 border-b border-gray-100"
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
                  className="w-full flex items-center justify-between text-sm font-light text-gray-600 hover:text-primary transition-colors py-2"
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
                            className="flex items-center gap-3 py-2 hover:text-primary transition-colors cursor-pointer"
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

              {/* Mobile Nav Links */}
              {navItems.filter(item => item.name !== 'Home').map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block text-sm font-light text-gray-600 hover:text-primary transition-colors py-2 border-b border-gray-100 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}

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

