> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/alexandria.md

---
name: duaer-alexandria
description: >-
  Duaer Alexandria. Millions of DFT structures in the Alexandria PBE database by formula or elements: band gap, formation energy, and distance to the hull.
  One successful search uses 1 Duaer credit.
---

# Duaer Alexandria

Duaer Alexandria searches the Alexandria PBE database over OPTIMADE. It holds millions of computed structures, including many not found in other databases.

## When to use

- Check whether a composition is predicted stable (hull distance near 0).
- Find computed structures beyond Materials Project.

## When not to use

- Experimental structures. Use https://skills.duaer.com/cod.md.
- Curated properties with elastic data. Use https://skills.duaer.com/jarvis.md.

## Call

`GET https://api.duaer.com/v1/data/alexandria?formula=GaAs`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `formula` or `elements`.

- `formula` — Formula such as GaAs. Matches the reduced formula.
- `elements` — Optional. Materials that contain all of these, such as Ga,As.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/alexandria?formula=GaAs` — GaAs structures with band gap and stability.
- `GET https://api.duaer.com/v1/data/alexandria?elements=Na,S&limit=5` — sodium-sulfur compounds.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `alexandriaId` — Alexandria id.
- `formula`, `elements`, `sites` — reduced formula, elements, and atoms in the cell.
- `spaceGroupNumber` — symmetry.
- `bandGapEv`, `formationEnergyEvPerAtom`, `energyAboveHullEv` — gap, formation energy, and distance to the convex hull.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/aflow.md — Duaer AFLOW
- https://skills.duaer.com/materials-project.md — Duaer Materials Project

## Related skills

- [AFLOW in Duaer](https://skills.duaer.com/aflow.md)
- [Materials Project in Duaer](https://skills.duaer.com/materials-project.md)
