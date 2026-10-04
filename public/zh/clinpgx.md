> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/clinpgx.md

---
name: duaer-clinpgx
description: >-
  Duaer ClinPGx. Search pharmacogenomics genes in ClinPGx.
  One successful search uses 1 Duaer credit.
---

# Duaer ClinPGx

Search pharmacogenomics genes in ClinPGx. Data comes from ClinPGx.

## When to use

- Find pharmacogenomics genes in ClinPGx.
- Look up one ClinPGx id.

## When not to use

- CPIC guidelines. Use https://skills.duaer.com/cpic.md.

## Call

`GET https://api.duaer.com/v1/data/clinpgx?words=CYP2D6&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as CYP2D6.
- `id` — Optional. Id such as CYP2D6.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/clinpgx?words=CYP2D6&limit=10` — ClinPGx records for CYP2D6.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ClinPGx`), `title`, `url`, and `summary`, plus:

- `symbol`, `name` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/drug-gene.md — Duaer drug–gene
- https://skills.duaer.com/genes.md — Duaer genes

## 相关技能

- [在 Duaer 里检索药–基因互作](https://skills.duaer.com/zh/drug-gene.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
