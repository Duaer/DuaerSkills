> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/openalex-funders.md

---
name: duaer-openalex-funders
description: >-
  Duaer OpenAlex Funders. Search funders in OpenAlex.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenAlex Funders

Search funders in OpenAlex. Data comes from OpenAlex Funders.

## When to use

- Find funders in OpenAlex.
- Look up one funder id.

## When not to use

- Crossref funders. Use https://skills.duaer.com/crossref-funders.md.

## Call

`GET https://api.duaer.com/v1/data/openalex-funders?words=biology&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as biology.
- `id` — Optional. Id such as F4320332161.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/openalex-funders?words=biology&limit=10` — OpenAlex funders matching biology.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenAlex Funders`), `title`, `url`, and `summary`, plus:

- `openAlexId` — text.
- `worksCount` — number.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/papers.md — Duaer papers

## Related skills

- [Search papers in Duaer](https://skills.duaer.com/papers.md)
