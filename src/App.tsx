import { useEffect } from 'react'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import { useHashRoute } from './lib/router'
import FindYourReevesPage from './pages/FindYourReeves'
import ValveAlignmentPage from './pages/ValveAlignment'
import SignatureSeriesPreview from './pages/SignatureSeriesPreview'
import CustomMouthpieceWork from './sections/CustomMouthpieceWork'
import FindYourReevesBand from './sections/FindYourReevesBand'
import Hero from './sections/Hero'
import ReevesFilm from './sections/ReevesFilm'
import ShopActions from './sections/ShopActions'
import StartedWithBob from './sections/StartedWithBob'
import ValveAlignment from './sections/ValveAlignment'
import ReevesCrew from './sections/ReevesCrew'

const TITLES: Record<string, string> = {
  '/': 'Bob Reeves Brass — California · Est. 1968',
  '/find-your-reeves': 'Find Your Reeves — Bob Reeves Brass',
  '/valve-alignment': 'Valve Alignment — Bob Reeves Brass',
  '/signature-series-preview': 'Signature Series — Bob Reeves Brass',
}

/**
 * V4 homepage story:
 * BOB (heritage hero) → FIND YOUR REEVES (machine, always open — no intro
 * step) → VALVE ALIGNMENT (compact sales section) → REEVES FILM (craftsmanship)
 * → CONTACT & ORDER → THE REEVES CREW (final section)
 */
export default function App() {
  const route = useHashRoute()

  useEffect(() => {
    document.title = TITLES[route] ?? TITLES['/']
  }, [route])

  return (
    <>
      <SiteHeader />
      <main>
        {route === '/find-your-reeves' ? (
          <FindYourReevesPage />
        ) : route === '/valve-alignment' ? (
          <ValveAlignmentPage />
        ) : route === '/signature-series-preview' ? (
          <SignatureSeriesPreview />
        ) : (
          <>
            <Hero />
            <FindYourReevesBand />
            <ValveAlignment />
            <CustomMouthpieceWork />
            <ShopActions />
            <ReevesFilm />
            <StartedWithBob />
            <ReevesCrew />
          </>
        )}
      </main>
      <SiteFooter />
    </>
  )
}
