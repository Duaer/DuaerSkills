> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/intact.md

---
name: duaer-intact
description: >-
  Duaer IntAct. Search molecular interactions in IntAct.
  One successful search uses 1 Duaer credit.
---

# Duaer IntAct

Search molecular interactions in IntAct. Data comes from IntAct.

## When to use

- Find curated molecular interactions in IntAct.
- Look up one interaction by id.

## When not to use

- Scored interaction partners. Use https://skills.duaer.com/interactions.md.

## Call

`GET https://api.duaer.com/v1/data/intact?words=tp53&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — gene or protein words, such as tp53.
- `id` — Optional. Interactor id such as P04637.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/intact?words=tp53&limit=10` — IntAct interactions for tp53.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`IntAct`), `title`, `url`, and `summary`, plus:

- `interactionAc`, `moleculeA`, `moleculeB`, `uniqueIdA`, `uniqueIdB`, `interactionType`, `detectionMethod`, `publication` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索互作](https://skills.duaer.com/zh/interactions.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索蛋白复合物](https://skills.duaer.com/zh/complexes.md)
