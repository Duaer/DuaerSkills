> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/europe-pmc-annotations.md

---
name: duaer-europe-pmc-annotations
description: >-
  Duaer Europe PMC Annotations. Fetch Europe PMC text-mined annotations for a PubMed or PMC article.
  One successful search uses 1 Duaer credit.
---

# Duaer Europe PMC Annotations

Fetch Europe PMC text-mined annotations for a PubMed or PMC article. Data comes from Europe PMC Annotations.

## When to use

- Get text-mined genes, diseases, and chemicals for one article.
- Extract entities from a PMID or PMCID.

## When not to use

- Search articles. Use https://skills.duaer.com/europe-pmc.md.

## Call

`GET https://api.duaer.com/v1/data/europe-pmc-annotations?words=23193287&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as 23193287.
- `id` — Optional. Id such as PMC3531190.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/europe-pmc-annotations?words=23193287&limit=10` — annotations for PMID 23193287.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Europe PMC Annotations`), `title`, `url`, and `summary`, plus:

- `articleId`, `annotationType`, `exact`, `tag` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search Europe PMC in Duaer](https://skills.duaer.com/europe-pmc.md)
- [Search PubMed in Duaer](https://skills.duaer.com/pubmed.md)
- [Search papers in Duaer](https://skills.duaer.com/papers.md)
