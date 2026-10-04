> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/pubtator.md

---
name: duaer-pubtator
description: >-
  Duaer PubTator. Autocomplete biomedical entities in PubTator.
  One successful search uses 1 Duaer credit.
---

# Duaer PubTator

Autocomplete biomedical entities in PubTator. Data comes from PubTator.

## When to use

- Autocomplete genes, diseases, and chemicals to PubTator ids.
- Normalize an entity name before a literature search.

## When not to use

- Literature search. Use https://skills.duaer.com/pubmed.md.

## Call

`GET https://api.duaer.com/v1/data/pubtator?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1.
- `id` — Optional. Id such as BRCA1.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/pubtator?words=BRCA1&limit=10` — PubTator entities for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`PubTator`), `title`, `url`, and `summary`, plus:

- `entityId`, `biotype` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
