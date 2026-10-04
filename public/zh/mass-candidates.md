> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/mass-candidates.md

---
name: duaer-mass-candidates
description: >-
  Duaer mass candidates. List PubChem compounds that fit an observed m/z and adduct.
  One successful search uses 1 Duaer credit.
---

# Duaer mass candidates

List PubChem compounds that fit an observed m/z and adduct. Data comes from PubChem.

## When to use

- List PubChem compounds that fit an observed m/z and adduct.
- Shortlist candidates for an unannotated feature.

## When not to use

- Spectrum matching. Use https://skills.duaer.com/massbank.md.

## Call

`GET https://api.duaer.com/v1/data/mass-candidates?mz=181.0707&adduct=%5BM%2BH%5D%2B&ppm=5&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

- `mz` — observed m/z of the feature.
- `adduct` — Optional. `neutral`, `[M+H]+`, `[M+Na]+`, `[M+NH4]+`, `[M+K]+`, `[M+H-H2O]+`, `[M-H]-`, `[M+Cl]-`, or `[M+FA-H]-`. Default `[M+H]+`.
- `ppm` — Optional. Mass tolerance in ppm, up to 100. Default 5.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/mass-candidates?mz=181.0707&adduct=%5BM%2BH%5D%2B&ppm=5&limit=10` — candidates for m/z 181.0707 as [M+H]+.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, `summary`, `cid`, `formula`, `monoisotopicMass`, `neutralMass`, `ppmError`, `inchikey`, and `iupacName`.

`mz` is required.
Candidates come in PubChem relevance order. Check a candidate's reference spectra with https://skills.duaer.com/mona.md or https://skills.duaer.com/massbank.md (`inchikey`).
To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

Fields without a value are empty strings or left out.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [用 Duaer 注释未知特征（代谢暗物质）](https://skills.duaer.com/zh/metabolic-dark-matter.md)
- [在 Duaer 里查 MoNA 参考谱图](https://skills.duaer.com/zh/mona.md)
- [在 Duaer 里匹配 MassBank 谱图](https://skills.duaer.com/zh/massbank.md)
- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
