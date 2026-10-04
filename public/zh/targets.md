> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/targets.md

---
name: duaer-targets
description: >-
  Duaer targets. Search Open Targets gene–disease associations.
  One successful search uses 1 Duaer credit.
---

# Duaer targets

Search Open Targets gene–disease associations. Data comes from Open Targets.

## When to use

- Rank diseases associated with a gene.
- Check the evidence score for one gene–disease pair.

## When not to use

- Drugs that act on a gene. Use https://skills.duaer.com/drug-gene.md.

## Call

`GET https://api.duaer.com/v1/data/targets?gene=INS&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

At least `gene` or `disease` is required.

- `gene` — gene symbol or Ensembl id. Look up symbols with https://skills.duaer.com/genes.md.
- `disease` — Optional. Disease name or ontology id (`EFO_` / `MONDO_`). Alone, returns associated targets. With `gene`, filters that gene’s associations. Look up names with https://skills.duaer.com/diseases.md.
- `limit` — Optional. From 1 to 20. Default 10. Results are sorted by association score descending.

## Examples

- `GET https://api.duaer.com/v1/data/targets?gene=INS&limit=10` — diseases associated with INS.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Open Targets`), `title`, `url`, and `summary`, plus:

- `gene`, `ensemblId`, `disease`, `diseaseId` — text.
- `score` — number.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a `gene` that Open Targets does not know, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索疾病](https://skills.duaer.com/zh/diseases.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索表达](https://skills.duaer.com/zh/expression.md)
- [在 Duaer 里检索同源基因](https://skills.duaer.com/zh/orthologs.md)
- [在 Duaer 里检索生物活性](https://skills.duaer.com/zh/activities.md)
- [在 Duaer 里检索实验测定](https://skills.duaer.com/zh/assays.md)
- [在 Duaer 里检索药–基因互作](https://skills.duaer.com/zh/drug-gene.md)
