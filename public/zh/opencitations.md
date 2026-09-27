> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/opencitations.md

---
name: duaer-opencitations
description: >-
  Duaer OpenCitations. Papers that cite a DOI, or the papers it references, from the open OpenCitations index, newest first, with titles, authors, venue, and self-citation flag.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenCitations

Duaer OpenCitations walks the citation graph of one paper using the open OpenCitations index and adds titles and authors from OpenCitations Meta.

## When to use

- See who cited a paper recently and in which journals.
- List the references of a paper to follow its sources.

## When not to use

- Searching papers by words. Use https://skills.duaer.com/papers.md.
- Complete counts for every paper. Open indexes miss some publishers.

## Call

`GET https://api.duaer.com/v1/data/opencitations?doi=10.1038/nature12373&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `doi`.

- `doi` — DOI of the paper, such as 10.1038/nature12373.
- `direction` — Optional. citations (who cites it) or references (what it cites). Default citations.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/opencitations?doi=10.1038/nature12373&limit=10` — the ten newest citing papers.
- `GET https://api.duaer.com/v1/data/opencitations?doi=10.1038/nature12373&direction=references` — what the paper cites.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `doi` — DOI of the citing or cited paper.
- `direction` — citing or cited, relative to your DOI.
- `authors`, `venue`, `published`, `type` — metadata from OpenCitations Meta.
- `selfCitation` — true when authors or journal overlap.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/papers.md
- https://skills.duaer.com/crossref.md
- https://skills.duaer.com/icite.md

## 相关技能

- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
- [在 Duaer 里检索 Crossref](https://skills.duaer.com/zh/crossref.md)
- [在 Duaer 里检索 iCite](https://skills.duaer.com/zh/icite.md)
