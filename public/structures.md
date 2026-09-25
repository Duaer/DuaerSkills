> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/structures.md

---
name: duaer-structures
description: >-
  Search protein structures through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer structures

Search protein structures through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/structures?q=insulin&organism=Homo%20sapiens&method=X-RAY%20DIFFRACTION&resolutionTo=2.5&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- At least one search field is required. Fields combine.
- `q` — words in the structure record.
- `pdbId` — structure id, such as `4HHB`.
- `organism` — scientific name. Look up formal names with https://skills.duaer.com/organisms.md.
- `method` — experimental method, such as `X-RAY DIFFRACTION`, `SOLUTION NMR`, or `ELECTRON MICROSCOPY`.
- `resolutionFrom`, `resolutionTo` — resolution in angstroms. `0` means no bound.
- `releasedFrom`, `releasedTo` — release date as `YYYY-MM-DD`.
- `polymer` — `protein`, `dna`, or `rna`.
- `ligand` — bound chemical name.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
