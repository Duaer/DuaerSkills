> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/ensembl.md

---
name: duaer-ensembl
description: >-
  Duaer Ensembl. Look up Ensembl genes by symbol or id.
  One successful search uses 1 Duaer credit.
---

# Duaer Ensembl

Look up Ensembl genes by symbol or id. Data comes from Ensembl.

## When to use

- Get the Ensembl gene id, location, and biotype for a symbol.
- Look up a gene in another species.

## When not to use

- Variant effect prediction. Use https://skills.duaer.com/ensembl-vep.md.

## Call

`GET https://api.duaer.com/v1/data/ensembl?words=TP53&species=homo_sapiens&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` (gene symbol) or `id` (Ensembl gene id).

- `words` — gene symbol, such as TP53.
- `id` — Optional. Ensembl id such as ENSG00000141510.
- `species` — Optional. Default homo_sapiens. Used with words.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ensembl?words=TP53&species=homo_sapiens&limit=10` — Ensembl genes matching human TP53.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Ensembl`), `title`, `url`, and `summary`, plus:

- `ensemblId`, `symbol`, `biotype`, `species`, `assembly`, `chromosome`, `start`, `end`, `strand`, `canonicalTranscript`, `description` — text.

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
- https://skills.duaer.com/orthologs.md — Duaer orthologs

## 相关技能

- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索变异](https://skills.duaer.com/zh/variants.md)
- [在 Duaer 里检索同源基因](https://skills.duaer.com/zh/orthologs.md)
