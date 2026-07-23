import { Link } from 'react-router-dom'
import { Image } from '@/components/Image'
import { cn } from '@/lib/utils'
import type { ServiceDetailSectionProps } from '@/types/components'

export default function ServiceDetailSection({
  item,
  loading,
  breadcrumbLabel,
  ctaText,
  notFoundMessage,
  className,
}: ServiceDetailSectionProps) {
  const includes = Array.isArray(item?.includes)
    ? item?.includes.map((value) => String(value))
    : item?.includes
      ? [String(item?.includes)]
      : []
  const deliverables = Array.isArray(item?.deliverables)
    ? item?.deliverables.map((value) => String(value))
    : item?.deliverables
      ? [String(item?.deliverables)]
      : []
  const idealFor = Array.isArray(item?.idealFor)
    ? item?.idealFor.map((value) => String(value))
    : item?.idealFor
      ? [String(item?.idealFor)]
      : []
  const requirements = Array.isArray(item?.requirements)
    ? item?.requirements.map((value) => String(value))
    : item?.requirements
      ? [String(item?.requirements)]
      : []
  const detailedContent = Array.isArray(item?.detailedContent)
    ? item?.detailedContent.map((value) => String(value))
    : item?.detailedContent
      ? [String(item?.detailedContent)]
      : []
  const galleryItems = Array.isArray(item?.images)
    ? item?.images
    : item?.images
      ? [item?.images]
      : []

  if (!item && !loading) {
    return (
      <section className={cn('bg-brand-bg text-brand-text', className)}>
        <div
          style={{ paddingBlock: 'var(--spacing-section)' }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 text-center"
        >
          <h1
            style={{
              fontSize: 'var(--font-size-display)',
              lineHeight: 'var(--leading-display)',
              letterSpacing: 'var(--tracking-display)',
            }}
            className="font-display text-3xl font-black"
          >
            {notFoundMessage ?? 'Service not found.'}
          </h1>
          <Link
            to="/services"
            className="text-sm font-semibold text-brand-primary hover:text-brand-primary-hover"
          >
            Back to services
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className={cn('bg-brand-bg text-brand-text', className)}>
      <div style={{ paddingBlock: 'var(--spacing-section)' }} className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-brand-muted">
          <Link to="/services" className="font-medium text-brand-primary hover:text-brand-primary-hover">
            {breadcrumbLabel ?? 'Services'}
          </Link>
          <span aria-hidden>•</span>
          <span className="text-brand-text">{String(item?.title ?? '')}</span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div>
              <h1
                style={{
                  fontSize: 'var(--font-size-display)',
                  lineHeight: 'var(--leading-display)',
                  letterSpacing: 'var(--tracking-display)',
                }}
                className="font-display text-4xl font-black text-brand-text"
              >
                {String(item?.title ?? '')}
              </h1>
              <p className="mt-4 text-lg text-brand-muted">
                {String(item?.shortDescription ?? '')}
              </p>
            </div>

            {item?.imageUrl ? (
              <div className="overflow-hidden rounded-3xl border border-brand-border bg-brand-surface">
                <Image
                  src={String(item?.imageUrl ?? '')}
                  alt={String(item?.imageAlt ?? item?.title ?? '')}
                  aspectRatio="16:9"
                  className="h-full w-full"
                />
              </div>
            ) : null}

            {detailedContent.length > 0 ? (
              <div className="space-y-4 text-base leading-relaxed text-brand-text">
                {detailedContent.map((paragraph, index) => (
                  <p key={`${paragraph}-${index}`}>{paragraph}</p>
                ))}
              </div>
            ) : null}

            {(includes.length > 0 || deliverables.length > 0) && (
              <div className="grid gap-6 lg:grid-cols-2">
                {includes.length > 0 ? (
                  <div className="rounded-2xl border border-brand-border bg-brand-surface p-6">
                    <h2 className="text-lg font-semibold text-brand-text">What&apos;s Included</h2>
                    <ul className="mt-4 space-y-2 text-sm text-brand-muted">
                      {includes.map((value, index) => (
                        <li key={`${value}-${index}`} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" aria-hidden />
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {deliverables.length > 0 ? (
                  <div className="rounded-2xl border border-brand-border bg-brand-surface p-6">
                    <h2 className="text-lg font-semibold text-brand-text">Deliverables</h2>
                    <ul className="mt-4 space-y-2 text-sm text-brand-muted">
                      {deliverables.map((value, index) => (
                        <li key={`${value}-${index}`} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" aria-hidden />
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-brand-border bg-brand-surface p-6">
              <h2 className="text-lg font-semibold text-brand-text">Service Snapshot</h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-brand-muted">Category</dt>
                  <dd className="font-medium text-brand-text">{String(item?.category ?? '')}</dd>
                </div>
                <div>
                  <dt className="text-brand-muted">Service Area</dt>
                  <dd className="font-medium text-brand-text">{String(item?.serviceArea ?? '')}</dd>
                </div>
                <div>
                  <dt className="text-brand-muted">Typical Timeline</dt>
                  <dd className="font-medium text-brand-text">{String(item?.typicalTimeline ?? '')}</dd>
                </div>
                <div>
                  <dt className="text-brand-muted">Pricing Model</dt>
                  <dd className="font-medium text-brand-text">{String(item?.pricingModel ?? '')}</dd>
                </div>
                <div>
                  <dt className="text-brand-muted">Minimum Fleet Size</dt>
                  <dd className="font-medium text-brand-text">{String(item?.minimumFleetSize ?? '')}</dd>
                </div>
                <div>
                  <dt className="text-brand-muted">Starting Price</dt>
                  <dd className="font-medium text-brand-text">{String(item?.startingPrice ?? '')}</dd>
                </div>
              </dl>
              <Link
                to="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-brand-primary-fg transition-colors hover:bg-brand-primary-hover"
              >
                {ctaText ?? 'Talk to our team'}
              </Link>
            </div>

            {(idealFor.length > 0 || requirements.length > 0) && (
              <div className="rounded-3xl border border-brand-border bg-brand-surface p-6">
                {idealFor.length > 0 ? (
                  <div>
                    <h3 className="text-base font-semibold text-brand-text">Ideal For</h3>
                    <ul className="mt-3 space-y-2 text-sm text-brand-muted">
                      {idealFor.map((value, index) => (
                        <li key={`${value}-${index}`} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" aria-hidden />
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {requirements.length > 0 ? (
                  <div className="mt-6">
                    <h3 className="text-base font-semibold text-brand-text">Requirements</h3>
                    <ul className="mt-3 space-y-2 text-sm text-brand-muted">
                      {requirements.map((value, index) => (
                        <li key={`${value}-${index}`} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" aria-hidden />
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            )}

            {galleryItems.length > 0 ? (
              <div className="grid gap-4 rounded-3xl border border-brand-border bg-brand-surface p-6">
                {galleryItems.map((image, index) => (
                  <div key={`${String(image?.url ?? image?.imageUrl ?? index)}-${index}`}>
                    <Image
                      src={String(image?.url ?? image?.imageUrl ?? '')}
                      alt={String(image?.alt ?? image?.imageAlt ?? item?.title ?? '')}
                      aspectRatio="3:2"
                      className="h-full w-full rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </section>
  )
}
