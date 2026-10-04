> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/cido.md

---
name: duaer-cido
description: >-
  Duaer CIDO. Search coronavirus terms from CIDO.
  One successful search uses 1 Duaer credit.
---

# Duaer CIDO

Search coronavirus terms from CIDO. Data comes from CIDO.

## When to use

- Find coronavirus terms and CIDO ids.
- Look up one CIDO id.

## When not to use

- General infectious disease terms. Use https://skills.duaer.com/ido.md.

## Call

`GET https://api.duaer.com/v1/data/cido?words=coronavirus&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as coronavirus.
- `id` — Optional. Id such as CIDO:0000001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/cido?words=coronavirus&limit=10` — CIDO terms matching coronavirus.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`CIDO`), `title`, `url`, and `summary`, plus:

- `cidoId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes

## 相关技能

- [在 Duaer 里检索表型](https://skills.duaer.com/zh/phenotypes.md)
