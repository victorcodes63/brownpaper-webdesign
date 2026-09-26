'use client'

import { site } from '@/lib/site'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect, useRef, useSyncExternalStore } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { createPortal } from 'react-dom'

const serviceLinks = [
  { name: 'Brand Identity', href: '/services/brand-identity' },
  { name: 'Graphic Design', href: '/services/graphic-design' },
  { name: 'Printing', href: '/services/printing-services' },
  { name: 'Packaging', href: '/services/packaging-design' },
  { name: 'Display', href: '/services/display' },
  { name: 'Workwear', href: '/services/workwear' },
  { name: 'Promotional Items', href: '/services/promotional-items' },
  { name: 'Office Stationery', href: '/services/office-stationery' },
  { name: 'Fun Times', href: '/services/fun-times' },
  { name: 'All services', href: '/services' },
]

const mainLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

const ease = [0.16, 1, 0.3, 1] as const
const emptySubscribe = () => () => {}
const getClient = () => true
const getServer = () => false

type NavigationProps = {
  /** inline = sits inside the white hero card; overlay = fixed for other pages */
  variant?: 'inline' | 'overlay'
}

function MenuToggle({
  open,
  onToggle,
  className = '',
}: {
  open: boolean
  onToggle: () => void
  className?: string
}) {
  return (
    <button
      type="button"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      onClick={onToggle}
      className={`flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper shadow-lg shadow-ink/25 ring-1 ring-paper/25 transition-colors hover:bg-primary md:h-12 md:w-12 ${className}`}
    >
      <span className="relative flex h-3.5 w-4 items-center justify-center">
        <span
          className={`absolute block h-[1.5px] w-full bg-current transition-transform duration-300 ${
            open ? 'rotate-45' : '-translate-y-[5px]'
          }`}
        />
        <span
          className={`absolute block h-[1.5px] w-full bg-current transition-opacity duration-300 ${
            open ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`absolute block h-[1.5px] w-full bg-current transition-transform duration-300 ${
            open ? '-rotate-45' : 'translate-y-[5px]'
          }`}
        />
      </span>
    </button>
  )
}

export default function Navigation({ variant = 'overlay' }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const mounted = useSyncExternalStore(emptySubscribe, getClient, getServer)
  /** Home only: floating control appears after the hero scrolls away */
  const [pastHero, setPastHero] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const isInline = variant === 'inline'

  useEffect(() => {
    if (!isInline) return
    const hero = headerRef.current?.closest('section')
    if (!hero) return

    const io = new IntersectionObserver(
      ([entry]) => {
        setPastHero(!entry.isIntersecting)
      },
      { threshold: 0, rootMargin: '-8px 0px 0px 0px' }
    )
    io.observe(hero)
    return () => io.disconnect()
  }, [isInline, mounted])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const close = () => setMenuOpen(false)
  const toggle = () => setMenuOpen((v) => !v)

  const showHeroToggle = isInline && !pastHero && !menuOpen
  const showFloatingToggle = (!isInline || pastHero) && !menuOpen

  return (
    <>
      <header
        ref={headerRef}
        className={isInline ? 'relative z-20' : 'pointer-events-none absolute inset-x-0 top-0 z-40'}
      >
        <nav
          className={
            isInline
              ? 'flex items-center justify-between px-6 py-5 md:px-10 md:py-6 lg:px-14 xl:px-16'
              : 'flex items-center justify-between px-5 py-5 md:px-8 md:py-6 lg:px-10'
          }
        >
          <Link
            href="/"
            className={`relative z-50 flex items-center gap-2.5 ${isInline ? '' : 'pointer-events-auto'}`}
          >
            <Logo className={`h-7 w-auto md:h-8 ${isInline ? 'text-primary' : 'text-paper'}`} />
          </Link>

          {isInline ? (
            showHeroToggle ? (
              <MenuToggle open={menuOpen} onToggle={toggle} />
            ) : (
              <span className="h-11 w-11 shrink-0 md:h-12 md:w-12" aria-hidden />
            )
          ) : (
            <span className="pointer-events-none h-11 w-11 shrink-0 md:h-12 md:w-12" aria-hidden />
          )}
        </nav>
      </header>

      {/* Floating hamburger — far right; on home only after scrolling past the hero */}
      {mounted &&
        createPortal(
          <div
            className={`fixed top-[max(0.75rem,env(safe-area-inset-top))] right-[max(0.75rem,env(safe-area-inset-right))] z-[55] transition-opacity duration-300 md:top-5 md:right-5 lg:top-6 lg:right-8 ${
              showFloatingToggle ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <MenuToggle open={menuOpen} onToggle={toggle} />
          </div>,
          document.body
        )}

      {mounted &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="nav-menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="fixed inset-0 z-50 bg-ink text-paper"
                role="dialog"
                aria-modal="true"
                aria-label="Site menu"
              >
                <div className="absolute inset-x-0 top-0 z-[60] flex items-center justify-between px-5 py-5 md:px-8 md:py-6 lg:px-10">
                  <Link href="/" onClick={close} className="flex items-center gap-2.5">
                    <Logo className="h-7 w-auto text-paper md:h-8" />
                  </Link>
                  <MenuToggle open onToggle={close} />
                </div>

                <div className="mx-auto flex h-full max-w-[1400px] flex-col px-6 pb-10 pt-28 md:px-12 lg:px-16">
                  <div className="grid flex-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
                    <div className="flex flex-col gap-1 lg:col-span-5">
                      {mainLinks.map((link, i) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.04 * i, duration: 0.5, ease }}
                        >
                          <Link
                            href={link.href}
                            onClick={close}
                            className="block py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/55 transition-colors hover:text-paper"
                          >
                            {String(i + 1).padStart(2, '0')}
                          </Link>
                          <Link
                            href={link.href}
                            onClick={close}
                            className="block pb-4 text-display text-4xl text-paper transition-opacity hover:opacity-70 md:text-5xl"
                          >
                            {link.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    <div className="lg:col-span-4 lg:col-start-7">
                      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/55">
                        Services
                      </p>
                      <div className="flex flex-col gap-2">
                        {serviceLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={close}
                            className="py-1.5 text-sm text-paper/65 transition-colors hover:text-paper"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto space-y-3 font-mono text-[11px] uppercase tracking-[0.12em] text-paper/55 lg:col-span-3 lg:col-start-11 lg:mt-0 lg:text-right">
                      <a href={`mailto:${site.email}`} className="block hover:text-paper">
                        {site.email}
                      </a>
                      <a href={site.phoneHref} className="block hover:text-paper">
                        {site.phone}
                      </a>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-pill mt-10 w-full justify-center bg-paper text-ink hover:bg-primary hover:text-paper md:ml-auto md:w-auto"
                    onClick={close}
                  >
                    Start a project
                    <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-ink text-paper">
                      ↗
                    </span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

    </>
  )
}
