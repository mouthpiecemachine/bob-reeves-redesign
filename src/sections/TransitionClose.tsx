import ImageSlot from '../components/ImageSlot'
import SectionLabel from '../components/SectionLabel'
import { CONTINUATION_IMAGES } from '../data/archival'

/**
 * The final commercial beat of the homepage story. Captions are kept
 * deliberately general so no archive scan is ever mislabeled.
 */
export default function TransitionClose() {
  return (
    <section className="section close section--blue" id="continuation">
      <div className="wrap">
        <div className="section-head__line">
          <SectionLabel>The Continuation</SectionLabel>
          <span className="section-head__index" aria-hidden="true">
            Est. 1968 — Carried Forward
          </span>
        </div>
        <div className="close__pair">
          <ImageSlot
            src={CONTINUATION_IMAGES.archive.src}
            alt={CONTINUATION_IMAGES.archive.alt}
            figure="Fig. 08"
            label="From the archive"
            note="Awaiting archive scan"
            ratio="4 / 5"
          />
          <ImageSlot
            src={CONTINUATION_IMAGES.bench.src}
            alt={CONTINUATION_IMAGES.bench.alt}
            figure="Fig. 09"
            label="At the workshop"
            note="Awaiting workshop photograph"
            ratio="4 / 5"
          />
        </div>
        <p className="close__kicker">The tools have changed<span className="dot">.</span></p>
        <h2 className="close__title">The question hasn&apos;t<span className="dot">.</span></h2>
        <p className="close__sub">Which mouthpiece is right for you?</p>
        <div className="cta-row close__cta">
          <a className="btn btn--brass btn--xl" href="#/find-your-reeves">
            Find Your Reeves <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
