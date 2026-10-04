> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/mesh.md

---
name: duaer-mesh
description: >-
  Duaer MeSH. Look up MeSH subject headings (NLM MeSH).
  One successful search uses 1 Duaer credit.
---

# Duaer MeSH

Look up MeSH subject headings (NLM MeSH). Data comes from MeSH.

## When to use

- Find the MeSH heading and id for a term.
- Get controlled vocabulary for PubMed searches.

## When not to use

- Disease ontology terms. Use https://skills.duaer.com/mondo.md.

## Call

`GET https://api.duaer.com/v1/data/mesh?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id` (or both; id wins).

- `words` — MeSH descriptor label.
- `id` — Optional. MeSH unique id (D001241). Overrides words when set.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/mesh?words=aspirin&limit=10` — MeSH headings for aspirin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MeSH`), `title`, `url`, and `summary`, plus:

- `meshId`, `resource`, `synonyms` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/keywords.md — Duaer keywords
- https://skills.duaer.com/rxnorm.md — Duaer RxNorm
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/trials.md — Duaer clinical trials

## 相关技能

- [在 Duaer 里检索关键词](https://skills.duaer.com/zh/keywords.md)
- [在 Duaer 里检索 RxNorm](https://skills.duaer.com/zh/rxnorm.md)
- [在 Duaer 里检索疾病](https://skills.duaer.com/zh/diseases.md)
- [在 Duaer 里检索临床试验](https://skills.duaer.com/zh/trials.md)
