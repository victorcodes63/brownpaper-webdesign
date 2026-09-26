'use client'

import Image from 'next/image'
import Link from 'next/link'

export type ServiceIndexItem = {
  slug: string
  title: string
  meta?: string
  description?: string
  image: string
  /** Tailwind object-position class when the focal point isn’t centred */
  imagePosition?: string
}

function pad(n: number) {
  return String(n).padStart(3, '0')
}

type ServiceIndexListProps = {
  items: ServiceIndexItem[]
  /** denser rows for “more services” side panels */
  compact?: boolean
}

/**
 * Shared service index with the floating hover preview image.
 * Used anywhere services are listed as rows.
 */
export default function ServiceIndexList({ items, compact = false }: ServiceIndexListProps) {
  return (
    <ul>
      {items.map((item, i) => {
        const rowClass = compact
          ? 'group relative grid grid-cols-[3rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-ink/10 py-5 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,14rem)_2rem] md:py-6'
          : item.description
            ? 'group relative grid grid-cols-[3rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-ink/10 py-6 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1fr)_2rem] md:gap-8 md:py-8'
            : 'group relative grid grid-cols-[3rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-ink/10 py-6 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,16rem)_2rem] md:py-7'

        const titleClass = compact
          ? 'text-display text-[clamp(1.5rem,2.6vw,2.4rem)] font-semibold tracking-[-0.04em] text-ink transition-[transform,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 group-hover:text-primary'
          : item.description
            ? 'text-display mt-1.5 block text-[clamp(1.75rem,3.4vw,3.25rem)] leading-[1] font-semibold tracking-[-0.045em] text-ink transition-[transform,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 group-hover:text-primary'
            : 'text-display text-[clamp(1.6rem,3vw,2.75rem)] font-semibold tracking-[-0.04em] text-ink transition-[transform,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 group-hover:text-primary'

        const previewClass = item.description
          ? 'pointer-events-none absolute top-1/2 right-4 z-10 hidden h-40 w-56 -translate-y-1/2 overflow-hidden rounded-2xl opacity-0 shadow-2xl shadow-ink/20 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 group-hover:opacity-100 lg:right-[min(22rem,28%)] lg:block lg:scale-95'
          : 'pointer-events-none absolute top-1/2 right-8 z-10 hidden h-44 w-64 -translate-y-1/2 overflow-hidden rounded-2xl opacity-0 shadow-2xl shadow-ink/20 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 group-hover:opacity-100 lg:right-[18rem] lg:block lg:scale-95'

        return (
          <li key={item.slug}>
            <Link href={`/services/${item.slug}`} className={rowClass}>
              <span className="font-mono text-[12px] text-primary">{pad(i + 1)}.</span>

              {item.description ? (
                <span>
                  {item.meta && (
                    <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55">
                      {item.meta}
                    </span>
                  )}
                  <span className={titleClass}>{item.title}</span>
                </span>
              ) : (
                <span className={titleClass}>{item.title}</span>
              )}

              {item.description ? (
                <span className="hidden max-w-sm text-[15px] leading-relaxed text-ink/55 md:block">
                  {item.description}
                </span>
              ) : item.meta ? (
                <span className="hidden font-mono text-[11px] uppercase tracking-[0.08em] text-ink/55 md:block">
                  {item.meta}
                </span>
              ) : null}

              <span className="text-lg text-ink/55 transition-colors group-hover:text-primary" aria-hidden>
                ↗
              </span>

              <span className={previewClass} aria-hidden>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="16rem"
                  quality={90}
                  className={`object-cover ${
                    item.imagePosition ??
                    (item.slug === 'workwear' ? 'object-[center_82%]' : 'object-center')
                  }`}
                />
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
