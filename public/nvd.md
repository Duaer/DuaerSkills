> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/nvd.md

---
name: duaer-nvd
description: >-
  Duaer NVD CVE records. CVE records from the US National Vulnerability Database by keyword or CVE id, newest first, with CVSS score, weakness, and known-exploited date.
  One successful search uses 1 Duaer credit.
---

# Duaer NVD CVE records

Duaer NVD CVE records searches the US National Vulnerability Database. It returns the newest matching CVEs first, with the CVSS score NVD or the vendor assigned.

## When to use

- Get the CVSS score and description of a CVE.
- List recent CVEs for a product such as openssl.

## When not to use

- Affected package versions. Use https://skills.duaer.com/osv.md.
- Only CVEs attacked in the wild. Use https://skills.duaer.com/cisa-kev.md.

## Call

`GET https://api.duaer.com/v1/data/nvd?words=openssl`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `cve`.

- `words` — Keywords, such as openssl or log4j.
- `cve` — Optional. One record such as CVE-2021-44228.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/nvd?words=openssl` — the newest OpenSSL CVEs.
- `GET https://api.duaer.com/v1/data/nvd?cve=CVE-2021-44228` — the Log4Shell record.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `cveId`, `description` — id and English description.
- `cvssScore`, `cvssSeverity`, `cvssVector`, `cvssVersion` — best available CVSS (4.0, 3.1, 3.0, then 2).
- `cwe`, `status` — weakness ids and NVD analysis status.
- `knownExploitedSince` — date CISA listed it as exploited, when it is.
- `published`, `lastModified` — dates.

NVD allows few anonymous calls; a busy period can return 503 at 0 credits.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/osv.md — Duaer OSV vulnerabilities
- https://skills.duaer.com/cisa-kev.md — Duaer CISA known exploited vulnerabilities

## Related skills

- [OSV vulnerabilities in Duaer](https://skills.duaer.com/osv.md)
- [CISA known exploited vulnerabilities in Duaer](https://skills.duaer.com/cisa-kev.md)
