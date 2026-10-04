> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/inaturalist.md

---
name: duaer-inaturalist
description: >-
  Duaer iNaturalist. Search taxa in iNaturalist.
  One successful search uses 1 Duaer credit.
---

# Duaer iNaturalist

Search taxa in iNaturalist. Data comes from iNaturalist.

## When to use

- Find taxa in iNaturalist.
- Look up one iNaturalist taxon id.

## When not to use

- GBIF species. Use https://skills.duaer.com/gbif.md.

## Call

`GET https://api.duaer.com/v1/data/inaturalist?words=Homo%20sapiens&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as Homo sapiens.
- `id` — Optional. Id such as 4352.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/inaturalist?words=Homo%20sapiens&limit=10` — iNaturalist taxa matching Homo sapiens.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`iNaturalist`), `title`, `url`, and `summary`, plus:

- `taxonId`, `name` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/organisms.md — Duaer organisms
- https://skills.duaer.com/gbif.md — Duaer GBIF

## 相关技能

- [在 Duaer 里检索物种](https://skills.duaer.com/zh/organisms.md)
- [在 Duaer 里检索 GBIF](https://skills.duaer.com/zh/gbif.md)
