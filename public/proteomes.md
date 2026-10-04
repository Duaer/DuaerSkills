> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/proteomes.md

---
name: duaer-proteomes
description: >-
  Duaer Proteomes. Search UniProt proteomes.
  One successful search uses 1 Duaer credit.
---

# Duaer Proteomes

Search UniProt proteomes. Data comes from Proteomes.

## When to use

- Find UniProt proteomes for an organism.
- Look up one proteome id.

## When not to use

- Genome assemblies. Use https://skills.duaer.com/ncbi-assembly.md.

## Call

`GET https://api.duaer.com/v1/data/proteomes?words=Homo%20sapiens&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as Homo sapiens.
- `id` — Optional. Id such as UP000005640.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/proteomes?words=Homo%20sapiens&limit=10` — proteomes for Homo sapiens.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Proteomes`), `title`, `url`, and `summary`, plus:

- `proteomeId`, `entryType` — text.
- `memberCount` — number.
- `organism` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search organisms in Duaer](https://skills.duaer.com/organisms.md)
