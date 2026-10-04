> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/swiss-model.md

---
name: duaer-swiss-model
description: >-
  Duaer Swiss-Model. Look up Swiss-Model structures by UniProt accession.
  One successful search uses 1 Duaer credit.
---

# Duaer Swiss-Model

Look up Swiss-Model structures by UniProt accession. Data comes from Swiss-Model.

## When to use

- Get Swiss-Model homology models for a UniProt accession.
- List available models and their methods.

## When not to use

- AlphaFold models. Use https://skills.duaer.com/alphafold.md.

## Call

`GET https://api.duaer.com/v1/data/swiss-model?words=P04637&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as P04637.
- `id` — Optional. Id such as P04637.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/swiss-model?words=P04637&limit=10` — Swiss-Model structures for P04637.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Swiss-Model`), `title`, `url`, and `summary`, plus:

- `uniprotAcc`, `modelId`, `method` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/alphafold.md — Duaer AlphaFold
- https://skills.duaer.com/proteins.md — Duaer proteins

## 相关技能

- [在 Duaer 里检索蛋白结构](https://skills.duaer.com/zh/structures.md)
- [在 Duaer 里查询 AlphaFold 预测结构](https://skills.duaer.com/zh/alphafold.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
