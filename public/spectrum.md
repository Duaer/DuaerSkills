> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/spectrum.md

---
name: duaer-spectrum
description: >-
  Fetch the peaks of a public mass spectrum by its USI through Duaer.
  One successful search uses 1 Duaer credit.
---

# Duaer spectrum by USI

Fetch a public MS/MS spectrum by its Universal Spectrum Identifier (USI) through the GNPS resolver with a Duaer key.

## Call

`GET https://api.duaer.com/v1/data/spectrum?usi=mzspec:GNPS:GNPS-LIBRARY:accession:CCMSLIB00005435737`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- `usi` — required. A USI that starts with `mzspec:` (GNPS, MassIVE, MetaboLights, and other public repositories).

## Result

One item with `source`, `title`, `url` (spectrum viewer), `summary`, `usi`, `precursorMz`, `charge`, `peakCount`, `peaks` (`mz:intensity` pairs), and `splash`.
Pass `peaks` to https://skills.duaer.com/massbank.md, or the `usi` to https://skills.duaer.com/masst.md.
To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

## Credits

One successful search uses 1 credit, including a search that finds no match.
Empty input, a failed source, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Annotate an unknown feature with Duaer](https://skills.duaer.com/metabolic-dark-matter.md)
- [Match spectra in MassBank with Duaer](https://skills.duaer.com/massbank.md)
- [Search a spectrum with MASST in Duaer](https://skills.duaer.com/masst.md)
