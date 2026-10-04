> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/scop.md

---
name: duaer-scop
description: >-
  Duaer SCOP. Search SCOP domain mappings from PDBe.
  One successful search uses 1 Duaer credit.
---

# Duaer SCOP

Search SCOP domain mappings from PDBe. Data comes from SCOP.

## When to use

- Find SCOP domain mappings for a PDB entry.
- Look up one SCOP id.

## When not to use

- InterPro domains. Use https://skills.duaer.com/interpro.md.

## Call

`GET https://api.duaer.com/v1/data/scop?words=1cbs&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as 1cbs.
- `id` — Optional. Id such as 1cbs.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/scop?words=1cbs&limit=10` — SCOP domains of PDB 1cbs.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`SCOP`), `title`, `url`, and `summary`, plus:

- `scopId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/structures.md — Duaer structures

## Related skills

- [Search protein structures in Duaer](https://skills.duaer.com/structures.md)
