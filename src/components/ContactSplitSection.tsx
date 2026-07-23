import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import SectionHeading from '@/components/SectionHeading'
import { supabase } from '@/lib/supabase'
import { cn } from '@/lib/utils'
import type { ContactSplitSectionProps } from '@/types/components'

const FallbackSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message is required'),
})

type FallbackValues = z.infer<typeof FallbackSchema>

type SubmitResult = {
  success: boolean
  error: string | null
}

async function submitForm(
  table: string,
  values: Record<string, unknown>,
  requiredFields: string[],
): Promise<SubmitResult> {
  const sanitized = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, typeof value === 'string' ? value.trim() : value]),
  ) as Record<string, unknown>

  for (const field of requiredFields) {
    const value = sanitized[field]
    if (value === undefined || value === null) {
      return { success: false, error: `Missing required field: ${field}` }
    }
    if (typeof value === 'string' && value.length === 0) {
      return { success: false, error: `Missing required field: ${field}` }
    }
  }

  const { error } = await supabase.from(table).insert(sanitized)
  if (error) {
    return { success: false, error: error.message }
  }

  return { success: true, error: null }
}

// Props allowlist for ContactSplitSection:
// data fields: title (string), subtitle (string?), detailsTitle (string?), address (string?), phone (string?), email (string?), hours (string[]?), submitLabel (string?), successMessage (string?)
// wrapper: data (ContactSplitSectionData), className (string?)

export default function ContactSplitSection({ data, className }: ContactSplitSectionProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FallbackValues>({
    resolver: zodResolver(FallbackSchema),
  })

  const onSubmit = async (values: FallbackValues) => {
    setSubmitError(null)
    const result = await submitForm('contact_submissions', values, ['name', 'email', 'message'])
    if (result.success) {
      setSubmitted(true)
      reset()
    } else {
      setSubmitError(result.error)
    }
  }

  return (
    <section
      className={cn('bg-brand-bg', className)}
      style={{ paddingBlock: 'var(--spacing-section)' }}
    >
      <div className="container-content">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="space-y-8">
            <SectionHeading title={data.title} subtitle={data.subtitle} align="left" />
            <div className="space-y-5">
              {data.detailsTitle && (
                <h3 className="text-lg font-semibold text-brand-text">{data.detailsTitle}</h3>
              )}
              {data.address && (
                <address className="not-italic text-brand-muted">{data.address}</address>
              )}
              {data.phone && (
                <a
                  href={`tel:${data.phone}`}
                  className="block text-brand-text transition-colors hover:text-brand-primary"
                >
                  {data.phone}
                </a>
              )}
              {data.email && (
                <a
                  href={`mailto:${data.email}`}
                  className="block text-brand-text transition-colors hover:text-brand-primary"
                >
                  {data.email}
                </a>
              )}
              {data.hours && data.hours.length > 0 && (
                <ul className="space-y-2 text-brand-muted">
                  {data.hours.map((hour) => (
                    <li key={hour}>{hour}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="rounded-lg border border-brand-border bg-brand-surface p-6 shadow-elev-sm">
            {submitted ? (
              <div className="rounded-lg bg-brand-primary-tint p-6 text-center">
                <p className="font-medium text-brand-primary">
                  {data.successMessage ?? "Thank you! We'll be in touch soon."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div className="space-y-1">
                  <Label htmlFor="name">
                    Full Name <span className="text-destructive" aria-hidden>
                      *
                    </span>
                  </Label>
                  <Input id="name" type="text" {...register('name')} aria-invalid={!!errors.name} />
                  {errors.name && (
                    <p className="text-sm text-destructive" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">
                    Email <span className="text-destructive" aria-hidden>
                      *
                    </span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message">
                    Message <span className="text-destructive" aria-hidden>
                      *
                    </span>
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                {submitError && (
                  <p className="text-sm text-destructive" role="alert">
                    {submitError}
                  </p>
                )}
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Sending…' : (data.submitLabel ?? 'Send Message')}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
