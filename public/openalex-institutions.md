> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/openalex-institutions.md

---
name: duaer-openalex-institutions
description: >-
  Duaer OpenAlex Institutions. Search institutions in OpenAlex.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenAlex Institutions

Search institutions in OpenAlex. Data comes from OpenAlex Institutions.

## When to use

- Find institutions in OpenAlex.
- Look up one OpenAlex institution id.

## When not to use

- ROR records. Use https://skills.duaer.com/ror.md.

## Call

`GET https://api.duaer.com/v1/data/openalex-institutions?words=cambridge&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as cambridge.
- `id` — Optional. Id such as I97018004.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/openalex-institutions?words=cambridge&limit=10` — institutions matching cambridge.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenAlex Institutions`), `title`, `url`, and `summary`, plus:

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
- [Search ROR in Duaer](https://skills.duaer.com/ror.md)
