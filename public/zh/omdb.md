> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/omdb.md

---
name: duaer-omdb
description: >-
  Duaer Open Materials Database. Crystal structures in the Open Materials Database by formula or elements, with cell formula, sites, and periodicity.
  One successful search uses 1 Duaer credit.
---

# Duaer Open Materials Database

Duaer Open Materials Database searches the openmaterialsdb.se structure collection over OPTIMADE. It returns standard structure fields only.

## When to use

- Cross-check a structure against another open database.
- List structures that contain a set of elements.

## When not to use

- Band gaps or energies. Use https://skills.duaer.com/materials-project.md.
- 2D layers. Use https://skills.duaer.com/matpedia-2d.md.

## Call

`GET https://api.duaer.com/v1/data/omdb?formula=CaMgO6Si2`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `formula` or `elements`.

- `formula` — Formula such as CaMgO6Si2. Matches the reduced formula.
- `elements` — Optional. Materials that contain all of these, such as Ca,Mg.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/omdb?formula=CaMgO6Si2` — diopside structures.
- `GET https://api.duaer.com/v1/data/omdb?elements=Ca,Mg&limit=5` — structures with calcium and magnesium.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `structureId` — provider id.
- `formula`, `formulaCell`, `elements`, `sites` — reduced formula, cell formula, elements, and atoms in the cell.
- `periodicDimensions` — 3 for bulk crystals.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/materials-cloud.md — Duaer Materials Cloud MC3D
- https://skills.duaer.com/cod.md — Duaer Crystal structures (COD)

## 相关技能

- [在 Duaer 里查Materials Cloud MC3D](https://skills.duaer.com/zh/materials-cloud.md)
- [在 Duaer 里查晶体结构（COD）](https://skills.duaer.com/zh/cod.md)
