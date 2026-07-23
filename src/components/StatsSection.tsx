import SectionHeading from '@/components/SectionHeading'
import StatItem from '@/components/StatItem'
import { cn } from '@/lib/utils'
import type { StatsSectionProps } from '@/types/components'

// Props allowlist for StatsSection:
// data fields: title (string), subtitle (string?), items ({ value: string; label: string }[])
// wrapper: data (StatsSectionData), className (string?)
export default function StatsSection({ data, className }: StatsSectionProps) {
  return (
    <section
      className={cn('bg-brand-surface', className)}
      style={{ paddingBlock: 'var(--spacing-section)' }}
    >
      <div className="container-content space-y-10">
        <SectionHeading title={data.title} subtitle={data.subtitle} align="center" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item) => (
            <StatItem
              key={`${item.label}-${item.value}`}
              value={item.value}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
