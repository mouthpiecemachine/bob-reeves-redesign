# ARCHIVAL PHOTOGRAPHY — /public/archival

Authentic Bob Reeves Brass photographs only — no AI imagery, no stock
photography, no alterations. Photographs are presented exactly as scanned.

## In place (uploaded originals, copied unaltered)

| File                | Source upload                                    | Used in |
| ------------------- | ------------------------------------------------ | ------- |
| `records.jpg`       | `573813354_18535391944044693_…_n.jpg`            | Hero right — customer/mouthpiece records (handwritten entries: Freddie Hubbard, Snooky Young, Art Farmer — preserved via square frame + object-position only) |
| `bench-portrait.jpg`| `images.jpg`                                     | Hero strip 01 — at the bench |
| `bench-filing.jpg`  | `624781042_18551252563044693_…_n.jpg`            | Hero strip 02 — hand-finishing |
| `lathe.jpg`         | `558776272_1199636568867125_…_n.jpg`             | Hero strip 03 — at the lathe |
| `mouthpieces.jpg`   | `649596576_18565033168044693_…_n-1.jpg`          | Hero strip 04 — raw brass, stamped Reeves |

The original uploads remain untouched in `/public/`.

## Logo — in place

- `/public/4b59d2fb-9512-483f-9399-27058551cb76.png` — the modernized
  transparent Reeves brand mark (1672 × 941 RGBA), rendered exactly as
  supplied in the header at header scale (~250px wide desktop, responsive
  below). No redraw, recolor, or crop; transparency preserved.
- The earlier vintage mark (`/public/images.png`, 576 × 246) remains in
  `/public/` but is no longer used by the header.
- If the file is ever missing, the approved text brand stands in
  automatically (`SiteHeader.tsx` fallback).

## Still drop-in ready (downstream sections, unchanged)

`maker-01.jpg`, `craft-01.jpg`, `craft-02.jpg`, `mouthpiece-01.jpg` …
`mouthpiece-04.jpg`, `tools-01.jpg`, `tools-02.jpg` — labeled placeholder
frames stay until these files exist. Captions and frame assignments live in
`src/data/archival.ts`.
