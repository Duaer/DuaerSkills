> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ligands.md

---
name: duaer-ligands
description: >-
  Duaer ligands. Look up PDBe chemical component (CCD) ligands.
  One successful search uses 1 Duaer credit.
---

# Duaer ligands

Look up PDBe chemical component (CCD) ligands. Data comes from PDBe.

## When to use

- Look up a PDB chemical component by code or name.
- Get formula and name of a ligand in a structure.

## When not to use

- Structures that bind a ligand. Use https://skills.duaer.com/structures.md.

## Call

`GET https://api.duaer.com/v1/data/ligands?words=ATP&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id` as a CCD chemical component id (1–3 characters). Comma-separate several ids.

- `words` — CCD id such as ATP or HEM.
- `id` — Optional. Same as words; combine for a batch.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ligands?words=ATP&limit=10` — PDBe components matching ATP.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`PDBe`), `title`, `url`, and `summary`, plus:

- `ccdId`, `name`, `formula`, `weight`, `inchiKey`, `inchi`, `compoundType`, `firstObservedIn` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/crossrefs.md — Duaer crossrefs
- https://skills.duaer.com/metabolites.md — Duaer metabolites

## Related skills

- [Search protein structures in Duaer](https://skills.duaer.com/structures.md)
- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search crossrefs in Duaer](https://skills.duaer.com/crossrefs.md)
- [Search metabolites in Duaer](https://skills.duaer.com/metabolites.md)
