import { useState } from 'react'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import BrandLogo from '@/components/BrandLogo'
import MobileMenuToggle from '@/components/MobileMenuToggle'
import NavLinks from '@/components/NavLinks'
import { cn } from '@/lib/utils'
import type { HeaderProps } from '@/types/components'

export default function Header({ brand, navLinks, className }: HeaderProps) {
  // Props allowlist for Header:
  // data fields: brand (string), navLinks ({ label: string; href: string }[])
  // wrapper: className (string?)
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b border-brand-border bg-brand-bg/95 backdrop-blur',
        className,
      )}
    >
      <div className="container-content flex h-16 items-center justify-between">
        <BrandLogo name={brand} href="/" className="text-brand-text" />
        <nav className="hidden items-center md:flex">
          <NavLinks links={navLinks} orientation="horizontal" className="gap-8" />
        </nav>
        <div className="flex items-center md:hidden">
          <MobileMenuToggle open={open} onToggle={handleToggle} />
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-72 border-brand-border bg-brand-bg p-6">
          <div className="flex flex-col gap-6">
            <BrandLogo name={brand} href="/" className="text-brand-text" />
            <NavLinks links={navLinks} orientation="vertical" className="gap-4" />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
