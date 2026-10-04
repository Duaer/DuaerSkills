> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/drug-labels.md

---
name: duaer-drug-labels
description: >-
  Duaer drug labels. Search FDA drug labels from OpenFDA.
  One successful search uses 1 Duaer credit.
---

# Duaer drug labels

Search FDA drug labels from OpenFDA. Data comes from OpenFDA.

## When to use

- Read FDA label sections for a drug by brand or generic name.
- Check indications and warnings on a US label.

## When not to use

- Adverse event reports. Use https://skills.duaer.com/adverse-events.md.

## Call

`GET https://api.duaer.com/v1/data/drug-labels?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`, `brand`, or `generic` (or combine; brand/generic narrow when set).

- `words` — brand, generic, or substance name.
- `brand` — Optional. OpenFDA brand name.
- `generic` — Optional. OpenFDA generic name.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/drug-labels?words=aspirin&limit=10` — labels for aspirin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenFDA`), `title`, `url`, and `summary`, plus:

- `setId`, `brandNames`, `genericNames`, `manufacturer`, `indications` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索适应症](https://skills.duaer.com/zh/indications.md)
- [在 Duaer 里检索药–基因互作](https://skills.duaer.com/zh/drug-gene.md)
- [在 Duaer 里检索代谢物](https://skills.duaer.com/zh/metabolites.md)
- [在 Duaer 里检索不良反应](https://skills.duaer.com/zh/adverse-events.md)
