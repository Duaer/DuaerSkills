> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/pathway-commons.md

---
name: duaer-pathway-commons
description: >-
  Duaer Pathway Commons. Search pathways in Pathway Commons.
  One successful search uses 1 Duaer credit.
---

# Duaer Pathway Commons

Search pathways in Pathway Commons. Data comes from Pathway Commons.

## When to use

- Find pathways across many databases in Pathway Commons.
- Look up one pathway by id.

## When not to use

- Reactome only. Use https://skills.duaer.com/pathways.md.

## Call

`GET https://api.duaer.com/v1/data/pathway-commons?words=TP53&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — pathway words, such as TP53.
- `id` — Optional. Query such as TP53.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/pathway-commons?words=TP53&limit=10` — pathways for TP53.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Pathway Commons`), `title`, `url`, and `summary`, plus:

- `uri`, `biopaxClass`, `dataSource`, `organisms` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/pathways.md — Duaer pathways
- https://skills.duaer.com/interactions.md — Duaer interactions
- https://skills.duaer.com/kegg.md — Duaer KEGG

## 相关技能

- [在 Duaer 里检索通路](https://skills.duaer.com/zh/pathways.md)
- [在 Duaer 里检索互作](https://skills.duaer.com/zh/interactions.md)
- [在 Duaer 里检索 KEGG](https://skills.duaer.com/zh/kegg.md)
