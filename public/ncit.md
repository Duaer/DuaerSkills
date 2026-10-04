> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ncit.md

---
name: duaer-ncit
description: >-
  Duaer NCIt. Search clinical terms from NCI Thesaurus.
  One successful search uses 1 Duaer credit.
---

# Duaer NCIt

Search clinical terms from NCI Thesaurus. Data comes from NCIt.

## When to use

- Find NCI Thesaurus terms for cancer and clinical concepts.
- Look up one NCIt code.

## When not to use

- Tumor types. Use https://skills.duaer.com/oncotree.md.

## Call

`GET https://api.duaer.com/v1/data/ncit?words=melanoma&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as melanoma.
- `id` — Optional. Id such as NCIT:C3224.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ncit?words=melanoma&limit=10` — NCIt terms matching melanoma.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`NCIt`), `title`, `url`, and `summary`, plus:

- `ncitId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/mondo.md — Duaer Mondo
- https://skills.duaer.com/doid.md — Duaer DOID
- https://skills.duaer.com/orphanet.md — Duaer Orphanet

## Related skills

- [Search Mondo in Duaer](https://skills.duaer.com/mondo.md)
- [Search DOID in Duaer](https://skills.duaer.com/doid.md)
- [Search Orphanet in Duaer](https://skills.duaer.com/orphanet.md)
