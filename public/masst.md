> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/masst.md

---
name: duaer-masst
description: >-
  Duaer MASST. Find where an MS/MS spectrum appears in public metabolomics data with GNPS2 MASST.
  One successful search uses 1 Duaer credit.
---

# Duaer MASST

Find where an MS/MS spectrum appears in public metabolomics data with GNPS2 MASST. Data comes from MASST.

## When to use

- Find public datasets that contain a spectrum.
- Check where a spectrum was seen before.

## When not to use

- Fetch the peaks of a spectrum. Use https://skills.duaer.com/spectrum.md.

## Call

`GET https://api.duaer.com/v1/data/masst?usi=mzspec:GNPS:GNPS-LIBRARY:accession:CCMSLIB00005435737&library=public&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `usi`, or `peaks` with `precursorMz`.

- `usi` — spectrum to search, such as a https://skills.duaer.com/spectrum.md result.
- `peaks` — MS/MS peaks as `mz:intensity` pairs separated by spaces, used when `usi` is empty.
- `precursorMz` — precursor m/z, required with `peaks`.
- `charge` — Optional. Precursor charge. Default 1.
- `library` — Optional. `public` (public datasets, default), `gnpsData` (GNPS and MassIVE data), or `gnpsLibrary` (GNPS reference library).
- `cosine` — Optional. Minimum cosine similarity from 0 to 1. Default 0.7.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/masst?usi=mzspec:GNPS:GNPS-LIBRARY:accession:CCMSLIB00005435737&library=public&limit=10` — datasets with one GNPS library spectrum.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url` (spectrum viewer), `summary`, `usi`, `dataset`, `libraryAccession` (GNPS library matches), `cosine`, `matchingPeaks`, and `deltaMass`.

Datasets tell you in which studies, samples, or organisms the unknown spectrum was seen.
A search that does not finish in 45 seconds returns 503 and uses 0 credits.
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
- https://skills.duaer.com/spectrum.md — Duaer spectrum by USI
- https://skills.duaer.com/massbank.md — Duaer MassBank spectra

## Related skills

- [Annotate an unknown feature with Duaer](https://skills.duaer.com/metabolic-dark-matter.md)
- [Fetch a spectrum by USI in Duaer](https://skills.duaer.com/spectrum.md)
- [Match spectra in MassBank with Duaer](https://skills.duaer.com/massbank.md)
