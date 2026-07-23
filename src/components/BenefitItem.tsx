import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import type { BenefitItemProps } from '@/types/components'

export default function BenefitItem({ title, description, icon, className }: BenefitItemProps) {
  // Props allowlist for BenefitItem:
  // title (string), description (string), icon (string?), className (string?)
  const Icon = icon ? (Icons as unknown as Record<string, LucideIcon>)[icon] : null

  return (
    <div className={cn('flex items-start gap-4', className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary-tint text-brand-primary">
        {Icon ? <Icon className="h-5 w-5" /> : <span className="text-lg font-semibold">✓</span>}
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-brand-text">{title}</h3>
        <p className="text-sm text-brand-muted">{description}</p>
      </div>
    </div>
  )
}
