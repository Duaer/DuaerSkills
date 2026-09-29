> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/masst.md

---
name: duaer-masst
description: >-
  Find where an MS/MS spectrum appears in public metabolomics data with GNPS2 MASST through Duaer.
  One successful search uses 1 Duaer credit.
---

# Duaer MASST

Search an MS/MS spectrum across public metabolomics datasets or the GNPS library with GNPS2 fast MASST through Duaer with a Duaer key.
The call waits up to 45 seconds for the search to finish.

## Call

`GET https://api.duaer.com/v1/data/masst?usi=mzspec:GNPS:GNPS-LIBRARY:accession:CCMSLIB00005435737&library=public&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

Provide `usi`, or `peaks` with `precursorMz`.

- `usi` — spectrum to search, such as a https://skills.duaer.com/spectrum.md result.
- `peaks` — MS/MS peaks as `mz:intensity` pairs separated by spaces, used when `usi` is empty.
- `precursorMz` — precursor m/z, required with `peaks`.
- `charge` — optional. Precursor charge. Default 1.
- `library` — optional. `public` (public datasets, default), `gnpsData` (GNPS and MassIVE data), or `gnpsLibrary` (GNPS reference library).
- `cosine` — optional. Minimum cosine similarity from 0 to 1. Default 0.7.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item has `source`, `title`, `url` (spectrum viewer), `summary`, `usi`, `dataset`, `libraryAccession` (GNPS library matches), `cosine`, `matchingPeaks`, and `deltaMass`.
Datasets tell you in which studies, samples, or organisms the unknown spectrum was seen.
A search that does not finish in 45 seconds returns 503 and uses 0 credits.
To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

## Credits

One successful search uses 1 credit, including a search that finds no match.
Empty input, a failed source, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [用 Duaer 注释未知特征（代谢暗物质）](https://skills.duaer.com/zh/metabolic-dark-matter.md)
- [在 Duaer 里按 USI 取谱](https://skills.duaer.com/zh/spectrum.md)
- [在 Duaer 里匹配 MassBank 谱图](https://skills.duaer.com/zh/massbank.md)
