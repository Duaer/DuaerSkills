# 295 — Full skill text for the remaining life data skills

## What

Move the 270 life data skills still on the short `skill()` text, and the 5 mass spectrometry skills in `DARK_MATTER_SKILLS`, to the full layout from 294. All text now lives in `scripts/life-skills.mjs`. The unused `skill()` helper and `DARK_MATTER_SKILLS` are removed.

Built from DuaerMain develop 0c98de6b6:

- Parameters keep the existing wording, which matches the query params each route reads.
- Result lists each item field and its type from the DuaerData item type.
- "Provide `words` or `id`" skills say which field wins when both are sent, from the URL builder.
- Credits follow `DuaerDataLifeService`: a successful search uses 1 credit even when it finds nothing. Ten skills that resolve a gene or molecule first use 0 when the name does not match; their Credits say so.

Fixes in the old text:

- Result named no fields.
- Credits said a search that matches nothing uses 0.
- pathways, gene-ontology, and domains said fields combine. They use one field by precedence.

## Acceptance

- Every Data skill has When to use, When not to use, Parameters, Examples, Result, and Credits, once each.
- Every skills.duaer.com link in skill text names an existing skill.
- Documented parameters match the backend for all 280 life routes.
- No template placeholders in public/.
- `node scripts/render.mjs` renders 846 pages.
