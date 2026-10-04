> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/panther.md

---
name: duaer-panther
description: >-
  Duaer PANTHER. Look up gene info in PANTHER.
  One successful search uses 1 Duaer credit.
---

# Duaer PANTHER

Look up gene info in PANTHER. Data comes from PANTHER.

## When to use

- Look up PANTHER family and gene info.
- Check the PANTHER family of a gene.

## When not to use

- InterPro domains. Use https://skills.duaer.com/interpro.md.

## Call

`GET https://api.duaer.com/v1/data/panther?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1.
- `id` — Optional. Id such as Human=BRCA1.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/panther?words=BRCA1&limit=10` — PANTHER records for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`PANTHER`), `title`, `url`, and `summary`, plus:

- `geneId`, `family` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索同源基因](https://skills.duaer.com/zh/orthologs.md)
