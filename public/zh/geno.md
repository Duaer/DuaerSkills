> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/geno.md

---
name: duaer-geno
description: >-
  Duaer GENO. Search Genotype Ontology terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer GENO

Search Genotype Ontology terms in OLS. Data comes from GENO.

## When to use

- Find genotype terms and GENO ids.
- Look up one GENO id.

## When not to use

- Sequence features. Use https://skills.duaer.com/sequence-ontology.md.

## Call

`GET https://api.duaer.com/v1/data/geno?words=genotype&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as genotype.
- `id` — Optional. Id such as GENO:0000000.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/geno?words=genotype&limit=10` — GENO terms matching genotype.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`GENO`), `title`, `url`, and `summary`, plus:

- `genoId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 Sequence Ontology](https://skills.duaer.com/zh/sequence-ontology.md)
- [在 Duaer 里检索变异](https://skills.duaer.com/zh/variants.md)
