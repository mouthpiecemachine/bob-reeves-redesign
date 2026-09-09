import ImageSlot from '../components/ImageSlot'
import SectionHead from '../components/SectionHead'
import { MOUTHPIECE_IMAGES } from '../data/archival'

const UNDERPARTS = [
  { num: '01', name: 'Cup' },
  { num: '02', name: 'Rim' },
  { num: '03', name: 'Throat' },
  { num: '04', name: 'Backbore' },
]

export default function Mouthpieces() {
  return (
    <section className="section band section--blue" id="mouthpieces">
      <div className="wrap">
        <SectionHead index="06 / 07" label="Reeves Mouthpieces" />
        <h2 className="band__title">
          The Mouthpiece<span className="dot">.</span>
        </h2>
        <div className="band__grid">
          <ImageSlot
            className="band__slot"
            variant="product"
            src={MOUTHPIECE_IMAGES.finished.src}
            alt={MOUTHPIECE_IMAGES.finished.alt}
            figure="Fig. 05"
            label="The Reeves mouthpiece"
            note="Awaiting product photography"
            ratio="4 / 5"
          />
          <div className="band__aside">
            <p className="band__copy">
              Cup, rim, throat and backbore — machined as one system in
              California, built around the player.
            </p>
            <dl className="band__list">
              {UNDERPARTS.map((part) => (
                <div className="band__row" key={part.num}>
                  <dt className="band__row-name">
                    <span className="band__row-num" aria-hidden="true">
                      {part.num}
                    </span>
                    {part.name}
                  </dt>
                  <dd className="band__row-tag">Underpart</dd>
                </div>
              ))}
            </dl>
            <div className="band__thumbs">
              <ImageSlot
                variant="product"
                src={MOUTHPIECE_IMAGES.detailCup.src}
                alt={MOUTHPIECE_IMAGES.detailCup.alt}
                figure="Fig. 06"
                label="Cup & rim detail"
                note="Awaiting product photography"
                ratio="4 / 3"
                sub="Product photograph later"
              />
              <ImageSlot
                variant="product"
                src={MOUTHPIECE_IMAGES.detailBackbore.src}
                alt={MOUTHPIECE_IMAGES.detailBackbore.alt}
                figure="Fig. 07"
                label="Backbore detail"
                note="Awaiting product photography"
                ratio="4 / 3"
                sub="Product photograph later"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}