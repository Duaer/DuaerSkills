> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/uniref.md

---
name: duaer-uniref
description: >-
  Duaer UniRef. Search UniRef protein sequence clusters.
  One successful search uses 1 Duaer credit.
---

# Duaer UniRef

Search UniRef protein sequence clusters. Data comes from UniRef.

## When to use

- Find UniRef sequence clusters.
- Look up one UniRef id.

## When not to use

- Single protein records. Use https://skills.duaer.com/proteins.md.

## Call

`GET https://api.duaer.com/v1/data/uniref?words=insulin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as insulin.
- `id` — Optional. Id such as UniRef90_P01308.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/uniref?words=insulin&limit=10` — UniRef clusters matching insulin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`UniRef`), `title`, `url`, and `summary`, plus:

- `unirefId`, `entryType` — text.
- `memberCount` — number.
- `organism` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search UniParc in Duaer](https://skills.duaer.com/uniparc.md)
- [Search Proteomes in Duaer](https://skills.duaer.com/proteomes.md)
