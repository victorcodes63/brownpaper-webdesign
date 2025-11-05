'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// SVG Icons - Solid Teal Color
const WorkwearIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
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

const workwearServices = [
  {
    title: 'Corporate Shirts',
    description: 'Professional corporate shirts designed for business environments. Available in various styles, colors, and sizes with custom branding options.',
    icon: WorkwearIcon,
  },
  {
    title: 'Formal Shirts and Blouses',
    description: 'Elegant formal shirts and blouses for professional settings. Premium quality fabrics with custom tailoring and branding options.',
    icon: WorkwearIcon,
  },
  {
    title: 'Golf Shirts',
    description: 'Comfortable golf shirts perfect for casual corporate wear or team uniforms. Available in various colors with custom logo embroidery or printing.',
    icon: WorkwearIcon,
  },
  {
    title: 'Dustcoats',
    description: 'Professional dustcoats for laboratory, medical, or industrial environments. Durable materials with custom sizing and branding options.',
    icon: WorkwearIcon,
  },
  {
    title: 'Food Safety Jackets',
    description: 'Hygienic food safety jackets designed for kitchen and food service environments. Compliant with safety standards and available with custom branding.',
    icon: WorkwearIcon,
  },
  {
    title: 'Chef Beanies',
    description: 'Professional chef beanies for kitchen staff. Comfortable, hygienic, and available with custom embroidery or printing.',
    icon: WorkwearIcon,
  },
  {
    title: 'T-Shirts',
    description: 'Custom branded t-shirts for teams, events, or promotional purposes. Available in various colors, sizes, and fabric options with custom printing.',
    icon: WorkwearIcon,
  },
  {
    title: 'Guards Attire',
    description: 'Professional security guard uniforms designed for authority and visibility. Durable materials with custom branding and sizing options.',
    icon: WorkwearIcon,
  },
  {
    title: 'Bush Attire',
    description: 'Durable bush and outdoor workwear designed for rugged environments. Weather-resistant materials with custom branding options.',
    icon: WorkwearIcon,
  },
  {
    title: 'Chef Attire',
    description: 'Complete chef uniform sets including jackets, pants, and accessories. Professional kitchen wear with custom branding options.',
    icon: WorkwearIcon,
  },
  {
    title: 'Caps',
    description: 'Custom branded caps for teams, events, or promotional purposes. Available in various styles, colors, and materials with embroidery or printing options.',
    icon: WorkwearIcon,
  },
  {
    title: 'Beanies',
    description: 'Warm and comfortable beanies with custom branding. Perfect for outdoor work or promotional giveaways. Available in various colors and materials.',
    icon: WorkwearIcon,
  },
  {
    title: 'Rainwear',
    description: 'Waterproof rainwear for outdoor workers. Durable and weather-resistant materials with custom sizing and branding options.',
    icon: WorkwearIcon,
  },
  {
    title: 'Half Aprons',
    description: 'Functional half aprons for hospitality, retail, or kitchen environments. Available with custom printing or embroidery.',
    icon: WorkwearIcon,
  },
  {
    title: 'Full Aprons',
    description: 'Comprehensive full aprons for maximum protection in kitchen or workshop environments. Custom sizing and branding available.',
    icon: WorkwearIcon,
  },
  {
    title: 'Reflective Coats',
    description: 'High-visibility reflective coats for safety in low-light conditions. Meets safety standards with custom branding options.',
    icon: WorkwearIcon,
  },
  {
    title: 'Reflective Hats and Jackets',
    description: 'Complete reflective safety gear including hats and jackets. Ensures visibility and safety with custom branding options.',
    icon: WorkwearIcon,
  },
  {
    title: 'Buffs',
    description: 'Versatile buffs for neck protection, face covering, or headwear. Available in various colors with custom printing options.',
    icon: WorkwearIcon,
  },
  {
    title: 'Hoodies',
    description: 'Comfortable branded hoodies for teams or casual corporate wear. Available in various colors, sizes, and materials with custom printing.',
    icon: WorkwearIcon,
  },
  {
    title: 'Rego Jackets',
    description: 'Professional rego jackets for corporate or team use. Custom sizing and branding options available.',
    icon: WorkwearIcon,
  },
  {
    title: 'Conti Suits',
    description: 'Professional conti suits for industrial or workshop environments. Durable materials with custom sizing options.',
    icon: WorkwearIcon,
  },
  {
    title: 'Freezer Jackets',
    description: 'Insulated freezer jackets for cold storage environments. Warm and protective with custom sizing and branding options.',
    icon: WorkwearIcon,
  },
  {
    title: 'Body Warmers',
    description: 'Insulated body warmers for cold weather work. Comfortable and warm with custom branding options.',
    icon: WorkwearIcon,
  },
  {
    title: 'Jackets',
    description: 'Versatile jackets for various work environments. Available in multiple styles with custom sizing and branding options.',
    icon: WorkwearIcon,
  },
  {
    title: 'Gum Boots',
    description: 'Durable gum boots for wet or muddy work environments. Safety-certified options available with custom branding.',
    icon: WorkwearIcon,
  },
  {
    title: 'Safety Boots',
    description: 'Protective safety boots meeting industry safety standards. Various styles available with custom sizing options.',
    icon: WorkwearIcon,
  },
  {
    title: 'Branded Canvas Sneakers',
    description: 'Comfortable branded canvas sneakers for casual work environments. Custom logo printing available on various styles.',
    icon: WorkwearIcon,
  },
]

const processes = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We begin with a comprehensive consultation to understand your workwear needs, brand requirements, and team specifications. Our team helps you choose the right fabrics, styles, and branding options.',
    icon: ConsultationIcon,
  },
  {
    step: '02',
    title: 'Design',
    description: 'Our experienced designers create custom workwear designs that align with your brand identity. We ensure consistent branding across all workwear items while maintaining comfort and functionality.',
    icon: DesignIcon,
  },
  {
    step: '03',
    title: 'Production',
    description: 'We work with trusted suppliers to produce high-quality workwear that meets your specifications. Our production process ensures durability, comfort, and accurate brand representation.',
    icon: ProductionIcon,
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Your finished workwear is carefully packaged and delivered to your location. We ensure proper sizing, quality checks, and timely delivery to meet your team&apos;s needs.',
    icon: DeliveryIcon,
  },
]

export default function WorkwearPage() {
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
              <WorkwearIcon />
            </motion.div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6">
              Workwear <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional branded workwear and corporate uniforms that represent your brand with style. From safety wear to team apparel, we create comfortable and durable workwear solutions.
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
                Professional <span className="gradient-text">Workwear</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                Branded apparel for your team
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
                At Brown Paper, we specialize in creating professional branded workwear that represents your brand with style and professionalism. Our workwear solutions combine comfort, durability, and brand identity to ensure your team looks and feels great.
              </p>
              <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
                We work with high-quality fabrics and offer custom embroidery and printing services to ensure your logo and brand colors are accurately represented. Whether you need corporate uniforms, safety wear, or team apparel, we have the expertise to meet your requirements.
              </p>
              <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
                From initial consultation to final delivery, our experienced team provides personalized service and attention to detail. We understand that workwear is an extension of your brand, and we ensure it reflects the quality and professionalism of your business.
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
                src="/images/indiv_services/workwear.png"
                alt="Professional workwear solutions"
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
                Workwear <span className="gradient-text">Products</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                Complete workwear solutions
              </p>
            </div>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200/50 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {workwearServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <IconComponent />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-normal text-gray-900 mb-1">{service.title}</h3>
                      <p className="text-sm text-gray-600 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
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
                From concept to delivery
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
              Ready for Professional <span className="gradient-text">Workwear?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Get a quote for your workwear project today and outfit your team with professional branded apparel.
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
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 md:px-12 py-4 md:py-5 border-2 border-primary text-primary font-light text-base md:text-lg rounded-full hover:bg-primary hover:text-white transition-all bg-white/50 backdrop-blur-sm"
              >
                View All Services
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


