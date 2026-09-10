/**
 * REEVES FILM — the cinematic sales/craftsmanship moment directly below the
 * Find Your Reeves configurator.
 *
 * Plays the approved header film (public/Bob-Reeves-Website-Header-shorter.webm,
 * ~47s) exactly as supplied — no recut, no recolor, no replacement footage.
 *
 * Above the stage: the finder's payoff. During playback the craftsmanship
 * lines cross-fade ONE AT A TIME as pure HTML/CSS overlays (nothing is burned
 * into the file), then the closing line fades in near the end and hands off to
 * the I'M READY TO BUY! call to action — the same purchase destination used by
 * the existing Reeves purchase CTA in the configurator, never a new URL.
 */
import { useState, useRef, useEffect, type CSSProperties } from 'react'
import { BUY_URL } from './ShopActions'

const VIDEO_SRC = '/Bob-Reeves-Website-Header-shorter.webm'

/** Seconds each captioned line takes to fade in and out. */
const FADE = 1.1

/**
 * The mid-film craftsmanship captions. Each holds between `start` and `end`;
 * the fade-in begins at `start` and the fade-out completes at `end + FADE`.
 * Windows are spaced so only one caption is ever visible at a time.
 */
const CAPTIONS: { key: string; text: string; start: number; end: number }[] = [
  { key: 'california', text: 'Crafted in California.', start: 1.5, end: 8.5 },
  { key: 'precision', text: 'Precision since 1968.', start: 10, end: 17 },
  { key: 'players', text: 'Made for players.', start: 18.5, end: 25.5 },
]

/** The closing line fades in near the end and holds to the final frame. */
const READY_LINE = { text: 'Ready to play yours?', start: 28 }

/** The purchase CTA fades in just after the closing line and stays. */
const CTA_START = 33

/**
 * Cross-fade opacity for a hold window: 0 until `start`, a FADE-long ramp in,
 * 1 across the hold, then a FADE-long ramp out. `end = null` holds to the end
 * of the film.
 */
function overlayOpacity(time: number, start: number, end: number | null, fade = FADE) {
  if (time < start) return 0
  if (time < start + fade) return (time - start) / fade
  if (end === null || time <= end) return 1
  if (time < end + fade) return 1 - (time - end) / fade
  return 0
}

export default function ReevesFilm() {
  const [time, setTime] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  /** Keep the caption clock in sync with the film's native playhead. */
  const syncTime = (event: { currentTarget: HTMLVideoElement }) => {
    setTime(event.currentTarget.currentTime)
  }

  /** Autoplay muted when the video scrolls into view, pause when it leaves. */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Muted autoplay is allowed by browser policies.
    video.muted = true

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay was prevented; leave controls for the user.
            })
          } else {
            video.pause()
          }
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="reeves-film section--blue-deep" id="craftsmanship">
      <div className="wrap">
        <header className="reeves-film__head">
          <h2 className="reeves-film__title">
            You found your Reeves<span className="dot">.</span>
          </h2>
          <p className="reeves-film__sub">Now see how we make it.</p>
        </header>

        <figure
          className="reeves-film__stage"
          aria-label="The Reeves craftsmanship film — watch how your Bob Reeves mouthpiece is made"
        >
          <video
            ref={videoRef}
            className="reeves-film__media"
            src={VIDEO_SRC}
            controls
            playsInline
            preload="auto"
            muted
            onTimeUpdate={syncTime}
            onPlay={syncTime}
            onPause={syncTime}
            onEnded={syncTime}
            onSeeked={syncTime}
          />
          {CAPTIONS.map((caption) => (
            <p
              key={caption.key}
              className="reeves-film__overlay"
              aria-hidden="true"
              style={{ opacity: overlayOpacity(time, caption.start, caption.end) }}
            >
              {caption.text}
            </p>
          ))}
          <p
            className="reeves-film__overlay"
            aria-hidden="true"
            style={{ opacity: overlayOpacity(time, READY_LINE.start, null) }}
          >
            {READY_LINE.text}
          </p>
          <ReadyToBuyCta opacity={overlayOpacity(time, CTA_START, null)} />
        </figure>
      </div>
    </section>
  )
}

/**
 * I'M READY TO BUY! — the gold call to action that closes the film. Uses the
 * exact same purchase destination as the existing Reeves purchase CTA in the
 * configurator (BUY_URL). While the verified store URL is not on file, it
 * renders complete but inert with the same data-pending treatment.
 */
function ReadyToBuyCta({ opacity }: { opacity: number }) {
  const style: CSSProperties = { opacity, pointerEvents: opacity > 0.5 ? 'auto' : 'none' }
  return (
    <a
      className="reeves-film__cta btn btn--brass"
      href={BUY_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
    >
      I'm ready to buy! <span className="btn__arrow" aria-hidden="true">→</span>
    </a>
  )
}