> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/glygen.md

---
name: duaer-glygen
description: >-
  Duaer GlyGen. Look up glycans in GlyGen by GlyTouCan id.
  One successful search uses 1 Duaer credit.
---

# Duaer GlyGen

Look up glycans in GlyGen by GlyTouCan id. Data comes from GlyGen.

## When to use

- Look up a glycan by GlyTouCan id.
- Check glycan mass and composition.

## When not to use

- Small molecule metabolites. Use https://skills.duaer.com/metabolites.md.

## Call

`GET https://api.duaer.com/v1/data/glygen?id=G00054MO&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — GlyTouCan accession, such as G00054MO.
- `id` — Optional. GlyTouCan accession such as G00054MO.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/glygen?id=G00054MO&limit=10` — glycan G00054MO.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`GlyGen`), `title`, `url`, and `summary`, plus:

- `glytoucanAc` — text.
- `mass` — number.
- `iupac` — text.
- `monosaccharides` — number.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/reactions.md — Duaer reactions

## Related skills

- [Search metabolites in Duaer](https://skills.duaer.com/metabolites.md)
- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search reactions in Duaer](https://skills.duaer.com/reactions.md)
