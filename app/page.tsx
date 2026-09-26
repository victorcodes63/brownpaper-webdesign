'use client'

import { lazy, Suspense } from 'react'
import Hero from '@/components/Hero'
import Philosophy from '@/components/Philosophy'
import Footer from '@/components/Footer'

const Services = lazy(() => import('@/components/Services'))
const Work = lazy(() => import('@/components/home/Work'))
const Impact = lazy(() => import('@/components/home/Impact'))
const Process = lazy(() => import('@/components/home/Process'))
const WhyUs = lazy(() => import('@/components/home/WhyUs'))
const CtaBand = lazy(() => import('@/components/home/CtaBand'))
const FAQ = lazy(() => import('@/components/FAQ'))
const HomeContact = lazy(() => import('@/components/home/HomeContact'))

const SectionLoader = () => (
  <div className="flex w-full items-center justify-center bg-paper py-32">
    <div className="h-px w-16 animate-pulse bg-ink/15" />
  </div>
)

export default function Home() {
  return (
    <main className="min-h-svh bg-chrome">
      {/* Layered hero sits directly on chrome */}
      <Hero />

      {/* Dark statement section — how we think about brands */}
      <Philosophy />

      {/* Remaining site content in the rounded paper shell */}
      <div className="px-2.5 pb-2.5 md:px-3 md:pb-3 lg:px-3.5 lg:pb-3.5">
        <div className="page-shell">
          <Suspense fallback={<SectionLoader />}>
            <Services />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Work />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Impact />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Process />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <WhyUs />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <CtaBand />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <FAQ schema />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <HomeContact />
          </Suspense>
        </div>
      </div>

      {/* Closing frame sits on chrome, outside the paper shell */}
      <Footer />
    </main>
  )
}
