> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/modelseed.md

---
name: duaer-modelseed
description: >-
  Duaer ModelSEED. Search reactions in ModelSEED.
  One successful search uses 1 Duaer credit.
---

# Duaer ModelSEED

Search reactions in ModelSEED. Data comes from ModelSEED.

## When to use

- Find ModelSEED reactions and compounds.
- Look up one ModelSEED id.

## When not to use

- Rhea reactions. Use https://skills.duaer.com/rhea.md.

## Call

`GET https://api.duaer.com/v1/data/modelseed?words=ATP&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as ATP.
- `id` — Optional. Reaction id such as rxn00001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/modelseed?words=ATP&limit=10` — ModelSEED entries matching ATP.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ModelSEED`), `title`, `url`, and `summary`, plus:

- `reactionId`, `equation` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 BiGG](https://skills.duaer.com/zh/bigg.md)
- [在 Duaer 里检索生化反应](https://skills.duaer.com/zh/reactions.md)
- [在 Duaer 里检索 Rhea](https://skills.duaer.com/zh/rhea.md)
