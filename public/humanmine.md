> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/humanmine.md

---
name: duaer-humanmine
description: >-
  Duaer HumanMine. Search human genes and related entities in HumanMine.
  One successful search uses 1 Duaer credit.
---

# Duaer HumanMine

Search human genes and related entities in HumanMine. Data comes from HumanMine.

## When to use

- Find human genes and related entities in HumanMine.
- Look up one HumanMine id.

## When not to use

- MyGene search. Use https://skills.duaer.com/genes.md.

## Call

`GET https://api.duaer.com/v1/data/humanmine?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1.
- `id` — Optional. Id such as 1205471.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/humanmine?words=BRCA1&limit=10` — HumanMine records for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`HumanMine`), `title`, `url`, and `summary`, plus:

- `mineId`, `symbol`, `entityType`, `organism` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search Monarch in Duaer](https://skills.duaer.com/monarch.md)
