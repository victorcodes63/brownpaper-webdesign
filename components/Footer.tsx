'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const foundedYear = 2022
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Image
              src="/logo/bp_1.png"
              alt="Brown Paper Logo"
              width={140}
              height={56}
              className="h-8 md:h-10 w-auto object-contain mb-6 brightness-0 invert opacity-90"
            />
            <p className="font-light text-sm text-gray-400 leading-relaxed mb-6">
              Premier printing, design, and branding agency based in Nairobi, Kenya. 
              Transforming ideas into impactful visual experiences since {foundedYear}.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/company/brownpaper" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/brownpaper" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/brownpaper" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-light text-white text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-light text-white text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services/graphic-design" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Graphic Design
                </a>
              </li>
              <li>
                <a href="/services/printing-services" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Printing
                </a>
              </li>
              <li>
                <a href="/services/packaging-design" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Packaging
                </a>
              </li>
              <li>
                <a href="/services/display" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Display
                </a>
              </li>
              <li>
                <a href="/services/workwear" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Workwear
                </a>
              </li>
              <li>
                <a href="/services/promotional-items" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Promotional Items
                </a>
              </li>
              <li>
                <a href="/services/office-stationery" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Office Stationery
                </a>
              </li>
              <li>
                <a href="/services/fun-times" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Fun Times
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Sauti Audio Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-1"
          >
            <h3 className="font-light text-white text-lg mb-6">Sauti Audio Events</h3>
            <ul className="space-y-3">
              <li>
                <a href="/sauti-audio-events" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/sauti-audio-events/event-gear" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Event Gear
                </a>
              </li>
              <li>
                <a href="/sauti-audio-events/photography-videography" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Media Production
                </a>
              </li>
              <li>
                <a href="/sauti-audio-events/instrumentalists" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Instrumentalists
                </a>
              </li>
              <li>
                <a href="/sauti-audio-events/event-branding" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Event Branding
                </a>
              </li>
              <li>
                <a href="/sauti-audio-events/event-planning" className="font-light text-sm text-gray-400 hover:text-primary transition-colors">
                  Event Planning
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-light text-white text-lg mb-6">Contact Us</h3>
            <div className="space-y-3 mb-6">
              <div className="font-light text-sm text-gray-400">
                <p className="mb-1">Mayhouse 680 Hotel Building, 3rd Floor</p>
                <p className="mb-2">Nairobi, Kenya</p>
                <a 
                  href="https://maps.app.goo.gl/oqN31Wxp6caDzvmD6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Get Directions →
                </a>
              </div>
              <div className="font-light text-sm">
                <a href="mailto:info@bpe.co.ke" className="text-gray-400 hover:text-primary transition-colors">
                  info@bpe.co.ke
                </a>
              </div>
              <div className="font-light text-sm">
                <a href="tel:+254716286489" className="text-gray-400 hover:text-primary transition-colors">
                  +254 716 286 489
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-light text-white text-sm mb-3">Subscribe to Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors text-sm font-light"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm font-light text-gray-500">
              © {currentYear} Brown Paper. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm font-light">
              <a href="/privacy-policy" className="text-gray-500 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-500 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

