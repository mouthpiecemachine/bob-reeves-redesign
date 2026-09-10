import SectionLabel from '../components/SectionLabel'

/**
 * CONTACT US! / I'M READY TO BUY! — the two direct Reeves actions, sitting
 * directly on top of the shop cards with the Bob Reeves signature beside them.
 * One tight band — no separate dead section.
 *
 * Destinations verified from the live Bob Reeves website (bobreeves.com).
 */
export const CONTACT_URL: string = 'https://bobreeves.com/contact/'
export const BUY_URL: string = 'https://trumpetmouthpiece.com/'

type ActionButtonProps = {
  label: string
  href: string
}

function ActionButton({ label, href }: ActionButtonProps) {
  return (
    <a className="btn btn--brass btn--xl" href={href} target="_blank" rel="noopener noreferrer">
      {label} <span className="btn__arrow" aria-hidden="true">→</span>
    </a>
  )
}

export default function ShopActions() {
  return (
    <section className="shop-actions section--blue-deep" id="contact">
      <div className="wrap">
        <div className="shop-actions__grid">
          <div className="shop-actions__body">
            <SectionLabel>Contact &amp; Order</SectionLabel>
            <div className="shop-actions__row">
              <ActionButton label="Contact us!" href={CONTACT_URL} />
              <ActionButton label="I'm ready to buy!" href={BUY_URL} />
            </div>
          </div>
          <div className="shop-actions__signature" role="img" aria-label="Bob Reeves signature" />
        </div>
      </div>
    </section>
  )
}

