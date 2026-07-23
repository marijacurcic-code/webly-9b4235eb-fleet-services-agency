import { Button } from '@/components/ui/button'
import SectionHeading from '@/components/SectionHeading'
import { Image } from '@/components/Image'
import { cn } from '@/lib/utils'
import type { HeroSplitSectionProps } from '@/types/components'

// Props allowlist for HeroSplitSection:
// data fields: eyebrow (string?), title (string), subtitle (string?), primaryCtaLabel (string?), primaryCtaHref (string?), secondaryCtaLabel (string?), secondaryCtaHref (string?)
// wrapper: data (HeroSplitSectionData), className (string?)
export default function HeroSplitSection({ data, className }: HeroSplitSectionProps) {
  const heroImage = data.images?.heroImage ?? null

  return (
    <section
      style={{ paddingBlock: 'var(--spacing-section-hero)', background: 'var(--gradient-hero)' }}
      className={cn('text-brand-primary-fg', className)}
    >
      <div style={{ maxWidth: 'var(--max-w-content)' }} className="mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            {data.eyebrow && (
              <p
                style={{ fontSize: 'var(--eyebrow-size)', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--eyebrow-color)' }}
                className="mb-4 uppercase font-semibold"
              >
                {data.eyebrow}
              </p>
            )}
            <SectionHeading
              title={data.title}
              subtitle={data.subtitle}
              align="left"
              className="text-brand-primary-fg"
            />
            {(data.primaryCtaLabel || data.secondaryCtaLabel) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {data.primaryCtaLabel && (
                  <Button asChild className="bg-brand-primary text-brand-primary-fg hover:bg-brand-primary-hover">
                    <a href={data.primaryCtaHref ?? '#'}>{data.primaryCtaLabel}</a>
                  </Button>
                )}
                {data.secondaryCtaLabel && (
                  <Button
                    asChild
                    variant="outline"
                    className="border-brand-primary-fg text-brand-primary-fg hover:bg-brand-primary-fg/10"
                  >
                    <a href={data.secondaryCtaHref ?? '#'}>{data.secondaryCtaLabel}</a>
                  </Button>
                )}
              </div>
            )}
          </div>
          <div className="w-full">
            {heroImage?.url && (
              <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-elev-lg">
                <Image
                  src={heroImage.url}
                  alt={heroImage.alt ?? ''}
                  aspectRatio={heroImage.aspectRatio}
                  fit={heroImage.fit}
                  position={heroImage.position}
                  className="h-full w-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
