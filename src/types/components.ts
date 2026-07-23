// Auto-generated from architecture.json — do not edit

export interface ImageSlot {
  url?: string
  alt?: string
  aspectRatio?: string
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  position?: string
}

export interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  [key: string]: any
}

export interface BenefitItemProps {
  title: string
  description: string
  icon?: string
  className?: string
  [key: string]: any
}

export interface ProcessStepProps {
  step: string
  title: string
  description: string
  className?: string
  [key: string]: any
}

export interface StatItemProps {
  value: string
  label: string
  className?: string
  [key: string]: any
}

export interface TimelineItemProps {
  year: string
  title: string
  description: string
  className?: string
  [key: string]: any
}

export interface ServiceCardProps {
  id?: string
  slug?: string
  title: string
  excerpt?: string
  imageUrl?: string
  imageAlt?: string
  serviceArea?: string
  href?: string
  className?: string
  [key: string]: any
}

export interface BrandLogoProps {
  name: string
  href?: string
  className?: string
  [key: string]: any
}

export interface NavLinksProps {
  links: { label: string; href: string }[]
  orientation?: 'horizontal' | 'vertical'
  className?: string
  [key: string]: any
}

export interface SocialLinksProps {
  socials: { platform: string; href: string; label: string }[]
  className?: string
  [key: string]: any
}

export interface MobileMenuToggleProps {
  open: boolean
  onToggle: () => void
  className?: string
  [key: string]: any
}

export interface FooterNavProps {
  links: { label: string; href: string }[]
  className?: string
  [key: string]: any
}

export interface HeroSplitSectionData {
  eyebrow?: string
  title: string
  subtitle?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  images?: {
    heroImage?: ImageSlot
  }
  [key: string]: any
}
export interface HeroSplitSectionProps {
  data: HeroSplitSectionData
  className?: string
  [key: string]: any
}

export interface BenefitsSectionData {
  title: string
  subtitle?: string
  items: { title: string; description: string; icon?: string }[]
  [key: string]: any
}
export interface BenefitsSectionProps {
  data: BenefitsSectionData
  className?: string
  [key: string]: any
}

export interface ProcessSectionData {
  title: string
  subtitle?: string
  steps: { step: string; title: string; description: string }[]
  [key: string]: any
}
export interface ProcessSectionProps {
  data: ProcessSectionData
  className?: string
  [key: string]: any
}

export interface StatsSectionData {
  title: string
  subtitle?: string
  items: { value: string; label: string }[]
  [key: string]: any
}
export interface StatsSectionProps {
  data: StatsSectionData
  className?: string
  [key: string]: any
}

export interface ServicesGridSectionProps {
  title: string
  subtitle?: string
  items: any[]
  loading?: boolean
  emptyState?: { heading?: string; message?: string }
  className?: string
  [key: string]: any
}

export interface AboutImageSectionData {
  title: string
  subtitle?: string
  body: string[]
  images?: {
    storyPhoto?: ImageSlot
  }
  [key: string]: any
}
export interface AboutImageSectionProps {
  data: AboutImageSectionData
  className?: string
  [key: string]: any
}

export interface TimelineSectionData {
  title: string
  subtitle?: string
  items: { year: string; title: string; description: string }[]
  [key: string]: any
}
export interface TimelineSectionProps {
  data: TimelineSectionData
  className?: string
  [key: string]: any
}

export interface ServiceDetailSectionProps {
  item: any
  loading?: boolean
  breadcrumbLabel?: string
  ctaText?: string
  notFoundMessage?: string
  href?: string
  className?: string
  [key: string]: any
}

export interface RelatedServicesSectionProps {
  title: string
  subtitle?: string
  items: any[]
  currentItemId: string
  className?: string
  [key: string]: any
}

export interface ContactSplitSectionData {
  title: string
  subtitle?: string
  detailsTitle?: string
  address?: string
  phone?: string
  email?: string
  hours?: string[]
  submitLabel?: string
  successMessage?: string
  [key: string]: any
}
export interface ContactSplitSectionProps {
  data: ContactSplitSectionData
  className?: string
  [key: string]: any
}

export interface MapSectionData {
  title: string
  subtitle?: string
  embedUrl: string
  [key: string]: any
}
export interface MapSectionProps {
  data: MapSectionData
  className?: string
  [key: string]: any
}

export interface CtaBannerSectionData {
  title: string
  subtitle?: string
  ctaLabel: string
  ctaHref: string
  [key: string]: any
}
export interface CtaBannerSectionProps {
  data: CtaBannerSectionData
  className?: string
  [key: string]: any
}

export interface TextProseSectionData {
  title: string
  lastUpdated?: string
  sections: { heading: string; paragraphs: string[] }[]
  [key: string]: any
}
export interface TextProseSectionProps {
  data: TextProseSectionData
  className?: string
  [key: string]: any
}

export interface HeaderProps {
  brand: string
  navLinks: { label: string; href: string }[]
  className?: string
  [key: string]: any
}

export interface FooterProps {
  brand: string
  tagline: string
  copyright: string
  navLinks: { label: string; href: string }[]
  socials: { platform: string; href: string; label: string }[]
  className?: string
  [key: string]: any
}

