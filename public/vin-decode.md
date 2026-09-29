> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/vin-decode.md

---
name: duaer-vin-decode
description: >-
  Duaer VIN decoder. US NHTSA vPIC: make, model, year, body, engine, fuel, and plant from a 17-character VIN.
  One successful search uses 1 Duaer credit.
---

# Duaer VIN decoder

Duaer VIN decoder decodes one vehicle identification number with NHTSA vPIC and returns one row of vehicle facts.

## When to use

- Fill in make, model, and year from a VIN on a form.
- Check the engine and fuel type of a used car.

## When not to use

- Safety recalls. Use https://skills.duaer.com/vehicle-recalls.md.
- Fuel prices. Use https://skills.duaer.com/eia-petroleum.md.

## Call

`GET https://api.duaer.com/v1/data/vin-decode?vin=1HGCM82633A004352`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `vin`.

- `vin` — 17-character vehicle identification number.

## Examples

- `GET https://api.duaer.com/v1/data/vin-decode?vin=1HGCM82633A004352` — a 2003 Honda Accord.
- `GET https://api.duaer.com/v1/data/vin-decode?vin=5YJ3E1EA7KF317000` — a Tesla Model 3.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `vin`, `make`, `model`, `modelYear`, `trim` — vehicle identity.
- `bodyClass`, `vehicleType`, `doors` — body.
- `fuel`, `engineCylinders`, `displacementL`, `engineHp`, `transmission` — drivetrain.
- `manufacturer`, `plantCountry`, `plantCity`, `decodeNote` — maker, plant, and any decode warning.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/vehicle-recalls.md — Duaer Vehicle recalls
- https://skills.duaer.com/eia-petroleum.md — Duaer EIA fuel spot prices

## Related skills

- [Vehicle recalls in Duaer](https://skills.duaer.com/vehicle-recalls.md)
- [EIA fuel spot prices in Duaer](https://skills.duaer.com/eia-petroleum.md)
