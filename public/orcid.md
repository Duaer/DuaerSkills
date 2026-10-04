> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/orcid.md

---
name: duaer-orcid
description: >-
  Duaer ORCID. Search researchers in ORCID.
  One successful search uses 1 Duaer credit.
---

# Duaer ORCID

Search researchers in ORCID. Data comes from ORCID.

## When to use

- Find researchers in ORCID.
- Look up one ORCID iD.

## When not to use

- OpenAlex author records. Use https://skills.duaer.com/openalex-authors.md.

## Call

`GET https://api.duaer.com/v1/data/orcid?words=family-name%3ASmith&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as family-name:Smith.
- `id` — Optional. Id such as 0000-0003-1660-3511.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/orcid?words=family-name%3ASmith&limit=10` — ORCID records with family name Smith.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ORCID`), `title`, `url`, and `summary`, plus:

- `orcidId`, `givenNames`, `familyNames`, `institutions` — text.

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
- https://skills.duaer.com/crossref.md — Duaer Crossref

## Related skills

- [Search papers in Duaer](https://skills.duaer.com/papers.md)
- [Search Europe PMC in Duaer](https://skills.duaer.com/europe-pmc.md)
- [Search Crossref in Duaer](https://skills.duaer.com/crossref.md)
