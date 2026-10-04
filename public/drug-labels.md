> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/drug-labels.md

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

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/indications.md — Duaer indications
- https://skills.duaer.com/drug-gene.md — Duaer drug–gene
- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/adverse-events.md — Duaer adverse events

## Related skills

- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search indications in Duaer](https://skills.duaer.com/indications.md)
- [Search drug–gene interactions in Duaer](https://skills.duaer.com/drug-gene.md)
- [Search metabolites in Duaer](https://skills.duaer.com/metabolites.md)
- [Search adverse events in Duaer](https://skills.duaer.com/adverse-events.md)
