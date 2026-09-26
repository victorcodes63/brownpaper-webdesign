import { track as vercelTrack } from '@vercel/analytics'

type EventName = 'quote_submitted' | 'whatsapp_click' | 'phone_click' | 'email_click'

/**
 * Conversion events (Route to 10, item 034). Sent to Vercel Analytics, and to
 * GA4 as well when NEXT_PUBLIC_GA_ID is set.
 */
export function track(event: EventName, props?: Record<string, string | number | boolean>) {
  try {
    vercelTrack(event, props)
    const w = window as unknown as { gtag?: (...a: unknown[]) => void }
    w.gtag?.('event', event, props)
  } catch {
    /* analytics must never break the page */
  }
}
