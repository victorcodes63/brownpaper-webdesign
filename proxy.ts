import { NextResponse, type NextRequest } from 'next/server'

// Route to 10, item 003: only the real domain may be indexed.
const PRODUCTION_HOSTS = ['brownpaper.co.ke', 'www.brownpaper.co.ke']

export function proxy(request: NextRequest) {
  const res = NextResponse.next()
  const host = (request.headers.get('host') || '').split(':')[0].toLowerCase()
  if (!PRODUCTION_HOSTS.includes(host)) res.headers.set('X-Robots-Tag', 'noindex, nofollow')
  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
