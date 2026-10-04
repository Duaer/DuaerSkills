> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/rfam.md

---
name: duaer-rfam
description: >-
  Duaer Rfam. Search Rfam RNA families by name or accession.
  One successful search uses 1 Duaer credit.
---

# Duaer Rfam

Search Rfam RNA families by name or accession. Data comes from Rfam.

## When to use

- Find RNA families in Rfam by name or accession.
- Look up one Rfam accession.

## When not to use

- Single RNA sequences. Use https://skills.duaer.com/rnacentral.md.

## Call

`GET https://api.duaer.com/v1/data/rfam?words=tRNA&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as tRNA.
- `id` — Optional. Id such as RF00005.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/rfam?words=tRNA&limit=10` — Rfam families matching tRNA.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Rfam`), `title`, `url`, and `summary`, plus:

- `rfamId`, `description` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/rnacentral.md — Duaer RNAcentral
- https://skills.duaer.com/genes.md — Duaer genes

## Related skills

- [Search RNAcentral in Duaer](https://skills.duaer.com/rnacentral.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
