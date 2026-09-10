import { useEffect, useRef, useState } from 'react'

export type Route = '/' | '/find-your-reeves' | '/valve-alignment' | '/signature-series-preview'

const ROUTES: string[] = ['/', '/find-your-reeves', '/valve-alignment', '/signature-series-preview']

/**
 * Parse route from either pathname or hash.
 * Pathname takes priority (for direct visits like /signature-series-preview).
 * Hash is used for internal navigation (#/find-your-reeves, #/valve-alignment, etc.).
 */
function parseRoute(pathname: string, hash: string): Route {
  // Check pathname first for direct visits
  if (pathname && pathname !== '/' && ROUTES.includes(pathname)) {
    return pathname as Route
  }
  // Fall back to hash-based routing
  if (hash.startsWith('#/')) {
    const path = hash.slice(1).split('?')[0]
    return ROUTES.includes(path) ? (path as Route) : '/'
  }
  return '/'
}

function parseAnchor(hash: string): string | null {
  if (hash === '' || hash === '#' || hash.startsWith('#/')) return null
  return decodeURIComponent(hash.slice(1))
}

/**
 * Minimal router — supports both pathname and hash routing.
 *
 * Pathname routes (direct visits):
 *   /                        → homepage
 *   /signature-series-preview → private Signature Series preview (unlisted)
 *
 * Hash routes (internal navigation):
 *   #/                       → homepage
 *   #/find-your-reeves       → the Find Your Reeves page
 *   #/valve-alignment        → Valve Alignment page
 *   #/signature-series-preview → private Signature Series preview
 *
 * Plain section anchors ('#mouthpieces', '#consultation', …) resolve to the
 * homepage: when one is clicked from the finder, the router switches to the
 * homepage first and scrolls to the section once it has rendered. On the
 * homepage itself, the browser's native anchor scroll is left untouched.
 */
export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    parseRoute(window.location.pathname, window.location.hash)
  )
  const pendingAnchor = useRef<string | null>(parseAnchor(window.location.hash))

  useEffect(() => {
    const onHashChange = () => {
      const nextRoute = parseRoute(window.location.pathname, window.location.hash)
      pendingAnchor.current = parseAnchor(window.location.hash)
      setRoute(nextRoute)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const anchor = pendingAnchor.current
    if (anchor) {
      const target = document.getElementById(anchor)
      if (target) {
        pendingAnchor.current = null
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
      }
      return
    }
    // Use requestAnimationFrame to ensure scroll reset happens after render
    const raf = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })
    return () => cancelAnimationFrame(raf)
  }, [route])

  return route
}
