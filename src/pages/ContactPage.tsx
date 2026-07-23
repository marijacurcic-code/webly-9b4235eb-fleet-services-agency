import { Helmet } from 'react-helmet-async'
import MapSection from '@/components/MapSection'
import StatsSection from '@/components/StatsSection'
import CtaBannerSection from '@/components/CtaBannerSection'
import ContactSplitSection from '@/components/ContactSplitSection'
import content from '@/content/contact.json'

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Fleet Services Agency</title>
        <meta
          name="description"
          content="Contact Fleet Services Agency to request fleet service information, pricing, or scheduling support for your business."
        />
        <link rel="canonical" href="/contact" />
        <script type="application/ld+json">
          {`[{"@context":"https://schema.org","@type":"ContactPage"},{"@context":"https://schema.org","@type":"BreadcrumbList"}]`}
        </script>
      </Helmet>

      <main>
        <MapSection data={content.map} />
        <StatsSection data={content.stats} />
        <CtaBannerSection data={content.ctaBanner} />
        <ContactSplitSection data={content.contact} />
      </main>
    </>
  )
}
