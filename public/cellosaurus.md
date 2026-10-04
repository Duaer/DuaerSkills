> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/cellosaurus.md

---
name: duaer-cellosaurus
description: >-
  Duaer Cellosaurus. Search the Cellosaurus cell line encyclopedia.
  One successful search uses 1 Duaer credit.
---

# Duaer Cellosaurus

Search the Cellosaurus cell line encyclopedia. Data comes from Cellosaurus.

## When to use

- Find cell lines in Cellosaurus.
- Look up one Cellosaurus accession.

## When not to use

- Cell line search with species and category filters. Use https://skills.duaer.com/cell-lines.md.

## Call

`GET https://api.duaer.com/v1/data/cellosaurus?words=HeLa&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as HeLa.
- `id` — Optional. Id such as CVCL_0030.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/cellosaurus?words=HeLa&limit=10` — Cellosaurus entries matching HeLa.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Cellosaurus`), `title`, `url`, and `summary`, plus:

- `accession`, `category` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search cell lines in Duaer](https://skills.duaer.com/cell-lines.md)
- [Search CLO in Duaer](https://skills.duaer.com/clo.md)
