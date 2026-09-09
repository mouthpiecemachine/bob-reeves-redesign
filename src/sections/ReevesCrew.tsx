/**
 * THE REEVES CREW — the final homepage section.
 * Features the approved illustrated California beach artwork with
 * clickable bio hotspots for crew members.
 */

const CREW_ARTWORK = '/558776272_1199636568867125_2172954833437491272_n.jpg'

/**
 * Verified crew bio destinations.
 * Only includes crew members with confirmed existing Reeves bio pages.
 */
const CREW_MEMBERS = [
  {
    name: 'John Snell',
    ariaLabel: 'John Snell — read bio',
    href: '#/valve-alignment',
    /* Positioned over John Snell in the artwork */
    top: '45%',
    left: '25%',
    width: '12%',
    height: '30%',
  },
  {
    name: 'Bob Reeves',
    ariaLabel: 'Bob Reeves — read bio',
    href: '#/valve-alignment',
    /* Positioned over Bob Reeves in the artwork */
    top: '35%',
    left: '55%',
    width: '12%',
    height: '30%',
  },
]

export default function ReevesCrew() {
  return (
    <section className="reeves-crew" id="reeves-crew">
      <div className="reeves-crew__inner">
        <div className="reeves-crew__artwork-wrap">
          <img
            src={CREW_ARTWORK}
            alt="The Bob Reeves Brass crew — illustrated California beach scene featuring the Reeves team"
            className="reeves-crew__artwork"
          />
          {/* Clickable hotspots for crew members with verified bio destinations */}
          {CREW_MEMBERS.map((member) => (
            <a
              key={member.name}
              href={member.href}
              className="reeves-crew__hotspot"
              aria-label={member.ariaLabel}
              style={{
                top: member.top,
                left: member.left,
                width: member.width,
                height: member.height,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
