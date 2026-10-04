> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/monarch.md

---
name: duaer-monarch
description: >-
  Duaer Monarch. Search Monarch diseases, phenotypes, or genes.
  One successful search uses 1 Duaer credit.
---

# Duaer Monarch

Search Monarch diseases, phenotypes, or genes. Data comes from Monarch.

## When to use

- Find diseases, phenotypes, or genes in the Monarch knowledge graph.
- Get a Monarch id for linking.

## When not to use

- Rare disease records. Use https://skills.duaer.com/orphanet.md.

## Call

`GET https://api.duaer.com/v1/data/monarch?words=Marfan&category=disease&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search text, such as Marfan.
- `id` — Optional. CURIE such as MONDO:0007947, HP:0000819, or HGNC:1100.
- `category` — Optional. disease (default), phenotype, or gene. Used with words.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/monarch?words=Marfan&category=disease&limit=10` — Monarch diseases matching Marfan.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Monarch`), `title`, `url`, and `summary`, plus:

- `monarchId`, `name`, `category`, `description`, `taxon`, `xrefs` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
- https://skills.duaer.com/genes.md — Duaer genes

## 相关技能

- [在 Duaer 里检索疾病](https://skills.duaer.com/zh/diseases.md)
- [在 Duaer 里检索表型](https://skills.duaer.com/zh/phenotypes.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
