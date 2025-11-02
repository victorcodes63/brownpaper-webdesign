'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const packagingServices = [
  {
    title: 'Product Packaging',
    description: 'Eye-catching packaging that protects your products and creates memorable unboxing experiences.',
  },
  {
    title: 'Label Design',
    description: 'Professional labels that communicate essential information while maintaining brand consistency.',
  },
  {
    title: 'Box Design',
    description: 'Custom box designs that enhance product presentation and reflect your brand identity.',
  },
  {
    title: 'Sustainable Packaging',
    description: 'Eco-friendly packaging solutions that align with environmental values without compromising quality.',
  },
  {
    title: 'Retail Packaging',
    description: 'Shelf-ready packaging designs that stand out in competitive retail environments.',
  },
  {
    title: 'Custom Solutions',
    description: 'Bespoke packaging designs tailored to your unique product and brand requirements.',
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
            <div className="text-6xl mb-4">📦</div>
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
              className="aspect-square rounded-3xl bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center"
            >
              <div className="text-9xl opacity-20">📦</div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-primary/20 transition-all"
              >
                <h3 className="text-2xl font-light mb-3">{service.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
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

