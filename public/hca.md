> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/hca.md

---
name: duaer-hca
description: >-
  Duaer HCA. Search Human Cell Atlas projects.
  One successful search uses 1 Duaer credit.
---

# Duaer HCA

Search Human Cell Atlas projects. Data comes from HCA.

## When to use

- Find Human Cell Atlas projects.
- Look up one HCA project.

## When not to use

- CELLxGENE collections. Use https://skills.duaer.com/cellxgene.md.

## Call

`GET https://api.duaer.com/v1/data/hca?words=blood&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `words`.

- `words` — search words, such as blood.
- `id` — Optional. Id such as projectId.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/hca?words=blood&limit=10` — HCA projects matching blood.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`HCA`), `title`, `url`, and `summary`, plus:

- `projectId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search Expression Atlas in Duaer](https://skills.duaer.com/expression-atlas.md)
- [Search Single Cell Atlas in Duaer](https://skills.duaer.com/single-cell-atlas.md)
