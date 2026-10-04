> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/geo.md

---
name: duaer-geo
description: >-
  Duaer GEO. Search NCBI GEO series and datasets.
  One successful search uses 1 Duaer credit.
---

# Duaer GEO

Search NCBI GEO series and datasets. Data comes from GEO.

## When to use

- Find GEO series or datasets for a topic and organism.
- Locate public expression data for reanalysis.

## When not to use

- Curated bulk expression experiments. Use https://skills.duaer.com/expression-atlas.md.

## Call

`GET https://api.duaer.com/v1/data/geo?words=insulin&organism=Homo%20sapiens&entryType=gse&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

`words` is required.

- `words` — words in the GEO record, or an accession such as `GSE10072`.
- `organism` — Optional. Scientific name (`Homo sapiens`). Look up names with https://skills.duaer.com/organisms.md.
- `entryType` — Optional. `gse` (default), `gds`, `gpl`, `gsm`, or `any`.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/geo?words=insulin&organism=Homo%20sapiens&entryType=gse&limit=10` — human GEO series matching insulin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`GEO`), `title`, `url`, and `summary`, plus:

- `accession`, `uid`, `entryType`, `organism`, `datasetType` — text.
- `sampleCount` — number.
- `pubDate`, `pubmedId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search expression in Duaer](https://skills.duaer.com/expression.md)
- [Search organisms in Duaer](https://skills.duaer.com/organisms.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
