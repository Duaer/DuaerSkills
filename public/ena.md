> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ena.md

---
name: duaer-ena
description: >-
  Duaer ENA. Search nucleotide sequences in ENA.
  One successful search uses 1 Duaer credit.
---

# Duaer ENA

Search nucleotide sequences in ENA. Data comes from ENA.

## When to use

- Find nucleotide sequence records in ENA.
- Look up one ENA accession.

## When not to use

- Sequencing runs in SRA. Use https://skills.duaer.com/ncbi-sra.md.

## Call

`GET https://api.duaer.com/v1/data/ena?words=insulin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as insulin.
- `id` — Optional. Id such as DM015610.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ena?words=insulin&limit=10` — ENA records matching insulin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ENA`), `title`, `url`, and `summary`, plus:

- `accession`, `description` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
