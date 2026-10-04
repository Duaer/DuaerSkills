> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/string-enrichment.md

---
name: duaer-string-enrichment
description: >-
  Duaer STRING enrichment. Run STRING functional enrichment for gene symbols.
  One successful search uses 1 Duaer credit.
---

# Duaer STRING enrichment

Run STRING functional enrichment for gene symbols. Data comes from STRING enrichment.

## When to use

- Run STRING functional enrichment for gene symbols.
- Find shared processes in a gene list.

## When not to use

- Interaction partners. Use https://skills.duaer.com/interactions.md.

## Call

`GET https://api.duaer.com/v1/data/string-enrichment?words=BRCA1%20TP53&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — gene symbols separated by space, such as BRCA1 TP53.
- `id` — Optional. Gene symbols separated by space.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/string-enrichment?words=BRCA1%20TP53&limit=10` — enrichment for BRCA1 and TP53.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`STRING enrichment`), `title`, `url`, and `summary`, plus:

- `term`, `category`, `fdr`, `description` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/interactions.md — Duaer interactions
- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/gene-ontology.md — Duaer Gene Ontology

## 相关技能

- [在 Duaer 里检索互作](https://skills.duaer.com/zh/interactions.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索基因本体](https://skills.duaer.com/zh/gene-ontology.md)
