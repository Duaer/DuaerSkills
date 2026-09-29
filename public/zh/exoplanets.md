> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/exoplanets.md

---
name: duaer-exoplanets
description: >-
  Duaer Exoplanets. Confirmed exoplanets from the NASA Exoplanet Archive by planet or star name, discovery method, or year, with size, mass, orbit, and distance.
  One successful search uses 1 Duaer credit.
---

# Duaer Exoplanets

Duaer Exoplanets searches the NASA Exoplanet Archive composite table of confirmed planets, newest discoveries first.

## When to use

- List planets in a system such as TRAPPIST-1.
- Find planets found by direct imaging since 2024.

## When not to use

- Asteroids and comets. Use https://skills.duaer.com/small-bodies.md.
- Papers about a planet. Use https://skills.duaer.com/inspire-hep.md.

## Call

`GET https://api.duaer.com/v1/data/exoplanets?words=TRAPPIST`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`, `method`, or `since`.

- `words` — Part of a planet or host star name, such as TRAPPIST or Kepler-452.
- `method` — Optional. Transit, Radial Velocity, Microlensing, Imaging, Astrometry, and other archive methods.
- `since` — Optional. Discovered in or after this year, such as 2024.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/exoplanets?words=TRAPPIST` — the TRAPPIST-1 planets.
- `GET https://api.duaer.com/v1/data/exoplanets?method=Imaging&since=2024` — recent directly imaged planets.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `planet`, `hostStar` — names.
- `discoveryYear`, `discoveryMethod`, `discoveryFacility` — discovery.
- `radiusEarth`, `massEarth`, `orbitalPeriodDays`, `equilibriumTempK` — planet properties.
- `distanceParsec` — distance to the system.

The archive can take several seconds to answer.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/small-bodies.md — Duaer Asteroids and comets (JPL)
- https://skills.duaer.com/kp-index.md — Duaer Planetary Kp index

## 相关技能

- [在 Duaer 里查小行星与彗星（JPL）](https://skills.duaer.com/zh/small-bodies.md)
- [在 Duaer 里查全球地磁 Kp 指数](https://skills.duaer.com/zh/kp-index.md)
