> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/xao.md

---
name: duaer-xao
description: >-
  Duaer XAO. Search Xenopus anatomy from XAO.
  One successful search uses 1 Duaer credit.
---

# Duaer XAO

Search Xenopus anatomy from XAO. Data comes from XAO.

## When to use

- Find Xenopus anatomy terms and XAO ids.
- Look up one XAO id.

## When not to use

- Cross-species anatomy. Use https://skills.duaer.com/uberon.md.

## Call

`GET https://api.duaer.com/v1/data/xao?words=heart&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as heart.
- `id` — Optional. Id such as XAO:0000001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/xao?words=heart&limit=10` — XAO terms matching heart.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`XAO`), `title`, `url`, and `summary`, plus:

- `xaoId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索表型](https://skills.duaer.com/zh/phenotypes.md)
