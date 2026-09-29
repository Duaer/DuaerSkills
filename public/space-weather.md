> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/space-weather.md

---
name: duaer-space-weather
description: >-
  Duaer Space weather alerts. Alerts, watches, and warnings from the NOAA Space Weather Prediction Center: geomagnetic storms, solar radiation, and radio blackouts.
  One successful search uses 1 Duaer credit.
---

# Duaer Space weather alerts

Duaer Space weather alerts lists the messages NOAA SWPC issued recently, newest first, with the headline and full text.

## When to use

- Check for geomagnetic storm warnings before an aurora trip.
- Monitor radiation or radio blackout alerts for operations.

## When not to use

- The Kp index values. Use https://skills.duaer.com/kp-index.md.
- Weather on Earth. Use https://skills.duaer.com/weather.md.

## Call

`GET https://api.duaer.com/v1/data/space-weather?days=3`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `days` or `words`.

- `days` — Optional. Alerts issued in the last N days, 1 to 30. Default 3.
- `words` — Optional. Words in the alert, such as geomagnetic or radio blackout.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/space-weather?days=3` — alerts from the last three days.
- `GET https://api.duaer.com/v1/data/space-weather?days=7&words=geomagnetic` — geomagnetic messages this week.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `messageCode`, `productId` — SWPC message code, such as WARK05.
- `headline`, `message` — first alert line and full text.
- `issuedUtc` — issue time.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/kp-index.md — Duaer Planetary Kp index
- https://skills.duaer.com/close-approaches.md — Duaer Asteroid close approaches

## Related skills

- [Planetary Kp index in Duaer](https://skills.duaer.com/kp-index.md)
- [Asteroid close approaches in Duaer](https://skills.duaer.com/close-approaches.md)
