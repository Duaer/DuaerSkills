> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/gtex-eqtl.md

---
name: duaer-gtex-eqtl
description: >-
  Duaer GTEx eQTL. Search single-tissue eQTLs in GTEx.
  One successful search uses 1 Duaer credit.
---

# Duaer GTEx eQTL

Search single-tissue eQTLs in GTEx. Data comes from GTEx eQTL.

## When to use

- Find single-tissue eQTLs for a gene in GTEx.
- Check which variants affect expression of a gene.

## When not to use

- Tissue expression. Use https://skills.duaer.com/gtex-expression.md.

## Call

`GET https://api.duaer.com/v1/data/gtex-eqtl?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1.
- `id` — Optional. Id such as ENSG00000012048.20.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/gtex-eqtl?words=BRCA1&limit=10` — GTEx eQTLs for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`GTEx eQTL`), `title`, `url`, and `summary`, plus:

- `snpId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/expression.md — Duaer expression

## Related skills

- [Search expression in Duaer](https://skills.duaer.com/expression.md)
