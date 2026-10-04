> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/rnacentral.md

---
name: duaer-rnacentral
description: >-
  Duaer RNAcentral. Search non-coding RNA in RNAcentral.
  One successful search uses 1 Duaer credit.
---

# Duaer RNAcentral

Search non-coding RNA in RNAcentral. Data comes from RNAcentral.

## When to use

- Find non-coding RNA sequences in RNAcentral.
- Look up an URS id.

## When not to use

- RNA families. Use https://skills.duaer.com/rfam.md.

## Call

`GET https://api.duaer.com/v1/data/rnacentral?words=microRNA&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — RNA description words, such as microRNA.
- `id` — Optional. RNAcentral id such as URS000075C808.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/rnacentral?words=microRNA&limit=10` — RNAcentral entries matching microRNA.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`RNAcentral`), `title`, `url`, and `summary`, plus:

- `rnacentralId`, `description` — text.
- `length` — number.
- `rnaType`, `sequence` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/ensembl.md — Duaer Ensembl
- https://skills.duaer.com/hgnc.md — Duaer HGNC

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search Ensembl in Duaer](https://skills.duaer.com/ensembl.md)
- [Search HGNC in Duaer](https://skills.duaer.com/hgnc.md)
