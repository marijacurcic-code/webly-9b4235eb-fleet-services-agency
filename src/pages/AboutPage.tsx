import type React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSplitSection from '@/components/HeroSplitSection'
import AboutImageSection from '@/components/AboutImageSection'
import BenefitsSection from '@/components/BenefitsSection'
import ProcessSection from '@/components/ProcessSection'
import StatsSection from '@/components/StatsSection'
import CtaBannerSection from '@/components/CtaBannerSection'
import content from '@/content/about.json'
import type { AboutImageSectionData, HeroSplitSectionData, ImageSlot } from '@/types/components'

export default function AboutPage() {
  const heroData: HeroSplitSectionData = {
    ...content.hero,
    images: {
      ...content.hero.images,
      heroImage: content.hero.images?.heroImage
        ? {
            ...content.hero.images.heroImage,
            fit: content.hero.images.heroImage.fit as React.CSSProperties['objectFit'] & ImageSlot['fit'],
          }
        : undefined,
    },
  }

  const aboutStoryData: AboutImageSectionData = {
    ...content.aboutStory,
    images: {
      ...content.aboutStory.images,
      storyPhoto: content.aboutStory.images?.storyPhoto
        ? {
            ...content.aboutStory.images.storyPhoto,
            fit: content.aboutStory.images.storyPhoto.fit as React.CSSProperties['objectFit'] & ImageSlot['fit'],
          }
        : undefined,
    },
  }

  return (
    <>
      <Helmet>
        <title>About | Fleet Services Agency</title>
        <meta
          name="description"
          content="Learn about Fleet Services Agency, our approach to dependable fleet support, and how we help business clients keep vehicles safe, reliable, and ready for work."
        />
        <link rel="canonical" href="/about" />
      </Helmet>

      <main>
        <HeroSplitSection data={heroData} />
        <AboutImageSection data={aboutStoryData} />
        <BenefitsSection data={content.benefits} />
        <ProcessSection data={content.process} />
        <StatsSection data={content.stats} />
        <CtaBannerSection data={content.ctaBanner} />
      </main>
    </>
  )
}
