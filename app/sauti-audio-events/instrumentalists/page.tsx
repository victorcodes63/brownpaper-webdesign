'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// SVG Icon
const MusicIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path
      d="M9 18V5L21 3V16"
      stroke="#008080"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="6" cy="18" r="3" stroke="#008080" strokeWidth="1.5" />
    <circle cx="18" cy="16" r="3" stroke="#008080" strokeWidth="1.5" />
  </svg>
)

const instrumentalistServices = [
  {
    title: 'DJ Services',
    description: 'Our professional DJ services are designed to elevate the energy and atmosphere of your events. Whether it\'s a corporate function, wedding, birthday party, or any special occasion, our experienced DJs curate the perfect playlist to match your theme and keep your guests engaged. With a diverse music selection and top-of-the-line equipment, we ensure a seamless flow of entertainment that creates unforgettable moments. Our DJs are not only skilled at reading the crowd but also adept at interacting with guests, making every event a lively and enjoyable experience.',
    icon: '🎧',
  },
  {
    title: 'Corporate & Social MC',
    description: 'We provide professional MC services for both corporate and social events, ensuring that your gathering runs smoothly and engages your audience. Our experienced Master of Ceremonies is skilled in facilitating various types of events, from formal corporate functions and conferences to lively social celebrations like weddings and parties. With a charismatic presence and excellent communication skills, our MCs keep the event flowing seamlessly, introducing speakers, managing transitions, and creating an enjoyable atmosphere. Trust us to add a professional touch to your event and keep your guests entertained and informed throughout the proceedings.',
    icon: '🎤',
  },
  {
    title: 'Saxophonist',
    description: 'At Sauti Audio, we offer professional saxophonist services to add a touch of elegance and sophistication to your events. Whether it\'s a corporate gathering, wedding, cocktail party, or any special occasion, our talented saxophonists deliver captivating performances that create an inviting atmosphere. With a diverse repertoire spanning jazz, pop, and classic melodies, our musicians can tailor their performance to suit the mood and theme of your event. Enhance your guests\' experience with the smooth sounds of a saxophonist, providing a memorable musical backdrop that resonates long after the event ends.',
    icon: '🎷',
  },
  {
    title: 'Violinist',
    description: 'At Sauti Audio, our professional violinist services add elegance and sophistication to any event. Whether for weddings, corporate functions, or intimate gatherings, our skilled violinists perform a range of classical and contemporary pieces, creating a captivating atmosphere tailored to your event.',
    icon: '🎻',
  },
]

export default function InstrumentalistsPage() {
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
              <MusicIcon />
            </motion.div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6">
              <span className="gradient-text">Instrumentalists</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Talented musicians and performers to elevate your event experience with professional entertainment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
                Entertainment <span className="gradient-text">Services</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                Elevate your event atmosphere
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {instrumentalistServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl"
              >
                <div className="text-4xl md:text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-normal text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
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
              Ready to Elevate Your <span className="gradient-text">Event?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Get a quote for your entertainment needs today and make your event truly memorable.
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


