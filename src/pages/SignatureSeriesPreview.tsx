/**
 * BOB REEVES SIGNATURE SERIES — PRIVATE PREVIEW
 *
 * A premium private concept page for Jason to show John Snell during
 * negotiations. NOT linked from navigation, homepage, or footer.
 *
 * Route: #/signature-series-preview
 *
 * This page reuses the existing approved polished-silver Reeves mouthpiece
 * artwork and the existing Reeves configurator data/functionality.
 * The mouthpiece is displayed vertically with Bob's handwritten signature
 * and edition number engraved on the rim.
 *
 * Design direction: luxury product drop — black background, polished silver,
 * warm gold accents, cream/white typography. Feels rare, collectible, historic.
 */
import { useState } from 'react'
import { BACKBORES, CUPS, RIMS } from '../data/mouthpiece'

type SelectorKey = 'rim' | 'cup' | 'backbore'

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
    <button className={`ss-arrow ss-arrow--${direction}`} type="button" aria-label={label} onClick={onMove}>
      <span aria-hidden="true" />
    </button>
  )
}

export default function SignatureSeriesPreview() {
  const [selection, setSelection] = useState<Record<SelectorKey, string>>(DEFAULT_SELECTION)

  const move = (key: SelectorKey, dir: number) => {
    const options = optionsFor(key)
    const currentId = selection[key]
    const currentIdx = options.findIndex((o) => o.id === currentId)
    const nextIdx = (currentIdx + dir + options.length) % options.length
    setSelection((s) => ({ ...s, [key]: options[nextIdx].id }))
  }

  const rim = RIMS.find((r) => r.id === selection.rim) ?? RIMS[0]
  const cup = CUPS.find((c) => c.id === selection.cup) ?? CUPS[0]
  const backbore = BACKBORES.find((b) => b.id === selection.backbore) ?? BACKBORES[0]
  const configDisplay = `${rim.name} / ${cup.name} / ${backbore.name}`

  return (
    <div className="ss-page">
      {/* HERO — scarcity + numbering */}
      <section className="ss-hero">
        <div className="ss-hero__inner">
          <p className="ss-hero__label">Private Preview</p>
          <div className="ss-hero__number">
            <span className="ss-hero__number-lg">1 / 100</span>
          </div>
          <h1 className="ss-title">
            <span className="ss-title__main">BOB REEVES</span>
            <span className="ss-title__sub">SIGNATURE SERIES</span>
          </h1>
          <p className="ss-tagline">A LIMITED RUN. A LASTING IMPACT.</p>
        </div>
      </section>

      {/* CONCEPT COPY */}
      <section className="ss-concept">
        <div className="ss-concept__inner">
          <p className="ss-concept__text">
            Only 100 Bob Reeves Signature Series mouthpieces will be made.
            Each is individually numbered 1–100 and engraved with Bob's signature —
            a limited tribute to the design legacy that helped shape generations of players.
          </p>
          <div className="ss-scarcity">
            <span className="ss-scarcity__line" />
            <p className="ss-scarcity__text">100 MADE. THAT'S IT.</p>
            <span className="ss-scarcity__line" />
          </div>
        </div>
      </section>

      {/* PRODUCT STAGE — vertical mouthpiece with engraved signature */}
      <section className="ss-product">
        <div className="ss-product__inner">
          <div className="ss-stage" role="group" aria-label="Bob Reeves Signature Series mouthpiece">
            <div className="ss-mouthpiece">
              <img
                className="ss-art"
                src="/mouthpiece-approved.png"
                width={382}
                height={1357}
                alt="Polished silver Reeves trumpet mouthpiece, cup and rim at top, shank extending downward"
              />
              <img
                className="ss-sig-engraved"
                src="/8bd1d9a8-126e-4ab7-b46c-0852956c5177.png"
                alt=""
                aria-hidden="true"
                draggable={false}
              />
              <span className="ss-edition-engraved">1 / 100</span>
            </div>
            <p className="ss-press">Press to change your Reeves rim, cup and backbore</p>
          </div>
        </div>
      </section>

      {/* CONFIGURATOR PANEL */}
      <section className="ss-config">
        <div className="ss-config__inner">
          <div className="ss-panel">
            <h2 className="ss-panel__title">Configure Your Signature Series</h2>
            <div className="ss-selectors">
              {SELECTORS.map(({ key, title }) => {
                const options = optionsFor(key)
                const option = options.find((item) => item.id === selection[key]) ?? options[0]
                return (
                  <div className="ss-selector" key={key}>
                    <label className="ss-selector__label">{title}</label>
                    <div className="ss-selector__control">
                      <ArrowButton direction="up" title={title} onMove={() => move(key, -1)} />
                      <span className="ss-selector__value" aria-live="polite">
                        <span className="ss-selector__value-inner" key={option.id}>
                          {option.name}
                        </span>
                      </span>
                      <ArrowButton direction="down" title={title} onMove={() => move(key, 1)} />
                    </div>
                    <p className="ss-selector__desc">
                      {key === 'rim' && (() => { const r = RIMS.find(o => o.id === selection.rim); return r ? `${r.mm}mm · ${r.imperial}` : ''; })()}
                      {key === 'cup' && (() => { const c = CUPS.find(o => o.id === selection.cup); return c ? c.lead : ''; })()}
                      {key === 'backbore' && (() => { const b = BACKBORES.find(o => o.id === selection.backbore); return b ? b.description.slice(0, 80) + '…' : ''; })()}
                    </p>
                  </div>
                )
              })}
            </div>
            <div className="ss-current-config">
              <span className="ss-current-config__label">Your Configuration</span>
              <span className="ss-current-config__value">{configDisplay}</span>
            </div>
            <div className="ss-purchase">
              <p className="ss-purchase__note">LIMITED EDITION · 100 PIECES WORLDWIDE</p>
              <button className="ss-cta" type="button" aria-disabled="true" data-pending="true">
                <span className="ss-cta__label">SECURE YOUR 1 / 100</span>
                <span className="ss-cta__arrow" aria-hidden="true">→</span>
              </button>
              <p className="ss-purchase__disclaimer">Concept preview — not yet available for purchase</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SCARCITY STATEMENT */}
      <section className="ss-final">
        <div className="ss-final__inner">
          <p className="ss-final__text">
            Once they're gone, they're gone.
          </p>
          <p className="ss-final__sub">
            No restock. No reissue. No exceptions.
          </p>
        </div>
      </section>
    </div>
  )
}