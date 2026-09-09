type Stat = {
  value: string
  label: string
  word?: boolean
}

const STATS: Stat[] = [
  { value: '1968', label: 'Founded in Hollywood' },
  {
    value: '15,000+',
    label: 'Piston instruments represented in valve alignment experience',
  },
  { value: 'California', label: 'Made in', word: true },
  { value: 'Purviance', label: 'Legacy', word: true },
]

export default function StatStrip() {
  return (
    <section className="stats" aria-label="Heritage at a glance">
      <div className="wrap">
        <dl className="stats__grid">
          {STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <dt className="stat__label">{stat.label}</dt>
              <dd className={stat.word ? 'stat__value stat__value--word' : 'stat__value'}>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
