import type { Service } from '@/lib/services'

const kes = (n: number) => `KES ${n.toLocaleString('en-KE')}`

/**
 * Route to 10, item 040: "from KES X", turnaround and minimums. Renders nothing
 * until Brown Paper supplies the figures in lib/services.ts (B10, B11).
 */
export default function PricingFacts({ pricing }: { pricing: Service['pricing'] }) {
  if (!pricing) return null
  const rows: [string, string][] = []
  if (pricing.fromKes) rows.push(['From', `${kes(pricing.fromKes)}${pricing.unit ? ` ${pricing.unit}` : ''}`])
  if (pricing.minimum) rows.push(['Minimum order', pricing.minimum])
  if (pricing.turnaround?.standard) rows.push(['Standard turnaround', pricing.turnaround.standard])
  if (pricing.turnaround?.rush) rows.push(['Rush turnaround', pricing.turnaround.rush])
  if (!rows.length) return null
  return (
    <dl className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
      {rows.map(([k, v]) => (
        <div key={k} className={`rounded-[1.25rem] p-6 ${k === 'From' ? 'bg-primary text-paper' : 'border border-ink/8'}`}>
          <dt className={`font-mono text-[11px] uppercase tracking-[0.08em] ${k === 'From' ? 'text-paper/70' : 'text-ink/55'}`}>{k}</dt>
          <dd className="text-display mt-2 text-[1.6rem] leading-tight font-semibold tracking-[-0.035em]">{v}</dd>
        </div>
      ))}
    </dl>
  )
}
