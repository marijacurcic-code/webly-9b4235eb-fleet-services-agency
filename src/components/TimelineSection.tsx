import { Card, CardContent } from '@/components/ui/card'
import SectionHeading from '@/components/SectionHeading'
import TimelineItem from '@/components/TimelineItem'
import type { TimelineSectionProps } from '@/types/components'

export default function TimelineSection({ data, className }: TimelineSectionProps) {
  // Props allowlist for TimelineSection:
  // data fields: title (string), subtitle (string?), items ({ year: string; title: string; description: string }[])
  // wrapper: data (TimelineSectionData), className (string?)
  return (
    <section
      className={className}
      style={{ paddingBlock: 'var(--spacing-section)' }}
    >
      <div className="container-content space-y-10">
        <SectionHeading
          title={data.title}
          subtitle={data.subtitle}
          align="center"
        />
        <Card className="border-brand-border bg-brand-surface shadow-elev-sm">
          <CardContent className="space-y-6 p-6 md:p-8">
            {data.items.map((item, index) => (
              <TimelineItem
                key={`${item.year}-${index}`}
                year={item.year}
                title={item.title}
                description={item.description}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
