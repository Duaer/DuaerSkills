> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/rxclass.md

---
name: duaer-rxclass
description: >-
  Duaer RxClass. Search drug classes in RxClass.
  One successful search uses 1 Duaer credit.
---

# Duaer RxClass

Search drug classes in RxClass. Data comes from RxClass.

## When to use

- Find the drug classes of a drug.
- Look up one class id.

## When not to use

- RxNorm concept ids. Use https://skills.duaer.com/rxnorm.md.

## Call

`GET https://api.duaer.com/v1/data/rxclass?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as aspirin.
- `id` — Optional. Id such as aspirin.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/rxclass?words=aspirin&limit=10` — classes for aspirin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`RxClass`), `title`, `url`, and `summary`, plus:

- `classId`, `className`, `classType` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/rxnorm.md — Duaer RxNorm
- https://skills.duaer.com/ndc.md — Duaer NDC

## 相关技能

- [在 Duaer 里检索 RxNorm](https://skills.duaer.com/zh/rxnorm.md)
- [在 Duaer 里检索 NDC](https://skills.duaer.com/zh/ndc.md)
