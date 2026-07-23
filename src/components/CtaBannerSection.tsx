import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { CtaBannerSectionProps } from '@/types/components'

// Props allowlist for CtaBannerSection:
// data fields: title (string), subtitle (string?), ctaLabel (string), ctaHref (string)
// wrapper: data (CtaBannerSectionData), className (string?)
export default function CtaBannerSection({ data, className }: CtaBannerSectionProps) {
  return (
    <section
      style={{
        background: 'var(--gradient-cta)',
        paddingBlock: 'var(--spacing-section)',
      }}
      className={cn('text-brand-primary-fg', className)}
    >
      <div style={{ maxWidth: 'var(--max-w-content)' }} className="mx-auto px-6">
        <div className="flex flex-col gap-6 rounded-2xl border border-white/15 bg-white/5 px-6 py-10 text-center shadow-elev-md backdrop-blur md:px-10">
          <div className="space-y-3">
            <h2
              style={{
                fontSize: 'var(--font-size-h2)',
                lineHeight: 'var(--leading-tight)',
                letterSpacing: 'var(--tracking-display)',
              }}
              className="font-display text-balance text-brand-primary-fg"
            >
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="mx-auto max-w-3xl text-base text-brand-primary-fg/90 md:text-lg">
                {data.subtitle}
              </p>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-brand-primary-fg text-brand-primary hover:bg-white/90"
            >
              <a href={data.ctaHref}>{data.ctaLabel}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
