import { cn } from '@/lib/utils'
import type { StatItemProps } from '@/types/components'

// Props allowlist for StatItem:
// value (string), label (string), className? (string)
export default function StatItem({ value, label, className }: StatItemProps) {
  return (
    <div className={cn('space-y-2 text-left', className)}>
      <p className="text-3xl font-bold text-brand-text">{value}</p>
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-muted">{label}</p>
    </div>
  )
}
