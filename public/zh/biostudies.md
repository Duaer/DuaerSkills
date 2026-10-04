> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/biostudies.md

---
name: duaer-biostudies
description: >-
  Duaer BioStudies. Search multi-omics studies in BioStudies.
  One successful search uses 1 Duaer credit.
---

# Duaer BioStudies

Search multi-omics studies in BioStudies. Data comes from BioStudies.

## When to use

- Find multi-omics studies in BioStudies.
- Look up one study by accession.

## When not to use

- Expression experiments. Use https://skills.duaer.com/expression-atlas.md.

## Call

`GET https://api.duaer.com/v1/data/biostudies?words=diabetes&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — study words, such as diabetes.
- `id` — Optional. BioStudies accession such as S-EPMC7532821.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/biostudies?words=diabetes&limit=10` — BioStudies studies matching diabetes.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`BioStudies`), `title`, `url`, and `summary`, plus:

- `studyId`, `studyType`, `authors`, `releaseDate`, `description`, `dataSource` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/geo.md — Duaer GEO
- https://skills.duaer.com/pride.md — Duaer PRIDE
- https://skills.duaer.com/expression.md — Duaer expression

## 相关技能

- [在 Duaer 里检索 GEO](https://skills.duaer.com/zh/geo.md)
- [在 Duaer 里检索 PRIDE](https://skills.duaer.com/zh/pride.md)
- [在 Duaer 里检索表达](https://skills.duaer.com/zh/expression.md)
