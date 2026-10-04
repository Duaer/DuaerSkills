> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/rhea.md

---
name: duaer-rhea
description: >-
  Duaer Rhea. Search biochemical reactions in Rhea.
  One successful search uses 1 Duaer credit.
---

# Duaer Rhea

Search biochemical reactions in Rhea. Data comes from Rhea.

## When to use

- Find biochemical reactions in Rhea.
- Look up one Rhea id.

## When not to use

- Search reactions by EC number. Use https://skills.duaer.com/reactions.md.

## Call

`GET https://api.duaer.com/v1/data/rhea?words=kinase&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as kinase.
- `id` — Optional. Rhea id such as 15465.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/rhea?words=kinase&limit=10` — Rhea reactions matching kinase.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Rhea`), `title`, `url`, and `summary`, plus:

- `rheaId`, `equation` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search reactions in Duaer](https://skills.duaer.com/reactions.md)
- [Search BiGG in Duaer](https://skills.duaer.com/bigg.md)
- [Search KEGG in Duaer](https://skills.duaer.com/kegg.md)
