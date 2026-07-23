import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Fleet Services Agency</title>
        <meta
          name="description"
          content="The page you were looking for could not be found. Return to the Fleet Services Agency homepage."
        />
      </Helmet>
      <main className="flex min-h-[70vh] items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl rounded-lg border border-border bg-card p-8 text-center shadow-elev-md md:p-12">
          <p className="mb-4 font-display text-5xl font-extrabold tracking-tight text-[var(--color-brand-accent)] md:text-6xl">
            404
          </p>
          <h1 className="mb-4 text-balance text-3xl font-extrabold text-foreground md:text-4xl">
            Page not found
          </h1>
          <p className="mx-auto mb-8 max-w-prose text-base text-muted-foreground md:text-lg">
            Sorry, we couldn&apos;t find the page you were looking for. Head back to
            the Fleet Services Agency homepage to continue browsing.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-base hover:bg-[var(--color-brand-primary-hover)]"
          >
            Return home
          </Link>
        </div>
      </main>
    </>
  )
}
