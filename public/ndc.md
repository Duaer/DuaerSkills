> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ndc.md

---
name: duaer-ndc
description: >-
  Duaer NDC. Search drug NDC records in OpenFDA.
  One successful search uses 1 Duaer credit.
---

# Duaer NDC

Search drug NDC records in OpenFDA. Data comes from OpenFDA.

## When to use

- Find drug products by NDC or name.
- Check labeler and dosage form.

## When not to use

- Drug labels. Use https://skills.duaer.com/drug-labels.md.

## Call

`GET https://api.duaer.com/v1/data/ndc?words=tylenol&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — brand words, such as tylenol.
- `id` — Optional. Product NDC such as 50580-176.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ndc?words=tylenol&limit=10` — NDC records for tylenol.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenFDA`), `title`, `url`, and `summary`, plus:

- `productNdc`, `brandName`, `genericName`, `labeler`, `dosageForm` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/rxnorm.md — Duaer RxNorm
- https://skills.duaer.com/drug-labels.md — Duaer drug labels
- https://skills.duaer.com/adverse-events.md — Duaer adverse events

## Related skills

- [Search RxNorm in Duaer](https://skills.duaer.com/rxnorm.md)
- [Search drug labels in Duaer](https://skills.duaer.com/drug-labels.md)
- [Search adverse events in Duaer](https://skills.duaer.com/adverse-events.md)
