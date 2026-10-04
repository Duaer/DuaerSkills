> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/doaj.md

---
name: duaer-doaj
description: >-
  Duaer DOAJ. Search open-access articles in DOAJ.
  One successful search uses 1 Duaer credit.
---

# Duaer DOAJ

Search open-access articles in DOAJ. Data comes from DOAJ.

## When to use

- Find open access articles in DOAJ.
- Look up one DOAJ article.

## When not to use

- Open access journals. Use https://skills.duaer.com/doaj-journals.md.

## Call

`GET https://api.duaer.com/v1/data/doaj?words=insulin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as insulin.
- `id` — Optional. Id such as 10.1234/x.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/doaj?words=insulin&limit=10` — DOAJ articles matching insulin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`DOAJ`), `title`, `url`, and `summary`, plus:

- `doi` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/europe-pmc.md — Duaer Europe PMC

## 相关技能

- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
- [在 Duaer 里检索 Europe PMC](https://skills.duaer.com/zh/europe-pmc.md)
