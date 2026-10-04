> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/pw.md

---
name: duaer-pw
description: >-
  Duaer PW. Search pathway ontology terms from PW.
  One successful search uses 1 Duaer credit.
---

# Duaer PW

Search pathway ontology terms from PW. Data comes from PW.

## When to use

- Find Pathway Ontology terms.
- Look up one PW id.

## When not to use

- Reactome pathways. Use https://skills.duaer.com/pathways.md.

## Call

`GET https://api.duaer.com/v1/data/pw?words=apoptosis&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as apoptosis.
- `id` — Optional. Id such as PW:0000009.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/pw?words=apoptosis&limit=10` — PW terms matching apoptosis.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`PW`), `title`, `url`, and `summary`, plus:

- `pwId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/pathways.md — Duaer pathways
- https://skills.duaer.com/kegg.md — Duaer KEGG

## Related skills

- [Search pathways in Duaer](https://skills.duaer.com/pathways.md)
- [Search KEGG in Duaer](https://skills.duaer.com/kegg.md)
