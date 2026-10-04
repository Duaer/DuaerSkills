> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/ncbi-medgen.md

---
name: duaer-ncbi-medgen
description: >-
  Duaer NCBI MedGen. Search MedGen concepts in NCBI.
  One successful search uses 1 Duaer credit.
---

# Duaer NCBI MedGen

Search MedGen concepts in NCBI. Data comes from NCBI MedGen.

## When to use

- Find MedGen concepts for a condition.
- Look up one MedGen id.

## When not to use

- HPO phenotypes. Use https://skills.duaer.com/phenotypes.md.

## Call

`GET https://api.duaer.com/v1/data/ncbi-medgen?words=diabetes&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as diabetes.
- `id` — Optional. Id such as 12345.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ncbi-medgen?words=diabetes&limit=10` — MedGen concepts matching diabetes.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`NCBI MedGen`), `title`, `url`, and `summary`, plus:

- `medgenId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/genes.md — Duaer genes

## 相关技能

- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
