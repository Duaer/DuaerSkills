> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/flybase.md

---
name: duaer-flybase
description: >-
  Duaer FlyBase. Search Drosophila genes from Alliance / FlyBase.
  One successful search uses 1 Duaer credit.
---

# Duaer FlyBase

Search Drosophila genes from Alliance / FlyBase. Data comes from FlyBase.

## When to use

- Find Drosophila genes.
- Look up one FlyBase gene id.

## When not to use

- Worm genes. Use https://skills.duaer.com/wormbase.md.

## Call

`GET https://api.duaer.com/v1/data/flybase?words=Adh&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — such as Adh.
- `id` — optional.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/flybase?words=Adh&limit=10` — FlyBase genes matching Adh.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`FlyBase`), `title`, `url`, and `summary`, plus:

- `geneId`, `symbol`, `species` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/alliance.md — Duaer Alliance
- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/orthologs.md — Duaer orthologs

## Related skills

- [Search Alliance genes in Duaer](https://skills.duaer.com/alliance.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search orthologs in Duaer](https://skills.duaer.com/orthologs.md)
