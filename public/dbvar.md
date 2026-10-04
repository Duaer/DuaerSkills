> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/dbvar.md

---
name: duaer-dbvar
description: >-
  Duaer dbVar. Search structural variants in dbVar.
  One successful search uses 1 Duaer credit.
---

# Duaer dbVar

Search structural variants in dbVar. Data comes from dbVar.

## When to use

- Find structural variants in dbVar.
- Look up one dbVar id.

## When not to use

- Small variants. Use https://skills.duaer.com/variants.md.

## Call

`GET https://api.duaer.com/v1/data/dbvar?words=deletion&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as deletion.
- `id` — Optional. Id such as 12345.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/dbvar?words=deletion&limit=10` — dbVar records matching deletion.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`dbVar`), `title`, `url`, and `summary`, plus:

- `dbvarId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
