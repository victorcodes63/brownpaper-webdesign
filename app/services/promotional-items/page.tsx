'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// SVG Icons - Solid Teal Color
const PromotionalItemsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
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

const promotionalServices = [
  {
    title: 'Umbrellas',
    description: 'High-quality branded umbrellas perfect for rainy seasons. Available in various sizes and styles with custom logo printing or embroidery.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Medals',
    description: 'Custom-designed medals for awards, sports events, and recognition ceremonies. Available in various metals and finishes with custom engraving.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Awards',
    description: 'Elegant award plaques and trophies for corporate recognition, employee achievements, and special occasions. Custom-designed with your branding.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Tumblers',
    description: 'Durable branded tumblers for hot and cold beverages. Available in various sizes and materials with custom logo printing or engraving.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Ceramic Mugs',
    description: 'Classic ceramic mugs with custom branding. Perfect for office use or corporate gifts. Available in various sizes and colors.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Lunch Boxes',
    description: 'Stylish branded lunch boxes for daily use. Available in various sizes and materials with custom logo printing.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Lanyards',
    description: 'Custom branded lanyards for ID cards, keys, and event badges. Available in various colors and materials with custom printing.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Thermo Flasks',
    description: 'High-quality insulated thermo flasks that keep beverages hot or cold. Perfect for on-the-go professionals with custom branding options.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Thermo Mugs',
    description: 'Insulated thermo mugs for beverages. Available in various sizes and styles with custom logo printing or engraving.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Lunch Bags',
    description: 'Practical branded lunch bags for daily commutes. Available in various sizes and materials with custom logo printing.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Bottle Opener',
    description: 'Practical branded bottle openers for events and corporate gifts. Available in various materials with custom engraving or printing.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Key Holder',
    description: 'Functional branded key holders for organization. Available in various styles and materials with custom logo printing.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Water Bottles',
    description: 'Eco-friendly branded water bottles for daily hydration. Available in various sizes and materials with custom logo printing.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Cups',
    description: 'Versatile branded cups for various occasions. Available in various sizes, materials, and styles with custom branding.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Cutlery Set',
    description: 'Premium branded cutlery sets for office or home use. Available in various materials with custom engraving or packaging.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Memory Stick',
    description: 'Practical branded USB memory sticks for data storage. Available in various capacities with custom logo printing.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Business Card Holder',
    description: 'Elegant branded business card holders for professional networking. Available in various materials with custom engraving.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Gates Card Holder and Money Clip',
    description: 'Premium combination card holder and money clip for wallets. Available in various materials with custom branding.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Passport Travel',
    description: 'Travel accessories including passport holders and travel wallets. Available in various styles with custom logo printing.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Gift Sets',
    description: 'Curated branded gift sets for corporate gifting. Customizable combinations of promotional items tailored to your brand.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Golf Sets',
    description: 'Premium branded golf accessories and sets for golf enthusiasts. Available in various combinations with custom branding.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Branded Vehicle Emergency Kit',
    description: 'Comprehensive vehicle emergency kits with custom branding. Essential safety items for vehicles with your logo.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Coasters',
    description: 'Stylish branded coasters for desks and tables. Available in various materials and designs with custom logo printing.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Wine Tote',
    description: 'Elegant branded wine totes for wine bottles. Perfect for corporate gifts and events with custom logo printing.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Pens',
    description: 'Quality branded pens for everyday use. Available in various styles and colors with custom logo printing or engraving.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Bluetooth Speakers',
    description: 'Premium branded Bluetooth speakers for audio experiences. Available in various sizes with custom logo printing.',
    icon: PromotionalItemsIcon,
  },
  {
    title: 'Folders',
    description: 'Professional branded folders for document organization. Available in various sizes and materials with custom logo printing.',
    icon: PromotionalItemsIcon,
  },
]

const processes = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We begin with a detailed consultation to understand your promotional goals, target audience, and budget. Our team helps you choose the right products that align with your brand and marketing objectives.',
    icon: ConsultationIcon,
  },
  {
    step: '02',
    title: 'Design',
    description: 'Our experienced designers create custom branding solutions for your promotional items. We ensure your logo and brand message are prominently displayed while maintaining product appeal.',
    icon: DesignIcon,
  },
  {
    step: '03',
    title: 'Production',
    description: 'We work with trusted suppliers to produce high-quality promotional products that meet your specifications. Our production process ensures accurate branding and timely delivery.',
    icon: ProductionIcon,
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Your finished promotional items are carefully packaged and delivered to your location. We ensure quality checks and timely delivery to meet your event deadlines or distribution needs.',
    icon: DeliveryIcon,
  },
]

export default function PromotionalItemsPage() {
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
              <PromotionalItemsIcon />
            </motion.div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6">
              Promotional <span className="gradient-text">Items</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              High-quality branded merchandise and promotional products that increase brand visibility and customer loyalty. From corporate gifts to event giveaways, we help you create memorable brand experiences.
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
                Branded <span className="gradient-text">Promotional Items</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                Increase brand visibility and loyalty
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
                At Brown Paper, we specialize in creating high-quality promotional products that increase brand visibility and customer loyalty. Our promotional items serve as powerful marketing tools that keep your brand in front of customers long after initial contact.
              </p>
              <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
                We work with a wide range of products and offer custom branding solutions including printing, embroidery, engraving, and more. Whether you need corporate gifts, event giveaways, or marketing swag, we help you find the perfect items for your brand.
              </p>
              <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
                From initial consultation to final delivery, our experienced team provides personalized service and attention to detail. We understand that promotional items are an investment in your brand, and we ensure they reflect the quality and values of your business.
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
                src="/images/indiv_services/promotional items .jpg"
                alt="Promotional items and branded merchandise"
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
                Promotional <span className="gradient-text">Products</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                Wide range of branded items
              </p>
            </div>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200/50 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {promotionalServices.map((service, index) => {
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
              Ready for Promotional <span className="gradient-text">Items?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Get a quote for your promotional items today and increase your brand visibility with high-quality branded merchandise.
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


