> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/openreview.md

---
name: duaer-openreview
description: >-
  Duaer OpenReview. Machine learning conference submissions on OpenReview (ICLR, NeurIPS, ICML, and more): title, venue and decision, authors, keywords, abstract, and PDF.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenReview

Duaer OpenReview searches submissions and papers on OpenReview. The venue text shows the decision, such as ICLR 2024 poster or oral.

## When to use

- Find accepted papers on a method at recent ML conferences.
- Read public reviews through the forum link.

## When not to use

- arXiv preprints outside OpenReview. Use https://skills.duaer.com/arxiv.md.
- Citation counts. Use https://skills.duaer.com/papers.md or https://skills.duaer.com/opencitations.md.

## Call

`GET https://api.duaer.com/v1/data/openreview?words=diffusion%20models&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Words in the title or abstract, such as diffusion models.
- `venue` — Optional. Venue group id, such as ICLR.cc/2024/Conference.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/openreview?words=diffusion%20models&limit=10` — recent diffusion papers.
- `GET https://api.duaer.com/v1/data/openreview?words=graph%20neural%20networks&venue=ICLR.cc/2024/Conference` — ICLR 2024 only.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `forumId` — OpenReview forum id (reviews live there).
- `venue`, `venueId` — venue and decision text, and venue id.
- `authors`, `keywords` — authors and keywords.
- `date` — publication date.
- `pdfUrl`, `abstract` — PDF link and abstract start.

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
- https://skills.duaer.com/inspire-hep.md — Duaer INSPIRE-HEP

## 相关技能

- [在 Duaer 里检索 arXiv](https://skills.duaer.com/zh/arxiv.md)
- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
- [在 Duaer 里查 INSPIRE-HEP](https://skills.duaer.com/zh/inspire-hep.md)
