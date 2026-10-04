> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/orphanet.md

---
name: duaer-orphanet
description: >-
  Duaer Orphanet. Search rare diseases from Orphanet.
  One successful search uses 1 Duaer credit.
---

# Duaer Orphanet

Search rare diseases from Orphanet. Data comes from Orphanet.

## When to use

- Find rare diseases and ORPHA codes.
- Look up one rare disease by code.

## When not to use

- Broad disease ontology. Use https://skills.duaer.com/mondo.md.

## Call

`GET https://api.duaer.com/v1/data/orphanet?words=Marfan&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — rare disease words, such as Marfan.
- `id` — Optional. Orphanet code such as ORPHA:558 or 558.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/orphanet?words=Marfan&limit=10` — rare diseases matching Marfan.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Orphanet`), `title`, `url`, and `summary`, plus:

- `orphanetId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/monarch.md — Duaer Monarch
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/phenotypes.md — Duaer phenotypes

## 相关技能

- [在 Duaer 里检索 Monarch](https://skills.duaer.com/zh/monarch.md)
- [在 Duaer 里检索疾病](https://skills.duaer.com/zh/diseases.md)
- [在 Duaer 里检索表型](https://skills.duaer.com/zh/phenotypes.md)
