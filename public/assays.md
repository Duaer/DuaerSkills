> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/assays.md

---
name: duaer-assays
description: >-
  Search ChEMBL assays through Duaer by words or assay id. One successful search uses 1 Duaer credit.
---

# Duaer assays

Search ChEMBL assays through Duaer by words or assay id. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/assays?words=EGFR&organism=Homo%20sapiens&assayType=B&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- `words` is required.
- `words` — words in the assay description, or a ChEMBL assay id (`CHEMBL5344031`).
- `organism` — optional. Keep assays whose organism contains this text.
- `assayType` — optional. Letter code (`B`/`F`/`A`/…) or words from the type description.
- `limit` — optional. From 1 to 20. Default 10. Results prefer higher confidence.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search activities in Duaer](https://skills.duaer.com/activities.md)
- [Search targets in Duaer](https://skills.duaer.com/targets.md)
- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search patents in Duaer](https://skills.duaer.com/patents.md)
