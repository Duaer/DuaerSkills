> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/who-gho.md

---
name: duaer-who-gho
description: >-
  Duaer WHO health statistics. Country health statistics from the WHO Global Health Observatory: life expectancy, mortality, disease burden, risk factors, and health systems, by year and sex.
  One successful search uses 1 Duaer credit.
---

# Duaer WHO health statistics

Duaer WHO health statistics reads the WHO GHO OData API. With an indicator code it returns values newest first, often split by sex; with only `words` it lists matching indicator codes.

## When to use

- Compare life expectancy, obesity, or tobacco use across countries.
- Add official WHO figures with confidence intervals to a health report.

## When not to use

- Economic indicators. Use https://skills.duaer.com/world-bank.md.
- Disease records and genetics. Use https://skills.duaer.com/diseases.md.

## Call

`GET https://api.duaer.com/v1/data/who-gho?indicator=WHOSIS_000001&country=CHN&limit=6`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `indicator`, or `words` to find indicator codes.

- `indicator` — GHO indicator code, such as WHOSIS_000001 (life expectancy at birth).
- `country` — Optional. Three-letter ISO code, such as CHN.
- `year` — Optional. Only this year.
- `words` — Optional. Find indicator codes by name, such as obesity, when no indicator is given.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

Common codes: `WHOSIS_000001` life expectancy at birth, `WHOSIS_000015` life expectancy at 60, `NCD_BMI_30A` adult obesity (%), `M_Est_smk_curr_std` tobacco use (%), `MDG_0000000001` infant mortality.

## Examples

- `GET https://api.duaer.com/v1/data/who-gho?indicator=WHOSIS_000001&country=CHN&limit=6` — life expectancy in China.
- `GET https://api.duaer.com/v1/data/who-gho?words=obesity` — find obesity indicator codes.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `indicator`, `indicatorName` — GHO code and name.
- `country`, `region` — ISO3 code and WHO region.
- `year`, `breakdown` — year and split such as female or both sexes.
- `value`, `low`, `high`, `display` — value, uncertainty range, and WHO display text.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators
- https://skills.duaer.com/diseases.md
- https://skills.duaer.com/air-quality.md — Duaer Air quality

## Related skills

- [World Bank indicators in Duaer](https://skills.duaer.com/world-bank.md)
- [Search diseases in Duaer](https://skills.duaer.com/diseases.md)
- [Air quality in Duaer](https://skills.duaer.com/air-quality.md)
