> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/npi.md

---
name: duaer-npi
description: >-
  Duaer US provider registry (NPI). US doctors, nurses, clinics, and hospitals in the NPPES NPI registry by name, specialty, and state, with address and license.
  One successful search uses 1 Duaer credit.
---

# Duaer US provider registry (NPI)

Duaer US provider registry (NPI) searches the NPPES registry of every US health care provider with a National Provider Identifier: clinicians and organizations.

## When to use

- Verify a US clinician’s NPI, specialty, and license state.
- List cardiologists or clinics in a city.

## When not to use

- Hospital quality ratings. Use https://skills.duaer.com/cms-hospitals.md.
- Clinical studies. Use https://skills.duaer.com/trials.md.

## Call

`GET https://api.duaer.com/v1/data/npi?lastName=Smith&specialty=Cardiology&state=MA`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `npi`, `lastName`, `organization`, or `specialty`.

- `lastName` — Clinician’s last name, such as Smith. End with * to match a prefix.
- `firstName` — Optional. First name, such as John.
- `organization` — Optional. Clinic or hospital name, such as Mayo Clinic.
- `specialty` — Optional. Taxonomy description, such as Cardiology.
- `city` — Optional. City, such as Boston.
- `state` — Optional. Two-letter state code, such as MA.
- `npi` — Optional. Ten-digit NPI to look up one provider.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/npi?lastName=Smith&specialty=Cardiology&state=MA` — cardiologists named Smith in Massachusetts.
- `GET https://api.duaer.com/v1/data/npi?organization=Mayo%20Clinic&state=MN&limit=5` — Mayo Clinic entities in Minnesota.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `npi`, `name`, `type` — identifier, name with credential, and Individual or Organization.
- `specialty`, `taxonomyCode`, `license`, `licenseState` — primary taxonomy and license.
- `address`, `city`, `state`, `postalCode`, `phone` — practice location.
- `enumerated`, `updated`, `status` — registry dates and status.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/cms-hospitals.md — Duaer US hospitals (CMS)
- https://skills.duaer.com/who-gho.md — Duaer WHO health statistics

## Related skills

- [US hospitals (CMS) in Duaer](https://skills.duaer.com/cms-hospitals.md)
- [WHO health statistics in Duaer](https://skills.duaer.com/who-gho.md)
