import { cn } from '@/lib/utils'
import type { TimelineItemProps } from '@/types/components'

// Props allowlist for TimelineItem:
// year (string), title (string), description (string), className (string?)

export default function TimelineItem({ year, title, description, className }: TimelineItemProps) {
  return (
    <div className={cn('relative flex gap-6 border-l border-brand-border pl-6', className)}>
      <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-brand-primary bg-brand-surface" />
      <div className="min-w-[4rem] text-sm font-semibold text-brand-primary">{year}</div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-brand-text">{title}</h3>
        <p className="text-sm text-brand-muted">{description}</p>
      </div>
    </div>
  )
}
