# 294 — Full skill text for core life data skills (batch 1)

## What

Move papers, proteins, trials, compounds, genes, and variants from the short `skill()` text to the full layout the open data skills use: when to use, when not to use, parameters, examples, result fields, and credits. Text lives in `scripts/life-skills.mjs`.

Fixes in the old text:

- Result named no fields ("plus the fields named on this skill"). Each skill now lists its item fields from the DuaerData item types.
- Credits said a search that matches nothing uses 0. Life sources bill every successful upstream search, even an empty one (`DuaerDataLifeService.finish`). Compounds is the exception for a name PubChem does not know and for PubChem 404.
- genes and variants said fields combine. They use one field by precedence (`geneSearchUrl`, `variantSearchUrl`).
- Wrong input returns 400 and uses 0. This was missing.

## Acceptance

- The six pages and their zh twins have When to use, Parameters, Examples, Result fields, and Credits.
- Every parameter matches what the backend reads for that route.
- Every example returns rows from the upstream source.
- `node scripts/render.mjs` renders 846 pages.
