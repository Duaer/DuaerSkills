> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/galaxy.md

---
name: duaer-galaxy
description: >-
  Duaer Galaxy. Search Galaxy tools and version.
  One successful search uses 1 Duaer credit.
---

# Duaer Galaxy

Search Galaxy tools and version. Data comes from Galaxy.

## When to use

- Find Galaxy tools and their versions.
- Look up one tool id.

## When not to use

- nf-core pipelines. Use https://skills.duaer.com/nf-core.md.

## Call

`GET https://api.duaer.com/v1/data/galaxy?words=bowtie&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as bowtie.
- `id` — Optional. Id such as toolshed.g2.bx.psu.edu/repos/devteam/bowtie2/bowtie2/2.5.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/galaxy?words=bowtie&limit=10` — Galaxy tools matching bowtie.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Galaxy`), `title`, `url`, and `summary`, plus:

- `toolId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search bio.tools in Duaer](https://skills.duaer.com/bio-tools.md)
