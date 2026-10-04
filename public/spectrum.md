> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/spectrum.md

---
name: duaer-spectrum
description: >-
  Duaer spectrum by USI. Fetch the peaks of a public mass spectrum by its USI.
  One successful search uses 1 Duaer credit.
---

# Duaer spectrum by USI

Fetch the peaks of a public mass spectrum by its USI. Data comes from GNPS USI.

## When to use

- Fetch the peaks of a public spectrum by USI.
- Get peaks to pass to a spectrum match.

## When not to use

- Find datasets that contain a spectrum. Use https://skills.duaer.com/masst.md.

## Call

`GET https://api.duaer.com/v1/data/spectrum?usi=mzspec:GNPS:GNPS-LIBRARY:accession:CCMSLIB00005435737`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

- `usi` — required. A USI that starts with `mzspec:` (GNPS, MassIVE, MetaboLights, and other public repositories).

## Examples

- `GET https://api.duaer.com/v1/data/spectrum?usi=mzspec:GNPS:GNPS-LIBRARY:accession:CCMSLIB00005435737` — peaks of one GNPS library spectrum.

## Result

The response is `{ "items": [...] }`. One item with `source`, `title`, `url` (spectrum viewer), `summary`, `usi`, `precursorMz`, `charge`, `peakCount`, `peaks` (`mz:intensity` pairs), and `splash`.

Pass `peaks` to https://skills.duaer.com/massbank.md, or the `usi` to https://skills.duaer.com/masst.md.
To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

Fields without a value are empty strings or left out.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/metabolic-dark-matter.md — Duaer: annotate an unknown feature (metabolic dark matter)
- https://skills.duaer.com/massbank.md — Duaer MassBank spectra
- https://skills.duaer.com/masst.md — Duaer MASST

## Related skills

- [Annotate an unknown feature with Duaer](https://skills.duaer.com/metabolic-dark-matter.md)
- [Match spectra in MassBank with Duaer](https://skills.duaer.com/massbank.md)
- [Search a spectrum with MASST in Duaer](https://skills.duaer.com/masst.md)
