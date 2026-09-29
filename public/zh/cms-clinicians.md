> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/cms-clinicians.md

---
name: duaer-cms-clinicians
description: >-
  Duaer US clinicians (CMS). Medicare doctors and clinicians from CMS Care Compare by name, specialty, or place, with practice, medical school, and Medicare assignment.
  One successful search uses 1 Duaer credit.
---

# Duaer US clinicians (CMS)

Duaer US clinicians (CMS) searches the CMS doctors and clinicians file of providers who bill Medicare, with practice address and specialty.

## When to use

- Find cardiologists in a state who accept Medicare assignment.
- Look up where a clinician practises and trained.

## When not to use

- Every US provider, including non-Medicare. Use https://skills.duaer.com/npi.md.
- Hospitals. Use https://skills.duaer.com/cms-hospitals.md.

## Call

`GET https://api.duaer.com/v1/data/cms-clinicians?specialty=cardiology&state=MA`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `lastName`, `specialty`, `city`, `state`, or `zip`.

- `lastName` — Optional. Exact last name, such as Smith.
- `specialty` — Words in the primary specialty, such as cardiology.
- `city` — Optional. City, such as Boston.
- `state` — Optional. Two-letter state code, such as MA.
- `zip` — Optional. Five-digit ZIP code, such as 02114.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/cms-clinicians?specialty=cardiology&state=MA` — cardiologists in Massachusetts.
- `GET https://api.duaer.com/v1/data/cms-clinicians?lastName=Smith&city=Boston` — clinicians named Smith in Boston.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `npi`, `name`, `credential`, `gender` — clinician.
- `primarySpecialty`, `otherSpecialties`, `medicalSchool`, `graduationYear` — training.
- `practice`, `address`, `city`, `state`, `zip`, `phone` — practice location.
- `acceptsMedicareAssignment` — accepts the Medicare-approved amount.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/npi.md — Duaer US provider registry (NPI)
- https://skills.duaer.com/cms-nursing-homes.md — Duaer US nursing homes (CMS)

## 相关技能

- [在 Duaer 里查美国医疗服务者登记（NPI）](https://skills.duaer.com/zh/npi.md)
- [在 Duaer 里查美国护理院（CMS）](https://skills.duaer.com/zh/cms-nursing-homes.md)
