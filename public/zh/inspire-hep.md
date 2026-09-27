> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/inspire-hep.md

---
name: duaer-inspire-hep
description: >-
  Duaer INSPIRE-HEP. High-energy physics literature from INSPIRE: papers, preprints, and theses with authors or collaboration, arXiv id, journal, DOI, and citation count.
  One successful search uses 1 Duaer credit.
---

# Duaer INSPIRE-HEP

Duaer INSPIRE-HEP searches the INSPIRE literature database used across particle physics, astrophysics, and related fields. It accepts plain words and INSPIRE syntax such as `a Witten` or `t dark matter`.

## When to use

- Find the most cited papers on a physics topic with `sort=mostcited`.
- Track new preprints from a collaboration or an author.

## When not to use

- General science outside physics. Use https://skills.duaer.com/papers.md.
- Machine learning conference papers. Use https://skills.duaer.com/openreview.md.

## Call

`GET https://api.duaer.com/v1/data/inspire-hep?words=higgs%20boson&sort=mostcited&limit=5`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Words or INSPIRE search syntax, such as higgs boson or a Witten.
- `sort` — Optional. mostrecent or mostcited. Default mostrecent.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/inspire-hep?words=higgs%20boson&sort=mostcited&limit=5` — the most cited Higgs papers.
- `GET https://api.duaer.com/v1/data/inspire-hep?words=a%20Witten&sort=mostrecent` — recent papers by Witten.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `recordId` — INSPIRE record id.
- `authors`, `collaboration` — first authors, or the collaboration.
- `date`, `journal` — earliest date and journal reference.
- `arxiv`, `doi` — identifiers.
- `citations` — citation count in INSPIRE.
- `abstract` — start of the abstract.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/arxiv.md
- https://skills.duaer.com/papers.md
- https://skills.duaer.com/opencitations.md — Duaer OpenCitations

## 相关技能

- [在 Duaer 里检索 arXiv](https://skills.duaer.com/zh/arxiv.md)
- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
- [在 Duaer 里查 OpenCitations 引用](https://skills.duaer.com/zh/opencitations.md)
