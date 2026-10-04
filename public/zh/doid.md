> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/doid.md

---
name: duaer-doid
description: >-
  Duaer DOID. Search disease terms from DOID.
  One successful search uses 1 Duaer credit.
---

# Duaer DOID

Search disease terms from DOID. Data comes from DOID.

## When to use

- Find Disease Ontology terms and DOID ids.
- Look up one DOID.

## When not to use

- Mondo diseases. Use https://skills.duaer.com/mondo.md.

## Call

`GET https://api.duaer.com/v1/data/doid?words=asthma&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — disease words, such as asthma.
- `id` — Optional. DOID such as DOID:2841.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/doid?words=asthma&limit=10` — DOID terms matching asthma.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`DOID`), `title`, `url`, and `summary`, plus:

- `doidId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 Mondo](https://skills.duaer.com/zh/mondo.md)
- [在 Duaer 里检索疾病](https://skills.duaer.com/zh/diseases.md)
- [在 Duaer 里检索 Orphanet](https://skills.duaer.com/zh/orphanet.md)
