import { cn } from '@/lib/utils'
import type { NavLinksProps } from '@/types/components'

// Props allowlist for NavLinks:
// links ({ label: string; href: string }[]), orientation ('horizontal' | 'vertical'?), className (string?)
export default function NavLinks({ links, orientation = 'horizontal', className }: NavLinksProps) {
  return (
    <nav className={cn('text-sm font-semibold text-brand-text', className)} aria-label="Primary">
      <ul
        className={cn(
          'flex flex-wrap gap-x-6 gap-y-2',
          orientation === 'vertical' && 'flex-col items-start gap-x-0',
        )}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-brand-text transition-colors hover:text-brand-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
