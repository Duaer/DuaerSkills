> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/mass-candidates.md

---
name: duaer-mass-candidates
description: >-
  List PubChem compounds that fit an observed m/z and adduct through Duaer.
  One successful search uses 1 Duaer credit.
---

# Duaer mass candidates

Turn an observed m/z into candidate compounds from PubChem through Duaer with a Duaer key.

## Call

`GET https://api.duaer.com/v1/data/mass-candidates?mz=181.0707&adduct=%5BM%2BH%5D%2B&ppm=5&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

`mz` is required.

- `mz` — observed m/z of the feature.
- `adduct` — optional. `neutral`, `[M+H]+`, `[M+Na]+`, `[M+NH4]+`, `[M+K]+`, `[M+H-H2O]+`, `[M-H]-`, `[M+Cl]-`, or `[M+FA-H]-`. Default `[M+H]+`.
- `ppm` — optional. Mass tolerance in ppm, up to 100. Default 5.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item has `source`, `title`, `url`, `summary`, `cid`, `formula`, `monoisotopicMass`, `neutralMass`, `ppmError`, `inchikey`, and `iupacName`.
Candidates come in PubChem relevance order. Check a candidate's reference spectra with https://skills.duaer.com/mona.md or https://skills.duaer.com/massbank.md (`inchikey`).
To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

## Credits

One successful search uses 1 credit, including a search that finds no match.
Empty input, a failed source, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Annotate an unknown feature with Duaer](https://skills.duaer.com/metabolic-dark-matter.md)
- [Find MoNA reference spectra with Duaer](https://skills.duaer.com/mona.md)
- [Match spectra in MassBank with Duaer](https://skills.duaer.com/massbank.md)
- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
