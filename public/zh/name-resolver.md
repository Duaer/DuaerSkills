> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/name-resolver.md

---
name: duaer-name-resolver
description: >-
  Duaer NameResolver. Resolve biomedical names from SRI Name Resolver.
  One successful search uses 1 Duaer credit.
---

# Duaer NameResolver

Resolve biomedical names from SRI Name Resolver. Data comes from NameResolver.

## When to use

- Resolve a biomedical name to CURIEs.
- Pick an id for a free-text entity.

## When not to use

- Normalize a known CURIE. Use https://skills.duaer.com/node-norm.md.

## Call

`GET https://api.duaer.com/v1/data/name-resolver?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1.
- `id` — Optional. Id such as BRCA1.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/name-resolver?words=BRCA1&limit=10` — CURIEs for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`NameResolver`), `title`, `url`, and `summary`, plus:

- `curie`, `label` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/node-norm.md — Duaer NodeNorm
- https://skills.duaer.com/crossrefs.md — Duaer crossrefs

## 相关技能

- [在 Duaer 里检索 NodeNorm](https://skills.duaer.com/zh/node-norm.md)
- [在 Duaer 里检索交叉引用](https://skills.duaer.com/zh/crossrefs.md)
