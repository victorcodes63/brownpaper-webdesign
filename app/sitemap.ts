import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { services } from '@/lib/services'
import { publishedProjects } from '@/lib/projects'

// Generated from the site's own data so new services and case studies are
// never missing (Route to 10, item 033).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const page = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' = 'monthly') => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  })
  return [
    page('', 1, 'weekly'),
    page('/services', 0.9, 'weekly'),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9)),
    page('/portfolio', 0.8, 'weekly'),
    ...publishedProjects().map((p) => page(`/portfolio/${p.slug}`, 0.7)),
    page('/about', 0.7),
    page('/contact', 0.7),
  ]
}
