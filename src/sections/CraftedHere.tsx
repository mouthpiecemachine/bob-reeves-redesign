import ImageSlot from '../components/ImageSlot'
import SectionHead from '../components/SectionHead'
import { CRAFT_IMAGES } from '../data/archival'

const STAGES = ['Raw Brass', 'Machining', 'Finishing', 'Plating']

export default function CraftedHere() {
  return (
    <section className="section craft section--paper" id="crafted">
      <div className="wrap">
        <SectionHead index="05 / 07" label="Made in California" />
        <h2 className="craft__title">
          Crafted Here<span className="dot">.</span>
        </h2>
        <div className="craft__grid">
          <ImageSlot
            src={CRAFT_IMAGES.workshop.src}
            alt={CRAFT_IMAGES.workshop.alt}
            figure="Fig. 03"
            label="The Reeves workshop"
            note="Awaiting workshop photograph"
            ratio="16 / 9"
          />
          <div className="craft__aside">
            <p className="craft__flow" aria-hidden="true">
              {STAGES.map((stage, index) => (
                <span className="craft__flow-item" key={stage}>
                  {index > 0 ? (
                    <span className="craft__flow-arrow" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                  <span className="craft__flow-stage">{stage}</span>
                </span>
              ))}
            </p>
            <p className="craft__copy">
              Reeves mouthpieces are made in California — from raw brass stock
              through finishing and plating. One workshop, one standard, start
              to finish.
            </p>
            <ImageSlot
              className="craft__slot"
              src={CRAFT_IMAGES.brass.src}
              alt={CRAFT_IMAGES.brass.alt}
              figure="Fig. 04"
              label="Raw brass stock"
              note="Awaiting workshop photograph"
              ratio="3 / 2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
