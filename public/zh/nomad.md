> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/nomad.md

---
name: duaer-nomad
description: >-
  Duaer NOMAD. Materials simulation entries in the NOMAD repository by formula, elements, and simulation code: method, calculation type, program, author, and upload date.
  One successful search uses 1 Duaer credit.
---

# Duaer NOMAD

Duaer NOMAD searches the NOMAD repository of raw and processed materials simulations (DFT and more), newest uploads first. Use it to find existing calculations before running your own.

## When to use

- Check whether someone already published a VASP or Quantum Espresso run for a system.
- Find recent simulation uploads for a composition.

## When not to use

- A curated property table. Use https://skills.duaer.com/jarvis.md or https://skills.duaer.com/materials-project.md.
- Experimental structures. Use https://skills.duaer.com/cod.md.

## Call

`GET https://api.duaer.com/v1/data/nomad?formula=GaN&program=VASP`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `formula` or `elements`.

- `formula` — Formula such as GaN. Matches the reduced formula.
- `elements` — Optional. Entries that contain all of these, such as Ga,N.
- `program` — Optional. Simulation code, such as VASP or Quantum Espresso.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/nomad?formula=GaN&program=VASP` — GaN runs made with VASP.
- `GET https://api.duaer.com/v1/data/nomad?elements=Si,O&limit=5` — latest silicon-oxygen entries.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `entryId`, `uploadId` — NOMAD ids.
- `formula`, `elements`, `structuralType` — composition and bulk, surface, or molecule.
- `method`, `calculation`, `program` — such as DFT, GeometryOptimization, VASP.
- `author`, `uploaded` — origin and upload date.
- `reference` — first external reference, when present.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/jarvis.md — Duaer JARVIS-DFT
- https://skills.duaer.com/materials-project.md — Duaer Materials Project

## 相关技能

- [在 Duaer 里查 JARVIS-DFT](https://skills.duaer.com/zh/jarvis.md)
- [在 Duaer 里查 Materials Project](https://skills.duaer.com/zh/materials-project.md)
