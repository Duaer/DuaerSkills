> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/alphafold.md

---
name: duaer-alphafold
description: >-
  Duaer AlphaFold. Look up AlphaFold predicted structures by gene or UniProt accession.
  One successful search uses 1 Duaer credit.
---

# Duaer AlphaFold

Look up AlphaFold predicted structures by gene or UniProt accession. Data comes from AlphaFold.

## When to use

- Get the AlphaFold predicted structure for a gene or accession.
- Check model confidence before using a prediction.

## When not to use

- Experimental structures. Use https://skills.duaer.com/structures.md.

## Call

`GET https://api.duaer.com/v1/data/alphafold?gene=INS&organism=Homo%20sapiens&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `gene` or `accession` (or both; accession wins).

- `gene` — gene symbol resolved via UniProt (default organism Homo sapiens).
- `accession` — Optional. UniProt accession (`P01308`). Overrides gene when set.
- `organism` — Optional. Used when resolving gene (default `Homo sapiens`).
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/alphafold?gene=INS&organism=Homo%20sapiens&limit=10` — AlphaFold model for human INS.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`AlphaFold`), `title`, `url`, and `summary`, plus:

- `accession`, `gene`, `uniprotId`, `description`, `organism`, `modelEntityId` — text.
- `modelVersion`, `globalPlddt` — number.
- `pdbUrl`, `cifUrl` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/genes.md — Duaer genes

## 相关技能

- [在 Duaer 里检索蛋白结构](https://skills.duaer.com/zh/structures.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
