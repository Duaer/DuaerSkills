> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/mydisease.md

---
name: duaer-mydisease
description: >-
  Duaer MyDisease. Search disease annotations in MyDisease.
  One successful search uses 1 Duaer credit.
---

# Duaer MyDisease

Search disease annotations in MyDisease. Data comes from MyDisease.

## When to use

- Get aggregated disease annotations from MyDisease.
- Look up one disease by id.

## When not to use

- Disease ontology terms. Use https://skills.duaer.com/mondo.md.

## Call

`GET https://api.duaer.com/v1/data/mydisease?words=asthma&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — disease words, such as asthma.
- `id` — Optional. Disease id such as MONDO:0004979.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/mydisease?words=asthma&limit=10` — MyDisease records matching asthma.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MyDisease`), `title`, `url`, and `summary`, plus:

- `diseaseId`, `name`, `definition`, `mondoId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/mondo.md — Duaer Mondo
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/orphanet.md — Duaer Orphanet

## 相关技能

- [在 Duaer 里检索 Mondo](https://skills.duaer.com/zh/mondo.md)
- [在 Duaer 里检索疾病](https://skills.duaer.com/zh/diseases.md)
- [在 Duaer 里检索 Orphanet](https://skills.duaer.com/zh/orphanet.md)
