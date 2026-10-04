> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/wikipathways.md

---
name: duaer-wikipathways
description: >-
  Duaer WikiPathways. Search community pathways in WikiPathways.
  One successful search uses 1 Duaer credit.
---

# Duaer WikiPathways

Search community pathways in WikiPathways. Data comes from WikiPathways.

## When to use

- Find community pathways in WikiPathways.
- Look up one WP id.

## When not to use

- Reactome pathways. Use https://skills.duaer.com/pathways.md.

## Call

`GET https://api.duaer.com/v1/data/wikipathways?words=apoptosis&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as apoptosis.
- `id` — Optional. Pathway id such as WP254.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/wikipathways?words=apoptosis&limit=10` — WikiPathways matching apoptosis.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`WikiPathways`), `title`, `url`, and `summary`, plus:

- `pathwayId` — text.

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

## 相关技能

- [在 Duaer 里检索通路](https://skills.duaer.com/zh/pathways.md)
- [在 Duaer 里检索 KEGG](https://skills.duaer.com/zh/kegg.md)
