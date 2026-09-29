> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/materials-cloud.md

---
name: duaer-materials-cloud
description: >-
  Duaer Materials Cloud MC3D. Relaxed 3D crystal structures computed with PBE in Materials Cloud MC3D, by formula or elements, with cell volume, energy, and source database.
  One successful search uses 1 Duaer credit.
---

# Duaer Materials Cloud MC3D

Duaer Materials Cloud MC3D searches the MC3D database of experimentally known 3D crystals relaxed with DFT (PBE) by the Materials Cloud team. Each row names the experimental database the structure came from.

## When to use

- Get a DFT-relaxed version of a known experimental crystal.
- Compare cell volume and magnetization across polymorphs.

## When not to use

- Band gaps and hull stability. Use https://skills.duaer.com/materials-project.md.
- Raw experimental CIFs. Use https://skills.duaer.com/cod.md.

## Call

`GET https://api.duaer.com/v1/data/materials-cloud?formula=SiO2`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `formula` or `elements`.

- `formula` — Formula such as SiO2. Matches the reduced formula.
- `elements` — Optional. Materials that contain all of these, such as Si,O.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/materials-cloud?formula=SiO2` — relaxed silica polymorphs.
- `GET https://api.duaer.com/v1/data/materials-cloud?elements=Li,Co,O&limit=5` — lithium cobalt oxides.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `structureId` — provider id.
- `formula`, `formulaCell`, `elements`, `sites` — reduced formula, cell formula, elements, and atoms in the cell.
- `mc3dId`, `sourceDatabase`, `sourceId` — MC3D id and the experimental source (such as mpds or cod).
- `totalEnergyEv`, `cellVolumeA3`, `totalMagnetization` — DFT energy, cell volume in Å³, and magnetization.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/materials-project.md — Duaer Materials Project
- https://skills.duaer.com/alexandria.md — Duaer Alexandria

## Related skills

- [Materials Project in Duaer](https://skills.duaer.com/materials-project.md)
- [Alexandria in Duaer](https://skills.duaer.com/alexandria.md)
