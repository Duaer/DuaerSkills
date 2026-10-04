> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ror.md

---
name: duaer-ror
description: >-
  Duaer ROR. Search research organizations in ROR.
  One successful search uses 1 Duaer credit.
---

# Duaer ROR

Search research organizations in ROR. Data comes from ROR.

## When to use

- Find research organizations and ROR ids.
- Look up one ROR id.

## When not to use

- OpenAlex institutions. Use https://skills.duaer.com/openalex-institutions.md.

## Call

`GET https://api.duaer.com/v1/data/ror?words=cambridge&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as cambridge.
- `id` — Optional. Id such as https://ror.org/013meh722.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ror?words=cambridge&limit=10` — ROR organizations matching cambridge.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ROR`), `title`, `url`, and `summary`, plus:

- `rorId`, `country` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/orcid.md — Duaer ORCID

## Related skills

- [Search papers in Duaer](https://skills.duaer.com/papers.md)
- [Search ORCID in Duaer](https://skills.duaer.com/orcid.md)
