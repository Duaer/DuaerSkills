> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/cisa-kev.md

---
name: duaer-cisa-kev
description: >-
  Duaer CISA known exploited vulnerabilities. CVEs that CISA confirms are exploited in the wild, by vendor, words, or date added, with required action and remediation due date.
  One successful search uses 1 Duaer credit.
---

# Duaer CISA known exploited vulnerabilities

Duaer CISA known exploited vulnerabilities reads the CISA KEV catalog: CVEs with confirmed exploitation that US federal agencies must fix by a due date. Newest additions come first.

## When to use

- Prioritize patches that attackers already use.
- List new exploited CVEs for a vendor this month.

## When not to use

- Any CVE, exploited or not. Use https://skills.duaer.com/nvd.md.
- Package-level advisories. Use https://skills.duaer.com/osv.md.

## Call

`GET https://api.duaer.com/v1/data/cisa-kev?days=30`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`, `vendor`, or `days`.

- `words` — Words in the CVE, product, or description, such as remote code execution.
- `vendor` — Optional. Vendor, such as Microsoft or Cisco.
- `days` — Optional. Only entries added in the last N days, 1 to 3650.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/cisa-kev?days=30` — entries added in the last 30 days.
- `GET https://api.duaer.com/v1/data/cisa-kev?vendor=Microsoft&days=90` — Microsoft CVEs exploited this quarter.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `cveId`, `vendor`, `product` — the vulnerability and affected product.
- `description`, `requiredAction` — what it is and what to do.
- `dateAdded`, `dueDate` — catalog date and remediation deadline.
- `ransomwareUse`, `cwe` — Known when used in ransomware campaigns; weakness ids.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/nvd.md — Duaer NVD CVE records
- https://skills.duaer.com/osv.md — Duaer OSV vulnerabilities

## Related skills

- [NVD CVE records in Duaer](https://skills.duaer.com/nvd.md)
- [OSV vulnerabilities in Duaer](https://skills.duaer.com/osv.md)
