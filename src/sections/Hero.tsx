import SectionLabel from '../components/SectionLabel'
import { ARCHIVE_STRIP_IMAGES, RECORDS_IMAGE } from '../data/archival'

/**
 * Hero V3 — the approved archival composition.
 *
 * Left: the story, preserved verbatim. Right: the REAL customer/mouthpiece
 * records photograph, presented as scanned — no caption panel, the photo
 * stands on its own, sized so its bottom edge meets the hero buttons'
 * bottom edge. Directly below: a contact strip of the genuine archival
 * photographs, shown without filters or alterations.
 */
export default function Hero() {
  return (
    <section className="hero-v3 section--blue-deep" id="top">
      <HeroRings />
      <div className="wrap hero-v3__grid">
        <div className="hero-v3__body">
          <p className="hero-v3__kicker">
            Bob Reeves Brass
            <span className="hero-v3__kicker-sep" aria-hidden="true">
              ·
            </span>
            California · Est. 1968
          </p>
          <h1 className="hero-v3__title">
            Built Around
            <br />
            the Player<span className="dot">.</span>
          </h1>
          <p className="hero-v3__copy">
            For more than half a century, Bob Reeves Brass has helped musicians
            find the relationship between player, mouthpiece and instrument.
            Handcrafted in California.
          </p>
          <div className="cta-row hero-v3__cta-row">
            <a className="btn btn--brass btn--xl" href="https://bobreeves.com/contact/" target="_blank" rel="noopener noreferrer">
              Contact Us! <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost" href="https://trumpetmouthpiece.com/" target="_blank" rel="noopener noreferrer">
              I'm Ready to Buy!
            </a>
          </div>
        </div>
        <figure className="hero-v3__record">
          <span className="slot__corner slot__corner--tl" aria-hidden="true" />
          <span className="slot__corner slot__corner--tr" aria-hidden="true" />
          <span className="slot__corner slot__corner--bl" aria-hidden="true" />
          <span className="slot__corner slot__corner--br" aria-hidden="true" />
          <div className="hero-v3__record-media">
            <img src={RECORDS_IMAGE.src} alt={RECORDS_IMAGE.alt} />
          </div>
        </figure>
      </div>
      <div className="wrap hero-v3__archive">
        <div className="section-head__line">
          <SectionLabel>From the Archive</SectionLabel>
        </div>
        <ul className="hero-v3__strip">
          {ARCHIVE_STRIP_IMAGES.map((photo, index) => (
            <li className="hero-v3__strip-frame" key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span className="hero-v3__strip-num">
                {String(index + 1).padStart(2, '0')}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/**
 * Lathe-face rings — the geometry of a mouthpiece rim, drawn as a
 * technical motif behind the composition. Pure CSS/SVG decoration.
 */
function HeroRings() {
  return (
    <svg
      className="hero-v3__rings"
      viewBox="0 0 720 720"
      aria-hidden="true"
      fill="none"
    >
      {[60, 112, 164, 216, 268, 320].map((r) => (
        <circle key={r} cx="360" cy="360" r={r} stroke="currentColor" strokeWidth="1" />
      ))}
    </svg>
  )
}
