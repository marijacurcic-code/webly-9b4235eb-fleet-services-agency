import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import { cn } from '@/lib/utils'
import type { ServicesGridSectionProps } from '@/types/components'

export default function ServicesGridSection({
  title,
  subtitle,
  items,
  loading,
  emptyState,
  className,
}: ServicesGridSectionProps) {
  const resolvedItems = Array.isArray(items) ? items : []

  return (
    <section
      className={cn('bg-brand-bg text-brand-text', className)}
      style={{ paddingBlock: 'var(--spacing-section)' }}
    >
      <div
        className="mx-auto w-full px-6"
        style={{ maxWidth: 'var(--max-w-content)' }}
      >
        <SectionHeading title={title} subtitle={subtitle} />

        {loading ? (
          <div className="mt-8 rounded-lg border border-brand-border bg-brand-surface p-6 text-brand-muted">
            Loading services...
          </div>
        ) : resolvedItems.length === 0 ? (
          <div className="mt-8 rounded-lg border border-brand-border bg-brand-surface p-6">
            <h3 className="text-lg font-semibold text-brand-text">
              {emptyState?.heading ?? 'No services available'}
            </h3>
            <p className="mt-2 text-brand-muted">
              {emptyState?.message ?? 'Please check back soon for new offerings.'}
            </p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resolvedItems.map((item, index) => (
              <ServiceCard
                key={item?.slug ?? item?.id ?? index}
                title={item?.title ?? ''}
                excerpt={item?.shortDescription ?? ''}
                imageUrl={item?.imageUrl}
                imageAlt={item?.imageAlt}
                serviceArea={item?.serviceArea}
                href={`/services/${item?.slug}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
