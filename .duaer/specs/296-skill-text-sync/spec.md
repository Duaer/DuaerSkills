# 296 — One skill text across the market, skills site, and docs

## What

The same English skill text must appear in the Duaer data market (Copy skill), skills.duaer.com, and doc.duaer.com. After 294 and 295 the 281 life and mass spectrometry skills on this site no longer matched the other two.

This site's text becomes the shared text, with what only the market copy had:

- Reuse and "use this other skill" tips go at the end of Result.
- A Related section lists the catalog related skills plus the market's "Related …" links.
- pathways keeps the note that word and name searches are enriched with Reactome detail.

DuaerMain (dataMarket) and DuaerDoc (life-data-pages, dark-matter-skills) get the same text in their own changes.

## Acceptance

- Every Data skill has When to use, When not to use, Parameters, Examples, Result, Credits, and Related, once each.
- Every skills.duaer.com link in skill text names an existing skill.
- The 281 texts are byte-identical to the DuaerMain market and DuaerDoc copies.
- `node scripts/render.mjs` renders 846 pages.
