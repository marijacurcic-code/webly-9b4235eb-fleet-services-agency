import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { SocialLinksProps } from '@/types/components'

// Props allowlist for SocialLinks:
// socials ({ platform: string; href: string; label: string }[]), className (string?)

export default function SocialLinks({ socials, className }: SocialLinksProps) {
  if (!socials || socials.length === 0) {
    return null
  }

  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {socials.map((item) => {
        const Icon = item.platform
          ? (Icons as unknown as Record<string, LucideIcon>)[item.platform]
          : null

        return (
          <li key={`${item.platform}-${item.href}`}>
            <a
              href={item.href}
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-border text-brand-muted transition-colors hover:border-brand-primary hover:text-brand-primary"
            >
              {Icon ? <Icon className="h-4 w-4" /> : <span className="text-xs">{item.label}</span>}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
