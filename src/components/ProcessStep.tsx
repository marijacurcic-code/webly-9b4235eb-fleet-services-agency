import { cn } from '@/lib/utils'
import type { ProcessStepProps } from '@/types/components'

// Props allowlist for ProcessStep:
// step (string), title (string), description (string), className? (string)
export default function ProcessStep({ step, title, description, className }: ProcessStepProps) {
  return (
    <div className={cn('card-interactive flex h-full flex-col gap-4 p-6', className)}>
      <span className="inline-flex w-fit items-center rounded-full bg-brand-primary-tint px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
        {step}
      </span>
      <div className="space-y-2">
        <h3 className="text-brand-text">{title}</h3>
        <p className="text-brand-muted">{description}</p>
      </div>
    </div>
  )
}
