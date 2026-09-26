> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/mutalyzer.md

---
name: duaer-mutalyzer
description: >-
  Normalize an HGVS description with Mutalyzer through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer Mutalyzer

Normalize an HGVS description with Mutalyzer through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/mutalyzer?words=NM_007294.4:c.68_69del`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — HGVS description, such as NM_007294.4:c.68_69del.
- `id` — optional. HGVS description.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索变异](https://skills.duaer.com/zh/variants.md)
- [在 Duaer 里检索 ClinVar](https://skills.duaer.com/zh/clinvar.md)
- [在 Duaer 里检索 dbSNP](https://skills.duaer.com/zh/dbsnp.md)
