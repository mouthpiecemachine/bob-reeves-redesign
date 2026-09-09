/**
 * Archival imagery manifest — Bob Reeves Brass.
 *
 * Drop authentic photographs into /public/archival using these filenames and
 * every frame on the site fills automatically. Until a file exists, the
 * components fall back to the labeled technical placeholders from the V2
 * system — nothing breaks, nothing looks empty.
 *
 * Only authentic Bob Reeves Brass photography belongs in this folder —
 * no AI imagery, no stock photography, and no mislabeled archive scans.
 * Captions stay general on purpose: rename nothing, invent nothing.
 */

export type ArchivalImage = {
  src: string
  alt: string
}

const image = (file: string, alt: string): ArchivalImage => ({
  src: `/archival/${file}`,
  alt,
})

/**
 * Modernized brand mark — transparent PNG used exactly as supplied
 * (/public/4b59d2fb-9512-483f-9399-27058551cb76.png, 1672 × 941 RGBA).
 * Never redrawn, recolored, or cropped; transparency preserved.
 * If the file is ever missing, the approved text brand stands in.
 */
export const BRAND_LOGO = {
  src: '/4b59d2fb-9512-483f-9399-27058551cb76.png',
  alt: 'Bob Reeves Brass Mouthpiece Maker — Made for Players. Made in California. Est. 1968',
}

/**
 * Isolated blue Reeves mouthpiece artwork — transparent PNG used exactly as
 * supplied (/public/197abc74-0833-4bcb-a60b-e6acfcf9c7e3.png). Sits beside
 * the Find Your Reeves heading, never over the machine.
 */
export const REEVES_MARK = {
  src: '/197abc74-0833-4bcb-a60b-e6acfcf9c7e3.png',
  alt: 'Blue engraved artwork of a Reeves mouthpiece',
}

/** The real customer / mouthpiece records photograph, as uploaded. */
export const RECORDS_IMAGE = image(
  'records.jpg',
  'Vintage Reeves customer and mouthpiece records — handwritten envelopes',
)

/** Genuine archival photographs for the hero contact strip, as uploaded. */
export const ARCHIVE_STRIP_IMAGES: ArchivalImage[] = [
  image('bench-portrait.jpg', 'At the bench — from the Reeves archive'),
  image('bench-filing.jpg', 'Hand-finishing at the bench — from the Reeves archive'),
  image('lathe.jpg', 'At the lathe — from the Reeves archive'),
  image('mouthpieces.jpg', 'Raw brass mouthpieces stamped Reeves'),
]

/** The Maker — Bob at the bench. */
export const MAKER_IMAGES = {
  bench: image('maker-01.jpg', 'Bob Reeves at the bench — Bob Reeves Brass archive'),
}

/** The Craft — workshop and process. */
export const CRAFT_IMAGES = {
  workshop: image('craft-01.jpg', 'The Reeves workshop — Bob Reeves Brass archive'),
  brass: image('craft-02.jpg', 'Raw brass stock at the Reeves workshop'),
}

/** The Mouthpiece — raw and finished product photography. */
export const MOUTHPIECE_IMAGES = {
  raw: image('mouthpiece-01.jpg', 'A raw machined Reeves mouthpiece'),
  finished: image('mouthpiece-02.jpg', 'Finished Reeves mouthpieces'),
  detailCup: image('mouthpiece-03.jpg', 'Cup and rim detail of a Reeves mouthpiece'),
  detailBackbore: image('mouthpiece-04.jpg', 'Backbore detail of a Reeves mouthpiece'),
}

/** Commerce — the three businesses. */
export const COMMERCE_IMAGES = {
  mouthpieces: image('mouthpieces.jpg', 'Raw brass mouthpieces stamped Reeves'),
  alignment: image('lathe.jpg', 'At the lathe — from the Reeves archive'),
  trumpets: image('shop-trumpets.jpg', 'Trumpets and accessories'),
}

/** Valve alignment service page. */
export const SERVICE_IMAGES = {
  bench: image('bench-filing.jpg', 'Hand-finishing at the bench — from the Reeves archive'),
}

/** The continuation pair — archive and bench. */
export const CONTINUATION_IMAGES = {
  archive: image('tools-01.jpg', 'Early Reeves tooling — Bob Reeves Brass archive'),
  bench: image('tools-02.jpg', 'At the Reeves bench'),
}
