/**
 * BOB REEVES MOUTHPIECE DATA — the configurator's source of truth.
 *
 * Every rim, cup and backbore entry below is taken verbatim from the
 * official Bob Reeves Brass mouthpieces page (bobreeves.com/mouthpieces,
 * "Standard Reeves Trumpet Mouthpiece" charts). Nothing is invented:
 * no measurements, no performance claims, no comparisons beyond the ones
 * Reeves publishes.
 */

export type Rim = {
  id: string
  name: string
  /** Inner diameter in millimetres, as published. */
  mm: string
  /** Inner diameter as published in fractions/inches. */
  imperial: string
  /** Rim contour description, as published. */
  shape: string
  /** Rim comparison, as published. */
  similar: string
}

export type Cup = {
  id: string
  name: string
  /** Full published description. */
  lead: string
  /** Average cup depth, as published. */
  depth: string
  /** Depth word from the published description (e.g. "Extra shallow"). */
  depthClass: string
  /** Cup shape words from the published description (e.g. "Bowl shaped"). */
  shape: string
  /** Published in-description reference (e.g. Bach 3C), if any. */
  note?: string
}

export type Backbore = {
  id: string
  name: string
  /** Published designation shown beside the number ("Standard" / "Symphonic"). */
  qualifier?: string
  /** Description, as published. */
  description: string
  /** Extra published fact, if any. */
  note?: string
}

/* Rims — verbatim from the "1. Choose a rim" chart. */
export const RIMS: Rim[] = [
  {
    id: '40',
    name: '40',
    mm: '15.875',
    imperial: '40/64" · .625"',
    shape: 'Semi-flat with a medium-sharp bite',
    similar: 'Bach Mount Vernon 10 1/2C, Bach 11 3/4 C, 17, and Schilke 6 rims',
  },
  {
    id: '41',
    name: '41',
    mm: '16.272',
    imperial: '41/64" · .640"',
    shape: 'Semi-flat with a medium-sharp bite',
    similar: 'Bach 7C, 9D, 10 3/4 A, 11A, 11C, and Schilke 13 rims',
  },
  {
    id: '42',
    name: '42',
    mm: '16.669',
    imperial: '42/64" · .656"',
    shape: 'Medium-round with a soft bite',
    similar: 'Bach Elkhart 3C & 6C, Bach 8C, 10B, and Schilke 14 rims',
  },
  {
    id: '43',
    name: '43',
    mm: '17.066',
    imperial: '43/64" · .672"',
    shape: 'Semi-round with a soft bite',
    similar: 'Bach 2 3/4 C, 3, 3E, 3F, and Schilke 16 rims',
  },
  {
    id: '43N',
    name: '43N',
    mm: '17.066',
    imperial: '43/64" · .672"',
    shape: 'Semi-flat, narrow, with a medium-sharp bite',
    similar: 'a Bach 6C Mount Vernon, Bach 1X, 2 1/2 C, 6, 6B, 7D, and 8 1/2 B rims',
  },
  {
    id: '43W',
    name: '43W',
    mm: '17.066',
    imperial: '43/64" · .672"',
    shape: 'Semi-round, medium-cushion with a soft bite',
    similar: 'a Bach 2 3/4C with cushion, 7CW, and 3CW rims',
  },
  {
    id: '43.5',
    name: '43.5',
    mm: '17.264',
    imperial: '43.5/64" · .680"',
    shape: 'Medium-round, semi-narrow, with a medium-sharp bite',
    similar: 'Bach 1, 1 1/2 C, 2, 3B, 5C Elkhart and Schilke 15 and 16 rims',
  },
]

/* Cups — verbatim from the "2. Choose a cup style" chart. */
export const CUPS: Cup[] = [
  {
    id: 'ES',
    name: 'ES',
    lead: 'Extra shallow bowl shaped cup',
    depth: '.195"',
    depthClass: 'Extra shallow',
    shape: 'Bowl shaped',
  },
  {
    id: 'SV',
    name: 'SV',
    lead: 'Very shallow conical V-shaped cup',
    depth: '.208"',
    depthClass: 'Very shallow',
    shape: 'Conical V-shaped',
  },
  {
    id: 'S',
    name: 'S',
    lead: 'Shallow bowl shaped cup',
    depth: '.215"',
    depthClass: 'Shallow',
    shape: 'Bowl shaped',
  },
  {
    id: 'M',
    name: 'M',
    lead: 'Medium bowl shaped cup',
    depth: '.245"',
    depthClass: 'Medium',
    shape: 'Bowl shaped',
  },
  {
    id: 'D',
    name: 'D',
    lead: 'Medium-deep conical bowl shaped cup',
    depth: '.260"',
    depthClass: 'Medium-deep',
    shape: 'Conical bowl shaped',
  },
  {
    id: 'C',
    name: 'C',
    lead: 'Medium-deep bowl shaped cup',
    depth: '.268"',
    depthClass: 'Medium-deep',
    shape: 'Bowl shaped',
    note: 'Similar to a Bach 3C cup',
  },
  {
    id: 'B',
    name: 'B',
    lead: 'Deep cylindrical bowl',
    depth: '.305"',
    depthClass: 'Deep',
    shape: 'Cylindrical bowl',
    note: 'Like Bach 7B',
  },
]


/* Backbores — verbatim from the "3. Choose a backbore" chart. */
export const BACKBORES: Backbore[] = [
  {
    id: '692sL',
    name: '692sL',
    description:
      'An extremely efficient backbore. It is the same shape as the 692s backbore but not shortened. This increases the cylindrical bore section leading to a full, focused sound and enhanced slotting in the extreme upper register.',
  },
  {
    id: '692s',
    name: '692s',
    description:
      'An efficient backbore, the 692s is shorter than a conventional length mouthpiece. When combined with shallow cups it projects with ease making it a popular choice for lead players. When combined with very deep cups (like a "B" cup) it allows for the darkness in sound of the cup while continuing to assist in the upper register.',
  },
  {
    id: '2',
    name: '2',
    qualifier: 'Standard',
    description:
      'Our most versatile backbore, the 2 is more centered than a Bach #10 with excellent tone color and intonation. This backbore works well on all of our cups providing the player both efficiency and agility.',
    note: 'Generally not marked on our mouthpieces',
  },
  {
    id: '69',
    name: '69',
    description:
      'Good for big band playing, the 69 backbore records well with a bright, focused sound. This is very popular on our shallower cups (S and shallower). Good if you like to power the upper register.',
    note: 'Named because Bob developed it in 1969',
  },
  {
    id: '692',
    name: '692',
    description:
      'Darker and broader tone than the 69 backbore but still with a well defined core. The 692 works great for strong players who don\u2019t prefer the efficiency of smaller backbores and for players who have tighter horns.',
  },
  {
    id: 's',
    name: 's',
    qualifier: 'Symphonic',
    description:
      'Our Symphonic backbore is similar in style to a Schmitt backbore and used in combination with our deeper cups to produce an opulent, teutonic sound.',
  },
  {
    id: 'X',
    name: 'X',
    description:
      'Our physically largest backbore, the X is a popular choice for rotary trumpets and when a dark, warm sound is desired.',
  },
]
