import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const BRAND = 'Fleet Services Agency'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

const FOOTER_NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
]

const FOOTER_TAGLINE = 'Reliable fleet support for business'
const FOOTER_COPYRIGHT = '© 2026 Fleet Services Agency. All rights reserved.'
const FOOTER_SOCIALS = []

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-bg text-brand-text">
      <Header brand={BRAND} navLinks={NAV_LINKS} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer
        brand={BRAND}
        tagline={FOOTER_TAGLINE}
        copyright={FOOTER_COPYRIGHT}
        navLinks={FOOTER_NAV_LINKS}
        socials={FOOTER_SOCIALS}
      />
    </div>
  )
}
