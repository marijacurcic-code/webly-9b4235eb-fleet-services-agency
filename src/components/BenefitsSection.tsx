import SectionHeading from '@/components/SectionHeading'
import BenefitItem from '@/components/BenefitItem'
import { cn } from '@/lib/utils'
import type { BenefitsSectionProps } from '@/types/components'

// Props allowlist for BenefitsSection:
// data fields: title (string), subtitle (string?), items ({ title: string; description: string; icon?: string }[])
// wrapper: data (BenefitsSectionData), className (string?)

export default function BenefitsSection({ data, className }: BenefitsSectionProps) {
  return (
    <section
      style={{ paddingBlock: 'var(--spacing-section)' }}
      className={cn('bg-brand-bg', className)}
    >
      <div style={{ maxWidth: 'var(--max-w-content)' }} className="mx-auto px-6">
        <SectionHeading title={data.title} subtitle={data.subtitle} align="center" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <BenefitItem
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
