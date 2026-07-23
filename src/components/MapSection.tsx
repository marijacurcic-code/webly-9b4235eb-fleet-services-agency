import SectionHeading from '@/components/SectionHeading'
import { cn } from '@/lib/utils'
import type { MapSectionProps } from '@/types/components'

// Props allowlist for MapSection:
// data fields: title (string), subtitle (string?), embedUrl (string)
// wrapper: data (MapSectionData), className (string?)
export default function MapSection({ data, className }: MapSectionProps) {
  return (
    <section
      className={cn('bg-brand-bg', className)}
      style={{ paddingBlock: 'var(--spacing-section)' }}
    >
      <div className="container-content space-y-8">
        <SectionHeading
          title={data.title}
          subtitle={data.subtitle}
          align="center"
        />
        {data.embedUrl ? (
          <div className="overflow-hidden rounded-xl border border-brand-border bg-brand-surface shadow-elev-sm">
            <iframe
              src={data.embedUrl}
              title={data.title}
              loading="lazy"
              className="h-[420px] w-full border-0"
              allowFullScreen
            />
          </div>
        ) : null}
      </div>
    </section>
  )
}
