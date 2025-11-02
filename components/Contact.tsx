'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [30, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Handle form submission here
    console.log('Form submitted:', formData)
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitStatus('idle')
    }, 3000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 md:py-40 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
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
              radial-gradient(circle at 10% 20%, rgba(0, 128, 128, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(145, 120, 93, 0.08) 0%, transparent 50%)
            `
          }}
        />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-light text-gray-500 uppercase tracking-widest mb-4 block"
          >
            Get in Touch
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Get in touch and let&apos;s create something amazing together.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileFocus={{ scale: 1.01 }}
            >
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl font-light focus:border-primary focus:outline-none transition-all duration-300 hover:border-gray-300"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              whileFocus={{ scale: 1.01 }}
            >
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl font-light focus:border-primary focus:outline-none transition-all duration-300 hover:border-gray-300"
                required
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileFocus={{ scale: 1.01 }}
          >
            <textarea
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl font-light focus:border-primary focus:outline-none transition-all duration-300 resize-none hover:border-gray-300"
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            className={`w-full px-10 py-5 font-light text-lg rounded-xl transition-all duration-300 shadow-lg ${
              submitStatus === 'success'
                ? 'bg-green-500 text-white shadow-green-500/30'
                : isSubmitting
                ? 'bg-primary/70 text-white cursor-not-allowed'
                : 'bg-primary text-white hover:bg-opacity-90 shadow-primary/30 hover:shadow-xl hover:shadow-primary/40'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Sending...
              </span>
            ) : submitStatus === 'success' ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Message Sent!
              </span>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { icon: '📍', text: 'Nairobi, Kenya' },
            { icon: '✉️', text: 'info@brownpaper.co.ke' },
            { icon: '📞', text: '+254 XXX XXX XXX' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white/50 border border-gray-200/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-primary text-3xl mb-3">{item.icon}</div>
              <div className="font-light text-gray-600">{item.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


