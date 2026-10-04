> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/papers.md

---
name: duaer-papers
description: >-
  Duaer papers. Published papers from OpenAlex by words, title, abstract, author, year, type, open access, citations, language, DOI, journal, institution, or topic.
  One successful search uses 1 Duaer credit.
---

# Duaer papers

Duaer papers searches published works in OpenAlex: articles, reviews, preprints, books, datasets, and more. Filters combine. Results are ordered by relevance unless you sort by citations.

## When to use

- Find the most cited papers on a topic in a range of years.
- Check what an author or institution published.
- Resolve a DOI to its title and abstract.

## When not to use

- Preprints from bioRxiv or medRxiv only. Use https://skills.duaer.com/preprints.md.
- Research grants. Use https://skills.duaer.com/grants.md.
- Patents. Use https://skills.duaer.com/patents.md.

## Call

`GET https://api.duaer.com/v1/data/papers?title=lithium&author=Zhang&yearFrom=2020&yearTo=2024&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide at least one search field. `sort` and `limit` alone are not a search.

- `q` — Optional. Words in the title, abstract, or full text.
- `title` — Optional. Words in the title.
- `abstract` — Optional. Words in the abstract.
- `author` — Optional. Author name.
- `yearFrom`, `yearTo` — Optional. Publication years from 1000 to 2100. Leave a year out, or send `0`, for any year.
- `type` — Optional. Work type: `article`, `book`, `book-chapter`, `dataset`, `dissertation`, `editorial`, `erratum`, `letter`, `libguides`, `other`, `paratext`, `peer-review`, `preprint`, `reference-entry`, `report`, `retraction`, `review`, `standard`, or `supplementary-materials`.
- `openAccess` — Optional. `yes` or `no`.
- `citationsFrom`, `citationsTo` — Optional. Citation count. `0` means no bound.
- `language` — Optional. Language code, such as `en` or `zh`.
- `doi` — Optional. Digital object identifier, such as `10.1038/nature12373`.
- `journal`, `institution`, `topic` — Optional. Names. Duaer uses the closest OpenAlex match. A name with no match returns 400.
- `sort` — Optional. `citations` orders by most cited. Omit it for relevance.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/papers?q=CRISPR%20base%20editing&yearFrom=2022&sort=citations` — most cited base editing papers since 2022.
- `GET https://api.duaer.com/v1/data/papers?doi=10.1038/nature12373` — one paper by DOI.
- `GET https://api.duaer.com/v1/data/papers?topic=lithium%20batteries&type=review&openAccess=yes` — open access reviews on a topic.

## Result

The response is `{ "items": [...] }`. Each item has:

- `source` — `OpenAlex`.
- `title` — work title.
- `url` — DOI link, or the OpenAlex page when there is no DOI.
- `summary` — abstract, up to 1000 characters. Empty when OpenAlex has no abstract.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索临床试验](https://skills.duaer.com/zh/trials.md)
- [在 Duaer 里检索疾病](https://skills.duaer.com/zh/diseases.md)
- [在 Duaer 里检索预印本](https://skills.duaer.com/zh/preprints.md)
- [在 Duaer 里检索基金](https://skills.duaer.com/zh/grants.md)
- [在 Duaer 里检索专利](https://skills.duaer.com/zh/patents.md)
- [Duaer 生命科学文献简报员工](https://skills.duaer.com/zh/life-research-brief.md)
