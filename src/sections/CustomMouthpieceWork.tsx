/**
 * CUSTOM MOUTHPIECE WORK / REEVES SLEEVE SYSTEM
 *
 * Companion section to Valve Alignment. Presents the approved
 * "Your Reeves. Your Way." artwork as supplied — no added title,
 * no added copy. The artwork introduces itself.
 *
 * Placement: directly after Valve Alignment, before the navy
 * CONTACT & ORDER strip.
 */

const ARTWORK = '/778a0a3d-bf47-4085-9680-b55354a1de35.png'

export default function CustomMouthpieceWork() {
  return (
    <section className="custom-mouthpiece" id="custom-mouthpiece-work">
      <div className="custom-mouthpiece__inner">
        <div className="custom-mouthpiece__crop">
          <img
            src={ARTWORK}
            alt="Custom Mouthpiece Work — Your Reeves. Your Way. The Reeves Sleeve System."
            className="custom-mouthpiece__artwork"
          />
        </div>
      </div>
    </section>
  )
}