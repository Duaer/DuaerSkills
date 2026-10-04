> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/bigg.md

---
name: duaer-bigg
description: >-
  Duaer BiGG. Search BiGG Models metabolites, genes, and genome-scale models.
  One successful search uses 1 Duaer credit.
---

# Duaer BiGG

Search BiGG Models metabolites, genes, and genome-scale models. Data comes from BiGG.

## When to use

- Find BiGG metabolites, genes, and genome-scale models.
- Look up one BiGG id.

## When not to use

- ModelSEED reactions. Use https://skills.duaer.com/modelseed.md.

## Call

`GET https://api.duaer.com/v1/data/bigg?words=glucose&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — search words, such as glucose.
- `id` — Optional. Id such as glc__D.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/bigg?words=glucose&limit=10` — BiGG entries matching glucose.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`BiGG`), `title`, `url`, and `summary`, plus:

- `biggId`, `kind`, `organism` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/reactions.md — Duaer reactions
- https://skills.duaer.com/kegg.md — Duaer KEGG

## Related skills

- [Search metabolites in Duaer](https://skills.duaer.com/metabolites.md)
- [Search reactions in Duaer](https://skills.duaer.com/reactions.md)
- [Search KEGG in Duaer](https://skills.duaer.com/kegg.md)
