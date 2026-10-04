> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/encode.md

---
name: duaer-encode
description: >-
  Duaer ENCODE. Search functional genomics experiments in ENCODE.
  One successful search uses 1 Duaer credit.
---

# Duaer ENCODE

Search functional genomics experiments in ENCODE. Data comes from ENCODE.

## When to use

- Find ENCODE functional genomics experiments.
- Look up one experiment by accession.

## When not to use

- Regulatory variant scores. Use https://skills.duaer.com/regulomedb.md.

## Call

`GET https://api.duaer.com/v1/data/encode?words=CTCF&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — experiment words, such as CTCF.
- `id` — Optional. Accession such as ENCSR000EJV.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/encode?words=CTCF&limit=10` — ENCODE experiments for CTCF.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ENCODE`), `title`, `url`, and `summary`, plus:

- `accession`, `assay`, `status`, `description` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/geo.md — Duaer GEO
- https://skills.duaer.com/expression.md — Duaer expression
- https://skills.duaer.com/jaspar.md — Duaer JASPAR

## 相关技能

- [在 Duaer 里检索 GEO](https://skills.duaer.com/zh/geo.md)
- [在 Duaer 里检索表达](https://skills.duaer.com/zh/expression.md)
- [在 Duaer 里检索 JASPAR](https://skills.duaer.com/zh/jaspar.md)
