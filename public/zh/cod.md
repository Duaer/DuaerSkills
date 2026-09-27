> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/cod.md

---
name: duaer-cod
description: >-
  Duaer Crystal structures (COD). Experimental crystal structures from the Crystallography Open Database by formula, mineral, or words: space group, cell lengths, year, paper, and CIF download.
  One successful search uses 1 Duaer credit.
---

# Duaer Crystal structures (COD)

Duaer Crystal structures searches the Crystallography Open Database, an open collection of about 500,000 measured structures of minerals, organics, and metal-organics.

## When to use

- Find measured unit cells and space groups of a mineral or compound.
- Get a CIF file to open in a structure viewer or simulation.

## When not to use

- Computed properties such as band gaps. Use https://skills.duaer.com/materials-project.md or https://skills.duaer.com/jarvis.md.
- Protein structures. Use https://skills.duaer.com/structures.md.

## Call

`GET https://api.duaer.com/v1/data/cod?formula=SiO2&limit=5`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `formula` or `words`.

- `formula` — Formula of one formula unit, such as SiO2 or CaCO3.
- `words` — Optional. Mineral, compound, or author words, such as quartz.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/cod?formula=SiO2&limit=5` — silica polymorphs.
- `GET https://api.duaer.com/v1/data/cod?words=perovskite` — entries that mention perovskite.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `codId`, `cifUrl` — COD id and CIF download link.
- `formula`, `mineral`, `chemicalName` — formula in Hill order and names.
- `spaceGroup`, `spaceGroupNumber` — Hermann–Mauguin symbol and number.
- `a`, `b`, `c`, `alpha`, `beta`, `gamma`, `volume` — cell lengths (Å), angles (°), and volume (Å³).
- `year`, `journal`, `paperTitle`, `doi` — source publication.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/materials-project.md — Duaer Materials Project
- https://skills.duaer.com/jarvis.md — Duaer JARVIS-DFT
- https://skills.duaer.com/compounds.md

## 相关技能

- [在 Duaer 里查 Materials Project](https://skills.duaer.com/zh/materials-project.md)
- [在 Duaer 里查 JARVIS-DFT](https://skills.duaer.com/zh/jarvis.md)
- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
