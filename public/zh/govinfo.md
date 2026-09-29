> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/govinfo.md

---
name: duaer-govinfo
description: >-
  Duaer US GovInfo documents. GovInfo: US bills, Federal Register, CFR, court opinions, and other official publications.
  One successful search uses 1 Duaer credit.
---

# Duaer US GovInfo documents

Duaer US GovInfo documents searches GovInfo, the official source of US federal publications, and links each result to its govinfo.gov page. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Find Federal Register notices about data privacy.
- Find the newest bill texts that mention a topic.

## When not to use

- Bill status and actions. Use https://skills.duaer.com/congress-bills.md.
- Federal Register documents with agency details. Use https://skills.duaer.com/federal-register.md.

## Call

`GET https://api.duaer.com/v1/data/govinfo?words=data%20privacy`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Words to search, such as data privacy.
- `collection` — Optional. Collection code such as BILLS, FR, CFR, USCOURTS, or CREC.
- `sort` — Optional. `relevance` or `newest`. Default `relevance`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/govinfo?words=data%20privacy` — publications about data privacy.
- `GET https://api.duaer.com/v1/data/govinfo?words=privacy&collection=BILLS&sort=newest` — the newest bill texts about privacy.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `packageId`, `granuleId`, `collection` — GovInfo ids and collection.
- `dateIssued`, `authors`, `lastModified` — issue date, government authors, and last update.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/congress-bills.md — Duaer US Congress bills
- https://skills.duaer.com/federal-register.md — Duaer US Federal Register

## 相关技能

- [在 Duaer 里查美国国会法案](https://skills.duaer.com/zh/congress-bills.md)
- [在 Duaer 里查美国联邦公报](https://skills.duaer.com/zh/federal-register.md)
