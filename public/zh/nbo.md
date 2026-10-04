> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/nbo.md

---
name: duaer-nbo
description: >-
  Duaer NBO. Search Neuro Behavior Ontology terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer NBO

Search Neuro Behavior Ontology terms in OLS. Data comes from NBO.

## When to use

- Find behavior terms and NBO ids.
- Look up one NBO id.

## When not to use

- Mammalian phenotypes. Use https://skills.duaer.com/mp.md.

## Call

`GET https://api.duaer.com/v1/data/nbo?words=anxiety&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as anxiety.
- `id` — Optional. Id such as NBO:0000010.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/nbo?words=anxiety&limit=10` — NBO terms matching anxiety.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`NBO`), `title`, `url`, and `summary`, plus:

- `nboId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
- https://skills.duaer.com/mp.md — Duaer MP

## 相关技能

- [在 Duaer 里检索表型](https://skills.duaer.com/zh/phenotypes.md)
- [在 Duaer 里检索 MP](https://skills.duaer.com/zh/mp.md)
