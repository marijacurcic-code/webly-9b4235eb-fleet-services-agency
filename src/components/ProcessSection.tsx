import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import SectionHeading from '@/components/SectionHeading'
import ProcessStep from '@/components/ProcessStep'
import type { ProcessSectionProps } from '@/types/components'

export default function ProcessSection({ data, className }: ProcessSectionProps) {
  // Props allowlist for ProcessSection:
  // data fields: title (string), subtitle (string?), steps ({ step: string; title: string; description: string }[])
  // wrapper: data (ProcessSectionData), className (string?)
  return (
    <section
      className={cn('bg-brand-bg', className)}
      style={{ paddingBlock: 'var(--spacing-section)' }}
    >
      <div className="container-content space-y-10">
        <SectionHeading title={data.title} subtitle={data.subtitle} align="center" />
        <div className="grid gap-6 md:grid-cols-2">
          {data.steps.map((step) => (
            <Card key={step.step} className="card-interactive">
              <CardContent className="p-6">
                <ProcessStep step={step.step} title={step.title} description={step.description} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
