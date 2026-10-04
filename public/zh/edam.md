> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/edam.md

---
name: duaer-edam
description: >-
  Duaer EDAM. Search bioinformatics concepts from EDAM.
  One successful search uses 1 Duaer credit.
---

# Duaer EDAM

Search bioinformatics concepts from EDAM. Data comes from EDAM.

## When to use

- Find bioinformatics data, format, and operation terms in EDAM.
- Look up one EDAM id.

## When not to use

- Bioinformatics tools. Use https://skills.duaer.com/bio-tools.md.

## Call

`GET https://api.duaer.com/v1/data/edam?words=fasta&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as fasta.
- `id` — Optional. Id such as EDAM:format_1929.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/edam?words=fasta&limit=10` — EDAM terms matching fasta.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`EDAM`), `title`, `url`, and `summary`, plus:

- `edamId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索实验测定](https://skills.duaer.com/zh/assays.md)
- [在 Duaer 里检索 bio.tools](https://skills.duaer.com/zh/bio-tools.md)
