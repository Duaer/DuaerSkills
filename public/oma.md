> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/oma.md

---
name: duaer-oma
description: >-
  Duaer OMA. Look up proteins in OMA browser.
  One successful search uses 1 Duaer credit.
---

# Duaer OMA

Look up proteins in OMA browser. Data comes from OMA.

## When to use

- Look up a protein in the OMA orthology browser.
- Get its OMA id.

## When not to use

- OrthoDB groups. Use https://skills.duaer.com/orthodb.md.

## Call

`GET https://api.duaer.com/v1/data/oma?words=BRCA1_HUMAN&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1_HUMAN.
- `id` — Optional. Id such as BRCA1_HUMAN.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/oma?words=BRCA1_HUMAN&limit=10` — OMA entry BRCA1_HUMAN.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OMA`), `title`, `url`, and `summary`, plus:

- `omaId`, `canonicalId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/orthologs.md — Duaer orthologs
- https://skills.duaer.com/proteins.md — Duaer proteins

## Related skills

- [Search orthologs in Duaer](https://skills.duaer.com/orthologs.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
