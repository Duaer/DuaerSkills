> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/keywords.md

---
name: duaer-keywords
description: >-
  Duaer keywords. Search UniProt keywords. Use the name with proteins.keyword.
  One successful search uses 1 Duaer credit.
---

# Duaer keywords

Search UniProt keywords. Use the name with proteins.keyword. Data comes from UniProt.

## When to use

- Get the exact UniProt keyword before searching proteins.
- Browse keywords for a protein class.

## When not to use

- Gene Ontology terms. Use https://skills.duaer.com/gene-ontology.md.

## Call

`GET https://api.duaer.com/v1/data/keywords?q=kinase&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

At least one search field is required. Fields combine. Search with `q` first; use `id` only when you already have it from a result.

- `q` — words in the keyword name or definition.
- `id` — Optional. UniProt keyword id from a result (`keywordId`), such as `KW-0418`.
- `name` — Optional. Keyword name.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/keywords?q=kinase&limit=10` — keywords matching kinase.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`UniProt`), `title`, `url`, and `summary`, plus:

- `keywordId`, `category`, `synonyms` — text.
- `reviewedProteinCount` — number.

Use `title` as `keyword` when searching proteins. Reuse `keywordId` in `id` for an exact lookup.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索基因本体](https://skills.duaer.com/zh/gene-ontology.md)
