> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/diseases.md

---
name: duaer-diseases
description: >-
  Duaer diseases. Search disease names. Use the formal name with proteins.disease.
  One successful search uses 1 Duaer credit.
---

# Duaer diseases

Search disease names. Use the formal name with proteins.disease. Data comes from UniProt.

## When to use

- Get the formal UniProt disease name before searching proteins.
- Check the acronym and id of a disease.

## When not to use

- Disease ontology terms and cross-references. Use https://skills.duaer.com/mondo.md.

## Call

`GET https://api.duaer.com/v1/data/diseases?q=diabetes&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

At least one search field is required. Fields combine. Search with `q` first; use `id` or `acronym` only when you already have them from a result.

- `q` — words in the disease name or definition.
- `id` — Optional. UniProt disease id from a result (`diseaseId`), such as `DI-02060`.
- `name` — Optional. Disease name.
- `acronym` — Optional. Disease acronym from a result, such as `T2D`.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/diseases?q=diabetes&limit=10` — diseases matching diabetes.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`UniProt`), `title`, `url`, and `summary`, plus:

- `diseaseId`, `acronym`, `alternativeNames` — text.
- `reviewedProteinCount` — number.

Use `title` as `disease` when searching proteins. Reuse `diseaseId` in `id` for an exact lookup.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/trials.md — Duaer clinical trials
- https://skills.duaer.com/indications.md — Duaer indications
- https://skills.duaer.com/cell-lines.md — Duaer cell lines

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search variants in Duaer](https://skills.duaer.com/variants.md)
- [Search clinical trials in Duaer](https://skills.duaer.com/trials.md)
- [Search indications in Duaer](https://skills.duaer.com/indications.md)
- [Search cell lines in Duaer](https://skills.duaer.com/cell-lines.md)
