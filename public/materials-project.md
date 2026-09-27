> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/materials-project.md

---
name: duaer-materials-project
description: >-
  Duaer Materials Project. Computed inorganic materials from the Materials Project by formula or by elements they contain, with material id, formula, elements, and site count.
  One successful search uses 1 Duaer credit.
---

# Duaer Materials Project

Duaer Materials Project searches about 150,000 computed materials through the standard OPTIMADE interface. Each row links to the material page with band structure, stability, and more.

## When to use

- List known phases of a composition, such as all LiFePO4 entries.
- Find materials that contain a set of elements for screening.

## When not to use

- Measured structures from papers. Use https://skills.duaer.com/cod.md.
- Band gaps in the result rows. Use https://skills.duaer.com/jarvis.md.

## Call

`GET https://api.duaer.com/v1/data/materials-project?formula=LiFePO4`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `formula` or `elements`.

- `formula` — Formula such as LiFePO4. Matches the reduced formula.
- `elements` — Optional. Materials that contain all of these, such as Li,Fe,O.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/materials-project?formula=LiFePO4` — lithium iron phosphate phases.
- `GET https://api.duaer.com/v1/data/materials-project?elements=Li,Co,O&limit=20` — materials containing lithium, cobalt, and oxygen.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `materialId` — Materials Project id, such as mp-19017.
- `formula` — reduced formula, elements in alphabetical order.
- `elements`, `elementCount` — elements and their count.
- `sites` — atoms in the cell.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/jarvis.md — Duaer JARVIS-DFT
- https://skills.duaer.com/nomad.md — Duaer NOMAD
- https://skills.duaer.com/cod.md — Duaer Crystal structures (COD)

## Related skills

- [JARVIS-DFT in Duaer](https://skills.duaer.com/jarvis.md)
- [NOMAD in Duaer](https://skills.duaer.com/nomad.md)
- [Crystal structures (COD) in Duaer](https://skills.duaer.com/cod.md)
