> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/uberon.md

---
name: duaer-uberon
description: >-
  Duaer Uberon. Search anatomy terms from Uberon.
  One successful search uses 1 Duaer credit.
---

# Duaer Uberon

Search anatomy terms from Uberon. Data comes from Uberon.

## When to use

- Find anatomy terms and Uberon ids.
- Standardize tissue names across species.

## When not to use

- Human-only anatomy. Use https://skills.duaer.com/fma.md.

## Call

`GET https://api.duaer.com/v1/data/uberon?words=liver&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — anatomy words, such as liver.
- `id` — Optional. Uberon id such as UBERON:0002107.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/uberon?words=liver&limit=10` — Uberon terms matching liver.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Uberon`), `title`, `url`, and `summary`, plus:

- `uberonId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/locations.md — Duaer locations
- https://skills.duaer.com/atlas.md — Duaer tissue atlas
- https://skills.duaer.com/organisms.md — Duaer organisms

## 相关技能

- [在 Duaer 里检索亚细胞定位](https://skills.duaer.com/zh/locations.md)
- [在 Duaer 里检索组织图谱](https://skills.duaer.com/zh/atlas.md)
- [在 Duaer 里检索物种](https://skills.duaer.com/zh/organisms.md)
