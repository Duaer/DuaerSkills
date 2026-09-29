> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/cms-nursing-homes.md

---
name: duaer-cms-nursing-homes
description: >-
  Duaer US nursing homes (CMS). Medicare nursing homes from CMS Care Compare: beds, ownership, and star ratings for overall, inspections, staffing, and quality.
  One successful search uses 1 Duaer credit.
---

# Duaer US nursing homes (CMS)

Duaer US nursing homes (CMS) searches the CMS list of Medicare and Medicaid nursing homes with their five-star ratings.

## When to use

- Find highly rated nursing homes in a city.
- Compare staffing and inspection ratings.

## When not to use

- Hospitals. Use https://skills.duaer.com/cms-hospitals.md.
- Individual clinicians. Use https://skills.duaer.com/cms-clinicians.md.

## Call

`GET https://api.duaer.com/v1/data/cms-nursing-homes?city=Boston&state=MA&minRating=4`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `name`, `city`, `state`, `zip`, or `minRating`.

- `name` — Optional. Words in the name, such as care.
- `city` — Optional. City, such as Boston.
- `state` — Optional. Two-letter state code, such as MA.
- `zip` — Optional. Five-digit ZIP code, such as 02114.
- `minRating` — Optional. Overall rating from 1 to 5.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/cms-nursing-homes?city=Boston&state=MA&minRating=4` — four- and five-star homes in Boston.
- `GET https://api.duaer.com/v1/data/cms-nursing-homes?zip=10025` — homes in one ZIP code.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `ccn`, `name`, `address`, `city`, `state`, `zip`, `phone` — facility.
- `ownership`, `chain`, `certifiedBeds`, `residentsPerDay` — size and owner.
- `overallRating`, `healthInspectionRating`, `staffingRating`, `qualityRating` — 1 to 5 stars.
- `abuseCitation` — CMS abuse icon.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/cms-hospitals.md — Duaer US hospitals (CMS)
- https://skills.duaer.com/cms-clinicians.md — Duaer US clinicians (CMS)

## Related skills

- [US hospitals (CMS) in Duaer](https://skills.duaer.com/cms-hospitals.md)
- [US clinicians (CMS) in Duaer](https://skills.duaer.com/cms-clinicians.md)
