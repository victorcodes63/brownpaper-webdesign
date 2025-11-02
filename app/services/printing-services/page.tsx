'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

// SVG Icons - Solid Teal Color
const PrintingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
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

const ConsultationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M8 10H16M8 14H16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 2V4M16 2V4"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const DesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      fill="#008080"
      stroke="#008080"
      strokeWidth="1.5"
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

const ProductionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      fill="#008080"
      fillOpacity="0.2"
      stroke="#008080"
      strokeWidth="1.5"
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

const QualityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const DeliveryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M3 7H14L17 10H20C20.5304 10 21.0391 10.2107 21.4142 10.5858C21.7893 10.9609 22 11.4696 22 12V14M22 14H18M22 14V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20C19.4696 20 18.9609 19.7893 18.5858 19.4142C18.2107 19.0391 18 18.5304 18 18C18 17.4696 18.2107 16.9609 18.5858 16.5858C18.9609 16.2107 19.4696 16 20 16C20.5304 16 21.0391 16.2107 21.4142 16.5858C21.7893 16.9609 22 17.4696 22 18V14M5 14C5 14.5304 4.78929 15.0391 4.41421 15.4142C4.03914 15.7893 3.53043 16 3 16C2.46957 16 1.96086 15.7893 1.58579 15.4142C1.21071 15.0391 1 14.5304 1 14C1 13.4696 1.21071 12.9609 1.58579 12.5858C1.96086 12.2107 2.46957 12 3 12C3.53043 12 4.03914 12.2107 4.41421 12.5858C4.78929 12.9609 5 13.4696 5 14Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const printingServices = [
  {
    title: 'Business Cards',
    description: 'Professional business cards that make a lasting first impression. Available in various finishes including matte, gloss, textured, and premium card stocks ranging from standard 350gsm to luxury 500gsm. Custom finishing options include rounded corners, spot UV, foil stamping, and embossing.',
    icon: PrintingIcon,
  },
  {
    title: 'Brochures & Flyers',
    description: 'Eye-catching marketing materials designed to grab attention and communicate your message effectively. From tri-fold brochures to A4 flyers, we handle everything from concept to print. Options include various paper weights, finishes, and folding techniques to maximize impact.',
    icon: PrintingIcon,
  },
  {
    title: 'Banners & Signage',
    description: 'Large format printing for events, trade shows, and retail spaces. Durable and high-quality visual displays using weather-resistant materials. Services include vinyl banners, fabric displays, retractable banners, and custom-sized signage with precision color matching.',
    icon: PrintingIcon,
  },
  {
    title: 'Stationery',
    description: 'Complete stationery sets including letterheads, envelopes, and business forms that reflect your brand identity. Coordinated designs across all stationery items ensure consistent brand representation. Available in multiple paper stocks and printing methods.',
    icon: PrintingIcon,
  },
  {
    title: 'Catalogs',
    description: 'Professional product catalogs that showcase your offerings with stunning photography and elegant layouts. Perfect binding, saddle stitching, or wire binding options available. Custom covers with various finishing options including soft-touch lamination and spot UV.',
    icon: PrintingIcon,
  },
  {
    title: 'Posters',
    description: 'Vibrant poster printing for advertising, events, and promotional purposes in various sizes and finishes. From A4 to large format, printed on premium paper or vinyl depending on your needs. UV protection available for outdoor display longevity.',
    icon: PrintingIcon,
  },
]

const processes = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We begin with an in-depth consultation to understand your printing needs, quantity requirements, and specifications. Our team helps you choose the right materials, finishes, and printing methods to achieve your desired outcome while staying within budget.',
    icon: ConsultationIcon,
  },
  {
    step: '02',
    title: 'Design & Proof',
    description: 'Our experienced team prepares your files for print, ensuring optimal resolution, color accuracy, and print readiness. We provide digital proofs for your approval, allowing you to see exactly how your final product will look before production begins.',
    icon: DesignIcon,
  },
  {
    step: '03',
    title: 'Production',
    description: 'We use state-of-the-art printing equipment and premium materials to produce your printed materials. Our offset and digital presses ensure sharp, vibrant results with consistent quality across every piece in your order. Quality control is maintained throughout the entire production process.',
    icon: ProductionIcon,
  },
  {
    step: '04',
    title: 'Quality Check',
    description: 'Every piece is carefully inspected to ensure it meets our high standards of quality. We check for color accuracy, print clarity, finishing quality, and overall consistency. Only products that pass our rigorous quality checks are approved for delivery.',
    icon: QualityIcon,
  },
  {
    step: '05',
    title: 'Delivery',
    description: 'Your finished products are carefully packaged to prevent damage during transit. We offer various delivery options including standard shipping, express delivery, and local pickup. Our packaging ensures your materials arrive in pristine condition, ready for immediate use.',
    icon: DeliveryIcon,
  },
]

export default function PrintingServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 150])
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <PrintingIcon />
            </motion.div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6">
              Printing <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              High-quality offset and digital printing for all your business needs. From business cards to large format banners, we deliver exceptional quality with precision and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
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
              What We Do
            </motion.span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
                Professional <span className="gradient-text">Printing</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                Exceptional quality meets modern technology
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
                At Brown Paper, we offer comprehensive printing services that combine traditional craftsmanship with modern technology. Whether you need a small batch of business cards or a large print run of marketing materials, we deliver exceptional quality every time.
              </p>
              <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
                Our state-of-the-art printing equipment ensures sharp, vibrant results with consistent color accuracy across all projects. We work exclusively with premium papers and offer an extensive range of finishing options including embossing, foil stamping, spot UV, and various lamination techniques to make your materials truly stand out.
              </p>
              <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
                From initial consultation to final delivery, our experienced team provides personalized service and attention to detail. We understand that every project is unique, and we work closely with you to ensure your printed materials exceed expectations and effectively communicate your message.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
                alt="Professional printing services"
                fill
                className="object-cover"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our Services
            </motion.span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
                What We <span className="gradient-text">Print</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                Comprehensive printing solutions for every need
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {printingServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent />
                    <h3 className="text-xl md:text-2xl font-normal text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              How We Work
            </motion.span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                A streamlined approach to exceptional results
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            {processes.map((process, index) => {
              const IconComponent = process.icon
              return (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-8 items-start p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl"
                >
                  <div className="flex-shrink-0">
                    <div className="text-4xl md:text-5xl font-light gradient-text mb-4">
                      {process.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent />
                      <h3 className="text-xl md:text-2xl font-normal text-gray-900 whitespace-nowrap">{process.title}</h3>
                    </div>
                    <p className="text-gray-600 font-light leading-relaxed text-base md:text-lg">
                      {process.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6"
            >
              Ready to <span className="gradient-text">Print?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Get a quote for your printing project today and experience the difference that professional quality makes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 px-8 md:px-12 py-4 md:py-5 bg-primary text-white font-light text-base md:text-lg rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30 overflow-hidden"
              >
                <span className="relative z-10">Get a Quote</span>
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
                href="/services"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 md:px-12 py-4 md:py-5 border-2 border-primary text-primary font-light text-base md:text-lg rounded-full hover:bg-primary hover:text-white transition-all bg-white/50 backdrop-blur-sm"
              >
                View All Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
