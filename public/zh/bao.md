> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/bao.md

---
name: duaer-bao
description: >-
  Duaer BAO. Search BioAssay Ontology terms from BAO.
  One successful search uses 1 Duaer credit.
---

# Duaer BAO

Search BioAssay Ontology terms from BAO. Data comes from BAO.

## When to use

- Find BioAssay Ontology terms.
- Look up one BAO id.

## When not to use

- ChEMBL assays. Use https://skills.duaer.com/assays.md.

## Call

`GET https://api.duaer.com/v1/data/bao?words=assay&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as assay.
- `id` — Optional. Id such as BAO:0000015.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/bao?words=assay&limit=10` — BAO terms matching assay.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`BAO`), `title`, `url`, and `summary`, plus:

- `baoId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/assays.md — Duaer assays
- https://skills.duaer.com/obi.md — Duaer OBI

## 相关技能

- [在 Duaer 里检索实验测定](https://skills.duaer.com/zh/assays.md)
- [在 Duaer 里检索 OBI](https://skills.duaer.com/zh/obi.md)
