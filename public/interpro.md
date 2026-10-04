> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/interpro.md

---
name: duaer-interpro
description: >-
  Duaer InterPro. Search protein domains in InterPro.
  One successful search uses 1 Duaer credit.
---

# Duaer InterPro

Search protein domains in InterPro. Data comes from InterPro.

## When to use

- Find protein domains and families in InterPro.
- Look up one InterPro accession.

## When not to use

- Pfam only. Use https://skills.duaer.com/pfam.md.

## Call

`GET https://api.duaer.com/v1/data/interpro?words=kinase&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — search words or UniProt accession, such as kinase or P04637.
- `id` — Optional. InterPro id such as IPR000023, or UniProt accession.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/interpro?words=kinase&limit=10` — InterPro entries matching kinase.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`InterPro`), `title`, `url`, and `summary`, plus:

- `accession`, `type` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/pfam.md — Duaer Pfam
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/domains.md — Duaer domains

## Related skills

- [Search Pfam in Duaer](https://skills.duaer.com/pfam.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search domains in Duaer](https://skills.duaer.com/domains.md)
