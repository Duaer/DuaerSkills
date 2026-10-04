> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/disprot.md

---
name: duaer-disprot
description: >-
  Duaer DisProt. Search intrinsically disordered proteins in DisProt.
  One successful search uses 1 Duaer credit.
---

# Duaer DisProt

Search intrinsically disordered proteins in DisProt. Data comes from DisProt.

## When to use

- Find intrinsically disordered proteins in DisProt.
- Look up one DisProt id.

## When not to use

- UniProt proteins. Use https://skills.duaer.com/proteins.md.

## Call

`GET https://api.duaer.com/v1/data/disprot?words=p53&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as p53.
- `id` — Optional. Id such as DP00086.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/disprot?words=p53&limit=10` — DisProt entries for p53.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`DisProt`), `title`, `url`, and `summary`, plus:

- `disprotId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins

## Related skills

- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
