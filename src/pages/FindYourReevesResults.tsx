import type { FittingAnswers } from '../data/fitting'
import { PROTOTYPE_NOTICE, instrumentNote, recommend, setupNote } from '../data/fitting'
import SectionLabel from '../components/SectionLabel'

type ResultsSectionProps = {
  answers: FittingAnswers
  onRefine: () => void
  onRestart: () => void
}

/**
 * The recommendation moment: 2–3 prototype starting points, WHY THESE MAY
 * FIT reasoning tied to the answers, and the two commercial exits —
 * VIEW SETUP and BOOK A CONSULTATION. Everything is labeled prototype data;
 * no invented specification is ever presented as a Reeves fact.
 */
export function ResultsSection({ answers, onRefine, onRestart }: ResultsSectionProps) {
  const recs = recommend(answers)
  const instrument = instrumentNote(answers)
  const setup = setupNote(answers)

  return (
    <section className="results section--blue">
      <div className="wrap">
        <SectionLabel>Find Your Reeves — Starting Points</SectionLabel>
        <h2 className="results__title">
          Your Starting
          <br />
          Points<span className="dot">.</span>
        </h2>
        <p className="notice">{PROTOTYPE_NOTICE}</p>
        {setup || instrument ? (
          <div className="results__notes">
            {setup ? <p className="results__note">{setup}</p> : null}
            {instrument ? <p className="results__note">{instrument}</p> : null}
          </div>
        ) : null}
        <div className="results__list">
          {recs.map((rec, index) => (
            <article className="rec" key={rec.ref}>
              <span className="slot__corner slot__corner--tl" aria-hidden="true" />
              <span className="slot__corner slot__corner--tr" aria-hidden="true" />
              <span className="slot__corner slot__corner--bl" aria-hidden="true" />
              <span className="slot__corner slot__corner--br" aria-hidden="true" />
              <div className="rec__head">
                <span className="rec__ref">{rec.ref}</span>
                <h3 className="rec__name">{rec.name}</h3>
                <p className="rec__line">{rec.line}</p>
              </div>
              <dl className="rec__specs">
                {rec.specs.map((spec) => (
                  <div className="rec__spec" key={spec.label}>
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="rec__why">
                <p className="rec__why-label">Why these may fit</p>
                <ul>
                  {rec.why.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <p className="rec__note">
                Prototype designation {String(index + 1).padStart(2, '0')} — not a
                Reeves catalog model. Confirm against the Reeves catalog or a
                consultation.
              </p>
            </article>
          ))}
        </div>
        <div className="results__actions">
          <a className="btn btn--brass btn--xl" href="#mouthpieces">
            View Setup <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
          <a className="btn btn--ghost" href="#consultation">
            Book a Consultation
          </a>
          <button type="button" className="results__reset" onClick={onRefine}>
            Refine Answers
          </button>
          <button type="button" className="results__reset" onClick={onRestart}>
            Start Over
          </button>
        </div>
      </div>
    </section>
  )
}
