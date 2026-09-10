import { useState } from 'react'
import { BRAND_LOGO } from '../data/archival'

const NAV_ITEMS = [
  { label: 'Products', href: 'https://bobreeves.com/products/' },
  { label: 'Services', href: 'https://bobreeves.com/services/' },
  { label: 'About', href: 'https://bobreeves.com/about/' },
  { label: 'Blog', href: 'https://bobreeves.com/blog/' },
  { label: 'Store', href: 'https://trumpetmouthpiece.com/' },
  { label: 'FAQs', href: 'https://bobreeves.com/faqs/' },
  { label: 'Contact', href: 'https://bobreeves.com/contact/' },
]

const SOCIAL_ITEMS = [
  { label: 'Instagram', href: 'https://instagram.com/bobreevesbrass' },
  { label: 'Facebook', href: 'https://www.facebook.com/bobreevesbrass' },
  { label: 'YouTube', href: 'https://www.youtube.com/c/Bobreeves' },
  { label: 'X (Twitter)', href: 'https://twitter.com/bobreevesbrass' },
]

function SocialIcon({ label }: { label: string }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (label) {
    case 'Instagram':
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'Facebook':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M14 8h2V5h-2.5C11.6 5 11 6.1 11 7.5V9H9v3h2v6h3v-6h2.5l.5-3H14V7.5c0-.3.2-.5.5-.5z" />
        </svg>
      )
    case 'YouTube':
      return (
        <svg {...common} aria-hidden="true">
          <rect x="2" y="5" width="20" height="14" rx="4" />
          <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'X (Twitter)':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M4 4l16 16M20 4L4 20" />
        </svg>
      )
    default:
      return null
  }
}

export default function SiteHeader() {
  const [logoFailed, setLogoFailed] = useState(false)

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <a className="site-header__brand" href="#/" aria-label="Bob Reeves Brass — home">
          {logoFailed ? (
            <span className="site-header__brand-text">
              Bob Reeves Brass<span className="dot">.</span>
            </span>
          ) : (
            <img
              className="site-header__logo"
              src={BRAND_LOGO.src}
              alt={BRAND_LOGO.alt}
              onError={() => setLogoFailed(true)}
            />
          )}
        </a>
        <nav className="site-header__nav" aria-label="Sections">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              className="site-header__link"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
          <a className="btn btn--brass site-header__cta" href="#/find-your-reeves">
            Find Your Reeves <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
          <span className="site-header__est">California · Est. 1968</span>
        </nav>
      </div>
      <div className="site-header__social">
        {SOCIAL_ITEMS.map((item) => (
          <a
            key={item.label}
            className="site-header__social-link"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
          >
            <SocialIcon label={item.label} />
          </a>
        ))}
      </div>
    </header>
  )
}
