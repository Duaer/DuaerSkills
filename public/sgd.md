> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/sgd.md

---
name: duaer-sgd
description: >-
  Duaer SGD. Look up yeast genes in SGD.
  One successful search uses 1 Duaer credit.
---

# Duaer SGD

Look up yeast genes in SGD. Data comes from SGD.

## When to use

- Look up budding yeast genes in SGD.
- Find a yeast gene by SGD id.

## When not to use

- Fission yeast genes. Use https://skills.duaer.com/pombase.md.

## Call

`GET https://api.duaer.com/v1/data/sgd?words=S000000001&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as S000000001.
- `id` — Optional. Id such as S000000001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/sgd?words=S000000001&limit=10` — SGD gene S000000001.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`SGD`), `title`, `url`, and `summary`, plus:

- `sgdId`, `name` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search Alliance genes in Duaer](https://skills.duaer.com/alliance.md)
