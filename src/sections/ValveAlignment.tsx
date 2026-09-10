/**
 * VALVE ALIGNMENT — compact 50/50 sales section.
 * Bright, handcrafted, precise. Approved artwork on the left,
 * real Reeves workshop photo + scrolling information window on the right.
 *
 * Placement: directly after Find Your Reeves, before Reeves film.
 */
import { useState } from 'react'

const APPROVED_ARTWORK = '/ChatGPT Image Sep 8, 2026, 12_37_39 AM.png'
const WORKSHOP_PHOTO = '/BobReevesBrass_CONTENT_BrienneMichelle_Workshop_71-1024x683.jpg'
const SIGNATURE = '/8bd1d9a8-126e-4ab7-b46c-0852956c5177.png'
const LEARN_MORE_URL = '#/valve-alignment'

export default function ValveAlignment() {
  return (
    <section className="valve-align" id="valve-alignment-service">
      <div className="valve-align__grid">
        <ValveAlignmentArtwork />
        <ValveAlignmentInfo />
      </div>
    </section>
  )
}

function ValveAlignmentArtwork() {
  const [panelOpen, setPanelOpen] = useState(false)

  return (
    <div className="valve-align__artwork">
      <img
        src={APPROVED_ARTWORK}
        alt="Bob Reeves Brass — Valve Alignment. Custom precision valve work. Small fix makes a big difference."
        className="valve-align__artwork-img"
      />
      {/* Clickable hotspot over the Book Appointment button area in the artwork */}
      <button
        type="button"
        className="valve-align__artwork-cta"
        onClick={() => setPanelOpen(true)}
        aria-label="Book Appointment"
      />
      {/* Cover for incorrect Santa Monica location text */}
      <span className="valve-align__artwork-location-cover" aria-hidden="true" />
      {panelOpen && <AppointmentPanel onClose={() => setPanelOpen(false)} />}
    </div>
  )
}

function ValveAlignmentInfo() {
  return (
    <div className="valve-align__info">
      <figure className="valve-align__photo">
        <img
          src={WORKSHOP_PHOTO}
          alt="Technician performing valve alignment at the Bob Reeves Brass workshop bench"
        />
        <figcaption className="valve-align__photo-cap">
          <span className="valve-align__photo-fig">Fig. 07</span>
          <span>Valve alignment at the bench — Bob Reeves Brass</span>
        </figcaption>
      </figure>

      <div className="valve-align__window">
        <div className="valve-align__window-scroll">
          <div className="valve-align__scroll-hint" aria-hidden="true">
            Scroll to explore ↓
          </div>
          <h3 className="valve-align__window-title">WHAT IS A VALVE ALIGNMENT?</h3>
          <p className="valve-align__window-text">
            A valve alignment makes sure the holes inside your trumpet's valves
            line up correctly with the tubing, so air can move through the horn
            the way it was designed to.
          </p>
          <p className="valve-align__window-text">
            When they don't line up, the horn can be harder to play and affect
            sound, response, intonation, and consistency.
          </p>

          <div className="valve-align__divider" aria-hidden="true" />

          <InfoBlock
            heading="SOUND"
            body="When your valves are in proper alignment, you don't have to compensate as much to even out the sound. The upper register becomes easier and more consistent."
          />
          <InfoBlock
            heading="INTONATION"
            body="Once your valves have been lined up by Bob Reeves Brass you'll get the best pitch your horn can deliver."
          />
          <InfoBlock
            heading="CONSISTENCY & ACCURACY"
            body="Unstable pad materials change over time. This changes alignment and adversely affects consistency."
          />
          <InfoBlock
            heading="SLOTTING"
            body="Well defined slots are essential to efficient playing."
          />
          <InfoBlock
            heading="EFFICIENCY"
            body="When your valves are not in proper alignment you must work harder to play the instrument. With a Bob Reeves valve alignment, you can often use a more efficient mouthpiece, and end up getting more sound, for less work."
          />

          <div className="valve-align__divider" aria-hidden="true" />

          <InfoBlock
            heading="THE ALIGNMENT PROCESS"
            body="The instrument is examined, pistons and casing are measured against specification, valves are brought back into their intended relationship, and the horn is checked over before it goes back to the player."
          />
          <InfoBlock
            heading="PAD MATERIAL"
            body="The shop uses stable, long-lived pad materials so the alignment holds. This is a key part of why a Reeves alignment lasts."
          />
          <InfoBlock
            heading="AFTER THE ALIGNMENT"
            body="The horn should feel more even across registers, with improved response and a more centered sound."
          />
          <InfoBlock
            heading="MOUTHPIECE RELATIONSHIP"
            body="Once the horn is aligned, players often find they can move to a more efficient mouthpiece and get more sound for less work."
          />

          <div className="valve-align__proof">
            <div className="valve-align__proof-item">
              <span className="valve-align__proof-value">15,000+</span>
              <span className="valve-align__proof-label">
                PISTON INSTRUMENTS
                <br />
                WORKED ON
              </span>
            </div>
            <div className="valve-align__proof-sep" aria-hidden="true" />
            <div className="valve-align__proof-item">
              <span className="valve-align__proof-value">5–10 YEARS</span>
              <span className="valve-align__proof-label">
                AVERAGE
                <br />
                PAD LIFE
              </span>
            </div>
          </div>

          <div className="valve-align__divider" aria-hidden="true" />

          <blockquote className="valve-align__quote">
            “You worry about the music.
            <br />
            Let us worry about the horn.”
          </blockquote>
          <img
            src={SIGNATURE}
            alt="Bob Reeves signature"
            className="valve-align__sig"
          />

          <a href={LEARN_MORE_URL} className="valve-align__learn">
            Learn how valve alignment works <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

function InfoBlock({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="valve-align__block">
      <h4 className="valve-align__block-heading">{heading}</h4>
      <p className="valve-align__block-text">{body}</p>
    </div>
  )
}

function AppointmentPanel({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<number | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const available = new Set([5, 8, 12, 15, 19, 22, 26])
  const canSubmit =
    selected !== null &&
    name.trim() !== '' &&
    email.trim() !== '' &&
    email.includes('@')

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!canSubmit) return
    setSubmitted(true)
  }

  return (
    <div className="appt-overlay" onClick={onClose}>
      <div className="appt-panel" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="appt-panel__close"
          onClick={onClose}
          aria-label="Close appointment panel"
        >
          ×
        </button>

        <h3 className="appt-panel__title">
          SCHEDULE YOUR
          <br />
          VALVE ALIGNMENT
        </h3>

        {submitted ? (
          <div className="appt-panel__done">
            <p className="appt-panel__done-text">
              Your appointment request has been noted. Demo only — no live booking.
            </p>
          </div>
        ) : (
          <form className="appt-panel__form" onSubmit={handleSubmit} noValidate>
            <label className="appt-panel__field">
              <span className="appt-panel__field-label">NAME</span>
              <input
                className="appt-panel__input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </label>

            <label className="appt-panel__field">
              <span className="appt-panel__field-label">EMAIL</span>
              <input
                className="appt-panel__input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>

            <div className="appt-panel__calendar">
              <p className="appt-panel__cal-label">SELECT AN AVAILABLE DATE</p>
              <p className="appt-panel__cal-month">October 2026</p>
              <div className="appt-panel__cal-grid">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                  <span key={d} className="appt-panel__cal-dow">
                    {d}
                  </span>
                ))}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                  const isAvailable = available.has(day)
                  const isSelected = selected === day
                  return (
                    <button
                      key={day}
                      type="button"
                      className={`appt-panel__cal-day ${isAvailable ? 'is-available' : 'is-unavailable'} ${isSelected ? 'is-selected' : ''}`}
                      disabled={!isAvailable}
                      onClick={() => setSelected(day)}
                    >
                      {day}
                    </button>
                  )
                })}
              </div>
              <p className="appt-panel__cal-note">
                Demo dates only — not live availability
              </p>
            </div>

            <button
              type="submit"
              className="appt-panel__submit"
              disabled={!canSubmit}
            >
              Request Appointment <span aria-hidden="true">→</span>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
