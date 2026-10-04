> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/prosite.md

---
name: duaer-prosite
description: >-
  Duaer PROSITE. Scan PROSITE motifs for a UniProt accession.
  One successful search uses 1 Duaer credit.
---

# Duaer PROSITE

Scan PROSITE motifs for a UniProt accession. Data comes from PROSITE.

## When to use

- Scan PROSITE motifs for a UniProt accession.
- Find motifs in one protein.

## When not to use

- InterPro domains. Use https://skills.duaer.com/interpro.md.

## Call

`GET https://api.duaer.com/v1/data/prosite?words=P04637&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — UniProt accession, such as P04637.
- `id` — Optional. UniProt accession such as P04637.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/prosite?words=P04637&limit=10` — PROSITE motifs in P04637.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`PROSITE`), `title`, `url`, and `summary`, plus:

- `signatureAc`, `signatureId`, `sequenceAc`, `start`, `stop` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索 Pfam](https://skills.duaer.com/zh/pfam.md)
- [在 Duaer 里检索 InterPro](https://skills.duaer.com/zh/interpro.md)
