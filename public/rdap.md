> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/rdap.md

---
name: duaer-rdap
description: >-
  Duaer Domain registration (RDAP). Registration record of a domain over RDAP: registrar, registration and expiry dates, status codes, name servers, and DNSSEC.
  One successful search uses 1 Duaer credit.
---

# Duaer Domain registration (RDAP)

Duaer Domain registration (RDAP) looks up a domain in the registry that runs its top-level domain, through the rdap.org bootstrap. RDAP is the structured successor to WHOIS.

## When to use

- Check who registered a domain and when it expires.
- Verify name servers and lock status before a migration.

## When not to use

- Company records. Use https://skills.duaer.com/npi.md for US clinicians or a company registry.
- Security advisories. Use https://skills.duaer.com/nvd.md.

## Call

`GET https://api.duaer.com/v1/data/rdap?domain=github.com`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `domain`.

- `domain` — Registered domain such as github.com. A URL is trimmed to its host.

## Examples

- `GET https://api.duaer.com/v1/data/rdap?domain=github.com` — the github.com record.
- `GET https://api.duaer.com/v1/data/rdap?domain=wikipedia.org` — the wikipedia.org record.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `domain`, `registrar` — domain and registrar name.
- `registered`, `expires`, `lastChanged` — dates, YYYY-MM-DD.
- `status`, `nameservers`, `dnssec` — EPP status codes, name servers, and whether DNSSEC is signed.

The search returns one row. Some country-code domains have no RDAP service and return none.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/nvd.md — Duaer NVD CVE records
- https://skills.duaer.com/cisa-kev.md — Duaer CISA known exploited vulnerabilities

## Related skills

- [NVD CVE records in Duaer](https://skills.duaer.com/nvd.md)
- [CISA known exploited vulnerabilities in Duaer](https://skills.duaer.com/cisa-kev.md)
