> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/core.md

---
name: duaer-core
description: >-
  Duaer CORE. Search open-access research works in CORE.
  One successful search uses 1 Duaer credit.
---

# Duaer CORE

Search open-access research works in CORE. Data comes from CORE.

## When to use

- Find open access research works in CORE.
- Look up one CORE id.

## When not to use

- OpenAlex papers. Use https://skills.duaer.com/papers.md.

## Call

`GET https://api.duaer.com/v1/data/core?words=crispr&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as crispr.
- `id` — Optional. Id such as 13120640.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/core?words=crispr&limit=10` — CORE works matching crispr.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`CORE`), `title`, `url`, and `summary`, plus:

- `coreId`, `doi`, `year` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/pubmed.md — Duaer PubMed
- https://skills.duaer.com/europe-pmc.md — Duaer Europe PMC

## Related skills

- [Search papers in Duaer](https://skills.duaer.com/papers.md)
- [Search PubMed in Duaer](https://skills.duaer.com/pubmed.md)
- [Search Europe PMC in Duaer](https://skills.duaer.com/europe-pmc.md)
