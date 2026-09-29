> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/f1-results.md

---
name: duaer-f1-results
description: >-
  Duaer Formula 1 results. Jolpica (Ergast): Formula 1 race results by season and round since 1950, the latest race by default.
  One successful search uses 1 Duaer credit.
---

# Duaer Formula 1 results

Duaer Formula 1 results returns the finishing order of a Formula 1 race: driver, team, grid, laps, time or status, and points. Leave the season as latest for the most recent race.

## When to use

- Get the podium of the latest Grand Prix.
- Look up the results of a historic race.

## When not to use

- Race coverage and background. Use https://skills.duaer.com/wikipedia.md.
- How much attention a race gets. Use https://skills.duaer.com/wiki-pageviews.md.

## Call

`GET https://api.duaer.com/v1/data/f1-results?season=latest`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `season`.

- `season` — Four-digit season from 1950, or `latest` for the last race.
- `round` — Optional. Round number in the season, 1 to 30. Default the last round.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/f1-results?season=latest` — the most recent race.
- `GET https://api.duaer.com/v1/data/f1-results?season=1988&round=1` — the 1988 Brazilian Grand Prix.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `season`, `round`, `race`, `date`, `circuit`, `country` — which race.
- `position`, `driver`, `driverCode`, `team` — finishing order.
- `grid`, `laps`, `status`, `time`, `points`, `fastestLap` — start position, laps, result, and points.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/wikipedia.md — Duaer Wikipedia
- https://skills.duaer.com/wiki-pageviews.md — Duaer Wikipedia pageviews

## Related skills

- [Wikipedia in Duaer](https://skills.duaer.com/wikipedia.md)
- [Wikipedia pageviews in Duaer](https://skills.duaer.com/wiki-pageviews.md)
