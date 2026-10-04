> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/ot-drugs.md

---
name: duaer-ot-drugs
description: >-
  Duaer Open Targets drugs. Search drug entities in Open Targets.
  One successful search uses 1 Duaer credit.
---

# Duaer Open Targets drugs

Search drug entities in Open Targets. Data comes from Open Targets drugs.

## When to use

- Find drug entities in Open Targets.
- Look up one ChEMBL drug id in Open Targets.

## When not to use

- Gene–disease associations. Use https://skills.duaer.com/targets.md.

## Call

`GET https://api.duaer.com/v1/data/ot-drugs?words=imatinib&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as imatinib.
- `id` — Optional. ChEMBL id such as CHEMBL941.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ot-drugs?words=imatinib&limit=10` — Open Targets drugs matching imatinib.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Open Targets drugs`), `title`, `url`, and `summary`, plus:

- `drugId`, `entity` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索靶点关联](https://skills.duaer.com/zh/targets.md)
- [在 Duaer 里检索 ChEMBL](https://skills.duaer.com/zh/chembl.md)
- [在 Duaer 里检索药–基因互作](https://skills.duaer.com/zh/drug-gene.md)
