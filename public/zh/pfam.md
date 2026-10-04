> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/pfam.md

---
name: duaer-pfam
description: >-
  Duaer Pfam. Search Pfam protein families.
  One successful search uses 1 Duaer credit.
---

# Duaer Pfam

Search Pfam protein families. Data comes from Pfam.

## When to use

- Find Pfam protein families.
- Look up one Pfam accession.

## When not to use

- All InterPro entries. Use https://skills.duaer.com/interpro.md.

## Call

`GET https://api.duaer.com/v1/data/pfam?words=kinase&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as kinase.
- `id` — Optional. Id such as PF00069.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/pfam?words=kinase&limit=10` — Pfam families matching kinase.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Pfam`), `title`, `url`, and `summary`, plus:

- `pfamId`, `type`, `integrated` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索结构域](https://skills.duaer.com/zh/domains.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索基因本体](https://skills.duaer.com/zh/gene-ontology.md)
