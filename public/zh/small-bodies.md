> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/small-bodies.md

---
name: duaer-small-bodies
description: >-
  Duaer Asteroids and comets (JPL). One asteroid or comet from the NASA JPL Small-Body Database: orbit, size, rotation, albedo, and near-Earth and hazard flags.
  One successful search uses 1 Duaer credit.
---

# Duaer Asteroids and comets (JPL)

Duaer Asteroids and comets (JPL) looks up one small body by name, number, or designation. When a name matches several objects, it lists them so you can pick one.

## When to use

- Get the size and orbit of an asteroid such as Apophis.
- Check whether an object is near-Earth or potentially hazardous.

## When not to use

- Upcoming close approaches. Use https://skills.duaer.com/close-approaches.md.
- Planets around other stars. Use https://skills.duaer.com/exoplanets.md.

## Call

`GET https://api.duaer.com/v1/data/small-bodies?object=Apophis`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `object`.

- `object` — Name, number, or designation, such as Eros, 433, Apophis, or 1P.

## Examples

- `GET https://api.duaer.com/v1/data/small-bodies?object=Apophis` — asteroid Apophis.
- `GET https://api.duaer.com/v1/data/small-bodies?object=1P` — comet Halley.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `designation`, `fullName`, `kind`, `orbitClass` — identity and orbit class.
- `nearEarthObject`, `potentiallyHazardous`, `earthMoidAu` — Earth risk flags and minimum orbit distance.
- `diameterKm`, `albedo`, `rotationHours`, `absoluteMagnitude`, `spectralType` — physical data, when measured.
- `semiMajorAxisAu`, `eccentricity`, `inclinationDeg`, `perihelionAu`, `aphelionAu`, `orbitalPeriodDays` — orbit.

Several matches return one row each with `designation` only; call again with that designation.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/close-approaches.md — Duaer Asteroid close approaches
- https://skills.duaer.com/exoplanets.md — Duaer Exoplanets

## 相关技能

- [在 Duaer 里查小行星近地掠过](https://skills.duaer.com/zh/close-approaches.md)
- [在 Duaer 里查系外行星](https://skills.duaer.com/zh/exoplanets.md)
