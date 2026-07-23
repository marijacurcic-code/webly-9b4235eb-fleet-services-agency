import { cn } from '@/lib/utils'
import type { SectionHeadingProps } from '@/types/components'

// Props allowlist for SectionHeading:
// title (string), subtitle? (string), align? ('left' | 'center'), className? (string)

export default function SectionHeading({ title, subtitle, align, className }: SectionHeadingProps) {
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={cn('space-y-3', alignmentClass, className)}>
      <h2 className="text-brand-text text-balance">{title}</h2>
      {subtitle && (
        <p className="text-brand-muted text-balance max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
