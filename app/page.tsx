'use client'

import { lazy, Suspense } from 'react'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Lazy load below-the-fold components for better initial load performance
const Services = lazy(() => import('@/components/Services'))
const Portfolio = lazy(() => import('@/components/Portfolio'))
const About = lazy(() => import('@/components/About'))
const Testimonials = lazy(() => import('@/components/Testimonials'))
const FAQ = lazy(() => import('@/components/FAQ'))

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
)

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FAQ />
      </Suspense>
      <Footer />
    </main>
  )
}


