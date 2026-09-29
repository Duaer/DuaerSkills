> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/mpdd.md

---
name: duaer-mpdd
description: >-
  Duaer MPDD. Structures in the Material-Property-Descriptor Database by formula or elements, with space group, crystal system, density, and machine-learned formation energy.
  One successful search uses 1 Duaer credit.
---

# Duaer MPDD

Duaer MPDD searches the Material-Property-Descriptor Database, millions of structures with symmetry, density, and a machine-learned (SIPFENN) formation energy for fast screening.

## When to use

- Screen many structures of a composition by predicted formation energy.
- Get space group and density for a formula.

## When not to use

- DFT-computed stability. Use https://skills.duaer.com/alexandria.md.
- Experimental structures. Use https://skills.duaer.com/cod.md.

## Call

`GET https://api.duaer.com/v1/data/mpdd?formula=Fe2O3`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `formula` or `elements`.

- `formula` — Formula such as Fe2O3. Matches the reduced formula.
- `elements` — Optional. Materials that contain all of these, such as Fe,O.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/mpdd?formula=Fe2O3` — iron oxide structures with symmetry and density.
- `GET https://api.duaer.com/v1/data/mpdd?elements=Mg,Al,O&limit=5` — magnesium aluminium oxides.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `structureId` — provider id.
- `formula`, `formulaCell`, `elements`, `sites` — reduced formula, cell formula, elements, and atoms in the cell.
- `spaceGroup`, `spaceGroupNumber`, `crystalSystem` — symmetry.
- `densityGcm3`, `volumeA3` — density in g/cm³ and cell volume in Å³.
- `predictedFormationEnergyEvPerAtom` — machine-learned formation energy, not DFT.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/alexandria.md — Duaer Alexandria
- https://skills.duaer.com/materials-project.md — Duaer Materials Project

## 相关技能

- [在 Duaer 里查Alexandria](https://skills.duaer.com/zh/alexandria.md)
- [在 Duaer 里查 Materials Project](https://skills.duaer.com/zh/materials-project.md)
