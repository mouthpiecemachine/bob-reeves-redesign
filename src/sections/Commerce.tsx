import ImageSlot from '../components/ImageSlot'
import SectionHead from '../components/SectionHead'
import { COMMERCE_IMAGES } from '../data/archival'

const BUSINESSES = [
  {
    num: '01',
    title: 'Mouthpieces',
    line: 'Handcrafted underparts, machined in California.',
    cta: 'Explore Mouthpieces',
    href: '#mouthpieces',
    image: COMMERCE_IMAGES.mouthpieces,
  },
  {
    num: '02',
    title: 'Valve Alignment',
    line: 'Precision where it matters most.',
    cta: 'Explore Valve Alignment',
    href: '#/valve-alignment',
    image: COMMERCE_IMAGES.alignment,
  },
  {
    num: '03',
    title: 'Trumpets + Accessories',
    line: 'The horn — and the hardware around it.',
    cta: 'Ask the Shop',
    href: '#consultation',
    image: COMMERCE_IMAGES.trumpets,
  },
]

/**
 * The three-business commerce section — the shop's doors, side by side.
 */
export default function Commerce() {
  return (
    <section className="section commerce section--blue" id="shop">
      <div className="wrap">
        {/* No giant headline — the label says THE SHOP; the cards speak. */}
        <SectionHead label="The Shop" index="03 / 07" />
        <div className="commerce__grid">
          {BUSINESSES.map((business) => (
            <article className="commerce__card" key={business.num}>
              <ImageSlot
                src={business.image.src}
                alt={business.image.alt}
                figure={business.num}
                label={business.title}
                note={
                  business.image.src.includes('shop-trumpets')
                    ? 'Awaiting photograph'
                    : 'Bob Reeves Brass photograph'
                }
                ratio="4 / 3"
              />
              <h3 className="commerce__title">{business.title}</h3>
              <p className="commerce__line">{business.line}</p>
              <a className="commerce__cta" href={business.href}>
                {business.cta} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
