> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/mona.md

---
name: duaer-mona
description: >-
  Find reference MS/MS spectra in MoNA by InChIKey or compound name through Duaer.
  One successful search uses 1 Duaer credit.
---

# Duaer MoNA spectra

Find reference spectra for a compound in MassBank of North America (MoNA) through Duaer with a Duaer key.

## Call

`GET https://api.duaer.com/v1/data/mona?inchikey=WQZGKKKJIJFFOK-GASJEMHNSA-N&limit=5`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

Provide `inchikey` or `words`.

- `inchikey` — exact compound, such as a https://skills.duaer.com/mass-candidates.md result.
- `words` — compound name, used when `inchikey` is empty.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item has `source`, `title`, `url`, `summary`, `monaId`, `compound`, `formula`, `inchikey`, `msLevel`, `ionMode`, `precursorType`, `precursorMz`, `instrument`, `peakCount`, and `peaks` (`mz:intensity` pairs).
Compare `peaks` with your unknown spectrum, or pass them to https://skills.duaer.com/masst.md.
To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

## Credits

One successful search uses 1 credit, including a search that finds no match.
Empty input, a failed source, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Annotate an unknown feature with Duaer](https://skills.duaer.com/metabolic-dark-matter.md)
- [Match spectra in MassBank with Duaer](https://skills.duaer.com/massbank.md)
- [List mass candidates in Duaer](https://skills.duaer.com/mass-candidates.md)
