> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/maxo.md

---
name: duaer-maxo
description: >-
  Duaer MAXO. Search Medical Action Ontology terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer MAXO

Search Medical Action Ontology terms in OLS. Data comes from MAXO.

## When to use

- Find medical action terms and MAXO ids.
- Look up one MAXO id.

## When not to use

- Clinical terms. Use https://skills.duaer.com/ncit.md.

## Call

`GET https://api.duaer.com/v1/data/maxo?words=chemotherapy&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as chemotherapy.
- `id` — Optional. Id such as MAXO:0000647.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/maxo?words=chemotherapy&limit=10` — MAXO terms matching chemotherapy.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MAXO`), `title`, `url`, and `summary`, plus:

- `maxoId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索表型](https://skills.duaer.com/zh/phenotypes.md)
- [在 Duaer 里检索 MPATH](https://skills.duaer.com/zh/mpath.md)
- [在 Duaer 里检索 OBI](https://skills.duaer.com/zh/obi.md)
