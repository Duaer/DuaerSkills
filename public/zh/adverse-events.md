> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/adverse-events.md

---
name: duaer-adverse-events
description: >-
  Duaer adverse events. Search FDA adverse event reports from OpenFDA FAERS.
  One successful search uses 1 Duaer credit.
---

# Duaer adverse events

Search FDA adverse event reports from OpenFDA FAERS. Data comes from OpenFDA.

## When to use

- Review FAERS adverse event reports for a drug.
- Check reported reactions by brand or generic name.

## When not to use

- Drug labels. Use https://skills.duaer.com/drug-labels.md.

## Call

`GET https://api.duaer.com/v1/data/adverse-events?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`, `brand`, or `generic` (or combine; brand/generic narrow when set).

- `words` — brand, generic, substance, or medicinal product.
- `brand` — Optional. OpenFDA brand name.
- `generic` — Optional. OpenFDA generic name.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/adverse-events?words=aspirin&limit=10` — adverse event reports for aspirin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenFDA`), `title`, `url`, and `summary`, plus:

- `reportId`, `serious`, `receiptDate`, `country`, `drugs`, `reactions` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索药品标签](https://skills.duaer.com/zh/drug-labels.md)
- [在 Duaer 里检索临床试验](https://skills.duaer.com/zh/trials.md)
- [在 Duaer 里检索适应症](https://skills.duaer.com/zh/indications.md)
- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索 GWAS](https://skills.duaer.com/zh/gwas.md)
