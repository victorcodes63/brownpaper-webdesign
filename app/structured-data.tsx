import JsonLd from '@/components/JsonLd'
import { organizationSchema } from '@/lib/schema'

// Sitewide business schema. The old version carried an unverifiable 5-star
// aggregateRating and a second email address; both removed (items 008, 032).
export default function StructuredData() {
  return <JsonLd data={organizationSchema()} />
}
