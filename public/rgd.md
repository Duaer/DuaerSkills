> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/rgd.md

---
name: duaer-rgd
description: >-
  Duaer RGD. Look up rat genes in RGD.
  One successful search uses 1 Duaer credit.
---

# Duaer RGD

Look up rat genes in RGD. Data comes from RGD.

## When to use

- Look up rat genes in RGD.
- Find a rat gene by RGD id.

## When not to use

- Mouse genes. Use https://skills.duaer.com/mgi.md.

## Call

`GET https://api.duaer.com/v1/data/rgd?words=61919&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as 61919.
- `id` — Optional. Id such as 61919.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/rgd?words=61919&limit=10` — RGD gene 61919.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`RGD`), `title`, `url`, and `summary`, plus:

- `rgdId`, `symbol` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/alliance.md — Duaer Alliance

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search Alliance genes in Duaer](https://skills.duaer.com/alliance.md)
