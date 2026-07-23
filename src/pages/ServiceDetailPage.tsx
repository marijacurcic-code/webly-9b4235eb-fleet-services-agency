import { Helmet } from 'react-helmet-async'
import { Navigate, useParams } from 'react-router-dom'
import { findCollectionItem } from '@/lib/data-binding'
import { items as rawItems } from '@/content/collections/services.json'
import content from '@/content/service-detail.json'
import ServiceDetailSection from '@/components/ServiceDetailSection'
import RelatedServicesSection from '@/components/RelatedServicesSection'
import CtaBannerSection from '@/components/CtaBannerSection'
import ContactSplitSection from '@/components/ContactSplitSection'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug?: string }>()
  const item = findCollectionItem(rawItems, 'slug', slug) as Record<string, unknown> | null

  if (!item) {
    return <Navigate to="/404" replace />
  }

  return (
    <>
      <Helmet>
        <title>Service Details | Fleet Services Agency</title>
        {content?.serviceDetail?.notFoundMessage ? null : null}
        <script type="application/ld+json">
          {JSON.stringify([
            { "@context": 'https://schema.org', "@type": 'WebPage' },
            { "@context": 'https://schema.org', "@type": 'BreadcrumbList' },
          ])}
        </script>
      </Helmet>

      <main>
        <ServiceDetailSection
          item={item}
          breadcrumbLabel={content.serviceDetail?.breadcrumbLabel}
          ctaText={content.serviceDetail?.ctaText}
          notFoundMessage={content.serviceDetail?.notFoundMessage}
        />

        <RelatedServicesSection
          title={content.relatedServices.title}
          subtitle={content.relatedServices?.subtitle}
          items={rawItems.filter((i) => String(i?.slug ?? '') !== String(slug ?? ''))}
          currentItemId={slug ?? ''}
        />

        <CtaBannerSection data={content.ctaBanner} />

        <ContactSplitSection data={content.contact} />
      </main>
    </>
  )
}
