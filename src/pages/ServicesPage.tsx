import { Helmet } from 'react-helmet-async'
import HeroSplitSection from '@/components/HeroSplitSection'
import BenefitsSection from '@/components/BenefitsSection'
import ProcessSection from '@/components/ProcessSection'
import ServicesGridSection from '@/components/ServicesGridSection'
import StatsSection from '@/components/StatsSection'
import CtaBannerSection from '@/components/CtaBannerSection'
import _content from '@/content/services.json'
import { items as rawServices } from '@/content/collections/services.json'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const content = _content as any

const servicesListingItems = rawServices

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services | Fleet Services Agency</title>
        <link rel="canonical" href="/services" />
        <script type="application/ld+json">
          {JSON.stringify([
            { '@context': 'https://schema.org', '@type': 'WebPage' },
            { '@context': 'https://schema.org', '@type': 'BreadcrumbList' },
          ])}
        </script>
      </Helmet>

      <main>
        <HeroSplitSection data={content.hero} />
        <BenefitsSection data={content.benefits} />
        <ProcessSection data={content.process} />
        <ServicesGridSection
          title={content.services.title}
          subtitle={content.services.subtitle}
          items={servicesListingItems}
          emptyState={content.services.emptyState}
        />
        <StatsSection data={content.stats} />
        <CtaBannerSection data={content.ctaBanner} />
      </main>
    </>
  )
}
