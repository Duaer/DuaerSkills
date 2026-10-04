> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/massbank.md

---
name: duaer-massbank
description: >-
  Duaer MassBank spectra. Match MS/MS peaks, an exact mass, or an InChIKey against MassBank spectra.
  One successful search uses 1 Duaer credit.
---

# Duaer MassBank spectra

Match MS/MS peaks, an exact mass, or an InChIKey against MassBank spectra. Data comes from MassBank.

## When to use

- Match an MS/MS spectrum against MassBank reference spectra.
- Find reference spectra by exact mass or InChIKey.

## When not to use

- MoNA reference spectra. Use https://skills.duaer.com/mona.md.

## Call

`GET https://api.duaer.com/v1/data/massbank?peaks=59.0138:715%2089.0251:999&ionMode=NEGATIVE&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `peaks`, `mass`, or `inchikey` (used in that order).

- `peaks` — MS/MS peaks as `mz:intensity` pairs separated by spaces. One `mz intensity` pair per line also works.
- `threshold` — Optional. Minimum cosine similarity for `peaks`, from 0 to 1. Default 0.7.
- `mass` — neutral monoisotopic mass, such as 180.0634.
- `tolerance` — Optional. Mass tolerance in Da for `mass`. Default 0.01.
- `inchikey` — reference records for one compound, such as a https://skills.duaer.com/mass-candidates.md result.
- `ionMode` — Optional. `POSITIVE` or `NEGATIVE`.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/massbank?peaks=59.0138:715%2089.0251:999&ionMode=NEGATIVE&limit=10` — negative mode match for two peaks.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, `summary`, `accession`, `compound`, `formula`, `mass`, `inchikey`, `ionMode`, `instrument`, and `score` (cosine, peak searches only).

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
- https://skills.duaer.com/mona.md — Duaer MoNA spectra
- https://skills.duaer.com/mass-candidates.md — Duaer mass candidates
- https://skills.duaer.com/spectrum.md — Duaer spectrum by USI

## 相关技能

- [用 Duaer 注释未知特征（代谢暗物质）](https://skills.duaer.com/zh/metabolic-dark-matter.md)
- [在 Duaer 里查 MoNA 参考谱图](https://skills.duaer.com/zh/mona.md)
- [在 Duaer 里列出质量候选物](https://skills.duaer.com/zh/mass-candidates.md)
- [在 Duaer 里按 USI 取谱](https://skills.duaer.com/zh/spectrum.md)
