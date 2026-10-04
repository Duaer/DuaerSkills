> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/wormbase.md

---
name: duaer-wormbase
description: >-
  Duaer WormBase. Search C. elegans genes from Alliance / WormBase.
  One successful search uses 1 Duaer credit.
---

# Duaer WormBase

Search C. elegans genes from Alliance / WormBase. Data comes from WormBase.

## When to use

- Find C. elegans genes.
- Look up one WormBase gene id.

## When not to use

- Fly genes. Use https://skills.duaer.com/flybase.md.

## Call

`GET https://api.duaer.com/v1/data/wormbase?words=unc-26&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — such as unc-26.
- `id` — optional.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/wormbase?words=unc-26&limit=10` — WormBase genes matching unc-26.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`WormBase`), `title`, `url`, and `summary`, plus:

- `geneId`, `symbol`, `species` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search Alliance genes in Duaer](https://skills.duaer.com/alliance.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search orthologs in Duaer](https://skills.duaer.com/orthologs.md)
