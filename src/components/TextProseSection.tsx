import { cn } from '@/lib/utils'
import type { TextProseSectionProps } from '@/types/components'

// Props allowlist for TextProseSection:
// data fields: title (string), lastUpdated (string?), sections ({ heading: string; paragraphs: string[] }[])
// wrapper: data (TextProseSectionData), className (string?)
export default function TextProseSection({ data, className }: TextProseSectionProps) {
  return (
    <section
      className={cn('bg-brand-bg text-brand-text', className)}
      style={{ paddingBlock: 'var(--spacing-section)' }}
    >
      <div className="container-content">
        <div className="prose-shell">
          <header className="space-y-3">
            <h1 className="text-balance font-display text-brand-text" style={{ fontSize: 'var(--font-size-h1)' }}>
              {data.title}
            </h1>
            {data.lastUpdated && (
              <p className="text-small text-brand-muted">Last updated: {data.lastUpdated}</p>
            )}
          </header>

          <div className="mt-8 space-y-10">
            {data.sections.map((section, index) => {
              const paragraphs = Array.isArray(section.paragraphs)
                ? section.paragraphs
                : section.paragraphs
                  ? [String(section.paragraphs)]
                  : []

              return (
                <div key={`${section.heading}-${index}`} className="space-y-4">
                  <h2 className="text-brand-text">{section.heading}</h2>
                  <div className="space-y-4">
                    {paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={`${section.heading}-${paragraphIndex}`}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
