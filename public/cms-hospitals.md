> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/cms-hospitals.md

---
name: duaer-cms-hospitals
description: >-
  Duaer US hospitals (CMS). Medicare-certified US hospitals from CMS Care Compare: type, ownership, emergency services, and overall star rating.
  One successful search uses 1 Duaer credit.
---

# Duaer US hospitals (CMS)

Duaer US hospitals (CMS) searches the CMS Care Compare list of Medicare-certified US hospitals, with the CMS overall star rating where one exists.

## When to use

- Find hospitals in a city or ZIP code with their star rating.
- Check whether a hospital offers emergency services.

## When not to use

- Individual clinicians. Use https://skills.duaer.com/npi.md.
- Global health statistics. Use https://skills.duaer.com/who-gho.md.

## Call

`GET https://api.duaer.com/v1/data/cms-hospitals?name=general&state=MA`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `name`, `city`, `state`, or `zip`.

- `name` — Words in the hospital name, such as general.
- `city` — Optional. City, such as Boston.
- `state` — Optional. Two-letter state code, such as MA.
- `zip` — Optional. Five-digit ZIP code, such as 02114.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/cms-hospitals?name=general&state=MA` — general hospitals in Massachusetts.
- `GET https://api.duaer.com/v1/data/cms-hospitals?city=Houston&state=TX&limit=20` — hospitals in Houston.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `facilityId`, `name` — CMS certification number and hospital name.
- `address`, `city`, `state`, `zip`, `county`, `phone` — location.
- `hospitalType`, `ownership`, `emergencyServices` — type, owner, and emergency care.
- `overallRating` — 1 to 5 stars; left out when CMS has no rating.
- `birthingFriendly` — meets the CMS birthing-friendly criteria.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/npi.md — Duaer US provider registry (NPI)
- https://skills.duaer.com/who-gho.md — Duaer WHO health statistics

## Related skills

- [US provider registry (NPI) in Duaer](https://skills.duaer.com/npi.md)
- [WHO health statistics in Duaer](https://skills.duaer.com/who-gho.md)
