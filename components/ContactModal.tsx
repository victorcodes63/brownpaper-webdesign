'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'info@bpe.co.ke',
          subject: `New Contact Form Submission: ${formData.interest}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: '',
          message: '',
        })
        setTimeout(() => {
          onClose()
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      onClose()
      setTimeout(() => {
        setSubmitStatus('idle')
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: '',
          message: '',
        })
      }, 300)
    }
  }

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] pointer-events-none" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
            onClick={handleClose}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          />

          {/* Modal Container - Centered in viewport */}
          <div 
            className="absolute inset-0 flex items-center justify-center p-4 sm:p-6"
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              minHeight: '100dvh' // Dynamic viewport height for mobile
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ 
                duration: 0.4,
                type: 'spring',
                stiffness: 300,
                damping: 30
              }}
              className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden pointer-events-auto my-auto"
              onClick={(e) => e.stopPropagation()}
              style={{ marginTop: 'auto', marginBottom: 'auto' }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full h-full"
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 30%, rgba(0, 128, 128, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(145, 120, 93, 0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 30% 40%, rgba(0, 128, 128, 0.12) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(145, 120, 93, 0.12) 0%, transparent 50%)',
                      'radial-gradient(circle at 20% 30%, rgba(0, 128, 128, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(145, 120, 93, 0.1) 0%, transparent 50%)',
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Floating orbs */}
                <motion.div
                  className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                    y: [0, 30, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -30, 0],
                    y: [0, -30, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start sm:items-center justify-between p-4 sm:p-6 md:p-8 border-b border-gray-100">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex-1 pr-4"
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-1 sm:mb-2">
                      Let&apos;s Get <span className="gradient-text">Started</span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base font-light text-gray-600">
                      Tell us about your project and we&apos;ll get back to you soon
                    </p>
                  </motion.div>
                  <motion.button
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.3 }}
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-900 disabled:opacity-50 flex-shrink-0"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="modal-name" className="block text-xs sm:text-sm font-light text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="modal-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-gray-200 rounded-xl font-light focus:border-primary focus:outline-none transition-all text-base"
                      required
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <label htmlFor="modal-email" className="block text-xs sm:text-sm font-light text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-gray-200 rounded-xl font-light focus:border-primary focus:outline-none transition-all text-base"
                        required
                        disabled={isSubmitting}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="modal-phone" className="block text-xs sm:text-sm font-light text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="modal-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+254 XXX XXX XXX"
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-gray-200 rounded-xl font-light focus:border-primary focus:outline-none transition-all text-base"
                        disabled={isSubmitting}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <label htmlFor="modal-interest" className="block text-xs sm:text-sm font-light text-gray-700 mb-2">
                      What are you interested in? *
                    </label>
                    <div className="relative">
                      <select
                        id="modal-interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-gray-200 rounded-xl font-light focus:border-primary focus:outline-none transition-all appearance-none cursor-pointer pr-10 sm:pr-12 text-base text-gray-900 min-h-[44px]"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1rem center',
                          backgroundSize: '1.25rem',
                        }}
                        required
                        disabled={isSubmitting}
                      >
                        <option value="" className="font-light text-gray-900">Select an option</option>
                        <option value="printing" className="font-light text-gray-900">Printing Services</option>
                        <option value="brand-identity" className="font-light text-gray-900">Brand Identity & Logo Design</option>
                        <option value="graphic-design" className="font-light text-gray-900">Graphic Design</option>
                        <option value="packaging" className="font-light text-gray-900">Packaging Design</option>
                        <option value="quote" className="font-light text-gray-900">Request a Quote</option>
                        <option value="consultation" className="font-light text-gray-900">Free Consultation</option>
                        <option value="other" className="font-light text-gray-900">Other</option>
                      </select>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="modal-message" className="block text-xs sm:text-sm font-light text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="modal-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      placeholder="Tell us about your project, timeline, budget, or any specific requirements..."
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-gray-200 rounded-xl font-light focus:border-primary focus:outline-none transition-all resize-none text-base"
                      required
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="pt-4"
                  >
                    {submitStatus === 'success' ? (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-green-50 border-2 border-green-200 rounded-xl text-green-700"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-light text-xs sm:text-sm md:text-base text-center">Message sent successfully! We&apos;ll get back to you soon.</span>
                      </motion.div>
                    ) : submitStatus === 'error' ? (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-700"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="font-light text-xs sm:text-sm md:text-base text-center">Something went wrong. Please try again or contact us directly.</span>
                      </motion.div>
                    ) : (
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-light text-base sm:text-lg rounded-xl hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.svg
                              className="w-5 h-5"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path d="M21 12a9 9 0 11-6.219-8.56" strokeWidth="2" strokeLinecap="round" />
                            </motion.svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </>
                        )}
                      </motion.button>
                    )}
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )

  // Render modal using portal to body, outside of navigation component
  if (typeof window !== 'undefined') {
    return createPortal(modalContent, document.body)
  }

  return null
}

