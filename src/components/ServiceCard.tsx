import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Image } from '@/components/Image'
import { cn } from '@/lib/utils'
import type { ServiceCardProps } from '@/types/components'

export default function ServiceCard({
  id,
  slug,
  title,
  excerpt,
  imageUrl,
  imageAlt,
  serviceArea,
  href,
  className,
}: ServiceCardProps) {
  // Props allowlist for ServiceCard:
  // id (string?), slug (string?), title (string), excerpt (string?), imageUrl (string?), imageAlt (string?),
  // serviceArea (string?), href (string?), className (string?)
  const accessibleId = id ?? slug ?? title

  return (
    <Card className={cn('card-interactive flex h-full flex-col overflow-hidden', className)}>
      {imageUrl && (
        <div className="w-full">
          <Image
            src={imageUrl}
            alt={imageAlt ?? title}
            aspectRatio="3:2"
            className="h-full w-full"
          />
        </div>
      )}
      <CardHeader className="gap-2">
        {serviceArea && (
          <span className="w-fit rounded-full bg-brand-primary-tint px-2.5 py-1 text-xs font-semibold uppercase text-brand-primary">
            {serviceArea}
          </span>
        )}
        <CardTitle className="text-brand-text" aria-describedby={accessibleId}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        {excerpt && (
          <p id={accessibleId} className="text-sm text-brand-muted">
            {excerpt}
          </p>
        )}
      </CardContent>
      {href && (
        <CardFooter>
          <Button asChild className="bg-brand-primary text-brand-primary-fg hover:bg-brand-primary-hover">
            <a href={href}>Learn More</a>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
