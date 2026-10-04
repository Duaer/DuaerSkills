> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/worms.md

---
name: duaer-worms
description: >-
  Duaer WoRMS. Search marine species in WoRMS.
  One successful search uses 1 Duaer credit.
---

# Duaer WoRMS

Search marine species in WoRMS. Data comes from WoRMS.

## When to use

- Find marine species in WoRMS.
- Look up one AphiaID.

## When not to use

- All species. Use https://skills.duaer.com/gbif.md.

## Call

`GET https://api.duaer.com/v1/data/worms?words=Homo%20sapiens&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as Homo sapiens.
- `id` — Optional. Id such as 1457844.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/worms?words=Homo%20sapiens&limit=10` — WoRMS records for Homo sapiens.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`WoRMS`), `title`, `url`, and `summary`, plus:

- `aphiaId`, `scientificName` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search organisms in Duaer](https://skills.duaer.com/organisms.md)
- [Search GBIF in Duaer](https://skills.duaer.com/gbif.md)
