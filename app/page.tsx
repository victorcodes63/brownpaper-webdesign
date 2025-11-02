'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}


