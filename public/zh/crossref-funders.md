> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/crossref-funders.md

---
name: duaer-crossref-funders
description: >-
  Duaer Crossref Funders. Search funders in Crossref.
  One successful search uses 1 Duaer credit.
---

# Duaer Crossref Funders

Search funders in Crossref. Data comes from Crossref Funders.

## When to use

- Find funders in the Crossref funder registry.
- Look up one funder id.

## When not to use

- OpenAlex funders. Use https://skills.duaer.com/openalex-funders.md.

## Call

`GET https://api.duaer.com/v1/data/crossref-funders?words=wellcome&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as wellcome.
- `id` — Optional. Id such as 100000002.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/crossref-funders?words=wellcome&limit=10` — Crossref funders matching wellcome.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Crossref Funders`), `title`, `url`, and `summary`, plus:

- `funderId`, `location` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/grants.md — Duaer grants
- https://skills.duaer.com/papers.md — Duaer papers

## 相关技能

- [在 Duaer 里检索基金](https://skills.duaer.com/zh/grants.md)
- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
