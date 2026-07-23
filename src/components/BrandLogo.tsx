import { cn } from '@/lib/utils'
import type { BrandLogoProps } from '@/types/components'

export default function BrandLogo({ name, href, className }: BrandLogoProps) {
  // Props allowlist for BrandLogo:
  // name (string), href (string?), className (string?)
  const sharedClasses = cn('font-display text-lg font-semibold text-brand-text', className)

  if (href) {
    return (
      <a href={href} className={sharedClasses} aria-label={name}>
        {name}
      </a>
    )
  }

  return (
    <span className={sharedClasses} aria-label={name}>
      {name}
    </span>
  )
}
