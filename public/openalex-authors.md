> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/openalex-authors.md

---
name: duaer-openalex-authors
description: >-
  Duaer OpenAlex Authors. Search authors in OpenAlex.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenAlex Authors

Search authors in OpenAlex. Data comes from OpenAlex Authors.

## When to use

- Find authors in OpenAlex.
- Look up one OpenAlex author id.

## When not to use

- ORCID records. Use https://skills.duaer.com/orcid.md.

## Call

`GET https://api.duaer.com/v1/data/openalex-authors?words=crick&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as crick.
- `id` — Optional. Id such as A5023888391.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/openalex-authors?words=crick&limit=10` — OpenAlex authors matching crick.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenAlex Authors`), `title`, `url`, and `summary`, plus:

- `openAlexId` — text.
- `worksCount` — number.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search papers in Duaer](https://skills.duaer.com/papers.md)
- [Search ORCID in Duaer](https://skills.duaer.com/orcid.md)
