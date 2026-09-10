import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'

type ImageSlotProps = {
  figure: string
  label: string
  note?: string
  ratio?: string
  variant?: 'photo' | 'product'
  sub?: string
  className?: string
  /** Path to an authentic photograph under /public — the labeled placeholder
      frame stays until the file actually exists. */
  src?: string
  alt?: string
}

/**
 * A labeled frame for an authentic Bob Reeves photograph.
 *
 * Without `src` (or once a provided file fails to load) it renders the V2
 * placeholder treatment: machined-brass corner brackets, technical profile
 * drawing, and a caption that states exactly what is missing.
 *
 * With `src`, the photograph drops in as a direct <img /> child of
 * .slot__media and fills the frame (see CSS); the caption note switches to
 * a neutral attribution so nothing is ever mislabeled.
 */
export default function ImageSlot({
  figure,
  label,
  note,
  ratio = '16 / 10',
  variant = 'photo',
  sub = 'Drop in hi-res scan later',
  className,
  src,
  alt,
}: ImageSlotProps) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [src])

  const showPhoto = Boolean(src) && !failed
  const mediaClassName =
    variant === 'product' ? 'slot__media slot__media--product' : 'slot__media'
  const displayNote = showPhoto ? 'Bob Reeves Brass photograph' : note

  return (
    <figure
      className={className ? `slot ${className}` : 'slot'}
      style={{ '--slot-ratio': ratio } as CSSProperties}
    >
      <span className="slot__corner slot__corner--tl" aria-hidden="true" />
      <span className="slot__corner slot__corner--tr" aria-hidden="true" />
      <span className="slot__corner slot__corner--bl" aria-hidden="true" />
      <span className="slot__corner slot__corner--br" aria-hidden="true" />
      <div
        className={mediaClassName}
        role={showPhoto ? undefined : 'img'}
        aria-label={
          showPhoto ? undefined : `${label} — placeholder awaiting authentic photograph`
        }
      >
        {showPhoto ? (
          <img
            src={src}
            alt={alt ?? label}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="slot__center">
            {variant === 'product' ? <MouthpieceProfile /> : null}
            <svg
              className="slot__cross"
              viewBox="0 0 32 32"
              width="30"
              height="30"
              aria-hidden="true"
            >
              <path
                d="M16 3v11M16 18v11M3 16h11M18 16h11"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <circle cx="16" cy="16" r="2.4" fill="currentColor" />
            </svg>
            <span className="slot__mark">{label}</span>
            <span className="slot__sub">{sub}</span>
          </div>
        )}
      </div>
      <figcaption className="slot__caption">
        <span className="slot__caption-left">
          <span className="slot__figure">{figure}</span>
          {label}
        </span>
        {displayNote ? <span className="slot__note">{displayNote}</span> : null}
      </figcaption>
    </figure>
  )
}

/**
 * Side profile of a mouthpiece — rim, cup, throat, shank and backbore.
 * Pure geometry: a technical drawing, not imagery.
 */
function MouthpieceProfile() {
  return (
    <svg
      className="slot__profile"
      viewBox="0 0 260 84"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 8 C34 8 54 16 68 30 C76 37 88 37 102 37 L232 37 C242 37 248 39 248 42 C248 45 242 47 232 47 L102 47 C88 47 76 47 68 54 C54 68 34 76 12 76 Z" />
      <path d="M20 14 C42 16 58 26 70 37" />
      <path d="M20 70 C42 68 58 58 70 47" />
      <path d="M222 37 V47" strokeWidth="1" />
      <path d="M4 42 H244" strokeWidth="1" strokeDasharray="3 6" />
    </svg>
  )
}
