/**
 * FIND YOUR REEVES — the approved configurator, functional.
 *
 * The centerpiece is the APPROVED polished-silver Reeves mouthpiece artwork
 * (public/mouthpiece-approved.png — extracted from the approved reference,
 * not redrawn). The three white selector windows are real, interactive
 * controls sitting on the physical part whose value they show — rim, cup,
 * backbore — cycled with the small gold up / down arrows. The information
 * cards underneath mirror the same selection.
 *
 * All rim, cup and backbore copy comes verbatim from the official Bob Reeves
 * Brass mouthpieces charts (see src/data/mouthpiece.ts) — nothing invented.
 */
import { useEffect, useRef, useState } from 'react'
import { BACKBORES, CUPS, RIMS } from '../data/mouthpiece'
import { BUY_URL } from '../sections/ShopActions'

type SelectorKey = 'rim' | 'cup' | 'backbore'

/** The approved reference setup — rim 43.5, cup ES, backbore 692s. */
const DEFAULT_SELECTION: Record<SelectorKey, string> = {
  rim: '43.5',
  cup: 'ES',
  backbore: '692s',
}

const SELECTORS: { key: SelectorKey; title: string }[] = [
  { key: 'rim', title: 'Rim' },
  { key: 'cup', title: 'Cup' },
  { key: 'backbore', title: 'Backbore' },
]

function optionsFor(key: SelectorKey) {
  if (key === 'rim') return RIMS
  if (key === 'cup') return CUPS
  return BACKBORES
}

/** One small gold triangle control — the up / down arrows. */
function ArrowButton({
  direction,
  title,
  onMove,
}: {
  direction: 'up' | 'down'
  title: string
  onMove: () => void
}) {
  const label =
    direction === 'up' ? `Previous ${title.toLowerCase()} option` : `Next ${title.toLowerCase()} option`
  return (
    <button className={`cfg-arrow cfg-arrow--${direction}`} type="button" aria-label={label} onClick={onMove}>
      <span aria-hidden="true" />
    </button>
  )
}

/**
 * One selector window on the mouthpiece: the white pill carries the live
 * value; the small gold arrows cycle it. The arrows are positioned by CSS
 * exactly where the approved reference places them — inside the rim pill,
 * above / below the cup and backbore pills.
 */
function WindowSelector({
  title,
  value,
  onUp,
  onDown,
}: {
  title: string
  value: string
  onUp: () => void
  onDown: () => void
}) {
  return (
    <>
      <ArrowButton direction="up" title={title} onMove={onUp} />
      {/* aria-live on the stable pill so screen readers announce each change;
          the inner value span is re-keyed to replay its pop animation. */}
      <span className="cfg-window__pill" aria-live="polite">
        <span className="cfg-value" key={value}>
          {value}
        </span>
      </span>
      <ArrowButton direction="down" title={title} onMove={onDown} />
    </>
  )
}

/** Compact arrow pair for the information cards. */
function CardStepper({ title, onUp, onDown }: { title: string; onUp: () => void; onDown: () => void }) {
  return (
    <span className="cfg-card__stepper">
      <ArrowButton direction="up" title={title} onMove={onUp} />
      <ArrowButton direction="down" title={title} onMove={onDown} />
    </span>
  )
}

/**
 * Long published text stays EXACTLY as Reeves publishes it — never
 * rewritten, shortened or paraphrased. When it overflows the card it is
 * clamped, and "More details +" reveals the remaining exact original
 * wording. The control only appears when the text actually overflows.
 */
function RevealText({ className, text }: { className: string; text: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [open, setOpen] = useState(false)
  const [clamped, setClamped] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const measure = () => setClamped(element.scrollHeight > element.clientHeight + 1)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    return () => observer.disconnect()
  }, [text])

  return (
    <>
      <p ref={ref} className={open ? `${className} is-open` : className}>
        {text}
      </p>
      {open || clamped ? (
        <button
          className="cfg-more"
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? 'Less details −' : 'More details +'}
        </button>
      ) : null}
    </>
  )
}

function CartIcon() {
  return (
    <svg className="cfg-buy__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M2.5 3.5h2.2l2.5 12.2h11.6l2.2-8.9H6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.4" cy="20" r="1.6" />
      <circle cx="17.2" cy="20" r="1.6" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg className="cfg-buy__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      <path d="M9 5.5 15.5 12 9 18.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function UsaFlag() {
  const stripes = [0, 2, 4, 6, 8, 10, 12]
  return (
    <svg className="cfg-made__flag" viewBox="0 0 42 28" role="img" aria-label="Flag of the United States of America">
      <rect width="42" height="28" fill="#f3eee0" />
      {stripes.map((stripe) => (
        <rect key={stripe} y={stripe * (28 / 13)} width="42" height={28 / 13} fill="#a83c46" />
      ))}
      <rect width="18" height={28 * (7 / 13)} fill="#1b3557" />
      {Array.from({ length: 20 }, (_, index) => (
        <circle
          key={index}
          cx={2.4 + (index % 5) * 3.5}
          cy={2.6 + Math.floor(index / 5) * 3.4}
          r="0.85"
          fill="#f3eee0"
        />
      ))}
    </svg>
  )
}

/**
 * The three information cards — built for fast scanning: the selected value
 * first, then the short published description, then the key published
 * measurements. A field only appears when Reeves actually publishes it.
 */
function ConfiguratorCards({
  rim,
  cup,
  backbore,
  onMove,
}: {
  rim: (typeof RIMS)[number]
  cup: (typeof CUPS)[number]
  backbore: (typeof BACKBORES)[number]
  onMove: (key: SelectorKey, direction: -1 | 1) => void
}) {
  return (
    <div className="cfg-cards">
      <article className="cfg-card" aria-live="polite">
        <header className="cfg-card__head">
          <h3 className="cfg-card__label">Rim</h3>
          <CardStepper title="Rim" onUp={() => onMove('rim', -1)} onDown={() => onMove('rim', 1)} />
        </header>
        <p className="cfg-card__value">{rim.name}</p>
        <p className="cfg-card__lead">{rim.shape}.</p>
        <dl className="cfg-card__specs">
          <div className="cfg-card__row">
            <dt>Diameter</dt>
            <dd>
              {rim.mm} mm
              <span className="cfg-card__rowsub">{rim.imperial}</span>
            </dd>
          </div>
          <div className="cfg-card__row">
            <dt>Similar to</dt>
            <dd>{rim.similar}</dd>
          </div>
        </dl>
      </article>

      <article className="cfg-card" aria-live="polite">
        <header className="cfg-card__head">
          <h3 className="cfg-card__label">Cup</h3>
          <CardStepper title="Cup" onUp={() => onMove('cup', -1)} onDown={() => onMove('cup', 1)} />
        </header>
        <p className="cfg-card__value">{cup.name}</p>
        <p className="cfg-card__lead">{cup.lead}.</p>
        <dl className="cfg-card__specs">
          <div className="cfg-card__row">
            <dt>Average depth</dt>
            <dd>{cup.depth}</dd>
          </div>
          {cup.note ? (
            <div className="cfg-card__row">
              <dt>Reference</dt>
              <dd>{cup.note}</dd>
            </div>
          ) : null}
        </dl>
      </article>

      <article className="cfg-card" aria-live="polite">
        <header className="cfg-card__head">
          <h3 className="cfg-card__label">Backbore</h3>
          <CardStepper title="Backbore" onUp={() => onMove('backbore', -1)} onDown={() => onMove('backbore', 1)} />
        </header>
        <p className="cfg-card__value">
          {backbore.name}
          {backbore.qualifier ? <span className="cfg-card__chip">{backbore.qualifier}</span> : null}
        </p>
        <RevealText className="cfg-card__desc" text={backbore.description} />
        <dl className="cfg-card__specs">
          {backbore.note ? (
            <div className="cfg-card__row">
              <dt>Note</dt>
              <dd>{backbore.note}</dd>
            </div>
          ) : null}
        </dl>
      </article>
    </div>
  )
}

/**
 * FIND YOUR REEVES — homepage beat 02 and the /find-your-reeves page.
 * Cream section in the site's navy / gold language, per the approved
 * reference. No "Find it. Make it. Play it." — that belongs elsewhere.
 */
export default function ReevesConfigurator() {
  const [selection, setSelection] = useState<Record<SelectorKey, string>>(DEFAULT_SELECTION)

  function move(key: SelectorKey, direction: -1 | 1) {
    const options = optionsFor(key)
    const currentIndex = options.findIndex((option) => option.id === selection[key])
    const nextIndex = (currentIndex + direction + options.length) % options.length
    setSelection((current) => ({ ...current, [key]: options[nextIndex].id }))
  }

  const rim = RIMS.find((option) => option.id === selection.rim) ?? RIMS[0]
  const cup = CUPS.find((option) => option.id === selection.cup) ?? CUPS[0]
  const backbore = BACKBORES.find((option) => option.id === selection.backbore) ?? BACKBORES[0]

  return (
    <section className="cfg section--paper" id="find">
      <div className="wrap">
        {/* Tagline above the mouthpiece — bold, premium, compact. Only this
            line returns; the large branding/business-card block does not. */}
        <p className="cfg-tagline">Legendary Precision. Played Around the World.</p>

        {/* The approved mouthpiece artwork with the three live selector
            windows — each sits on the physical part whose value it shows. */}
        <div className="cfg-stage" role="group" aria-label="Reeves mouthpiece configurator">
          <img
            className="cfg-art"
            src="/mouthpiece-approved.png"
            width={1357}
            height={382}
            alt="Polished silver Reeves trumpet mouthpiece lying horizontally, cup facing left"
          />
          {/* The supplied transparent BOB REEVES engraving asset, positioned on
              the backbore / shank — just right of the backbore selector box,
              centred vertically on that portion of the shank (never the cup).
              Sized in --u units so it scales exactly with the artwork. */}
          <img
            className="cfg-engrave"
            src="/feea56a0-46ec-402c-9965-bafefc468d1a.png"
            alt=""
            aria-hidden="true"
            draggable={false}
          />
          {SELECTORS.map(({ key, title }) => {
            const options = optionsFor(key)
            const option = options.find((item) => item.id === selection[key]) ?? options[0]
            return (
              <div className={`cfg-window cfg-window--${key}`} key={key}>
                <WindowSelector
                  title={title}
                  value={option.name}
                  onUp={() => move(key, -1)}
                  onDown={() => move(key, 1)}
                />
              </div>
            )
          })}
        </div>

        <p className="cfg-press">Press to change your Reeves rim, cup and backbore</p>

        <ConfiguratorCards rim={rim} cup={cup} backbore={backbore} onMove={move} />

        <div className="cfg-bottom">
          <div className="cfg-made">
            <UsaFlag />
            <p className="cfg-made__text">
              Made in Valencia,
              <br />
              California
            </p>
          </div>
          <div className="cfg-buy">
            <BuyButton />
            <p className="cfg-did">
              <span className="cfg-dash" aria-hidden="true" />
              <span className="cfg-did__text">Did you find your Reeves?</span>
              <span className="cfg-dash" aria-hidden="true" />
            </p>
          </div>
          {/* Bob Reeves signature — bottom-right, balancing the USA flag on
              the bottom-left. Supplied asset used exactly as given. */}
          <img
            className="cfg-sig"
            src="/8bd1d9a8-126e-4ab7-b46c-0852956c5177.png"
            alt="Bob Reeves"
            draggable={false}
          />
        </div>
      </div>
    </section>
  )
}

function BuyButton() {
  return (
    <a className="cfg-buy__btn" href={BUY_URL} target="_blank" rel="noopener noreferrer">
      <CartIcon />
      <span className="cfg-buy__label">Buy now!</span>
      <ChevronIcon />
    </a>
  )
}
