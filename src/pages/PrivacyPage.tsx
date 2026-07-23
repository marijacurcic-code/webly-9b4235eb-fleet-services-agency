import { Helmet } from 'react-helmet-async'
import TextProseSection from '@/components/TextProseSection'
import content from '@/content/privacy.json'

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Fleet Services Agency</title>
        <script type="application/ld+json">
          {`[{"@context":"https://schema.org","@type":"WebPage"},{"@context":"https://schema.org","@type":"BreadcrumbList"}]`}
        </script>
      </Helmet>

      <main>
        <TextProseSection data={content.prose} />
      </main>
    </>
  )
}
