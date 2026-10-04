> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/loinc.md

---
name: duaer-loinc
description: >-
  Duaer LOINC. Search LOINC laboratory and clinical terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer LOINC

Search LOINC laboratory and clinical terms in OLS. Data comes from LOINC.

## When to use

- Find laboratory and clinical observation terms and LOINC ids.
- Look up one LOINC id.

## When not to use

- Clinical concepts. Use https://skills.duaer.com/ncit.md.

## Call

`GET https://api.duaer.com/v1/data/loinc?words=glucose&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as glucose.
- `id` — Optional. Id such as LOINC:2345-7.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/loinc?words=glucose&limit=10` — LOINC terms matching glucose.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`LOINC`), `title`, `url`, and `summary`, plus:

- `loincId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 RxNorm](https://skills.duaer.com/zh/rxnorm.md)
- [在 Duaer 里检索 ICD-10](https://skills.duaer.com/zh/icd10.md)
