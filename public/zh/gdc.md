> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/gdc.md

---
name: duaer-gdc
description: >-
  Duaer GDC. Search NCI GDC cancer projects.
  One successful search uses 1 Duaer credit.
---

# Duaer GDC

Search NCI GDC cancer projects. Data comes from GDC.

## When to use

- Find NCI GDC cancer projects.
- Look up one project by id.

## When not to use

- cBioPortal studies. Use https://skills.duaer.com/cbioportal.md.

## Call

`GET https://api.duaer.com/v1/data/gdc?words=breast&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — project words, such as breast.
- `id` — Optional. Project id such as TCGA-BRCA.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/gdc?words=breast&limit=10` — GDC projects matching breast.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`GDC`), `title`, `url`, and `summary`, plus:

- `projectId`, `primarySite`, `diseaseType`, `state` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 cBioPortal](https://skills.duaer.com/zh/cbioportal.md)
- [在 Duaer 里检索 GWAS](https://skills.duaer.com/zh/gwas.md)
- [在 Duaer 里检索临床试验](https://skills.duaer.com/zh/trials.md)
