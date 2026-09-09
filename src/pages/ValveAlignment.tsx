import ImageSlot from '../components/ImageSlot'
import SectionLabel from '../components/SectionLabel'
import { SERVICE_IMAGES } from '../data/archival'

const STEPS = [
  { num: '01', title: 'Inspect', line: 'The instrument is examined and the current valve fit is assessed.' },
  { num: '02', title: 'Measure', line: 'Pistons and casing are measured against specification.' },
  { num: '03', title: 'Align', line: 'Valves are brought back into their intended relationship.' },
  { num: '04', title: 'Verify', line: 'The horn is checked over before it goes back to the player.' },
]

/**
 * The dedicated Valve Alignment experience — the second Reeves business.
 * Copy stays deliberately general: no invented specifications, prices,
 * turnaround times, or endorsements.
 */
export default function ValveAlignmentPage() {
  return (
    <>
      <section className="valve-hero section--blue">
        <div className="wrap">
          <SectionLabel>Valve Alignment · The Service</SectionLabel>
          <h1 className="valve-hero__title">
            Valve Alignment<span className="dot">.</span>
          </h1>
          <p className="valve-hero__copy">
            Valve alignment brings the pistons and the casing back into their
            intended relationship — the foundation of how the instrument plays.
            It has been part of the shop&apos;s work since the beginning, with
            15,000+ piston instruments represented in the alignment experience
            carried by the Reeves records.
          </p>
          <div className="cta-row">
            <a className="btn btn--brass" href="#consultation">
              Book a Consultation <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost" href="#/find-your-reeves">
              Find Your Reeves
            </a>
          </div>
        </div>
      </section>

      <section className="section valve section--paper">
        <div className="wrap valve__grid">
          <div className="valve__body">
            <p className="label">How It Works</p>
            <h2 className="valve__title">
              Measured<span className="dot">.</span> Aligned<span className="dot">.</span>
              <br />
              Verified<span className="dot">.</span>
            </h2>
            <p className="valve__copy">
              Alignment is considered when a horn feels uneven — sluggish
              response, slots that will not settle, or resistance that does not
              match the setup. Exact service details are always confirmed with
              the shop before booking.
            </p>
            <ol className="way__rows valve__steps">
              {STEPS.map((step) => (
                <li className="way__row" key={step.num}>
                  <span className="way__num">{step.num}</span>
                  <span className="way__title">{step.title}</span>
                  <span className="way__line">{step.line}</span>
                </li>
              ))}
            </ol>
            <div className="cta-row">
              <a className="btn btn--brass" href="#/find-your-reeves">
                Find Your Reeves <span className="btn__arrow" aria-hidden="true">→</span>
              </a>
              <a className="btn btn--ghost" href="#shop">
                The Shop
              </a>
            </div>
          </div>
          <ImageSlot
            className="valve__slot"
            src={SERVICE_IMAGES.bench.src}
            alt={SERVICE_IMAGES.bench.alt}
            figure="Fig. 10"
            label="At the bench — the alignment work"
            note="Bob Reeves Brass photograph"
            ratio="4 / 5"
          />
        </div>
      </section>
    </>
  )
}
