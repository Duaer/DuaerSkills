> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/homologene.md

---
name: duaer-homologene
description: >-
  Duaer HomoloGene. Search gene homologs in HomoloGene.
  One successful search uses 1 Duaer credit.
---

# Duaer HomoloGene

Search gene homologs in HomoloGene. Data comes from HomoloGene.

## When to use

- Find homolog groups in HomoloGene.
- Look up one HomoloGene id.

## When not to use

- Orthologs by species. Use https://skills.duaer.com/orthologs.md.

## Call

`GET https://api.duaer.com/v1/data/homologene?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1.
- `id` — Optional. Id such as 12345.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/homologene?words=BRCA1&limit=10` — HomoloGene groups for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`HomoloGene`), `title`, `url`, and `summary`, plus:

- `homologeneId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
