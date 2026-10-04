> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ensembl.md

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

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search variants in Duaer](https://skills.duaer.com/variants.md)
- [Search orthologs in Duaer](https://skills.duaer.com/orthologs.md)
