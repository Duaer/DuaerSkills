> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/mpath.md

---
name: duaer-mpath
description: >-
  Duaer MPATH. Search pathology terms from MPATH.
  One successful search uses 1 Duaer credit.
---

# Duaer MPATH

Search pathology terms from MPATH. Data comes from MPATH.

## When to use

- Find mouse pathology terms in MPATH.
- Look up one MPATH id.

## When not to use

- Mammalian phenotypes. Use https://skills.duaer.com/mp.md.

## Call

`GET https://api.duaer.com/v1/data/mpath?words=inflammation&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as inflammation.
- `id` — Optional. Id such as MPATH:212.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/mpath?words=inflammation&limit=10` — MPATH terms matching inflammation.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MPATH`), `title`, `url`, and `summary`, plus:

- `mpathId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/ncit.md — Duaer NCIt
- https://skills.duaer.com/mondo.md — Duaer Mondo
- https://skills.duaer.com/doid.md — Duaer DOID

## Related skills

- [Search NCIt in Duaer](https://skills.duaer.com/ncit.md)
- [Search Mondo in Duaer](https://skills.duaer.com/mondo.md)
- [Search DOID in Duaer](https://skills.duaer.com/doid.md)
