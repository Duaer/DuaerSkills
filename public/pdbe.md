> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/pdbe.md

---
name: duaer-pdbe
description: >-
  Duaer PDBe. Search structures in PDBe.
  One successful search uses 1 Duaer credit.
---

# Duaer PDBe

Search structures in PDBe. Data comes from PDBe.

## When to use

- Find structures in PDBe.
- Look up one PDB id.

## When not to use

- Filter structures by method and resolution. Use https://skills.duaer.com/structures.md.

## Call

`GET https://api.duaer.com/v1/data/pdbe?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1.
- `id` — Optional. PDB id such as 1tup.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/pdbe?words=BRCA1&limit=10` — PDBe structures for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`PDBe`), `title`, `url`, and `summary`, plus:

- `pdbId`, `method`, `resolution` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/alphafold.md — Duaer AlphaFold
- https://skills.duaer.com/emdb.md — Duaer EMDB

## Related skills

- [Search protein structures in Duaer](https://skills.duaer.com/structures.md)
- [Look up AlphaFold structures in Duaer](https://skills.duaer.com/alphafold.md)
- [Search EMDB in Duaer](https://skills.duaer.com/emdb.md)
