> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/matpedia-2d.md

---
name: duaer-matpedia-2d
description: >-
  Duaer 2DMatpedia. Computed two-dimensional materials in 2DMatpedia by formula or elements, with band gap and chemical system.
  One successful search uses 1 Duaer credit.
---

# Duaer 2DMatpedia

Duaer 2DMatpedia searches an open database of single-layer (2D) materials obtained by exfoliating layered bulk crystals and by substitution, with DFT band gaps.

## When to use

- Find monolayer candidates such as MoS2 or graphene analogues.
- Screen 2D materials by band gap for electronics.

## When not to use

- Bulk 3D crystals. Use https://skills.duaer.com/materials-project.md.
- Experimental structures. Use https://skills.duaer.com/cod.md.

## Call

`GET https://api.duaer.com/v1/data/matpedia-2d?formula=MoS2`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `formula` or `elements`.

- `formula` — Formula such as MoS2. Matches the reduced formula.
- `elements` — Optional. Materials that contain all of these, such as Mo,S.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/matpedia-2d?formula=MoS2` — MoS2 monolayers with band gaps.
- `GET https://api.duaer.com/v1/data/matpedia-2d?elements=W,Se&limit=5` — tungsten selenide layers.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `structureId` — provider id.
- `formula`, `formulaCell`, `elements`, `sites` — reduced formula, cell formula, elements, and atoms in the cell.
- `bandGapEv` — DFT band gap in eV.
- `chemicalSystem` — elements joined by dashes, such as Mo-S.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/materials-cloud.md — Duaer Materials Cloud MC3D
- https://skills.duaer.com/jarvis.md — Duaer JARVIS-DFT

## 相关技能

- [在 Duaer 里查Materials Cloud MC3D](https://skills.duaer.com/zh/materials-cloud.md)
- [在 Duaer 里查 JARVIS-DFT](https://skills.duaer.com/zh/jarvis.md)
