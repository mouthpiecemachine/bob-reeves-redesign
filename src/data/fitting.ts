/**
 * FIND YOUR REEVES — prototype fitting data.
 *
 * Everything in this file is clearly labeled PROTOTYPE data: it demonstrates
 * how decades of Reeves fitting knowledge could become a scalable digital
 * sales experience. It is NOT verified Reeves catalog mapping and must never
 * be presented as Reeves fact.
 *
 * Deliberately absent: Mouthpiece Machine branding, MM characters, Mouthpiece
 * DNA / Horn DNA / Pairing DNA concepts, MM recommendation architecture, and
 * any custom-mouthpiece generation logic.
 */

export const PROTOTYPE_NOTICE =
  'Prototype fitting data — illustrative starting points for this design prototype. Not verified Reeves specifications.'

export type FinderOption = {
  id: string
  label: string
  hint?: string
}

export type FinderStep = {
  id: 'instrument' | 'current' | 'style' | 'wrong' | 'improve' | 'feel'
  kind: 'single' | 'multi' | 'text'
  num: string
  title: string
  blurb: string
  options?: FinderOption[]
  placeholder?: string
  examples?: string[]
  optional?: boolean
}

export const FINDER_STEPS: FinderStep[] = [
  {
    id: 'instrument',
    kind: 'single',
    num: '01',
    title: 'What are you playing?',
    blurb: 'The fitting starts with the horn.',
    options: [
      { id: 'trumpet', label: 'Trumpet' },
      { id: 'cornet', label: 'Cornet' },
      { id: 'flugelhorn', label: 'Flugelhorn' },
    ],
  },
  {
    id: 'current',
    kind: 'text',
    num: '02',
    title: 'What mouthpiece are you on now?',
    blurb: 'Write it as it reads on the shank — or move on if you are not sure.',
    placeholder: 'e.g. 3C, 1½C, 7C, MV2…',
    examples: ['3C-style', '1½C-style', '7C-style', 'Not sure'],
    optional: true,
  },
  {
    id: 'style',
    kind: 'single',
    num: '03',
    title: 'Where do you spend most of your playing?',
    blurb: 'The chair you sit in most weeks.',
    options: [
      { id: 'lead', label: 'Lead' },
      { id: 'jazz', label: 'Jazz & solo' },
      { id: 'orchestral', label: 'Orchestral' },
      { id: 'commercial', label: 'Commercial & studio' },
      { id: 'band', label: 'Concert & wind band' },
      { id: 'allround', label: 'All-around' },
    ],
  },
  {
    id: 'wrong',
    kind: 'multi',
    num: '04',
    title: 'What feels wrong right now?',
    blurb: 'Choose everything that applies — this is the heart of the fitting.',
    options: [
      { id: 'air', label: 'The air feels tight' },
      { id: 'endurance', label: 'Endurance fades mid-set' },
      { id: 'range', label: 'Range is unstable' },
      { id: 'tone', label: 'Tone will not focus' },
      { id: 'slotting', label: 'Notes will not lock in' },
      { id: 'comfort', label: 'The rim is uncomfortable' },
    ],
  },
  {
    id: 'improve',
    kind: 'multi',
    num: '05',
    title: 'What do you want to improve?',
    blurb: 'What would make you keep the horn out of the case?',
    options: [
      { id: 'range', label: 'Easier upper register' },
      { id: 'endurance', label: 'More endurance' },
      { id: 'tone', label: 'Richer, fuller tone' },
      { id: 'attacks', label: 'Cleaner attacks' },
      { id: 'slotting', label: 'Better slotting' },
      { id: 'freedom', label: 'More freedom in the blow' },
    ],
  },
  {
    id: 'feel',
    kind: 'single',
    num: '06',
    title: 'Which feel is closest to home?',
    blurb: 'How you like the horn to blow against you.',
    options: [
      { id: 'free', label: 'Free-blowing' },
      { id: 'balanced', label: 'Balanced' },
      { id: 'supported', label: 'Supported — a little resistance' },
      { id: 'unsure', label: 'Not sure yet' },
    ],
  },
]

export type FittingAnswers = Partial<Record<FinderStep['id'], string[]>>

export type Recommendation = {
  ref: string
  name: string
  line: string
  specs: { label: string; value: string }[]
  why: string[]
}

type PrototypeRecommendation = {
  ref: string
  name: string
  line: string
  specs: { label: string; value: string }[]
  baseWhy: string
  /** Signals: "stepId:optionId" → weight toward this starting point. */
  signals: Record<string, number>
  /** Human explanation per matched signal, shown under WHY THESE MAY FIT. */
  whyMap: Record<string, string>
}

const PROTOTYPE_RECOMMENDATIONS: PrototypeRecommendation[] = [
  {
    ref: 'SP-01',
    name: 'The Open Blow',
    line: 'A freer, more open starting point.',
    specs: [
      { label: 'Cup', value: 'Shallow–medium, open feel' },
      { label: 'Rim', value: 'Standard width, rounded edge' },
      { label: 'Throat', value: 'Open' },
      { label: 'Backbore', value: 'Open, free-blowing' },
    ],
    baseWhy:
      'A deliberately open, free-blowing concept — the traditional starting direction when resistance is the complaint.',
    signals: {
      'feel:free': 3,
      'wrong:air': 3,
      'improve:freedom': 2,
      'style:lead': 2,
      'style:commercial': 1,
      'improve:range': 1,
      'wrong:range': 1,
    },
    whyMap: {
      'wrong:air':
        'You told us the air feels tight — an open throat and backbore are the classic answer to resistance.',
      'feel:free':
        'You described a free-blowing feel as home — this concept keeps the blow wide open.',
      'style:lead':
        'Lead playing rewards efficiency at volume; open setups are the traditional lead direction.',
      'style:commercial':
        'Commercial and studio work often asks for a free, efficient blow above the staff.',
      'improve:freedom':
        'You want more freedom — the open blow targets that directly.',
      'improve:range':
        'Less resistance can free up the top of the range for some players.',
      'wrong:range':
        'Unstable range can come from fighting resistance — the open blow removes that fight.',
    },
  },
  {
    ref: 'SP-02',
    name: 'The Centered Player',
    line: 'The balanced middle of the Reeves ecosystem.',
    specs: [
      { label: 'Cup', value: 'Medium' },
      { label: 'Rim', value: 'Standard, comfort edge' },
      { label: 'Throat', value: 'Medium' },
      { label: 'Backbore', value: 'Balanced' },
    ],
    baseWhy:
      'The balanced middle of the ecosystem — designed to do everything reasonably well and nothing badly.',
    signals: {
      'feel:balanced': 3,
      'wrong:endurance': 2,
      'wrong:slotting': 2,
      'improve:endurance': 2,
      'improve:slotting': 2,
      'style:allround': 2,
      'style:jazz': 1,
      'wrong:comfort': 1,
      'improve:attacks': 1,
    },
    whyMap: {
      'wrong:endurance':
        'Endurance fading mid-set often points to a setup fighting the player — a balanced blow spreads the workload.',
      'wrong:slotting':
        'Notes not locking in is a centering problem — balanced underparts are the classic response.',
      'improve:endurance':
        'You want the set to feel easier at bar 40 — balance is where endurance usually lives.',
      'improve:slotting':
        'Cleaner slotting comes from a setup that centers the tone — this concept aims there.',
      'style:allround':
        'All-around players need one setup that does many jobs — balance is the multi-tool.',
      'style:jazz':
        'Jazz and solo work rewards a centered core with flexibility around it.',
      'feel:balanced':
        'You called balance home — this concept is built around it.',
      'wrong:comfort':
        'Comfort issues often start at the rim — this pairing begins with a standard comfort edge.',
    },
  },
  {
    ref: 'SP-03',
    name: 'The Focused Sound',
    line: 'Depth, core and carry in one concept.',
    specs: [
      { label: 'Cup', value: 'Medium–deep' },
      { label: 'Rim', value: 'Standard' },
      { label: 'Throat', value: 'Standard' },
      { label: 'Backbore', value: 'Focused' },
    ],
    baseWhy:
      'The deeper, more supported concept — where a rich, focused sound is the priority.',
    signals: {
      'feel:supported': 3,
      'wrong:tone': 3,
      'style:orchestral': 3,
      'style:band': 2,
      'improve:tone': 3,
      'improve:attacks': 1,
    },
    whyMap: {
      'wrong:tone':
        'Tone not focusing is the classic case for a deeper cup with a focused backbore.',
      'feel:supported':
        'You like the horn to lean back against you — this concept provides that support.',
      'style:orchestral':
        'Orchestral playing asks for depth, core and carry — the focused concept is built for it.',
      'style:band':
        'Concert and wind band chairs reward a focused, steady core.',
      'improve:tone':
        'You want a richer sound — cup depth and backbore focus are the usual levers.',
      'improve:attacks':
        'A focused setup can clean up attacks by centering the response.',
    },
  },
]

const MAX_WHY = 4

/**
 * Deterministic prototype scoring. Returns the top 2 starting points, plus
 * the 3rd only when it earned at least one signal from the answers.
 */
export function recommend(answers: FittingAnswers): Recommendation[] {
  const selected = new Set<string>(
    (Object.entries(answers) as [FinderStep['id'], string[] | undefined][])
      .map(([stepId, values]) => values?.map((value) => `${stepId}:${value}`) ?? [])
      .flat(),
  )

  const scored = PROTOTYPE_RECOMMENDATIONS.map((rec, order) => {
    let score = 0
    const matches: { key: string; weight: number }[] = []
    Object.entries(rec.signals).forEach(([key, weight]) => {
      if (selected.has(key)) {
        score += weight
        matches.push({ key, weight })
      }
    })
    matches.sort((a, b) => b.weight - a.weight)
    return { rec, order, score, matches }
  })

  scored.sort((a, b) => b.score - a.score || a.order - b.order)

  const picked = scored
    .filter((entry, index) => index < 2 || entry.score > 0)
    .slice(0, 3)

  return picked.map(({ rec, matches }) => ({
    ref: rec.ref,
    name: rec.name,
    line: rec.line,
    specs: rec.specs,
    why: [
      rec.baseWhy,
      ...matches.slice(0, MAX_WHY - 1).map((match) => rec.whyMap[match.key] ?? ''),
    ].filter((line) => line.length > 0),
  }))
}

export function instrumentNote(answers: FittingAnswers): string | null {
  const instrument = answers.instrument?.[0]
  if (!instrument || instrument === 'trumpet') return null
  return 'This prototype maps trumpet starting points first — read the directions below as orientation for cornet and flugelhorn, and confirm with a consultation.'
}

export function setupNote(answers: FittingAnswers): string | null {
  const current = answers.current?.[0]?.trim()
  if (!current || /^not ?sure$/i.test(current)) return null
  return `Your setup today — ${current} — is kept as the reference point for every starting point below.`
}
