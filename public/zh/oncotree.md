> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/oncotree.md

---
name: duaer-oncotree
description: >-
  Duaer OncoTree. Search tumor types in OncoTree.
  One successful search uses 1 Duaer credit.
---

# Duaer OncoTree

Search tumor types in OncoTree. Data comes from OncoTree.

## When to use

- Find tumor types and OncoTree codes.
- Look up one OncoTree code.

## When not to use

- NCI Thesaurus terms. Use https://skills.duaer.com/ncit.md.

## Call

`GET https://api.duaer.com/v1/data/oncotree?words=melanoma&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `words`.

- `words` — search words, such as melanoma.
- `id` — Optional. Id such as MEL.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/oncotree?words=melanoma&limit=10` — tumor types matching melanoma.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OncoTree`), `title`, `url`, and `summary`, plus:

- `oncotreeCode`, `name` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 cBioPortal](https://skills.duaer.com/zh/cbioportal.md)
- [在 Duaer 里检索 NCIt](https://skills.duaer.com/zh/ncit.md)
