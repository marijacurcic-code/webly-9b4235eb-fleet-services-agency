import { cn } from '@/lib/utils'
import type { FooterNavProps } from '@/types/components'

// Props allowlist for FooterNav:
// links ({ label: string; href: string }[]), className (string?)
export default function FooterNav({ links, className }: FooterNavProps) {
  return (
    <nav className={cn('flex flex-wrap gap-4 text-sm text-brand-muted', className)}>
      {links.map((link) => (
        <a
          key={`${link.label}-${link.href}`}
          href={link.href}
          className="transition-colors hover:text-brand-text"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
