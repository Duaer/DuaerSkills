> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/unpaywall.md

---
name: duaer-unpaywall
description: >-
  Duaer Unpaywall. Look up open-access status for a DOI in Unpaywall.
  One successful search uses 1 Duaer credit.
---

# Duaer Unpaywall

Look up open-access status for a DOI in Unpaywall. Data comes from Unpaywall.

## When to use

- Check if a DOI has a free legal copy.
- Check whether a known paper is open access.

## When not to use

- Search papers by topic. Use https://skills.duaer.com/papers.md.

## Call

`GET https://api.duaer.com/v1/data/unpaywall?words=10.1038%2Fnature12373&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as 10.1038/nature12373.
- `id` — Optional. Id such as 10.1038/nature12373.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/unpaywall?words=10.1038%2Fnature12373&limit=10` — open access status of one DOI.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Unpaywall`), `title`, `url`, and `summary`, plus:

- `doi`, `isOa`, `oaStatus` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search papers in Duaer](https://skills.duaer.com/papers.md)
- [Search Europe PMC in Duaer](https://skills.duaer.com/europe-pmc.md)
