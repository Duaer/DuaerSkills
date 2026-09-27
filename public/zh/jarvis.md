> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/jarvis.md

---
name: duaer-jarvis
description: >-
  Duaer JARVIS-DFT. NIST JARVIS-DFT computed materials with band gap, formation energy, energy above hull, space group, and 2D or 3D dimensionality.
  One successful search uses 1 Duaer credit.
---

# Duaer JARVIS-DFT

Duaer JARVIS-DFT searches the NIST JARVIS-DFT database, which includes many 2D materials. Rows carry key computed properties directly, so an agent can compare candidates without opening each page.

## When to use

- Compare band gaps and stability of candidate semiconductors or 2D materials.
- Screen a composition for the most stable phase (lowest energy above hull).

## When not to use

- Measured crystal data. Use https://skills.duaer.com/cod.md.
- Exact experimental band gaps. DFT (OptB88vdW) tends to underestimate them; mbjBandGapEv is closer when present.

## Call

`GET https://api.duaer.com/v1/data/jarvis?formula=MoS2`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `formula` or `elements`.

- `formula` — Formula such as MoS2. Matches the reduced formula.
- `elements` — Optional. Materials that contain all of these, such as Mo,S.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/jarvis?formula=MoS2` — MoS2 phases, bulk and 2D.
- `GET https://api.duaer.com/v1/data/jarvis?elements=Ga,N` — gallium nitride and related entries.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `jarvisId` — JARVIS id, such as JVASP-664.
- `formula`, `elements` — composition.
- `spaceGroup`, `crystalSystem`, `dimensionality` — symmetry and 3D or 2D.
- `bandGapEv`, `mbjBandGapEv` — OptB88vdW and TBmBJ band gaps in eV.
- `formationEnergyEvPerAtom`, `energyAboveHullEv` — stability in eV per atom.
- `bulkModulusGpa`, `densityGcm3`, `sites` — other properties when computed.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/materials-project.md — Duaer Materials Project
- https://skills.duaer.com/nomad.md — Duaer NOMAD
- https://skills.duaer.com/cod.md — Duaer Crystal structures (COD)

## 相关技能

- [在 Duaer 里查 Materials Project](https://skills.duaer.com/zh/materials-project.md)
- [在 Duaer 里查 NOMAD](https://skills.duaer.com/zh/nomad.md)
- [在 Duaer 里查晶体结构（COD）](https://skills.duaer.com/zh/cod.md)
