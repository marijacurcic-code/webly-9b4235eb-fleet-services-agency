import { Helmet } from 'react-helmet-async'
import TextProseSection from '@/components/TextProseSection'
import content from '@/content/terms.json'

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Fleet Services Agency</title>
        <meta
          name="description"
          content="Read the Terms & Conditions for using the Fleet Services Agency website and learning about our fleet support services."
        />
        <meta property="og:title" content="Terms & Conditions | Fleet Services Agency" />
        <meta
          property="og:description"
          content="Read the Terms & Conditions for using the Fleet Services Agency website and learning about our fleet support services."
        />
        <meta name="twitter:card" content="summary" />
        <link rel="canonical" href="/terms" />
        <script type="application/ld+json">
          {JSON.stringify([
            { '@context': 'https://schema.org', '@type': 'WebPage' },
            { '@context': 'https://schema.org', '@type': 'BreadcrumbList' },
          ])}
        </script>
      </Helmet>

      <main>
        <TextProseSection data={content.prose} />
      </main>
    </>
  )
}
