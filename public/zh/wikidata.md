> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/wikidata.md

---
name: duaer-wikidata
description: >-
  Duaer Wikidata. Search entities in Wikidata.
  One successful search uses 1 Duaer credit.
---

# Duaer Wikidata

Search entities in Wikidata. Data comes from Wikidata.

## When to use

- Find Wikidata entities and Q ids.
- Look up one Q id.

## When not to use

- Biomedical name resolution. Use https://skills.duaer.com/name-resolver.md.

## Call

`GET https://api.duaer.com/v1/data/wikidata?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1.
- `id` — Optional. Id such as Q178532.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/wikidata?words=BRCA1&limit=10` — Wikidata entities for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Wikidata`), `title`, `url`, and `summary`, plus:

- `wikidataId`, `description` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/crossrefs.md — Duaer crossrefs
- https://skills.duaer.com/mesh.md — Duaer MeSH

## 相关技能

- [在 Duaer 里检索交叉引用](https://skills.duaer.com/zh/crossrefs.md)
- [在 Duaer 里检索 MeSH](https://skills.duaer.com/zh/mesh.md)
