> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ncbi-bioproject.md

---
name: duaer-ncbi-bioproject
description: >-
  Duaer NCBI BioProject. Search BioProjects in NCBI.
  One successful search uses 1 Duaer credit.
---

# Duaer NCBI BioProject

Search BioProjects in NCBI. Data comes from NCBI BioProject.

## When to use

- Find BioProjects in NCBI.
- Look up one BioProject accession.

## When not to use

- Sequencing runs. Use https://skills.duaer.com/ncbi-sra.md.

## Call

`GET https://api.duaer.com/v1/data/ncbi-bioproject?words=human%20microbiome&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as human microbiome.
- `id` — Optional. Id such as 12345.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ncbi-bioproject?words=human%20microbiome&limit=10` — BioProjects matching human microbiome.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`NCBI BioProject`), `title`, `url`, and `summary`, plus:

- `bioprojectId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
