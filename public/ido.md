> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ido.md

---
name: duaer-ido
description: >-
  Duaer IDO. Search infectious disease terms from IDO.
  One successful search uses 1 Duaer credit.
---

# Duaer IDO

Search infectious disease terms from IDO. Data comes from IDO.

## When to use

- Find infectious disease terms and IDO ids.
- Look up one IDO id.

## When not to use

- Coronavirus terms. Use https://skills.duaer.com/cido.md.

## Call

`GET https://api.duaer.com/v1/data/ido?words=infection&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as infection.
- `id` — Optional. Id such as IDO:0000001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ido?words=infection&limit=10` — IDO terms matching infection.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`IDO`), `title`, `url`, and `summary`, plus:

- `idoId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes

## Related skills

- [Search phenotypes in Duaer](https://skills.duaer.com/phenotypes.md)
