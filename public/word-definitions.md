> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/word-definitions.md

---
name: duaer-word-definitions
description: >-
  Duaer Word definitions. Wiktionary: definitions, parts of speech, and examples for a word in English, Chinese, and many other languages.
  One successful search uses 1 Duaer credit.
---

# Duaer Word definitions

Duaer Word definitions reads Wiktionary and returns one row per definition of a word, with the part of speech and an example sentence.

## When to use

- Define an unfamiliar English word in a reading app.
- Look up the meanings of a Chinese or French word.

## When not to use

- Synonyms, rhymes, or related words. Use https://skills.duaer.com/word-finder.md.
- Encyclopedia articles. Use https://skills.duaer.com/wikipedia.md.

## Call

`GET https://api.duaer.com/v1/data/word-definitions?word=serendipity`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `word`.

- `word` — A word or short phrase, such as serendipity. URL-encode non-Latin text.
- `language` — Optional. Language code such as `en`, `zh`, or `fr`, or `all`. Default `en`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/word-definitions?word=serendipity` — English definitions of serendipity.
- `GET https://api.duaer.com/v1/data/word-definitions?word=%E5%92%96%E5%95%A1&language=zh` — Chinese definitions of the word for coffee.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `word`, `language`, `languageCode` — the word and the language of the entry.
- `partOfSpeech`, `definition`, `example` — part of speech, the definition, and one example.

A word Wiktionary does not have finds nothing and uses 0 credits.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/word-finder.md — Duaer Word finder
- https://skills.duaer.com/wikipedia.md — Duaer Wikipedia

## Related skills

- [Word finder in Duaer](https://skills.duaer.com/word-finder.md)
- [Wikipedia in Duaer](https://skills.duaer.com/wikipedia.md)
