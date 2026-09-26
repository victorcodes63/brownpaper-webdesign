'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { whatsappLink } from '@/lib/site'
import { track } from '@/lib/track'

const WaIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47a9.4 9.4 0 0 1 6.7 2.78 9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.46-9.47 9.46zm8.06-17.52A11.32 11.32 0 0 0 12.04.64C5.76.64.65 5.75.65 12.03c0 2 .52 3.96 1.52 5.69L.55 23.64l6.05-1.59a11.35 11.35 0 0 0 5.43 1.38h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.18-5.9-3.33-8.06z" />
  </svg>
)

const KEY = 'bp-wa-dismissed'

/**
 * Route to 10, item 036: one floating WhatsApp button on every screen size.
 * Phones: round icon with a close button (hidden for the rest of the visit).
 * Desktop: the "Chat for a quote" pill, always visible.
 */
export default function ContactDock() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let dismissed = false
    try {
      dismissed = sessionStorage.getItem(KEY) === '1'
    } catch {}
    if (dismissed) return
    // Desktop: appear shortly after load. Phones: wait until the hero is
    // scrolled past so the button never sits on the client-logo cutout.
    const phone = window.matchMedia('(max-width: 767px)').matches
    if (!phone) {
      const t = setTimeout(() => setShow(true), 1200)
      return () => clearTimeout(t)
    }
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setShow(true)
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dismiss = () => {
    setShow(false)
    try {
      sessionStorage.setItem(KEY, '1')
    } catch {}
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ type: 'spring', stiffness: 380, damping: 26 }}
          className="group fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 md:right-6 md:bottom-6 print:hidden"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('whatsapp_click', { from: 'floating' })}
            aria-label="Chat with Brown Paper on WhatsApp"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#0b3d20] shadow-xl shadow-black/30 transition-transform hover:-translate-y-0.5 md:h-auto md:w-auto md:justify-start md:gap-3 md:py-3 md:pr-5 md:pl-3"
          >
            <WaIcon className="h-7 w-7" />
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.08em] whitespace-nowrap md:inline">
              Chat for a quote
            </span>
          </a>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Hide WhatsApp button"
            className="absolute -top-1.5 -left-1.5 flex h-6 w-6 md:hidden items-center justify-center rounded-full bg-chrome text-paper/80 ring-2 ring-paper/15 transition-colors hover:text-paper"
          >
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
