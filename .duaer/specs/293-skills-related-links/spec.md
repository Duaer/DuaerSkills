# 293 — Fix related links that point at missing skills

## What

Three catalog rows list related slugs that do not exist, so render drops them silently.

- bioregistry: `identifiers` → `node-norm`.
- wikipathways, metacyc: drop `reactome`. Reactome is the `pathways` skill, already listed.

## Acceptance

- Every `related` slug in the catalog names an existing skill.
- public/bioregistry.md links node-norm.
- `node scripts/render.mjs` renders 846 pages.
