> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/drug-recalls.md

---
name: duaer-drug-recalls
description: >-
  Duaer drug recalls. Search FDA drug recall enforcement reports from OpenFDA.
  One successful search uses 1 Duaer credit.
---

# Duaer drug recalls

Search FDA drug recall enforcement reports from OpenFDA. Data comes from OpenFDA.

## When to use

- Find FDA drug recall reports by brand or generic name.
- Check recall class and reason.

## When not to use

- Device recalls. Use https://skills.duaer.com/device-recall.md.

## Call

`GET https://api.duaer.com/v1/data/drug-recalls?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`, `brand`, or `generic` (or combine brand and generic).

- `words` — brand, generic, substance, or product text.
- `brand` — Optional. OpenFDA brand name.
- `generic` — Optional. OpenFDA generic name.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/drug-recalls?words=aspirin&limit=10` — recalls mentioning aspirin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenFDA`), `title`, `url`, and `summary`, plus:

- `recallNumber`, `status`, `classification`, `reason`, `product`, `firm`, `reportDate` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/adverse-events.md — Duaer adverse events
- https://skills.duaer.com/drug-labels.md — Duaer drug labels
- https://skills.duaer.com/rxnorm.md — Duaer RxNorm
- https://skills.duaer.com/compounds.md — Duaer compounds

## 相关技能

- [在 Duaer 里检索不良反应](https://skills.duaer.com/zh/adverse-events.md)
- [在 Duaer 里检索药品标签](https://skills.duaer.com/zh/drug-labels.md)
- [在 Duaer 里检索 RxNorm](https://skills.duaer.com/zh/rxnorm.md)
- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
