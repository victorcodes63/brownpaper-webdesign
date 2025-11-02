'use client'

import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const faqs = [
  {
    question: 'What printing services do you offer?',
    answer: 'We offer a comprehensive range of printing services including business cards, brochures, flyers, banners, stationery, catalogs, posters, and large-format printing. We use both offset and digital printing technologies to ensure the highest quality results for all your printing needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on the scope and complexity. A simple business card design and print can take 5-7 business days, while a complete brand identity package may take 4-6 weeks. We always provide a detailed timeline during our initial consultation and keep you updated throughout the process.',
  },
  {
    question: 'Do you offer design services along with printing?',
    answer: 'Absolutely! We are a full-service design and printing agency. Our team of talented designers can create everything from logos and brand identities to marketing materials, packaging designs, and digital assets. We can work with existing designs or create something completely new for your brand.',
  },
  {
    question: 'What is your minimum order quantity?',
    answer: 'Minimum order quantities vary by product type. For standard printing jobs like business cards, our minimum is typically 100 units. For custom packaging or specialty items, minimums may be higher. Contact us with your specific needs, and we\'ll provide a detailed quote including minimum order requirements.',
  },
  {
    question: 'Can I see samples of your previous work?',
    answer: 'Yes! We encourage potential clients to view our portfolio, which showcases our diverse range of projects. You can also request physical samples for certain products. We\'re happy to discuss your specific needs and show you relevant examples from our past work during a consultation.',
  },
  {
    question: 'Do you handle international shipping?',
    answer: 'While we primarily serve clients in Kenya and East Africa, we can arrange international shipping for larger orders. Shipping costs and timelines will vary based on destination and order size. Let us know your requirements, and we\'ll provide shipping options and quotes.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including bank transfers, mobile money (M-Pesa, Airtel Money), credit/debit cards, and cash payments for local clients. Payment terms may vary depending on project size - we typically require a 50% deposit to begin work, with the balance due upon completion.',
  },
  {
    question: 'Can you work with my existing brand guidelines?',
    answer: 'Definitely! We excel at working within existing brand guidelines to maintain consistency across all materials. Whether you have a detailed brand manual or just basic guidelines, we ensure all our work aligns with your brand identity and standards.',
  },
]

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const shouldReduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  
  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Disable parallax on mobile
  const yDesktop = useTransform(scrollYProgress, [0, 1], [30, -30])
  const yMobile = useTransform(scrollYProgress, [0, 1], [0, 0])
  const y = (isMobile || shouldReduceMotion) ? yMobile : yDesktop
  
  const opacityDesktop = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const opacityMobile = useTransform(scrollYProgress, [0, 1], [1, 1])
  const opacity = (isMobile || shouldReduceMotion) ? opacityMobile : opacityDesktop

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
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
              radial-gradient(circle at 30% 40%, rgba(0, 128, 128, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(145, 120, 93, 0.08) 0%, transparent 50%)
            `
          }}
        />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-light text-gray-500 uppercase tracking-widest mb-4 block text-left"
          >
            Questions & Answers
          </motion.span>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
              Everything you need to know about our services and processes
            </p>
          </div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <motion.button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-lg md:text-xl font-light text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4">
                      <motion.p
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-gray-600 font-light leading-relaxed text-base md:text-lg"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-width CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 md:mt-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary/95 to-secondary py-6 md:py-8 px-8 md:px-12 shadow-2xl"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background effects - lighter blur on mobile */}
            <div className="absolute inset-0 opacity-20">
              <div className={`absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'}`} />
              <div className={`absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'}`} />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-1">
                  Ready to Start Your Project?
                </h3>
                <p className="text-sm md:text-base font-light text-white/90">
                  Get in touch with us today and let&apos;s bring your vision to life
                </p>
              </div>
              <div className="flex-shrink-0">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block px-6 md:px-10 py-3 md:py-4 bg-white text-primary font-light text-sm md:text-base rounded-full hover:bg-white/95 transition-all shadow-lg shadow-black/20 whitespace-nowrap"
                >
                  Get Started
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

