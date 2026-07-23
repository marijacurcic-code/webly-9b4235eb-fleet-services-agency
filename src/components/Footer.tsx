import { cn } from '@/lib/utils'
import BrandLogo from '@/components/BrandLogo'
import FooterNav from '@/components/FooterNav'
import SocialLinks from '@/components/SocialLinks'
import type { FooterProps } from '@/types/components'

// Props allowlist for Footer:
// brand (string), tagline (string), copyright (string), navLinks ({ label; href }[]), socials ({ platform; href; label }[]), className? (string)

export default function Footer({
  brand,
  tagline,
  copyright,
  navLinks,
  socials,
  className,
}: FooterProps) {
  return (
    <footer
      className={cn('border-t border-brand-border bg-brand-bg', className)}
      style={{ paddingBlock: 'var(--spacing-section)' }}
    >
      <div className="container-content flex flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <BrandLogo name={brand} className="text-brand-text" />
            <p className="text-small text-brand-muted max-w-md">{tagline}</p>
          </div>
          <div className="flex flex-col gap-6 md:items-end">
            <FooterNav links={navLinks} className="text-brand-muted" />
            {socials.length > 0 && (
              <SocialLinks socials={socials} className="text-brand-muted" />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-brand-border pt-6 text-small text-brand-muted md:flex-row md:items-center md:justify-between">
          <span>{copyright}</span>
        </div>
      </div>
    </footer>
  )
}
