> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/massbank.md

---
name: duaer-massbank
description: >-
  Match MS/MS peaks, an exact mass, or an InChIKey against MassBank spectra through Duaer.
  One successful search uses 1 Duaer credit.
---

# Duaer MassBank spectra

Match an MS/MS spectrum against the MassBank Europe reference library through Duaer with a Duaer key.

## Call

`GET https://api.duaer.com/v1/data/massbank?peaks=59.0138:715%2089.0251:999&ionMode=NEGATIVE&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

Provide `peaks`, `mass`, or `inchikey` (used in that order).

- `peaks` — MS/MS peaks as `mz:intensity` pairs separated by spaces. One `mz intensity` pair per line also works.
- `threshold` — optional. Minimum cosine similarity for `peaks`, from 0 to 1. Default 0.7.
- `mass` — neutral monoisotopic mass, such as 180.0634.
- `tolerance` — optional. Mass tolerance in Da for `mass`. Default 0.01.
- `inchikey` — reference records for one compound, such as a https://skills.duaer.com/mass-candidates.md result.
- `ionMode` — optional. `POSITIVE` or `NEGATIVE`.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item has `source`, `title`, `url`, `summary`, `accession`, `compound`, `formula`, `mass`, `inchikey`, `ionMode`, `instrument`, and `score` (cosine, peak searches only).
To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

## Credits

One successful search uses 1 credit, including a search that finds no match.
Empty input, a failed source, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Annotate an unknown feature with Duaer](https://skills.duaer.com/metabolic-dark-matter.md)
- [Find MoNA reference spectra with Duaer](https://skills.duaer.com/mona.md)
- [List mass candidates in Duaer](https://skills.duaer.com/mass-candidates.md)
- [Fetch a spectrum by USI in Duaer](https://skills.duaer.com/spectrum.md)
