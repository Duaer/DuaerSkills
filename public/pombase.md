> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/pombase.md

---
name: duaer-pombase
description: >-
  Duaer PomBase. Look up fission yeast genes in PomBase.
  One successful search uses 1 Duaer credit.
---

# Duaer PomBase

Look up fission yeast genes in PomBase. Data comes from PomBase.

## When to use

- Look up fission yeast genes in PomBase.
- Find a gene by PomBase id.

## When not to use

- Budding yeast genes. Use https://skills.duaer.com/sgd.md.

## Call

`GET https://api.duaer.com/v1/data/pombase?words=cdc2&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as cdc2.
- `id` — Optional. Id such as SPBC11B10.09.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/pombase?words=cdc2&limit=10` — PomBase genes matching cdc2.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`PomBase`), `title`, `url`, and `summary`, plus:

- `geneId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
