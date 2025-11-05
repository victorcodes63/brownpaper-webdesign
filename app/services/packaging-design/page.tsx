'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// SVG Icon - Solid Teal Color
const PackagingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
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
  </svg>
)

const packagingServices = [
  {
    title: 'Branded Gift Bags',
    description: 'Custom-branded gift bags perfect for retail, events, and corporate gifts. Available in various sizes, materials, and handle options. High-quality printing ensures your brand stands out.',
    icon: PackagingIcon,
  },
  {
    title: 'Non-Woven Bags',
    description: 'Eco-friendly non-woven bags with your branding. Durable, reusable, and perfect for shopping, events, and promotional purposes. Available in various sizes and colors.',
    icon: PackagingIcon,
  },
  {
    title: 'Jute Bags',
    description: 'Sustainable jute bags with custom printing and branding. Natural, biodegradable material perfect for eco-conscious brands. Durable and stylish for everyday use.',
    icon: PackagingIcon,
  },
  {
    title: 'Tote Bags',
    description: 'Versatile tote bags with your custom design and branding. Perfect for shopping, events, and promotional giveaways. Available in various materials including canvas and cotton.',
    icon: PackagingIcon,
  },
  {
    title: 'Kraft Bags',
    description: 'Eco-friendly kraft paper bags with custom printing. Natural brown finish perfect for sustainable brands. Available in various sizes with custom handles and closures.',
    icon: PackagingIcon,
  },
  {
    title: 'Product Packaging',
    description: 'Custom product packaging solutions designed to protect and showcase your products. From boxes to pouches, we create packaging that enhances your brand and product presentation.',
    icon: PackagingIcon,
  },
  {
    title: 'Wine Bags',
    description: 'Elegant wine bags with custom branding perfect for retail, gifts, and events. Available in various sizes to accommodate different bottle sizes with premium finishes.',
    icon: PackagingIcon,
  },
  {
    title: 'Drawstring Bags',
    description: 'Convenient drawstring bags with your branding. Perfect for events, promotional items, and retail packaging. Available in various materials and sizes.',
    icon: PackagingIcon,
  },
  {
    title: 'Packaging Boxes',
    description: 'Custom packaging boxes designed to fit your products perfectly. Available in various sizes, materials, and finishes. Custom printing and branding options available.',
    icon: PackagingIcon,
  },
  {
    title: 'Product Stickers',
    description: 'Custom product stickers for labeling and branding. Weather-resistant options available for various applications. Perfect for product identification and brand promotion.',
    icon: PackagingIcon,
  },
  {
    title: 'Non-Woven Shopper',
    description: 'Durable non-woven shopper bags with your custom branding. Reusable and eco-friendly, perfect for retail and promotional purposes. Available in various sizes and colors.',
    icon: PackagingIcon,
  },
  {
    title: 'Pouches',
    description: 'Custom pouches for product packaging and storage. Available in various materials including paper, plastic, and fabric. Custom printing and sealing options available.',
    icon: PackagingIcon,
  },
]

const benefits = [
  {
    title: 'Brand Protection',
    description: 'Packaging that reinforces your brand identity at every touchpoint.',
  },
  {
    title: 'Product Safety',
    description: 'Functional designs that ensure your products arrive in perfect condition.',
  },
  {
    title: 'Sustainability',
    description: 'Eco-conscious materials and designs that reduce environmental impact.',
  },
  {
    title: 'Market Appeal',
    description: 'Packaging that attracts customers and drives purchase decisions.',
  },
]

export default function PackagingDesignPage() {
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <PackagingIcon />
            </motion.div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6">
              Packaging <span className="gradient-text">Design</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Innovative packaging solutions that make your products stand out on the shelf
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Package with <span className="gradient-text">Purpose</span>
              </h2>
              <p className="text-lg font-light text-gray-600 mb-6 leading-relaxed">
                Packaging is often the first physical interaction customers have with your brand. 
                It&apos;s not just a container—it&apos;s an opportunity to make a lasting impression and 
                communicate your brand values.
              </p>
              <p className="text-lg font-light text-gray-600 mb-8 leading-relaxed">
                We combine creativity with functionality to create packaging that protects your 
                products while enhancing your brand. From concept to production, we ensure every 
                package tells your story beautifully.
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
                src="/images/indiv_services/product_packaging.png"
                alt="Product packaging solutions"
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
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-4">
              Packaging <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
              Comprehensive packaging solutions for every product type
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200/50 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {packagingServices.map((service, index) => {
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

      {/* Benefits Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-4">
              Why Great <span className="gradient-text">Packaging</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
              >
                <h3 className="text-xl font-light mb-3">{benefit.title}</h3>
                <p className="text-gray-600 font-light text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Package Your <span className="gradient-text">Products</span>
            </h2>
            <p className="text-lg font-light text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s create packaging that makes your products impossible to ignore.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-primary text-white font-light text-lg rounded-full hover:bg-opacity-90 transition-all"
              >
                Get a Quote
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 border-2 border-primary text-primary font-light text-lg rounded-full hover:bg-primary hover:text-white transition-all"
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

