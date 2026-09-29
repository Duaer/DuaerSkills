> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/osv.md

---
name: duaer-osv
description: >-
  Duaer OSV vulnerabilities. Known vulnerabilities in an open-source package or version from OSV, across npm, PyPI, Go, Maven, crates.io, and more, with severity and fixed versions.
  One successful search uses 1 Duaer credit.
---

# Duaer OSV vulnerabilities

Duaer OSV vulnerabilities queries the OSV database that aggregates GitHub advisories, PyPA, Go, RustSec, and other feeds. Give a package, optionally a version, or one vulnerability id.

## When to use

- Check whether a dependency version has known vulnerabilities.
- Find the version that fixes an advisory.

## When not to use

- CVSS details for one CVE. Use https://skills.duaer.com/nvd.md.
- Vulnerabilities attacked in the wild. Use https://skills.duaer.com/cisa-kev.md.

## Call

`GET https://api.duaer.com/v1/data/osv?package=lodash&version=4.17.15`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `package`, or `id`.

- `package` — Package name, such as lodash or requests.
- `ecosystem` — Optional. npm, PyPI, Go, Maven, crates.io, NuGet, RubyGems, Packagist, Pub, Hex, Hackage, SwiftURL, Debian, Alpine, or Ubuntu. Default npm.
- `version` — Optional. Only vulnerabilities that affect this version.
- `id` — Optional. One entry such as GHSA-29mw-wpgm-hmr9 or CVE-2021-44228.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/osv?package=lodash&version=4.17.15` — vulnerabilities in lodash 4.17.15.
- `GET https://api.duaer.com/v1/data/osv?package=django&ecosystem=PyPI&limit=5` — recent Django advisories.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `vulnerabilityId`, `aliases` — OSV id and CVE or GHSA aliases.
- `severity`, `cvss`, `cwe` — severity label, CVSS vector, and weakness ids.
- `fixedVersions` — versions that fix it for this package.
- `published`, `modified` — dates.

Rows are newest first.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/nvd.md — Duaer NVD CVE records
- https://skills.duaer.com/npm.md — Duaer npm packages

## Related skills

- [NVD CVE records in Duaer](https://skills.duaer.com/nvd.md)
- [npm packages in Duaer](https://skills.duaer.com/npm.md)
