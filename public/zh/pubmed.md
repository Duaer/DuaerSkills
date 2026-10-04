> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/pubmed.md

---
name: duaer-pubmed
description: >-
  Duaer PubMed. Search PubMed literature from NCBI E-utilities.
  One successful search uses 1 Duaer credit.
---

# Duaer PubMed

Search PubMed literature from NCBI E-utilities. Data comes from PubMed.

## When to use

- Find PubMed articles.
- Look up one PMID.

## When not to use

- Citation counts and open access filters. Use https://skills.duaer.com/papers.md.

## Call

`GET https://api.duaer.com/v1/data/pubmed?words=BRCA1%20breast%20cancer&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1 breast cancer.
- `id` — Optional. Id such as 23193287.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/pubmed?words=BRCA1%20breast%20cancer&limit=10` — PubMed articles on BRCA1 in breast cancer.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`PubMed`), `title`, `url`, and `summary`, plus:

- `pmid`, `journal`, `pubDate`, `authors` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
- [在 Duaer 里检索 Europe PMC](https://skills.duaer.com/zh/europe-pmc.md)
- [在 Duaer 里检索预印本](https://skills.duaer.com/zh/preprints.md)
