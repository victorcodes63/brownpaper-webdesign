'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionValueEvent, useReducedMotion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import ClientTicker from './ClientTicker'

// Split text component for word-by-word animation - simplified on mobile
const SplitText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split(' ')
  const shouldReduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  // Simpler animation on mobile and for reduced motion
  if (shouldReduceMotion || isMobile) {
    return (
      <span className={className}>
        {text}
      </span>
    )
  }
  
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.1,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          className="inline-block mr-3"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

// Magnetic button component - optimized for performance
const MagneticButton = ({ children, href, variant = 'primary' }: { children: React.ReactNode; href: string; variant?: 'primary' | 'secondary' }) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(true) // Start as mobile to avoid initial desktop animations
  
  useEffect(() => {
    // Only check once on mount to avoid re-renders
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || 'ontouchstart' in window
      setIsMobile(mobile)
    }
    checkMobile()
    // Debounce resize to avoid excessive checks
    let resizeTimer: NodeJS.Timeout
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(checkMobile, 150)
    })
    return () => {
      window.removeEventListener('resize', checkMobile)
      clearTimeout(resizeTimer)
    }
  }, [])
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Always call hooks unconditionally (React rules)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })
  
  // Use springs only on desktop, otherwise use motion values directly
  const finalX = (isMobile || shouldReduceMotion) ? x : springX
  const finalY = (isMobile || shouldReduceMotion) ? y : springY

  const handleMouseMove = useRef((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current || isMobile || shouldReduceMotion) return
    
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const distanceX = (e.clientX - centerX) * 0.3
    const distanceY = (e.clientY - centerY) * 0.3
    
    x.set(distanceX)
    y.set(distanceY)
  }).current

  const handleMouseLeave = useRef(() => {
    if (!isMobile && !shouldReduceMotion) {
      x.set(0)
      y.set(0)
    }
  }).current

  const baseClasses = variant === 'primary' 
    ? "px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-light text-base sm:text-lg rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30 text-center"
    : "px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary font-light text-base sm:text-lg rounded-full hover:bg-primary hover:text-white transition-all text-center"

  // Simplified mobile button - no animations
  if (isMobile || shouldReduceMotion) {
    return (
      <a
        href={href}
        className={baseClasses}
      >
        {children}
      </a>
    )
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: finalX, y: finalY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={baseClasses}
    >
      {children}
    </motion.a>
  )
}

// Interactive gradient mesh that follows cursor - disabled on mobile
const InteractiveGradientMesh = () => {
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 })
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Only add mousemove on desktop
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        if (typeof window === 'undefined') return
        const screenWidth = window.innerWidth
        const screenHeight = window.innerHeight
        const xPercent = ((e.clientX / screenWidth) * 60) + 20
        const yPercent = ((e.clientY / screenHeight) * 40) + 30
        setGradientPos({ x: xPercent, y: yPercent })
      }
      window.addEventListener('mousemove', handleMouseMove)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('resize', checkMobile)
      }
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none transition-opacity duration-500"
      style={{
        opacity: isMounted ? 0.5 : 0.3,
        background: isMounted ? `
          radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, rgba(0, 128, 128, 0.35) 0%, transparent 45%),
          radial-gradient(circle at ${100 - gradientPos.x}% ${100 - gradientPos.y}%, rgba(145, 120, 93, 0.35) 0%, transparent 45%),
          radial-gradient(circle at 50% 50%, rgba(0, 128, 128, 0.2) 0%, transparent 65%)
        ` : `
          radial-gradient(circle at 20% 30%, rgba(0, 128, 128, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(145, 120, 93, 0.2) 0%, transparent 50%)
        `,
      }}
    />
  )
}

// Hero video background component - minimal visibility, optimized loading
const HeroVideoBackground = () => {
  const shouldReduceMotion = useReducedMotion()
  const [shouldLoad, setShouldLoad] = useState(false)
  
  useEffect(() => {
    // Delay video loading slightly to prioritize critical content
    const timer = setTimeout(() => setShouldLoad(true), 100)
    return () => clearTimeout(timer)
  }, [])
  
  if (shouldReduceMotion || !shouldLoad) {
    return null // Don't show video for reduced motion preference or until ready
  }
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/hero/Rail Strike Newspaper Headlines.mp4" type="video/mp4" />
      </video>
      {/* Heavy overlay for minimal video visibility */}
      <div className="absolute inset-0 bg-white/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
    </div>
  )
}

// Floating geometric shapes - simplified on mobile
const FloatingGeometricShape = ({ delay, position, size }: { delay: number; position: { x: string; y: string }; size: string }) => {
  const shouldReduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  if (shouldReduceMotion || isMobile) {
    return null // Hide on mobile and for reduced motion preference
  }

  return (
    <motion.div
      className={`absolute ${position.x} ${position.y} ${size} opacity-20 hidden lg:block`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.2, 0.3, 0.2],
        scale: [1, 1.1, 1],
        rotate: [0, 10, 0],
        x: [0, 20, 0],
        y: [0, 30, 0],
      }}
      transition={{
        duration: 8 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
      }}
      style={{
        background: `linear-gradient(135deg, rgba(0, 128, 128, 0.3), rgba(145, 120, 93, 0.3))`,
        borderRadius: '50%',
        filter: 'blur(40px)',
      }}
    />
  )
}

// Animated grid background - static on mobile for performance
const AnimatedGrid = () => {
  const ref = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  
  // Always call hooks unconditionally, then conditionally use values
  const gridYDesktop = useTransform(scrollYProgress, [0, 1], [0, 100])
  const gridYMobile = useTransform(scrollYProgress, [0, 1], [0, 0])
  const gridY = (isMobile || shouldReduceMotion) ? gridYMobile : gridYDesktop
  
  return (
    <>
      <div ref={heroRef} className="absolute inset-0" />
      <motion.div
        ref={ref}
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{ y: gridY }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#008080" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
        </svg>
      </motion.div>
    </>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Always call hooks unconditionally, then conditionally use values
  const yDesktop = useTransform(scrollYProgress, [0, 1], [0, 300])
  const yMobile = useTransform(scrollYProgress, [0, 1], [0, 0])
  const y = (isMobile || shouldReduceMotion) ? yMobile : yDesktop
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
  
  const scaleDesktop = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const scaleMobile = useTransform(scrollYProgress, [0, 1], [1, 1])
  const scale = (isMobile || shouldReduceMotion) ? scaleMobile : scaleDesktop

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden bg-white"
    >
      {/* Video Background - Behind everything */}
      <HeroVideoBackground />

      {/* Enhanced animated background with interactive elements - Above video */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none z-[1]"
        style={{ opacity: opacity }}
      >
        {/* Animated grid - more visible */}
        <AnimatedGrid />

        {/* Interactive gradient mesh - more vibrant */}
        <InteractiveGradientMesh />
        
        {/* Additional subtle mesh layers - static on mobile */}
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none hidden lg:block"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(0, 128, 128, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(0, 128, 128, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, rgba(0, 128, 128, 0.2) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Animated orbs - hidden on mobile for performance */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl hidden lg:block"
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
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl hidden lg:block"
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

        {/* Floating geometric shapes */}
        <FloatingGeometricShape delay={0} position={{ x: 'top-32', y: 'left-1/4' }} size="w-64 h-64" />
        <FloatingGeometricShape delay={2} position={{ x: 'bottom-40', y: 'right-1/3' }} size="w-80 h-80" />
        <FloatingGeometricShape delay={4} position={{ x: 'top-1/2', y: 'right-1/4' }} size="w-48 h-48" />
      </motion.div>

      {/* Main Content Container - Optimized for viewport */}
      <div className="relative z-10 flex flex-col min-h-screen lg:h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex-1 flex items-center py-8 sm:py-12 md:py-16 overflow-visible">
          <div className="relative w-full flex items-center justify-center overflow-visible">
            
            {/* Text Content - Centered */}
            <motion.div
              className="relative z-20 flex flex-col justify-center items-center text-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-0 overflow-visible max-w-4xl mx-auto"
              style={{ y }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Headline - optimized weight, optimized for mobile */}
              <motion.h1
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-[-0.02em] leading-[1.15] sm:leading-[1.2] mb-2 sm:mb-3 md:mb-4 overflow-visible"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{ lineHeight: '1.2' }}
              >
                <div className="block mb-1">
                  <SplitText text="Think Different." delay={0.2} />
                </div>
                <div className="block mb-1">
                  <SplitText text="Create" delay={0.8} />
                </div>
                <div className="block pb-4 overflow-visible">
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4, ease: [0.6, -0.05, 0.01, 0.99] }}
                    className="gradient-text block overflow-visible"
                    style={{ lineHeight: '1.2', paddingBottom: '0.25rem' }}
                  >
                    Differently.
                  </motion.span>
                </div>
              </motion.h1>

              {/* Subtitle - enhanced weight and aspirational messaging */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                className="mb-4 md:mb-6"
              >
                <p className="text-base sm:text-lg md:text-xl font-medium text-white leading-relaxed mb-2 drop-shadow-lg">
                  Building Africa&apos;s premier printing, design, and branding powerhouse.
                </p>
                <p className="text-sm sm:text-base md:text-lg font-medium text-white/90 leading-relaxed drop-shadow-lg">
                  Transforming visions into exceptional visual experiences across the continent.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2, ease: [0.6, -0.05, 0.01, 0.99] }}
                className="flex flex-col sm:flex-row gap-4 mb-4 md:mb-6"
              >
                <MagneticButton href="/contact" variant="primary">
                  Start Your Project
                </MagneticButton>
                <MagneticButton href="/services" variant="secondary">
                  View Our Services
                </MagneticButton>
              </motion.div>

            </motion.div>
          </div>
        </div>
        
        {/* Client Ticker - Centered across full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-4 md:pt-6 pb-4 md:pb-6 border-t border-gray-200/50"
        >
          <ClientTicker />
        </motion.div>
      </div>

    </section>
  )
}
