> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/gene-ontology.md

---
name: duaer-gene-ontology
description: >-
  Duaer Gene Ontology. Search Gene Ontology terms. Use the name or id with proteins.go.
  One successful search uses 1 Duaer credit.
---

# Duaer Gene Ontology

Search Gene Ontology terms. Use the name or id with proteins.go. Data comes from QuickGO.

## When to use

- Get a GO term name or id before searching proteins.
- Check the definition of a biological process, function, or component.

## When not to use

- GO annotations for one gene product. Use https://skills.duaer.com/goa.md.

## Call

`GET https://api.duaer.com/v1/data/gene-ontology?q=apoptosis&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `q`, `name`, or `id`. When you send more than one, Duaer uses `id`, else `name`, else `q`. Search with `q` first; use `id` only when you already have it from a result.

- `q` — words in the term name or definition.
- `id` — Optional. Gene Ontology id from a result (`goId`), such as `GO:0006915`.
- `name` — Optional. Term name.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/gene-ontology?q=apoptosis&limit=10` — GO terms matching apoptosis.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`QuickGO`), `title`, `url`, and `summary`, plus:

- `goId`, `aspect` — text.
- `obsolete` — true or false.

Use `title` or `goId` as `go` when searching proteins. Reuse `goId` in `id` for an exact lookup.

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
- https://skills.duaer.com/pathways.md — Duaer pathways

## 相关技能

- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索通路](https://skills.duaer.com/zh/pathways.md)
