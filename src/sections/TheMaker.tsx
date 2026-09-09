import ImageSlot from '../components/ImageSlot'
import SectionHead from '../components/SectionHead'
import { MAKER_IMAGES } from '../data/archival'

/**
 * THE MAKER — the first beat of the homepage story. Copy stays deliberately
 * general where history is not verified; nothing is invented, nothing is
 * mislabeled.
 */
export default function TheMaker() {
  return (
    <section className="section maker section--paper" id="maker">
      <div className="wrap maker__grid">
        <div className="maker__body">
          <SectionHead
            label="The Maker"
            index="04 / 07"
            title={
              <>
                Bob<span className="dot">.</span>
              </>
            }
          />
          <p className="maker__copy">
            Bob Reeves began building mouthpieces in Hollywood in 1968 —
            measuring, machining and fitting by hand, one player at a time.
          </p>
          <p className="maker__copy">
            The knowledge, the tooling and the philosophy continue today —
            carried forward in California, one mouthpiece at a time.
          </p>
          <p className="maker__note">
            Not nostalgia<span className="dot">.</span> Continuity
            <span className="dot">.</span>
          </p>
        </div>
        <ImageSlot
          className="maker__slot"
          src={MAKER_IMAGES.bench.src}
          alt={MAKER_IMAGES.bench.alt}
          figure="Fig. 02"
          label="The maker at the bench"
          note="Awaiting archive scan"
          ratio="3 / 4"
        />
      </div>
    </section>
  )
}
