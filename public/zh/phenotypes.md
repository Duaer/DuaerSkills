> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/phenotypes.md

---
name: duaer-phenotypes
description: >-
  Duaer phenotypes. Look up HPO phenotype terms (EBI OLS).
  One successful search uses 1 Duaer credit.
---

# Duaer phenotypes

Look up HPO phenotype terms (EBI OLS). Data comes from HPO.

## When to use

- Find HPO terms for a clinical phenotype.
- Look up an HPO id.

## When not to use

- Mouse phenotypes. Use https://skills.duaer.com/mp.md.

## Call

`GET https://api.duaer.com/v1/data/phenotypes?words=diabetes&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id` (or both; id wins).

- `words` — HPO phenotype label.
- `id` — Optional. HPO id (HP:0000819). Overrides words when set.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/phenotypes?words=diabetes&limit=10` — HPO terms matching diabetes.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`HPO`), `title`, `url`, and `summary`, plus:

- `hpoId`, `iri`, `synonyms` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索疾病](https://skills.duaer.com/zh/diseases.md)
- [在 Duaer 里检索 MeSH](https://skills.duaer.com/zh/mesh.md)
- [在 Duaer 里检索临床试验](https://skills.duaer.com/zh/trials.md)
- [在 Duaer 里检索不良反应](https://skills.duaer.com/zh/adverse-events.md)
