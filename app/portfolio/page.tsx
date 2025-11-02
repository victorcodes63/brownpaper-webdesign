'use client'

import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useMotionValueEvent } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Animated counter component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })

  useEffect(() => {
    motionValue.set(value)
  }, [motionValue, value])

  useMotionValueEvent(springValue, 'change', (latest) => {
    setDisplayValue(Math.round(latest))
  })

  return <span>{displayValue}{suffix}</span>
}

// Portfolio Stat Card Component
function PortfolioStatCard({ 
  stat, 
  index 
}: { 
  stat: { number: number; suffix: string; label: string; icon: () => JSX.Element }; 
  index: number 
}) {
  const statRef = useRef<HTMLDivElement>(null)
  const isStatInView = useInView(statRef, { once: true, margin: '-50px' })
  const IconComponent = stat.icon
  
  return (
    <motion.div
      ref={statRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl"
    >
      {/* Icon at top */}
      <div className="flex justify-center mb-4">
        <IconComponent />
      </div>
      
      {/* Number with counter animation in middle */}
      <motion.div
        className="text-3xl md:text-4xl lg:text-5xl font-light mb-3 gradient-text"
        initial={{ opacity: 0 }}
        animate={isStatInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.3 + index * 0.1,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {isStatInView && (
          <AnimatedCounter value={stat.number} suffix={stat.suffix} />
        )}
      </motion.div>
      
      {/* Label below number */}
      <div className="text-sm md:text-base font-light text-gray-600">{stat.label}</div>
    </motion.div>
  )
}

const projects = [
  {
    title: 'Luxury Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    description: 'Complete brand identity redesign for a luxury fashion brand, including logo, color palette, and brand guidelines.',
  },
  {
    title: 'Corporate Stationery',
    category: 'Print Design',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80',
    description: 'Professional stationery set for a Fortune 500 company with custom letterhead and envelope designs.',
  },
  {
    title: 'Product Packaging',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80',
    description: 'Eco-friendly packaging design for an organic skincare brand with sustainable materials.',
  },
  {
    title: 'Marketing Collateral',
    category: 'Print Design',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
    description: 'Complete marketing material suite including brochures, flyers, and posters for a tech startup.',
  },
  {
    title: 'Restaurant Branding',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    description: 'Full brand identity for a fine dining restaurant including menu design and interior branding elements.',
  },
  {
    title: 'E-commerce Packaging',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    description: 'Custom packaging solutions for an online retailer with unique unboxing experience design.',
  },
  {
    title: 'Tech Company Rebrand',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    description: 'Complete brand refresh for a growing technology company, modernizing their visual identity.',
  },
  {
    title: 'Event Branding Suite',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80',
    description: 'Comprehensive branding package for a major industry conference including signage and promotional materials.',
  },
  {
    title: 'Retail Display Design',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80',
    description: 'Point-of-sale packaging and display solutions for a consumer goods brand in retail stores.',
  },
]

const categories = ['All', 'Branding', 'Print Design', 'Packaging', 'Graphic Design']

const featuredProjects = [
  {
    title: 'Luxury Fashion Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    problem: 'The client struggled with an outdated brand identity that failed to resonate with their affluent target market. Their visual presence lacked sophistication and didn\'t reflect the premium quality of their products, resulting in decreased brand recognition and sales.',
    solution: 'We developed a complete brand identity redesign that captured the essence of luxury and sophistication. Through extensive market research and brand workshops, we created a refined logo, elegant color palette, and comprehensive brand guidelines that elevated their visual presence. The new identity positioned them as a premium fashion leader, resulting in a 45% increase in brand recognition and 30% growth in sales within the first year.',
    client: 'Luxury Fashion Co.',
    year: '2024',
    results: ['45% increase in brand recognition', '30% growth in sales', 'Premium market positioning'],
  },
  {
    title: 'Corporate Annual Report Design',
    category: 'Print Design',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
    problem: 'A client needed a comprehensive annual report that would communicate complex financial data in an accessible and visually engaging way. Their previous reports were dense, text-heavy documents that failed to engage stakeholders and effectively communicate their achievements and future vision.',
    solution: 'We redesigned their annual report with a sophisticated visual hierarchy, custom infographics, and strategic use of photography. The new design transformed complex data into digestible visual narratives while maintaining professional credibility. Interactive elements and strategic color coding helped readers navigate the content effortlessly, resulting in increased engagement and positive stakeholder feedback.',
    client: 'Global Finance Corp.',
    year: '2024',
    results: ['200% increase in stakeholder engagement', 'Award-winning design recognition', 'Enhanced brand perception'],
  },
  {
    title: 'Eco-Friendly Skincare Packaging',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80',
    problem: 'An organic skincare brand needed packaging that aligned with their sustainable values while standing out on crowded retail shelves. Their existing packaging was generic, environmentally unfriendly, and failed to communicate their brand story, leading to low shelf visibility.',
    solution: 'We designed innovative eco-friendly packaging using recycled materials and sustainable printing processes. The solution combined functionality with compelling visual storytelling that highlighted their natural ingredients and environmental commitment. The unique unboxing experience and sustainable materials resonated with eco-conscious consumers, setting them apart from competitors.',
    client: 'EcoSkincare',
    year: '2023',
    results: ['60% increase in shelf visibility', 'Zero-waste packaging solution', '25% boost in customer loyalty'],
  },
  {
    title: 'Event Identity & Marketing Materials',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80',
    problem: 'A major industry conference needed a cohesive visual identity and marketing materials that would attract attendees and sponsors. Their previous events suffered from inconsistent branding, low ticket sales, and lack of visual appeal, making it difficult to compete with other industry events.',
    solution: 'We created a dynamic event identity system with bold typography, vibrant color schemes, and flexible design templates for all marketing touchpoints. From digital banners to printed programs, every element reinforced the event\'s energy and professionalism. The cohesive visual system elevated the event\'s profile and generated significant buzz across the industry.',
    client: 'Innovation Summit',
    year: '2024',
    results: ['50% increase in ticket sales', 'Complete brand consistency', 'Record sponsor engagement'],
  },
  {
    title: 'Technology Company Rebrand',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    problem: 'A growing tech company\'s brand identity was inconsistent across platforms and didn\'t reflect their innovative solutions. Their outdated visual identity created confusion in the market and hindered their ability to attract top talent and enterprise clients.',
    solution: 'We executed a comprehensive brand refresh that modernized their visual identity while maintaining their core values. The new system included a dynamic logo, cohesive color palette, and flexible brand guidelines that worked across digital and print. The refreshed identity positioned them as an innovative technology leader, helping attract enterprise clients and top-tier talent.',
    client: 'TechInnovate',
    year: '2024',
    results: ['Unified brand across all touchpoints', '40% increase in enterprise inquiries', 'Enhanced talent acquisition'],
  },
  {
    title: 'Restaurant Menu & Collateral Design',
    category: 'Print Design',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80',
    problem: 'A fine dining restaurant needed professional menu designs and collateral that reflected their culinary excellence and sophisticated atmosphere. Their current materials were poorly designed, difficult to read, and didn\'t match the quality of their dining experience, affecting customer perception and order decisions.',
    solution: 'We designed elegant menu layouts with custom typography and tasteful imagery that showcased their dishes while maintaining readability. The collateral system included wine lists, dessert menus, and event materials that all shared a cohesive, upscale aesthetic. The refined design enhanced the dining experience and helped guide customer choices, ultimately increasing average order value.',
    client: 'Belle Cuisine',
    year: '2023',
    results: ['25% increase in average order value', 'Enhanced brand perception', 'Award for design excellence'],
  },
  {
    title: 'Premium Product Packaging Suite',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    problem: 'A luxury consumer goods brand needed premium packaging that would justify their high-end pricing and create an unboxing experience worthy of their product quality. Their existing packaging looked generic and failed to communicate luxury, leading to customer complaints about perceived value.',
    solution: 'We designed a complete packaging suite featuring premium materials, embossed details, and thoughtful unboxing choreography. Custom inserts, tissue paper, and product-specific packaging created a memorable first impression that reinforced the brand\'s luxury positioning. The packaging became an integral part of the product experience, generating social media shares and repeat purchases.',
    client: 'Luxe Essentials',
    year: '2024',
    results: ['80% positive unboxing feedback', 'Increased social media shares', 'Higher perceived product value'],
  },
  {
    title: 'Digital Campaign Visuals & Graphics',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    problem: 'A startup needed compelling visual content for their digital marketing campaigns across social media, website, and email marketing. Their existing graphics were inconsistent, lacked impact, and failed to convert viewers into customers, resulting in low engagement and poor campaign performance.',
    solution: 'We created a comprehensive visual content library with custom graphics, social media templates, and email designs that maintained brand consistency while maximizing impact. The graphics system included templates for various campaigns, making it easy for their team to create on-brand content quickly. The cohesive visual identity significantly improved campaign performance and brand recognition.',
    client: 'StartupHub',
    year: '2023',
    results: ['150% increase in social engagement', 'Consistent brand presence', 'Improved conversion rates'],
  },
]

// SVG Icons - Solid Teal Color
const ProjectsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" fill="#008080" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ClientsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="#008080" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const AwardsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path d="M6 9C6 7.89543 6.89543 7 8 7H16C17.1046 7 18 7.89543 18 9V11C18 14.3137 15.3137 17 12 17C8.68629 17 6 14.3137 6 11V9Z" fill="#008080" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17V21" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 21H16" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 5V7" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 5V7" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const RetentionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#008080" stroke="#008080" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)

const BrandingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <circle cx="12" cy="12" r="10" stroke="#008080" strokeWidth="1.5" fill="#008080" fillOpacity="0.1"/>
    <circle cx="12" cy="12" r="5" fill="#008080"/>
  </svg>
)

const PrintIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path d="M6 9V4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2H16C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V9" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 9H18V18C18 18.5304 17.7893 19.0391 17.4142 19.4142C17.0391 19.7893 16.5304 20 16 20H8C7.46957 20 6.96086 19.7893 6.58579 19.4142C6.21071 19.0391 6 18.5304 6 18V9Z" fill="#008080" fillOpacity="0.1" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 14H18" stroke="#008080" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const PackagingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="#008080" stroke="#008080" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M3 17L12 22L21 17" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 12L12 17L21 12" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const GraphicDesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" fill="#008080"/>
    <path d="M18 10C19.1046 10 20 10.8954 20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10Z" fill="#008080"/>
    <path d="M6 10C7.10457 10 8 10.8954 8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10Z" fill="#008080"/>
    <path d="M12 18C13.1046 18 14 18.8954 14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18Z" fill="#008080"/>
    <path d="M8 4L16 12M16 4L8 12" stroke="#008080" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const portfolioStats = [
  { number: 100, suffix: '+', label: 'Projects Completed', icon: ProjectsIcon },
  { number: 50, suffix: '+', label: 'Happy Clients', icon: ClientsIcon },
  { number: 15, suffix: '', label: 'Awards Won', icon: AwardsIcon },
  { number: 95, suffix: '%', label: 'Client Retention', icon: RetentionIcon },
]

const categoryStats = [
  {
    category: 'Branding',
    count: 35,
    icon: BrandingIcon,
    color: 'from-primary to-primary/80',
  },
  {
    category: 'Print Design',
    count: 28,
    icon: PrintIcon,
    color: 'from-secondary to-secondary/80',
  },
  {
    category: 'Packaging',
    count: 22,
    icon: PackagingIcon,
    color: 'from-primary/80 to-secondary/80',
  },
  {
    category: 'Graphic Design',
    count: 15,
    icon: GraphicDesignIcon,
    color: 'from-secondary/80 to-primary/80',
  },
]

const portfolioFAQs = [
  {
    question: 'How do you approach a new project?',
    answer: 'Every project begins with an in-depth consultation to understand your goals, target audience, and brand vision. We conduct market research, analyze competitors, and develop a strategic approach tailored to your unique needs before creating any designs.',
  },
  {
    question: 'Can you work within our existing brand guidelines?',
    answer: 'Absolutely! We excel at working within existing brand guidelines while finding opportunities to enhance and evolve your visual identity. Whether you have comprehensive guidelines or need them created, we ensure consistency across all deliverables.',
  },
  {
    question: 'What\'s included in a typical project?',
    answer: 'Project scope varies, but typically includes initial consultation, concept development, design iterations, final delivery files, and brand guidelines where applicable. We provide transparent timelines and include all necessary file formats for both print and digital use.',
  },
  {
    question: 'How long does a portfolio project take?',
    answer: 'Timelines depend on project complexity. A simple logo refresh may take 2-3 weeks, while a complete brand identity can take 4-8 weeks. Packaging projects typically range from 3-6 weeks. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes! We offer ongoing support packages for brand management, additional assets, and design maintenance. Many clients work with us long-term for seasonal campaigns, new product launches, and brand evolution needs.',
  },
  {
    question: 'Can we see examples similar to our industry?',
    answer: 'Definitely! During our consultation, we&apos;ll share relevant portfolio examples from your industry. We also provide case studies showing the problem-solution approach for similar projects, helping you visualize potential outcomes.',
  },
]

export default function PortfolioPage() {
  const ref = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isFAQHovered, setIsFAQHovered] = useState(false)

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(heroScrollProgress, [0, 1], [1, 0])

  const filteredFeaturedProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return featuredProjects
    }
    return featuredProjects.filter(project => project.category === selectedCategory)
  }, [selectedCategory])

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects
    }
    return projects.filter(project => project.category === selectedCategory)
  }, [selectedCategory])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

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
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm font-light text-gray-500 uppercase tracking-widest mb-4 block"
            >
              Our Work
            </motion.span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing excellence in every project we deliver. 
              From branding to packaging, explore our creative journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Stats Section */}
      <section className="pt-16 md:pt-20 pb-32 md:pb-40 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolioStats.map((stat, index) => (
              <PortfolioStatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 sticky top-20 z-20 backdrop-blur-sm bg-white/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setHoveredIndex(null)
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-light text-sm md:text-base transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary/30 hover:text-primary'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
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
              Featured Work
            </motion.span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
                Spotlight <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                Client success stories with measurable results
              </p>
            </div>
          </motion.div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {filteredFeaturedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                {/* Image Side */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-light text-primary/90 uppercase tracking-wider mb-2 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-normal text-white mb-2">{project.title}</h3>
                    <div className="flex items-center gap-4 text-sm font-light text-gray-300">
                      <span>{project.client}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-light text-primary uppercase tracking-wider mb-3">The Challenge</h4>
                    <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-light text-primary uppercase tracking-wider mb-3">Our Solution</h4>
                    <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-light text-primary uppercase tracking-wider mb-3">Results</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-base font-light text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section
        ref={portfolioRef}
        className="pt-16 md:pt-20 pb-32 md:pb-40 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden"
      >
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
              Our Work
            </motion.span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
                All <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                Browse through our complete collection of work
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-gray-900/10 transition-shadow duration-500"
                >
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </motion.div>
                  
                  {/* Gradient overlay with animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"
                    initial={false}
                    animate={{
                      opacity: hoveredIndex === index ? 0.8 : 0.7,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  <motion.div
                    className="absolute inset-0 p-8 flex flex-col justify-end text-white"
                    initial={false}
                  >
                    <motion.div
                      className="mb-3"
                      initial={false}
                      animate={{
                        y: hoveredIndex === index ? 0 : 8,
                        opacity: hoveredIndex === index ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.span
                        className="text-xs font-light text-primary/90 uppercase tracking-wider mb-3 inline-block"
                        initial={false}
                        animate={{
                          x: hoveredIndex === index ? 0 : -10,
                          opacity: hoveredIndex === index ? 1 : 0.7,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {project.category}
                      </motion.span>
                    </motion.div>
                    
                    <motion.h3
                      className="text-2xl md:text-3xl font-light mb-4"
                      initial={false}
                      animate={{
                        y: hoveredIndex === index ? 0 : 8,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.div
                      className="h-[2px] bg-primary origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: hoveredIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </motion.div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Category Breakdown Section */}
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
              Our Portfolio By Category
            </motion.span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
                Project <span className="gradient-text">Breakdown</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                A comprehensive look at our work across different creative disciplines
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl text-center"
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <IconComponent />
                    <h3 className="text-xl md:text-2xl font-normal text-gray-900">{stat.category}</h3>
                  </div>
                  <div className="text-4xl md:text-5xl font-light gradient-text mb-2">{stat.count}</div>
                  <p className="text-sm font-light text-gray-600">Projects</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Moving FAQ Section - Portfolio Unique */}
      <section className="pt-16 md:pt-20 pb-32 md:pb-40 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
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
              Questions & Answers
            </motion.span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-left md:flex-1">
                Portfolio <span className="gradient-text">FAQ</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed text-left md:border-b md:border-gray-200 md:pb-2 md:w-[20%]">
                Common questions about our work and process
              </p>
            </div>
          </motion.div>

          {/* Moving FAQ Cards */}
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsFAQHovered(true)}
            onMouseLeave={() => setIsFAQHovered(false)}
          >
            <motion.div
              className="flex gap-6"
              animate={
                !isFAQHovered
                  ? {
                      x: [0, -((400 + 24) * portfolioFAQs.length)],
                    }
                  : {}
              }
              transition={
                !isFAQHovered
                  ? {
                      duration: 40,
                      repeat: Infinity,
                      ease: 'linear',
                    }
                  : {}
              }
              style={{ willChange: 'transform' }}
            >
              {[...portfolioFAQs, ...portfolioFAQs, ...portfolioFAQs].map((faq, index) => (
                <motion.div
                  key={`${faq.question}-${index}`}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="flex-shrink-0 w-[380px] md:w-[400px] p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-normal text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-sm md:text-base font-light text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Portfolio Unique */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden">
        {/* Unique Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#008080" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: [0, -50, 0],
            y: [0, -60, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            {/* Portfolio-specific messaging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="text-sm font-light text-primary">Ready to see your project here?</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6"
            >
              Let&apos;s Create Your Next <span className="gradient-text">Success Story</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl font-light text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Every great project starts with a conversation. Share your vision with us, and let&apos;s turn it into 
              a portfolio piece you&apos;ll be proud to showcase.
            </motion.p>

            {/* Unique Button Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 px-10 md:px-14 py-5 md:py-6 bg-primary text-white font-light text-base md:text-lg rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30 overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <motion.svg
                  className="relative z-10 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5, rotate: 45 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </motion.svg>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-10 md:px-14 py-5 md:py-6 border-2 border-primary text-primary font-light text-base md:text-lg rounded-full hover:bg-primary hover:text-white transition-all bg-white/80 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Explore Services
              </motion.a>
            </motion.div>

            {/* Project showcase teaser */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-12 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-primary mb-1">100+</div>
                <div className="text-xs font-light text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-primary mb-1">50+</div>
                <div className="text-xs font-light text-gray-600">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-primary mb-1">95%</div>
                <div className="text-xs font-light text-gray-600">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

