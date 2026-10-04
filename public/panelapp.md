> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/panelapp.md

---
name: duaer-panelapp
description: >-
  Duaer PanelApp. Search gene panels in Genomics England PanelApp.
  One successful search uses 1 Duaer credit.
---

# Duaer PanelApp

Search gene panels in Genomics England PanelApp. Data comes from PanelApp.

## When to use

- Find Genomics England gene panels.
- Check panels that include a gene.

## When not to use

- Genetic tests. Use https://skills.duaer.com/ncbi-gtr.md.

## Call

`GET https://api.duaer.com/v1/data/panelapp?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — gene symbol, such as BRCA1.
- `id` — Optional. Gene symbol such as BRCA1.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/panelapp?words=BRCA1&limit=10` — PanelApp panels for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`PanelApp`), `title`, `url`, and `summary`, plus:

- `geneSymbol`, `panelName`, `confidenceLevel` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search ClinVar in Duaer](https://skills.duaer.com/clinvar.md)
- [Search CIViC in Duaer](https://skills.duaer.com/civic.md)
