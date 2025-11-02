'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const contactFAQs = [
  {
    question: 'How quickly can I get a response to my inquiry?',
    answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent projects, please call us directly at +254 716 286 489, and we&apos;ll do our best to assist you immediately.',
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes! We offer free initial consultations to discuss your project, understand your needs, and provide expert advice. This can be done in person at our office, via phone, or through video call. Book your consultation through our contact form.',
  },
  {
    question: 'What information should I include in my project inquiry?',
    answer: 'The more details you provide, the better we can assist you. Please include: project type (printing, design, branding, etc.), timeline/deadline, approximate budget, specific requirements or preferences, and any inspiration or reference materials you have.',
  },
  {
    question: 'Can I visit your office to discuss my project in person?',
    answer: 'Absolutely! We welcome in-person meetings at our office located at Mayhouse 680 Hotel Building, 3rd Floor, Nairobi. Please contact us to schedule an appointment. Walk-ins are also welcome during business hours.',
  },
  {
    question: 'Do you provide quotes via email or phone?',
    answer: 'Yes, we can provide initial quotes via email or phone. However, for accurate pricing on complex projects, we recommend a consultation (free) where we can discuss all details and provide a comprehensive quote.',
  },
  {
    question: 'What are your office hours for inquiries?',
    answer: 'Our office is open Monday-Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 4:00 PM. We\'re closed on Sundays. You can reach us via phone, email, or visit us in person during these hours.',
  },
  {
    question: 'Can you work with clients outside of Nairobi?',
    answer: 'Yes, we work with clients across Kenya and East Africa. While in-person meetings are ideal, we can effectively work remotely through phone, email, and video calls. We also arrange shipping for printed materials to various locations.',
  },
  {
    question: 'How do I track the progress of my project?',
    answer: 'We maintain transparent communication throughout your project. You\'ll receive regular updates via email or phone, and we\'ll share progress milestones. For complex projects, we schedule regular check-in meetings to keep you informed.',
  },
]

export default function ContactPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add form submission logic here
  }

  return (
    <main className="relative overflow-hidden min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Let&apos;s discuss how we can bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section
        ref={ref}
        className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden bg-white"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Mesh gradient background */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(circle at 20% 30%, rgba(0, 128, 128, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(145, 120, 93, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(0, 128, 128, 0.1) 0%, transparent 70%)
              `
            }}
          />

          {/* Animated orbs */}
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
          <motion.div
            className="absolute bottom-10 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Headings Row - Aligned on same line */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8 lg:mb-12">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-light"
            >
              Send us a <span className="gradient-text">Message</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-3">
                Contact <span className="gradient-text">Information</span>
              </h2>
              <p className="text-gray-600 font-light text-sm">
                Get in touch with us through any of the following channels.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col"
            >
              <p className="text-gray-600 font-light mb-10">
                Tell us what you&apos;re interested in and we&apos;ll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="pt-0">
                  <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl font-light focus:border-primary focus:outline-none transition-all"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl font-light focus:border-primary focus:outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-light text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 XXX XXX XXX"
                      className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl font-light focus:border-primary focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-light text-gray-700 mb-2">
                    What are you interested in? *
                  </label>
                  <div className="relative">
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl font-light focus:border-primary focus:outline-none transition-all appearance-none cursor-pointer pr-12 text-gray-900"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '1.25rem',
                      }}
                      required
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
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    placeholder="Tell us about your project, timeline, budget, or any specific requirements..."
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl font-light focus:border-primary focus:outline-none transition-all resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-primary text-white font-light text-lg rounded-xl hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:sticky lg:top-32"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 space-y-8">
                {/* Office Location */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary text-2xl">📍</div>
                    <h3 className="font-light text-xl text-gray-900">Office Location</h3>
                  </div>
                  <p className="font-light text-gray-600 ml-10 leading-relaxed">
                    Mayhouse 680 Hotel Building, 3rd Floor<br />
                    Nairobi, Kenya
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary text-2xl">📞</div>
                    <h3 className="font-light text-xl text-gray-900">Phone Number</h3>
                  </div>
                  <a 
                    href="tel:+254716286489" 
                    className="font-light text-gray-600 ml-10 hover:text-primary transition-colors block"
                  >
                    +254 716 286 489
                  </a>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary text-2xl">✉️</div>
                    <h3 className="font-light text-xl text-gray-900">Email Address</h3>
                  </div>
                  <a 
                    href="mailto:info@bpe.co.ke" 
                    className="font-light text-gray-600 ml-10 hover:text-primary transition-colors block"
                  >
                    info@bpe.co.ke
                  </a>
                </div>

                {/* Business Hours */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-light text-xl text-gray-900 mb-4">Business Hours</h3>
                  <div className="space-y-3 font-light text-sm text-gray-600">
                    <div className="flex justify-between items-center py-2">
                      <span>Monday - Friday</span>
                      <span className="text-gray-900 font-light">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>Saturday</span>
                      <span className="text-gray-900 font-light">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>Sunday</span>
                      <span className="text-gray-900 font-light">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Visit Our <span className="gradient-text">Office</span>
            </h2>
            <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
              We&apos;d love to meet you in person and discuss your project.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63822.4681935777!2d36.71872567198559!3d-1.2264682132054967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f111522333eb1%3A0xc897364ee223ce05!2sBrown%20Paper%20%7C%20Nairobi%20%7C%20Kenya%20%7C%20Design%2C%20Printing%2C%20Branding%2C%20Merchandizing%2C%20Signages%2C%20Promotional%20Items%2C%20Conference%20Branding!5e0!3m2!1sen!2ske!4v1762008518033!5m2!1sen!2ske"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Brown Paper Location - Mayhouse 680 Hotel Building, 3rd Floor, Nairobi"
            />
            <div className="absolute bottom-6 right-6 z-10">
              <a
                href="https://maps.app.goo.gl/oqN31Wxp6caDzvmD6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-sm font-light text-gray-700 hover:text-primary flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
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
              Common Questions
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-600 max-w-2xl mx-auto">
              Quick answers to help you get started
            </p>
          </motion.div>

          <div className="space-y-4">
            {contactFAQs.map((faq, index) => {
              const isOpen = openFAQIndex === index
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-b border-gray-200/70 last:border-b-0"
                >
                  <motion.button
                    className="flex justify-between items-center w-full text-left py-6 group"
                    onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-lg md:text-xl font-light text-gray-900 group-hover:text-primary transition-colors duration-300 pr-8">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-primary text-2xl flex-shrink-0"
                    >
                      ▼
                    </motion.span>
                  </motion.button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-base md:text-lg font-light text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: contactFAQs.length * 0.1 + 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-lg font-light text-gray-600 mb-6">
              Still have questions? We&apos;re here to help!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="tel:+254716286489"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 bg-primary text-white font-light text-lg rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30"
              >
                Call Us Now
              </motion.a>
              <motion.a
                href="mailto:info@bpe.co.ke"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 border-2 border-primary text-primary font-light text-lg rounded-full hover:bg-primary hover:text-white transition-all"
              >
                Send Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
