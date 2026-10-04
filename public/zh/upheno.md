> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/upheno.md

---
name: duaer-upheno
description: >-
  Duaer uPheno. Search Unified Phenotype Ontology terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer uPheno

Search Unified Phenotype Ontology terms in OLS. Data comes from uPheno.

## When to use

- Find cross-species phenotype terms and uPheno ids.
- Look up one uPheno id.

## When not to use

- Human phenotypes. Use https://skills.duaer.com/phenotypes.md.

## Call

`GET https://api.duaer.com/v1/data/upheno?words=abnormal&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as abnormal.
- `id` — Optional. Id such as UPHENO:0001001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/upheno?words=abnormal&limit=10` — uPheno terms matching abnormal.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`uPheno`), `title`, `url`, and `summary`, plus:

- `uphenoId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索表型](https://skills.duaer.com/zh/phenotypes.md)
- [在 Duaer 里检索 Mondo](https://skills.duaer.com/zh/mondo.md)
