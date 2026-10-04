> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/dgidb.md

---
name: duaer-dgidb
description: >-
  Duaer DGIdb. Look up gene–drug interactions in DGIdb.
  One successful search uses 1 Duaer credit.
---

# Duaer DGIdb

Look up gene–drug interactions in DGIdb. Data comes from DGIdb.

## When to use

- Look up gene–drug interactions in DGIdb.
- List drugs for one gene.

## When not to use

- Filter by approved drugs. Use https://skills.duaer.com/drug-gene.md.

## Call

`GET https://api.duaer.com/v1/data/dgidb?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — gene symbol, such as BRCA1.
- `id` — Optional. Gene symbol such as BRCA1.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/dgidb?words=BRCA1&limit=10` — DGIdb interactions for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`DGIdb`), `title`, `url`, and `summary`, plus:

- `gene`, `drug`, `conceptId`, `score` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/ot-drugs.md — Duaer Open Targets drugs
- https://skills.duaer.com/drug-gene.md — Duaer drug–gene
- https://skills.duaer.com/chembl.md — Duaer ChEMBL

## 相关技能

- [在 Duaer 里检索 Open Targets drugs](https://skills.duaer.com/zh/ot-drugs.md)
- [在 Duaer 里检索药–基因互作](https://skills.duaer.com/zh/drug-gene.md)
- [在 Duaer 里检索 ChEMBL](https://skills.duaer.com/zh/chembl.md)
