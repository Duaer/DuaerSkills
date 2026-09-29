> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/aflow.md

---
name: duaer-aflow
description: >-
  Duaer AFLOW. Computed materials from AFLOW by formula or elements: band gap, formation enthalpy, space group, and Pearson symbol.
  One successful search uses 1 Duaer credit.
---

# Duaer AFLOW

Duaer AFLOW searches the AFLOW database of high-throughput DFT calculations. A formula matches the reduced formula; elements find every compound containing them.

## When to use

- Screen candidate compounds by band gap or formation enthalpy.
- Compare polymorphs of one formula.

## When not to use

- Experimental structures. Use https://skills.duaer.com/cod.md.
- Simulation runs and raw files. Use https://skills.duaer.com/nomad.md.

## Call

`GET https://api.duaer.com/v1/data/aflow?formula=TiO2`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `formula` or `elements`.

- `formula` — Formula such as TiO2. Matches the reduced formula.
- `elements` — Optional. Materials that contain all of these, such as Ti,O.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/aflow?formula=TiO2` — TiO2 polymorphs with band gaps.
- `GET https://api.duaer.com/v1/data/aflow?elements=Li,Fe&limit=5` — compounds containing lithium and iron.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `auid`, `aflowPath` — AFLOW ids.
- `formula`, `compound`, `elements` — reduced formula, cell formula, and elements.
- `spaceGroupNumber`, `pearsonSymbol` — relaxed symmetry.
- `bandGapEv`, `formationEnthalpyEvPerAtom` — electronic gap and stability.

AFLOW can take several seconds to answer.

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

## Related skills

- [Alexandria in Duaer](https://skills.duaer.com/alexandria.md)
- [Materials Project in Duaer](https://skills.duaer.com/materials-project.md)
