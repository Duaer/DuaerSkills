> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/iedb.md

---
name: duaer-iedb
description: >-
  Duaer IEDB. Search IEDB immune epitopes by peptide sequence.
  One successful search uses 1 Duaer credit.
---

# Duaer IEDB

Search IEDB immune epitopes by peptide sequence. Data comes from IEDB.

## When to use

- Find immune epitopes by peptide sequence in IEDB.
- Look up one epitope id.

## When not to use

- Protein records. Use https://skills.duaer.com/proteins.md.

## Call

`GET https://api.duaer.com/v1/data/iedb?words=SIINFEKL&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as SIINFEKL.
- `id` — Optional. Id such as 58560.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/iedb?words=SIINFEKL&limit=10` — IEDB epitopes for SIINFEKL.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`IEDB`), `title`, `url`, and `summary`, plus:

- `structureId`, `sequence`, `antigen` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/assays.md — Duaer assays

## Related skills

- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search assays in Duaer](https://skills.duaer.com/assays.md)
