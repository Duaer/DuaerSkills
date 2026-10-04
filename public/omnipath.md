> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/omnipath.md

---
name: duaer-omnipath
description: >-
  Duaer Omnipath. Search molecular interactions in OmniPath.
  One successful search uses 1 Duaer credit.
---

# Duaer Omnipath

Search molecular interactions in OmniPath. Data comes from Omnipath.

## When to use

- Find signaling and regulatory interactions in OmniPath.
- Look up interactions for one protein.

## When not to use

- STRING partners. Use https://skills.duaer.com/interactions.md.

## Call

`GET https://api.duaer.com/v1/data/omnipath?words=EGFR&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as EGFR.
- `id` — Optional. Id such as EGFR.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/omnipath?words=EGFR&limit=10` — OmniPath interactions for EGFR.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Omnipath`), `title`, `url`, and `summary`, plus:

- `partner`, `sourceGene`, `targetGene` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/interactions.md — Duaer interactions
- https://skills.duaer.com/intact.md — Duaer IntAct

## Related skills

- [Search interactions in Duaer](https://skills.duaer.com/interactions.md)
- [Search IntAct in Duaer](https://skills.duaer.com/intact.md)
