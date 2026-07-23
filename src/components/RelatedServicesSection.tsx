import { Link } from 'react-router-dom'
import { Image } from '@/components/Image'
import { cn } from '@/lib/utils'
import type { RelatedServicesSectionProps } from '@/types/components'

export default function RelatedServicesSection({
  title,
  subtitle,
  items,
  currentItemId,
  className,
}: RelatedServicesSectionProps) {
  const relatedItems = Array.isArray(items)
    ? items.filter((item) => String(item?.slug ?? '') !== String(currentItemId ?? ''))
    : []

  if (relatedItems.length === 0) {
    return null
  }

  return (
    <section className={cn('bg-brand-surface text-brand-text', className)}>
      <div style={{ paddingBlock: 'var(--spacing-section)' }} className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2
            style={{
              fontSize: 'var(--font-size-display)',
              lineHeight: 'var(--leading-display)',
              letterSpacing: 'var(--tracking-display)',
            }}
            className="font-display text-3xl font-black"
          >
            {title}
          </h2>
          {subtitle ? <p className="mt-3 text-base text-brand-muted">{subtitle}</p> : null}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedItems.map((item) => (
            <Link
              key={String(item?.id ?? item?.slug ?? '')}
              to={`/services/${String(item?.slug ?? '')}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-border bg-brand-bg transition-shadow hover:shadow-xl"
            >
              {item?.imageUrl ? (
                <Image
                  src={String(item?.imageUrl ?? '')}
                  alt={String(item?.imageAlt ?? item?.title ?? '')}
                  aspectRatio="3:2"
                  className="h-full w-full"
                />
              ) : null}
              <div className="flex h-full flex-col gap-3 p-6">
                <div className="flex flex-wrap gap-2 text-xs font-medium text-brand-muted">
                  {item?.category ? <span>{String(item?.category ?? '')}</span> : null}
                  {item?.serviceArea ? (
                    <span className="rounded-full bg-brand-primary-tint px-2 py-1 text-brand-primary">
                      {String(item?.serviceArea ?? '')}
                    </span>
                  ) : null}
                </div>
                <h3 className="text-lg font-semibold text-brand-text group-hover:text-brand-primary">
                  {String(item?.title ?? '')}
                </h3>
                <p className="text-sm text-brand-muted">{String(item?.shortDescription ?? '')}</p>
                <span className="mt-auto text-sm font-semibold text-brand-primary">Learn more</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
