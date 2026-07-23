import { forwardRef } from 'react'

// Base URL for blob-hosted assets. Set by the build pipeline in .env / .env.local.
// Format: https://<storage>/<container>/<volumeName>/<folderName>/assets
// Trailing slash is normalised so relative paths concatenate cleanly.
const BLOB_BASE = (import.meta.env.VITE_BLOB_STORAGE_URL ?? '').replace(/\/$/, '')

/**
 * Resolves an image src value to an absolute URL.
 *
 * - Already-absolute URLs (https:, http:, data:, blob:) are returned unchanged.
 * - Relative filenames and root-relative paths (e.g. "hero.webp", "/assets/hero.webp")
 *   are prefixed with VITE_BLOB_STORAGE_URL.
 *   This decouples stored architecture data from the deployment host — swapping the
 *   env var is all that is needed to repoint every image.
 */
export function resolveImageUrl(src?: string): string | undefined {
  if (!src) return undefined
  if (/^(https?:|data:|blob:)/i.test(src)) return src
  return BLOB_BASE ? `${BLOB_BASE}/${src.replace(/^\/+/, '')}` : src
}

type ImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  /** Blob-relative filename (e.g. "hero.webp") or an absolute URL. */
  src?: string
  /**
   * Aspect ratio in "W:H" notation (e.g. "16:9", "4:3", "3:2").
   * Applied as a CSS `aspect-ratio` style to prevent Cumulative Layout Shift.
   */
  aspectRatio?: string
  /** CSS object-fit. Defaults to "cover". */
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  /** CSS object-position. Defaults to "center". */
  position?: string
}

/**
 * Drop-in replacement for <img> that:
 * - Resolves blob-relative paths via VITE_BLOB_STORAGE_URL at runtime.
 * - Applies aspectRatio as a CSS style to prevent layout shift.
 * - Defaults to lazy loading.
 *
 * Always use this component instead of a raw <img> element.
 *
 * @example
 * // Section image slot
 * <Image {...data.images.heroImage} />
 *
 * @example
 * // Collection item card
 * <Image src={imageUrl} alt={imageAlt ?? title} aspectRatio="3:2" />
 *
 * @example
 * // CSS background (hero overlay)
 * import { resolveImageUrl } from '@/components/Image'
 * style={{ backgroundImage: `url(${resolveImageUrl(data.images.heroImage?.url)})` }}
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt = '', aspectRatio, fit = 'cover', position = 'center', style, loading = 'lazy', ...rest }, ref) => {
    const aspectStyle = aspectRatio
      ? { aspectRatio: aspectRatio.replace(':', ' / ') }
      : undefined

    const combinedStyle: React.CSSProperties = {
      objectFit: fit,
      objectPosition: position,
      ...aspectStyle,
      ...style,
    }

    return (
      <img
        ref={ref}
        src={resolveImageUrl(src)}
        alt={alt}
        loading={loading}
        style={combinedStyle}
        {...rest}
      />
    )
  },
)

Image.displayName = 'Image'
export default Image
