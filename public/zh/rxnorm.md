> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/rxnorm.md

---
name: duaer-rxnorm
description: >-
  Duaer RxNorm. Look up drug names from RxNorm (NLM RxNav).
  One successful search uses 1 Duaer credit.
---

# Duaer RxNorm

Look up drug names from RxNorm (NLM RxNav). Data comes from RxNorm.

## When to use

- Normalize a drug name to an RxNorm concept id.
- Look up an RxCUI.

## When not to use

- Drug classes. Use https://skills.duaer.com/rxclass.md.

## Call

`GET https://api.duaer.com/v1/data/rxnorm?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id` (or both; id wins).

- `words` — drug or ingredient name.
- `id` — Optional. RxNorm concept id (RxCUI). Overrides words when set.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/rxnorm?words=aspirin&limit=10` — RxNorm concepts for aspirin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`RxNorm`), `title`, `url`, and `summary`, plus:

- `rxcui`, `tty`, `synonym`, `score` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索药品标签](https://skills.duaer.com/zh/drug-labels.md)
- [在 Duaer 里检索适应症](https://skills.duaer.com/zh/indications.md)
- [在 Duaer 里检索 GWAS](https://skills.duaer.com/zh/gwas.md)
