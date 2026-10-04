> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/jaspar.md

---
name: duaer-jaspar
description: >-
  Duaer JASPAR. Search TF binding motifs in JASPAR.
  One successful search uses 1 Duaer credit.
---

# Duaer JASPAR

Search TF binding motifs in JASPAR. Data comes from JASPAR.

## When to use

- Find transcription factor binding motifs.
- Look up one JASPAR matrix by id.

## When not to use

- Regulatory variant scores. Use https://skills.duaer.com/regulomedb.md.

## Call

`GET https://api.duaer.com/v1/data/jaspar?words=TP53&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — TF words, such as TP53.
- `id` — Optional. Matrix id such as MA0106.1.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/jaspar?words=TP53&limit=10` — JASPAR motifs for TP53.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`JASPAR`), `title`, `url`, and `summary`, plus:

- `matrixId`, `name`, `collection`, `sequenceLogo` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/encode.md — Duaer ENCODE
- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/gene-ontology.md — Duaer Gene Ontology

## 相关技能

- [在 Duaer 里检索 ENCODE](https://skills.duaer.com/zh/encode.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索基因本体](https://skills.duaer.com/zh/gene-ontology.md)
