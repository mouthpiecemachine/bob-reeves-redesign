import SectionHead from '../components/SectionHead'

const STEPS = [
  { num: '01', title: 'Player', line: 'Start with the musician.' },
  { num: '02', title: 'Mouthpiece', line: 'Shape the response.' },
  { num: '03', title: 'Instrument', line: 'Understand the system.' },
  { num: '04', title: 'Fit', line: 'Bring everything together.' },
]

/**
 * THE PLAYER — decades of fitting practice, kept as the V2 rows.
 */
export default function ThePlayer() {
  return (
    <section className="section way section--paper" id="player">
      <div className="wrap way__grid">
        <div className="way__left">
          <SectionHead
            label="The Player · The Reeves Way"
            index="07 / 07"
            title={
              <>
                Player<span className="dot">.</span>
                <br />
                Mouthpiece<span className="dot">.</span>
                <br />
                Instrument<span className="dot">.</span>
                <br />
                Fit<span className="dot">.</span>
              </>
            }
          />
          <p className="way__close">
            Every fitting starts with the player — and ends with the same
            question: which setup is yours?
          </p>
        </div>
        <ol className="way__rows">
          {STEPS.map((step) => (
            <li className="way__row" key={step.num}>
              <span className="way__num">{step.num}</span>
              <span className="way__title">{step.title}</span>
              <span className="way__line">{step.line}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
