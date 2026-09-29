> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/weather-alerts.md

---
name: duaer-weather-alerts
description: >-
  Duaer US weather alerts. Active US National Weather Service warnings, watches, and advisories by state or point, with severity, area, and expiry.
  One successful search uses 1 Duaer credit.
---

# Duaer US weather alerts

Duaer US weather alerts lists the warnings, watches, and advisories the US National Weather Service has in force right now. It covers US states and territories only.

## When to use

- Check for active flood, heat, or storm warnings in a state.
- Warn a user at a US location about severe weather.

## When not to use

- Forecasts. Use https://skills.duaer.com/weather.md.
- Events outside the US. Use https://skills.duaer.com/natural-events.md.

## Call

`GET https://api.duaer.com/v1/data/weather-alerts?state=CA&severity=Severe`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `state`, or `latitude` and `longitude`.

- `state` — Two-letter US state or territory code, such as CA.
- `latitude`, `longitude` — Optional. A US point instead of a state.
- `severity` — Optional. Extreme, Severe, Moderate, Minor, or Unknown.
- `words` — Optional. Keep alerts whose event, headline, or area contains these words, such as flood.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/weather-alerts?state=CA&severity=Severe` — severe alerts in California.
- `GET https://api.duaer.com/v1/data/weather-alerts?latitude=29.76&longitude=-95.37&words=flood` — flood alerts for Houston.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `alertId`, `event` — NWS id and event type, such as Flood Advisory.
- `severity`, `certainty`, `urgency` — NWS scales.
- `area`, `sender` — affected areas and issuing office.
- `effective`, `expires` — validity window.
- `description`, `instruction` — alert text and what to do.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather.md — Duaer Weather forecast
- https://skills.duaer.com/natural-events.md — Duaer Natural events

## Related skills

- [Weather forecast in Duaer](https://skills.duaer.com/weather.md)
- [Natural events in Duaer](https://skills.duaer.com/natural-events.md)
