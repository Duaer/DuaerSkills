> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/lei.md

---
name: duaer-lei
description: >-
  Duaer Legal entities (LEI). Look up companies worldwide in the GLEIF register: legal name, 20-character LEI, jurisdiction, registered city and country, and entity and registration status.
  One successful search uses 1 Duaer credit.
---

# Duaer Legal entities (LEI)

Duaer Legal entities searches the Global LEI Index by GLEIF. An LEI identifies one legal entity in financial reporting, so it helps tell apart companies with similar names.

## When to use

- Confirm the exact legal name and country of a counterparty or supplier.
- Find the LEI to join company records across systems.

## When not to use

- Filings and financial reports. Use https://skills.duaer.com/sec-filings.md.
- Ownership trees or beneficial owners. This search returns the entity record only.

## Call

`GET https://api.duaer.com/v1/data/lei?words=Tencent&country=CN`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `lei`.

- `words` — Company name or words in it, such as Tencent.
- `lei` — Optional. A 20-character LEI to open one record.
- `country` — Optional. Two-letter ISO code of the legal address, such as CN.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/lei?words=Tencent&country=CN` — Tencent entities with a legal address in China.
- `GET https://api.duaer.com/v1/data/lei?lei=254900R2298R0IPO6I46` — one record by LEI.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `lei`, `legalName` — identifier and legal name.
- `jurisdiction`, `city`, `country` — where the entity is registered.
- `entityStatus`, `category` — ACTIVE or INACTIVE, and entity category.
- `registrationStatus`, `nextRenewal` — LEI status such as ISSUED or LAPSED, and renewal date.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/sec-filings.md — Duaer SEC filings
- https://skills.duaer.com/ror.md

## 相关技能

- [在 Duaer 里查 SEC 公司公告](https://skills.duaer.com/zh/sec-filings.md)
- [在 Duaer 里检索 ROR](https://skills.duaer.com/zh/ror.md)
