> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/oae.md

---
name: duaer-oae
description: >-
  Duaer OAE. Search adverse event terms from OAE.
  One successful search uses 1 Duaer credit.
---

# Duaer OAE

Search adverse event terms from OAE. Data comes from OAE.

## When to use

- Find adverse event terms and OAE ids.
- Look up one OAE id.

## When not to use

- Drug adverse event reports. Use https://skills.duaer.com/adverse-events.md.

## Call

`GET https://api.duaer.com/v1/data/oae?words=fever&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as fever.
- `id` — Optional. Id such as OAE:0000001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/oae?words=fever&limit=10` — OAE terms matching fever.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OAE`), `title`, `url`, and `summary`, plus:

- `oaeId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search phenotypes in Duaer](https://skills.duaer.com/phenotypes.md)
