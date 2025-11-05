'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// SVG Icons
const GearIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
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

const eventGearServices = [
  {
    title: 'Lighting',
    description: 'Versatile event lighting solutions that set the tone for any occasion. Whether it\'s a corporate function, gala, or conference, our lighting designs enhance the atmosphere, creating the perfect ambiance. From soft, elegant lighting for formal dinners to vibrant, colorful setups for celebrations, we ensure your event looks and feels exceptional.',
    subServices: [
      {
        name: 'Event Lights',
        description: 'We offer versatile event lighting solutions that set the tone for any occasion. Whether it\'s a corporate function, gala, or conference, our lighting designs enhance the atmosphere, creating the perfect ambiance. From soft, elegant lighting for formal dinners to vibrant, colorful setups for celebrations, we ensure your event looks and feels exceptional.',
      },
      {
        name: 'Stage Lights',
        description: 'Our stage lighting solutions are crafted to highlight performances, presentations, and speakers with precision. At Sauti Audio, we use cutting-edge lighting equipment to bring stages to life, ensuring optimal visibility, dramatic effects, and a professional feel. Whether it\'s for concerts, keynote addresses, or theatrical performances, our stage lighting delivers dynamic visuals that captivate and engage your audience.',
      },
    ],
    icon: '💡',
  },
  {
    title: 'Microphones',
    description: 'We provide a wide range of professional microphones to suit any event or setting. From wireless microphones for mobility to high-quality wired options for clear, crisp sound, our solutions ensure that your message is heard loud and clear. Whether it\'s for speeches, presentations, or performances, our microphone setups are tailored to deliver flawless audio for any occasion.',
    subServices: [],
    icon: '🎤',
  },
  {
    title: 'Sound Mixer',
    description: 'We offer top-tier sound mixer solutions to ensure flawless audio control for your events. Our professional-grade mixers provide precise management of multiple audio inputs, delivering clear, balanced sound for any environment. Whether it\'s for corporate events, live performances, or conferences, our sound mixing services ensure that every voice, instrument, and audio source is perfectly synchronized for an exceptional listening experience.',
    subServices: [],
    icon: '🎚️',
  },
  {
    title: 'Speakers & Sound',
    description: 'Our sound and speaker services deliver crystal-clear audio for events of all sizes. We provide high-quality sound systems, including powerful speakers, subwoofers, and audio equipment, ensuring perfect sound clarity and balance. Whether it\'s for live performances, corporate functions, or private parties, we tailor the sound setup to meet your event\'s specific needs, ensuring every beat and voice is heard with precision.',
    subServices: [],
    icon: '🔊',
  },
  {
    title: 'Stage & Podium',
    description: 'We design and provide custom event stage setups to create the perfect platform for your corporate events, product launches, conferences, and performances. Our stage solutions are built to suit the specific requirements of your event, ensuring durability, functionality, and a visually appealing presence. Whether it\'s a large-scale production or an intimate gathering, our stage designs elevate the experience and provide a professional setting for presentations and performances.',
    subServices: [],
    icon: '🎭',
  },
  {
    title: 'LED Screens',
    description: 'We offer high-quality wall LED screens that enhance your event experience with stunning visuals. Perfect for corporate presentations, exhibitions, and live events, our LED screens deliver vibrant images and clear videos, ensuring that your message is seen by all. With flexible installation options and various sizes available, our wall LED screens are designed to captivate your audience and provide a dynamic backdrop for any occasion. Whether for displaying content, branding, or live feeds, our LED screens are a powerful tool to elevate your event.',
    subServices: [],
    icon: '📺',
  },
]

export default function EventGearPage() {
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
              <GearIcon />
            </motion.div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6">
              Event <span className="gradient-text">Gear</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete audio, lighting, and stage equipment solutions for events of all sizes. Professional-grade equipment to ensure your event looks and sounds exceptional.
            </p>
          </motion.div>
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
              Our Equipment
            </motion.span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
                Event Gear <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                Professional equipment for every need
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            {eventGearServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-5xl md:text-6xl flex-shrink-0">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-normal text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-base md:text-lg mb-6">
                      {service.description}
                    </p>
                    
                    {/* Sub-services */}
                    {service.subServices.length > 0 && (
                      <div className="space-y-6 mt-8 pl-4 border-l-2 border-primary/20">
                        {service.subServices.map((subService, subIndex) => (
                          <div key={subService.name} className="space-y-2">
                            <h4 className="text-xl md:text-2xl font-normal text-gray-900">{subService.name}</h4>
                            <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                              {subService.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Equip Your <span className="gradient-text">Event?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Get a quote for your event gear needs today and ensure your event has the professional equipment it deserves.
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
                href="/sauti-audio-events"
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


