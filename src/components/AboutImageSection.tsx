import SectionHeading from '@/components/SectionHeading'
import { Image } from '@/components/Image'
import { cn } from '@/lib/utils'
import type { AboutImageSectionProps } from '@/types/components'

// Props allowlist for AboutImageSection:
// data fields: title (string), subtitle (string?), body (string[])
// wrapper: data (AboutImageSectionData), className (string?)
export default function AboutImageSection({ data, className }: AboutImageSectionProps) {
  const paragraphs = Array.isArray(data.body) ? data.body : data.body ? [String(data.body)] : []
  const storyPhoto = data.images?.storyPhoto ?? null

  return (
    <section
      className={cn('bg-brand-bg text-brand-text', className)}
      style={{ paddingBlock: 'var(--spacing-section)' }}
    >
      <div className="container-content grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeading title={data.title} subtitle={data.subtitle} align="left" />
          <div className="space-y-4 text-brand-text/90">
            {paragraphs.map((paragraph, index) => (
              <p key={`${paragraph.slice(0, 16)}-${index}`} className="text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-brand-border bg-brand-surface shadow-elev-sm">
          {storyPhoto?.url && (
            <Image
              src={storyPhoto.url}
              alt={storyPhoto.alt ?? ''}
              aspectRatio={storyPhoto.aspectRatio}
              fit={storyPhoto.fit}
              position={storyPhoto.position}
              className="h-full w-full"
            />
          )}
        </div>
      </div>
    </section>
  )
}
