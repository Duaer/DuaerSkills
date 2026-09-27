> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/pgs-catalog.md

---
name: duaer-pgs-catalog
description: >-
  Duaer PGS Catalog. Published polygenic risk scores for a disease or trait from the PGS Catalog: score id, reported trait, variant count, publication, and scoring-file link.
  One successful search uses 1 Duaer credit.
---

# Duaer PGS Catalog

Duaer PGS Catalog finds polygenic scores. With `trait`, Duaer matches catalog traits (including child traits) and returns their scores; with `id` it returns those scores directly.

## When to use

- Find existing polygenic scores for a disease before building a risk model.
- Get the scoring file and publication of a score id cited in a paper.

## When not to use

- Single-variant associations. Use https://skills.duaer.com/gwas.md.
- Clinical risk decisions for a person. Scores are research tools.

## Call

`GET https://api.duaer.com/v1/data/pgs-catalog?trait=type%202%20diabetes&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `trait` or `id`.

- `trait` — Trait or disease words, such as type 2 diabetes.
- `id` — Optional. One or more score ids joined by commas, such as PGS000014.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/pgs-catalog?trait=type%202%20diabetes&limit=10` — scores for type 2 diabetes.
- `GET https://api.duaer.com/v1/data/pgs-catalog?id=PGS000014,PGS000018` — two scores by id.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `pgsId`, `name` — score id and name.
- `traitReported`, `traits` — reported trait and mapped ontology traits.
- `variants`, `weightType` — number of variants and weight type.
- `firstAuthor`, `journal`, `published`, `doi`, `pmid` — source publication.
- `scoringFile` — download link of the scoring file.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/gwas.md
- https://skills.duaer.com/variants.md
- https://skills.duaer.com/diseases.md

## 相关技能

- [在 Duaer 里检索 GWAS](https://skills.duaer.com/zh/gwas.md)
- [在 Duaer 里检索变异](https://skills.duaer.com/zh/variants.md)
- [在 Duaer 里检索疾病](https://skills.duaer.com/zh/diseases.md)
