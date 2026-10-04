> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/mgi.md

---
name: duaer-mgi
description: >-
  Duaer MGI. Search mouse genes in MGI.
  One successful search uses 1 Duaer credit.
---

# Duaer MGI

Search mouse genes in MGI. Data comes from MGI.

## When to use

- Find mouse genes in MGI.
- Look up one MGI id.

## When not to use

- Rat genes. Use https://skills.duaer.com/rgd.md.

## Call

`GET https://api.duaer.com/v1/data/mgi?words=Pax6&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as Pax6.
- `id` — Optional. Id such as MGI:97490.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/mgi?words=Pax6&limit=10` — MGI genes matching Pax6.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MGI`), `title`, `url`, and `summary`, plus:

- `mgiId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/genes.md — Duaer genes

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
