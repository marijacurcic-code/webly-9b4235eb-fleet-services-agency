import { Helmet } from 'react-helmet-async'
import HeroSplitSection from '@/components/HeroSplitSection'
import BenefitsSection from '@/components/BenefitsSection'
import AboutImageSection from '@/components/AboutImageSection'
import ProcessSection from '@/components/ProcessSection'
import StatsSection from '@/components/StatsSection'
import CtaBannerSection from '@/components/CtaBannerSection'
import _content from '@/content/index.json'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const content = _content as any

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | Fleet Services Agency</title>
        <meta
          name="description"
          content={content.seo?.metaDescription ?? ''}
        />
        <meta
          property="og:title"
          content={content.seo?.ogTitle ?? 'Home | Fleet Services Agency'}
        />
        <meta
          property="og:description"
          content={content.seo?.ogDescription ?? ''}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">
          {`[{"@context":"https://schema.org","@type":"WebSite","name":"Fleet Services Agency","url":""},{"@context":"https://schema.org","@type":"Organization","name":"Fleet Services Agency","description":"Fleet Services Agency helps businesses manage and maintain company vehicle fleets with practical, reliable service solutions. The site is designed to promote local B2B services with a modern industrial look and a clear path to contact.","url":"","sameAs":[]}]`}
        </script>
      </Helmet>

      <main>
        <HeroSplitSection data={content.hero} />
        <BenefitsSection data={content.benefits} />
        <AboutImageSection data={content.aboutStory} />
        <ProcessSection data={content.process} />
        <StatsSection data={content.stats} />
        <CtaBannerSection data={content.ctaBanner} />
      </main>
    </>
  )
}
