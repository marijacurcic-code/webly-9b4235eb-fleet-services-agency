import { forwardRef } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { MobileMenuToggleProps } from '@/types/components'

// Props allowlist for MobileMenuToggle:
// open (boolean), onToggle (() => void), className? (string)

const MobileMenuToggle = forwardRef<HTMLButtonElement, MobileMenuToggleProps>(
  ({ open, onToggle, className }, ref) => {
    return (
      <Button
        ref={ref}
        type="button"
        onClick={onToggle}
        variant="ghost"
        size="icon"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        className={cn(
          'text-brand-text hover:bg-brand-primary-tint focus-visible:ring-brand-primary',
          className,
        )}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
    )
  },
)

MobileMenuToggle.displayName = 'MobileMenuToggle'

export default MobileMenuToggle
