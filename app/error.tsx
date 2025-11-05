'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-light mb-4 gradient-text">Oops!</h1>
        <h2 className="text-2xl font-light text-gray-900 mb-6">Something went wrong</h2>
        <p className="text-gray-600 font-light mb-8">
          We&apos;re sorry, but something unexpected happened. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-3 bg-primary text-white font-light rounded-full hover:bg-opacity-90 transition-all"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-3 border-2 border-primary text-primary font-light rounded-full hover:bg-primary hover:text-white transition-all"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}



