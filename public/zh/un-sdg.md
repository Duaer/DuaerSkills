> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/un-sdg.md

---
name: duaer-un-sdg
description: >-
  Duaer UN SDG indicators. UN Sustainable Development Goal statistics by series and country, such as poverty, health, energy, and education, by year.
  One successful search uses 1 Duaer credit.
---

# Duaer UN SDG indicators

Duaer UN SDG indicators reads the UN SDG Global Database. With a series code it returns values newest year first; with only `words` it lists matching series codes.

## When to use

- Compare poverty, electricity access, or school completion across countries.
- Find the SDG series code for a topic.

## When not to use

- Economic indicators. Use https://skills.duaer.com/world-bank.md.
- Health statistics by sex. Use https://skills.duaer.com/who-gho.md.

## Call

`GET https://api.duaer.com/v1/data/un-sdg?series=SI_POV_DAY1&area=India`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `series`, or `words` to find series codes.

- `series` — SDG series code, such as SI_POV_DAY1 (extreme poverty rate).
- `area` — Optional. Country or region name, or M49 code, such as India or 356.
- `words` — Optional. Find series codes by words, such as electricity, when no series is given.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

Common series: `SI_POV_DAY1` extreme poverty, `EG_ELC_ACCS` access to electricity, `SH_STA_MORT` maternal mortality, `SE_TOT_CPLR` completion rate, `EN_ATM_CO2` CO2 emissions.

## Examples

- `GET https://api.duaer.com/v1/data/un-sdg?series=SI_POV_DAY1&area=India` — extreme poverty rate in India.
- `GET https://api.duaer.com/v1/data/un-sdg?words=electricity` — find electricity series codes.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `series`, `seriesDescription`, `goal`, `indicator` — series code, name, and SDG numbering.
- `area`, `areaCode` — country or region and its M49 code.
- `year`, `value`, `units` — the figure.
- `breakdown`, `dataSource` — split such as sex or age, and origin.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators
- https://skills.duaer.com/who-gho.md — Duaer WHO health statistics

## 相关技能

- [在 Duaer 里查世界银行指标](https://skills.duaer.com/zh/world-bank.md)
- [在 Duaer 里查 WHO 卫生统计](https://skills.duaer.com/zh/who-gho.md)
