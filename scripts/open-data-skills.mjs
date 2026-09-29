/** Duaer open data call skills. Same text as Copy skill in the Duaer data market. */

export const OPEN_DATA_SKILLS = {
	'weather': `---
name: duaer-weather
description: >-
  Duaer Weather forecast. Daily forecast for any city or coordinates, up to 16 days: conditions, high and low, rain amount and chance, and peak wind, from Open-Meteo.
  One successful search uses 1 Duaer credit.
---

# Duaer Weather forecast

Duaer Weather forecast returns one row per day for a place, using the Open-Meteo forecast models. Duaer geocodes a place name for you, so an agent can ask for "Shanghai" without looking up coordinates.

## When to use

- Plan field work, events, logistics, or travel around rain, heat, or wind in the next two weeks.
- Add a weather column to a daily digest or an alert that runs in a Duaer Organization.

## When not to use

- Past weather or climate over months and years. Use https://skills.duaer.com/weather-history.md.
- Air pollution. Use https://skills.duaer.com/air-quality.md. Waves at sea: https://skills.duaer.com/marine.md.

## Call

\`GET https://api.duaer.com/v1/data/weather?place=Shanghai&days=3\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`place\`, or \`latitude\` and \`longitude\`.

- \`place\` — City or place name. Leave empty when you enter latitude and longitude.
- \`latitude\` — Optional. Decimal degrees from -90 to 90. Use with longitude instead of a place.
- \`longitude\` — Optional. Decimal degrees from -180 to 180.
- \`days\` — Optional. Forecast days from 1 to 16. Default 7.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/weather?place=Shanghai&days=3\` — three days for Shanghai.
- \`GET https://api.duaer.com/v1/data/weather?latitude=51.5&longitude=-0.12&days=7\` — one week at exact coordinates.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`place\` — resolved place name, region, and country.
- \`latitude\`, \`longitude\` — point the forecast is for.
- \`timezone\` — local time zone of the dates.
- \`date\` — local day, YYYY-MM-DD.
- \`weather\`, \`weatherCode\` — condition text and WMO weather code.
- \`temperatureMax\`, \`temperatureMin\` — daily high and low in °C.
- \`precipitationMm\`, \`precipitationChance\` — rain or snow water in mm, and the highest hourly chance in %.
- \`windSpeedMaxKmh\` — strongest 10 m wind in km/h.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather-history.md — Duaer Weather history
- https://skills.duaer.com/air-quality.md — Duaer Air quality
- https://skills.duaer.com/marine.md — Duaer Marine forecast
`,
	'weather-history': `---
name: duaer-weather-history
description: >-
  Duaer Weather history. Past weather back to 1940 for any place: daily or monthly mean, high, low, and rainfall from the Open-Meteo reanalysis archive.
  One successful search uses 1 Duaer credit.
---

# Duaer Weather history

Duaer Weather history returns past daily or monthly weather for a place from the Open-Meteo historical archive (ERA5 reanalysis). Use \`step=month\` to fold a year or more into twelve readable rows.

## When to use

- Compare a season or a month with past years, or explain a sales or yield change by weather.
- Build a monthly climate table for a site before a visit, a harvest, or a construction plan.

## When not to use

- The next days. Use https://skills.duaer.com/weather.md.
- Recent days: the archive lags about five days behind today.

## Call

\`GET https://api.duaer.com/v1/data/weather-history?place=Beijing&from=2024-01-01&to=2024-12-31&step=month\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`place\`, or \`latitude\` and \`longitude\`, plus \`from\` and \`to\`.

- \`place\` — City or place name. Leave empty when you enter latitude and longitude.
- \`latitude\` — Optional. Decimal degrees from -90 to 90. Use with longitude instead of a place.
- \`longitude\` — Optional. Decimal degrees from -180 to 180.
- \`from\` — First day, YYYY-MM-DD. The archive starts in 1940.
- \`to\` — Last day, YYYY-MM-DD. Recent days appear after about five days.
- \`step\` — Optional. day or month. Month sums rain and averages temperature. Default day.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/weather-history?place=Beijing&from=2024-01-01&to=2024-12-31&step=month\` — monthly climate for 2024.
- \`GET https://api.duaer.com/v1/data/weather-history?latitude=40.7&longitude=-74&from=2012-10-27&to=2012-10-31\` — daily rows around a storm.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`place\`, \`latitude\`, \`longitude\` — where the rows are for.
- \`period\` — YYYY-MM-DD for daily rows or YYYY-MM for monthly rows.
- \`step\` — day or month.
- \`days\` — days folded into the row.
- \`temperatureMean\`, \`temperatureMax\`, \`temperatureMin\` — °C. Monthly rows average the means and keep the extreme high and low.
- \`precipitationMm\` — total rain or snow water in mm.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather.md — Duaer Weather forecast
- https://skills.duaer.com/river-flow.md — Duaer River flow
`,
	'air-quality': `---
name: duaer-air-quality
description: >-
  Duaer Air quality. Daily air quality for a place, forecast and recent past: US AQI peak, PM2.5 and PM10 averages, ozone, and NO₂ from the Open-Meteo CAMS models.
  One successful search uses 1 Duaer credit.
---

# Duaer Air quality

Duaer Air quality folds hourly Open-Meteo air-quality model values into one row per local day, so an agent sees the daily PM2.5 mean and the worst US AQI hour at a glance.

## When to use

- Warn staff or customers about a bad air day, or schedule outdoor work on cleaner days.
- Add pollution context to a health, retail, or travel report.

## When not to use

- Official station readings for regulatory use. These are model estimates on a grid of about 10 to 40 km.
- Temperature and rain. Use https://skills.duaer.com/weather.md.

## Call

\`GET https://api.duaer.com/v1/data/air-quality?place=Delhi&days=3\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`place\`, or \`latitude\` and \`longitude\`.

- \`place\` — City or place name. Leave empty when you enter latitude and longitude.
- \`latitude\` — Optional. Decimal degrees from -90 to 90. Use with longitude instead of a place.
- \`longitude\` — Optional. Decimal degrees from -180 to 180.
- \`days\` — Optional. Forecast days from 1 to 7. Default 5.
- \`pastDays\` — Optional. Also return up to 92 past days. Default 0.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/air-quality?place=Delhi&days=3\` — next three days in Delhi.
- \`GET https://api.duaer.com/v1/data/air-quality?place=Beijing&days=1&pastDays=7\` — the last week and today.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`place\`, \`latitude\`, \`longitude\` — where the rows are for.
- \`date\` — local day.
- \`usAqiMax\` — highest hourly US AQI that day.
- \`pm25Mean\`, \`pm25Max\` — PM2.5 daily mean and peak in µg/m³.
- \`pm10Mean\` — PM10 daily mean in µg/m³.
- \`ozoneMax\`, \`no2Mean\` — ozone peak and NO₂ mean in µg/m³.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather.md — Duaer Weather forecast
- https://skills.duaer.com/who-gho.md — Duaer WHO health statistics
`,
	'marine': `---
name: duaer-marine
description: >-
  Duaer Marine forecast. Daily wave height, swell height, wave period, and direction for a coast or a point at sea, up to eight days, from Open-Meteo marine models.
  One successful search uses 1 Duaer credit.
---

# Duaer Marine forecast

Duaer Marine forecast returns daily wave conditions from the Open-Meteo marine models. Inland points have no waves, so the search returns no rows and uses no credit.

## When to use

- Plan boat trips, port work, offshore maintenance, or surf and beach events.
- Add sea-state context to a shipping or tourism report.

## When not to use

- Navigation safety decisions. Check official marine warnings too.
- Rivers and floods. Use https://skills.duaer.com/river-flow.md.

## Call

\`GET https://api.duaer.com/v1/data/marine?place=Honolulu&days=5\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`place\`, or \`latitude\` and \`longitude\`, at a coast or at sea.

- \`place\` — City or place name. Leave empty when you enter latitude and longitude.
- \`latitude\` — Optional. Decimal degrees from -90 to 90. Use with longitude instead of a place.
- \`longitude\` — Optional. Decimal degrees from -180 to 180.
- \`days\` — Optional. Forecast days from 1 to 8. Default 7.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/marine?place=Honolulu&days=5\` — five days off Honolulu.
- \`GET https://api.duaer.com/v1/data/marine?latitude=22.2&longitude=114.3\` — a point off Hong Kong.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`place\`, \`latitude\`, \`longitude\` — where the rows are for.
- \`date\` — local day.
- \`waveHeightMaxM\` — highest significant wave height in m.
- \`swellHeightMaxM\` — highest swell wave height in m.
- \`wavePeriodMaxS\` — longest wave period in s.
- \`waveDirectionDeg\` — dominant direction the waves come from, degrees.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather.md — Duaer Weather forecast
- https://skills.duaer.com/river-flow.md — Duaer River flow
`,
	'river-flow': `---
name: duaer-river-flow
description: >-
  Duaer River flow. Daily river discharge in m³/s near a point, forecast up to three months plus recent past, from the GloFAS flood model via Open-Meteo.
  One successful search uses 1 Duaer credit.
---

# Duaer River flow

Duaer River flow returns daily discharge of the river nearest to a point from the Global Flood Awareness System (GloFAS), served by Open-Meteo. Rising values over a few days signal flood risk.

## When to use

- Watch flood or drought risk for a plant, a warehouse, a farm, or a supply route on a river.
- Compare this week with the recent past to see if a river is rising.

## When not to use

- Small streams: the model grid is about 5 km, so it follows large rivers.
- Rain totals. Use https://skills.duaer.com/weather.md or https://skills.duaer.com/weather-history.md.

## Call

\`GET https://api.duaer.com/v1/data/river-flow?place=Wuhan&days=14\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`place\`, or \`latitude\` and \`longitude\`, on or near a river.

- \`place\` — City or place name. Leave empty when you enter latitude and longitude.
- \`latitude\` — Optional. Decimal degrees from -90 to 90. Use with longitude instead of a place.
- \`longitude\` — Optional. Decimal degrees from -180 to 180.
- \`days\` — Optional. Forecast days from 1 to 92. Default 14.
- \`pastDays\` — Optional. Also return up to 92 past days. Default 0.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/river-flow?place=Wuhan&days=14\` — the Yangtze at Wuhan for two weeks.
- \`GET https://api.duaer.com/v1/data/river-flow?latitude=47.5&longitude=19.05&days=7&pastDays=14\` — the Danube at Budapest, two weeks back and one ahead.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`place\`, \`latitude\`, \`longitude\` — where the rows are for.
- \`date\` — day.
- \`dischargeM3s\` — river discharge in cubic meters per second.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather-history.md — Duaer Weather history
- https://skills.duaer.com/natural-events.md — Duaer Natural events
`,
	'earthquakes': `---
name: duaer-earthquakes
description: >-
  Duaer Earthquakes. Earthquakes worldwide from the USGS catalog, filtered by magnitude, dates, and a circle around a place: magnitude, depth, time, location, and tsunami flag.
  One successful search uses 1 Duaer credit.
---

# Duaer Earthquakes

Duaer Earthquakes searches the USGS earthquake catalog, newest first. Without dates it covers the last 30 days. Add a place to search a circle around it.

## When to use

- Check recent quakes near a factory, a supplier, or an office.
- List strong quakes in a region and period for a risk report.

## When not to use

- Real-time alerting within minutes. The catalog updates within minutes to hours.
- Other hazards such as fires and storms. Use https://skills.duaer.com/natural-events.md.

## Call

\`GET https://api.duaer.com/v1/data/earthquakes?minMagnitude=6&from=2024-01-01&to=2024-12-31\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide at least one of \`minMagnitude\`, \`from\`, \`to\`, \`place\`, or \`latitude\` with \`longitude\`.

- \`minMagnitude\` — Optional. From 0 to 10, such as 5.
- \`from\` — Optional. First day, YYYY-MM-DD. Default: last 30 days.
- \`to\` — Optional. Last day, YYYY-MM-DD.
- \`place\` — Optional. Center of a search circle, such as Tokyo.
- \`latitude\` — Optional. Circle center latitude instead of a place.
- \`longitude\` — Optional. Circle center longitude.
- \`radiusKm\` — Optional. Circle radius from 1 to 20000 km. Default 500 when a center is set.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/earthquakes?minMagnitude=6&from=2024-01-01&to=2024-12-31\` — magnitude 6 and above in 2024.
- \`GET https://api.duaer.com/v1/data/earthquakes?place=Tokyo&radiusKm=300&minMagnitude=4\` — recent quakes within 300 km of Tokyo.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`eventId\` — USGS event id.
- \`magnitude\`, \`magnitudeType\` — magnitude and its scale (mww, mb, ml, …).
- \`place\` — USGS location text.
- \`time\` — UTC time, ISO 8601.
- \`latitude\`, \`longitude\`, \`depthKm\` — epicenter and depth.
- \`tsunami\` — true when USGS set the tsunami flag.
- \`felt\`, \`alert\` — "Did you feel it?" report count and PAGER alert level, when present.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/natural-events.md — Duaer Natural events
- https://skills.duaer.com/weather.md — Duaer Weather forecast
`,
	'natural-events': `---
name: duaer-natural-events
description: >-
  Duaer Natural events. Wildfires, severe storms, volcanoes, floods, sea ice, and other natural events tracked by NASA EONET, with latest position, size, and source link.
  One successful search uses 1 Duaer credit.
---

# Duaer Natural events

Duaer Natural events lists events from NASA EONET (Earth Observatory Natural Event Tracker). Each row carries the latest known position and size, and a link to the agency that reports it.

## When to use

- See which wildfires or storms are active now, for supply-chain or travel risk.
- Count events of one kind in a period for a report.

## When not to use

- Earthquakes with magnitude filters. Use https://skills.duaer.com/earthquakes.md.
- Official evacuation or warning decisions. Follow local authorities.

## Call

\`GET https://api.duaer.com/v1/data/natural-events?category=wildfires&days=30\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide at least one of \`category\`, \`status\`, or \`days\`.

- \`category\` — Optional. One of drought, dustHaze, earthquakes, floods, landslides, manmade, seaLakeIce, severeStorms, snow, tempExtremes, volcanoes, waterColor, wildfires.
- \`status\` — Optional. open, closed, or all. Default open.
- \`days\` — Optional. Only events active in the last 1 to 3650 days.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/natural-events?category=wildfires&days=30\` — wildfires active in the last 30 days.
- \`GET https://api.duaer.com/v1/data/natural-events?category=volcanoes&status=all&days=365\` — volcanic events in the past year.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`eventId\` — EONET id.
- \`category\` — event category.
- \`date\` — time of the latest position.
- \`latitude\`, \`longitude\` — latest point, when the event is a point.
- \`magnitude\` — size with unit, such as 828 acres or 65 kts.
- \`closed\` — close date, empty when still open.
- \`sourceIds\` — reporting sources, such as InciWeb or JTWC.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/earthquakes.md — Duaer Earthquakes
- https://skills.duaer.com/weather.md — Duaer Weather forecast
`,
	'world-bank': `---
name: duaer-world-bank
description: >-
  Duaer World Bank indicators. Yearly development data for any country from the World Bank: GDP, population, inflation, trade, health, education, and 1,000+ other indicators by code.
  One successful search uses 1 Duaer credit.
---

# Duaer World Bank indicators

Duaer World Bank indicators reads the World Bank Indicators API. Without years, Duaer returns the most recent non-empty values; with \`from\` or \`to\` it returns that span.

## When to use

- Compare countries on GDP, population, or other macro indicators in a market-entry memo.
- Pull a time series for a chart or a model input.

## When not to use

- Forecasts of next years. Use https://skills.duaer.com/imf.md (World Economic Outlook).
- Health statistics by sex or age. Use https://skills.duaer.com/who-gho.md.

## Call

\`GET https://api.duaer.com/v1/data/world-bank?country=CN,US,IN&indicator=NY.GDP.MKTP.CD&limit=6\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`country\` and \`indicator\`.

- \`country\` — ISO code, or several joined by commas, such as CN,US. Use WLD for the world.
- \`indicator\` — World Bank indicator code, such as NY.GDP.MKTP.CD (GDP in current US$).
- \`from\` — Optional. First year, such as 2010.
- \`to\` — Optional. Last year.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

Common codes: \`NY.GDP.MKTP.CD\` GDP (current US$), \`NY.GDP.PCAP.CD\` GDP per person, \`SP.POP.TOTL\` population, \`FP.CPI.TOTL.ZG\` inflation (%), \`SL.UEM.TOTL.ZS\` unemployment (%), \`NE.EXP.GNFS.ZS\` exports (% of GDP), \`SP.DYN.LE00.IN\` life expectancy.

## Examples

- \`GET https://api.duaer.com/v1/data/world-bank?country=CN,US,IN&indicator=NY.GDP.MKTP.CD&limit=6\` — latest GDP of three countries.
- \`GET https://api.duaer.com/v1/data/world-bank?country=WLD&indicator=SP.POP.TOTL&from=2000&to=2024&limit=20\` — world population since 2000.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`country\`, \`countryCode\` — country name and ISO3 code.
- \`indicator\`, \`indicatorName\` — indicator code and name.
- \`year\` — data year.
- \`value\` — numeric value in the unit of the indicator.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/imf.md — Duaer IMF indicators
- https://skills.duaer.com/trade.md — Duaer International trade
- https://skills.duaer.com/who-gho.md — Duaer WHO health statistics
`,
	'imf': `---
name: duaer-imf
description: >-
  Duaer IMF indicators. IMF World Economic Outlook figures by country, including forecasts: GDP growth, inflation, unemployment, debt, and current account. Also finds indicator codes by words.
  One successful search uses 1 Duaer credit.
---

# Duaer IMF indicators

Duaer IMF indicators reads the IMF DataMapper. With an indicator and countries it returns yearly values, newest first, up to the current year unless you set \`to\` later to include projections. With only \`words\` it lists matching indicator codes.

## When to use

- Get growth or inflation forecasts for a country plan or a budget.
- Find the right IMF code first with \`words\`, then fetch values.

## When not to use

- Long historical series with many indicators. Use https://skills.duaer.com/world-bank.md.
- Monthly or quarterly data. The DataMapper is yearly.

## Call

\`GET https://api.duaer.com/v1/data/imf?indicator=NGDP_RPCH&country=CHN,USA&from=2020&to=2027\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`indicator\` with \`country\`, or \`words\` to find indicator codes.

- \`indicator\` — IMF indicator code, such as NGDP_RPCH (real GDP growth, %).
- \`country\` — Three-letter ISO code, or several joined by commas, such as CHN,USA.
- \`words\` — Optional. Find indicator codes by words, such as inflation, when no indicator is given.
- \`from\` — Optional. First year.
- \`to\` — Optional. Last year. Later years may be IMF projections.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

Common codes: \`NGDP_RPCH\` real GDP growth (%), \`PCPIPCH\` inflation (%), \`LUR\` unemployment (%), \`GGXWDG_NGDP\` government debt (% of GDP), \`BCA_NGDPD\` current account (% of GDP), \`NGDPDPC\` GDP per person (US$).

## Examples

- \`GET https://api.duaer.com/v1/data/imf?indicator=NGDP_RPCH&country=CHN,USA&from=2020&to=2027\` — real GDP growth with forecasts.
- \`GET https://api.duaer.com/v1/data/imf?words=inflation\` — find inflation indicator codes.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`country\` — ISO3 code (value rows).
- \`indicator\`, \`indicatorName\`, \`unit\` — IMF code, label, and unit.
- \`year\`, \`value\` — year and value (value rows).
- \`dataset\` — dataset name (indicator rows).

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators
- https://skills.duaer.com/exchange-rates.md — Duaer Exchange rates
`,
	'sec-filings': `---
name: duaer-sec-filings
description: >-
  Duaer SEC filings. Latest SEC EDGAR filings of a US-listed company by ticker, name, or CIK: 10-K, 10-Q, 8-K, insider Form 4, and more, with direct document links.
  One successful search uses 1 Duaer credit.
---

# Duaer SEC filings

Duaer SEC filings resolves a ticker or company name to its SEC CIK, then lists the newest filings from EDGAR with a link to each primary document.

## When to use

- Get the latest annual or quarterly report of a company for an analyst brief.
- Watch 8-K events or insider trades (Form 4) of a company.

## When not to use

- Finding filings that mention a topic across companies. Use https://skills.duaer.com/sec-search.md.
- Non-US company registers. Use https://skills.duaer.com/lei.md.

## Call

\`GET https://api.duaer.com/v1/data/sec-filings?company=AAPL&form=10-K&limit=5\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`company\`.

- \`company\` — Ticker, company name, or CIK number, such as AAPL.
- \`form\` — Optional. Form type such as 10-K, 10-Q, 8-K, or 4. Amendments are included.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/sec-filings?company=AAPL&form=10-K&limit=5\` — the last five Apple annual reports.
- \`GET https://api.duaer.com/v1/data/sec-filings?company=Tesla&form=8-K\` — recent Tesla 8-K events.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`company\`, \`cik\`, \`tickers\` — company, SEC CIK, and tickers.
- \`form\` — form type; \`/A\` marks an amendment.
- \`filingDate\`, \`reportDate\` — filed date and period end.
- \`accessionNumber\` — EDGAR accession number.
- \`description\` — primary document description.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/sec-search.md — Duaer SEC full-text search
- https://skills.duaer.com/lei.md — Duaer Legal entities (LEI)
`,
	'sec-search': `---
name: duaer-sec-search
description: >-
  Duaer SEC full-text search. Find SEC filings since 2001 that mention a word or an exact phrase, across all companies, filtered by form type and filing dates.
  One successful search uses 1 Duaer credit.
---

# Duaer SEC full-text search

Duaer SEC full-text search queries EDGAR full-text search. Duaer keeps one row per filing and prefers the main document over exhibits.

## When to use

- Find which companies discuss a risk, a product, or a supplier in their 10-K.
- Track mentions of a phrase in 8-K filings over a period.

## When not to use

- The filing list of one known company. Use https://skills.duaer.com/sec-filings.md.
- Filings before 2001, which full-text search does not cover.

## Call

\`GET https://api.duaer.com/v1/data/sec-search?words=%22supply%20chain%20disruption%22&form=10-K&from=2024-01-01\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`words\`.

- \`words\` — Words to find. Wrap a phrase in double quotes, such as "supply chain".
- \`form\` — Optional. Form type such as 10-K or 8-K.
- \`from\` — Optional. Filed on or after, YYYY-MM-DD.
- \`to\` — Optional. Filed on or before, YYYY-MM-DD.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/sec-search?words=%22supply%20chain%20disruption%22&form=10-K&from=2024-01-01\` — 10-Ks since 2024 with that phrase.
- \`GET https://api.duaer.com/v1/data/sec-search?words=lithium&form=8-K&limit=20\` — 8-K filings mentioning lithium.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`company\`, \`cik\` — filer name with ticker, and CIK.
- \`form\`, \`fileType\`, \`fileDescription\` — form of the filing and the matched document.
- \`filingDate\`, \`periodEnding\` — filed date and period end.
- \`accessionNumber\` — EDGAR accession number.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/sec-filings.md — Duaer SEC filings
- https://skills.duaer.com/patents.md
`,
	'lei': `---
name: duaer-lei
description: >-
  Duaer Legal entities (LEI). Look up companies worldwide in the GLEIF register: legal name, 20-character LEI, jurisdiction, registered city and country, and entity and registration status.
  One successful search uses 1 Duaer credit.
---

# Duaer Legal entities (LEI)

Duaer Legal entities searches the Global LEI Index by GLEIF. An LEI identifies one legal entity in financial reporting, so it helps tell apart companies with similar names.

## When to use

- Confirm the exact legal name and country of a counterparty or supplier.
- Find the LEI to join company records across systems.

## When not to use

- Filings and financial reports. Use https://skills.duaer.com/sec-filings.md.
- Ownership trees or beneficial owners. This search returns the entity record only.

## Call

\`GET https://api.duaer.com/v1/data/lei?words=Tencent&country=CN\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`words\` or \`lei\`.

- \`words\` — Company name or words in it, such as Tencent.
- \`lei\` — Optional. A 20-character LEI to open one record.
- \`country\` — Optional. Two-letter ISO code of the legal address, such as CN.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/lei?words=Tencent&country=CN\` — Tencent entities with a legal address in China.
- \`GET https://api.duaer.com/v1/data/lei?lei=254900R2298R0IPO6I46\` — one record by LEI.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`lei\`, \`legalName\` — identifier and legal name.
- \`jurisdiction\`, \`city\`, \`country\` — where the entity is registered.
- \`entityStatus\`, \`category\` — ACTIVE or INACTIVE, and entity category.
- \`registrationStatus\`, \`nextRenewal\` — LEI status such as ISSUED or LAPSED, and renewal date.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/sec-filings.md — Duaer SEC filings
- https://skills.duaer.com/ror.md
`,
	'exchange-rates': `---
name: duaer-exchange-rates
description: >-
  Duaer Exchange rates. European Central Bank reference exchange rates for about 30 currencies, latest or on any working day since 1999, one day or a date range.
  One successful search uses 1 Duaer credit.
---

# Duaer Exchange rates

Duaer Exchange rates returns ECB reference rates through Frankfurter. Rates are published once per working day around 16:00 CET; weekends and holidays have no new rate.

## When to use

- Convert invoice or sales amounts to one currency for a report.
- Chart a currency pair over a few weeks.

## When not to use

- Intraday or trading prices. ECB rates are one daily reference fix.
- Currencies the ECB does not publish, such as many African and Central Asian ones.

## Call

\`GET https://api.duaer.com/v1/data/exchange-rates?base=USD&symbols=CNY,EUR,JPY\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide at least one of \`base\`, \`symbols\`, \`date\`, or \`from\`.

- \`base\` — Three-letter currency code to convert from. Default EUR.
- \`symbols\` — Optional. Target codes joined by commas, such as CNY,EUR,JPY. Default all.
- \`date\` — Optional. One past day, YYYY-MM-DD. Data starts 1999-01-04.
- \`from\` — Optional. Start of a date range, YYYY-MM-DD.
- \`to\` — Optional. End of a date range, YYYY-MM-DD. Default today.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/exchange-rates?base=USD&symbols=CNY,EUR,JPY\` — latest USD rates.
- \`GET https://api.duaer.com/v1/data/exchange-rates?base=EUR&symbols=CNY&from=2024-01-01&to=2024-01-19\` — EUR to CNY for three weeks.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`base\`, \`currency\` — from and to currency codes.
- \`rate\` — units of currency for 1 base.
- \`date\` — ECB publication day.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/imf.md — Duaer IMF indicators
- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators
`,
	'trade': `---
name: duaer-trade
description: >-
  Duaer International trade. Yearly goods exports and imports from UN Comtrade: a country total, one partner, or its top partners, for all goods or one HS product code.
  One successful search uses 1 Duaer credit.
---

# Duaer International trade

Duaer International trade reads the UN Comtrade public preview. Leave \`partner\` empty to rank top partners by value; set \`partner=world\` for the total.

## When to use

- Find the main export markets or import sources of a country for a product.
- Compare trade between two countries across years.

## When not to use

- Monthly data or very recent months. Annual data appears one to two years later.
- Tariffs and prices. Use https://skills.duaer.com/world-bank.md for macro indicators.

## Call

\`GET https://api.duaer.com/v1/data/trade?reporter=CHN&year=2023&flow=export&limit=10\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`reporter\`.

- \`reporter\` — Reporting country: ISO code, name, or Comtrade code, such as CHN.
- \`year\` — Optional. Four-digit year. Default two years ago.
- \`flow\` — Optional. export or import. Default export.
- \`partner\` — Optional. Partner country, or world for the total. Empty lists top partners.
- \`commodity\` — Optional. HS code such as 8542 (integrated circuits). Default all goods.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/trade?reporter=CHN&year=2023&flow=export&limit=10\` — top ten export partners of China in 2023.
- \`GET https://api.duaer.com/v1/data/trade?reporter=USA&partner=CHN&commodity=8542&flow=import&year=2023\` — US imports of integrated circuits from China.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`reporter\`, \`reporterCode\` — reporting country and Comtrade code.
- \`partner\`, \`partnerCode\` — partner country; code 0 is World.
- \`flow\` — exports or imports.
- \`year\`, \`commodity\` — year and HS code (TOTAL for all goods).
- \`valueUsd\` — trade value in US$.
- \`netWeightKg\` — net weight when reported.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators
- https://skills.duaer.com/imf.md — Duaer IMF indicators
`,
	'eu-open-data': `---
name: duaer-eu-open-data
description: >-
  Duaer EU open data. Find public datasets from EU institutions and national portals on data.europa.eu: title, publisher, country, file formats, and last update.
  One successful search uses 1 Duaer credit.
---

# Duaer EU open data

Duaer EU open data searches the data.europa.eu catalog of more than a million datasets. Titles come in English when the publisher provides a translation.

## When to use

- Find an official dataset on energy, transport, environment, or statistics in Europe.
- List what a country publishes on a topic before building a pipeline.

## When not to use

- Reading the rows of a dataset. Open the dataset link to download its files.
- Research data repositories. Use https://skills.duaer.com/zenodo.md or https://skills.duaer.com/re3data.md.

## Call

\`GET https://api.duaer.com/v1/data/eu-open-data?words=air%20quality&country=de\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`words\`.

- \`words\` — Words in the dataset, such as air quality.
- \`country\` — Optional. Two-letter code of the publishing country, such as de.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/eu-open-data?words=air%20quality&country=de\` — German air-quality datasets.
- \`GET https://api.duaer.com/v1/data/eu-open-data?words=energy%20prices&limit=5\` — energy price datasets across Europe.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`datasetId\` — catalog id.
- \`publisher\`, \`country\` — who publishes it.
- \`formats\` — distribution formats, such as CSV or JSON.
- \`modified\` — last update date.
- \`description\` — short description.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators
- https://skills.duaer.com/re3data.md
`,
	'cod': `---
name: duaer-cod
description: >-
  Duaer Crystal structures (COD). Experimental crystal structures from the Crystallography Open Database by formula, mineral, or words: space group, cell lengths, year, paper, and CIF download.
  One successful search uses 1 Duaer credit.
---

# Duaer Crystal structures (COD)

Duaer Crystal structures searches the Crystallography Open Database, an open collection of about 500,000 measured structures of minerals, organics, and metal-organics.

## When to use

- Find measured unit cells and space groups of a mineral or compound.
- Get a CIF file to open in a structure viewer or simulation.

## When not to use

- Computed properties such as band gaps. Use https://skills.duaer.com/materials-project.md or https://skills.duaer.com/jarvis.md.
- Protein structures. Use https://skills.duaer.com/structures.md.

## Call

\`GET https://api.duaer.com/v1/data/cod?formula=SiO2&limit=5\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`formula\` or \`words\`.

- \`formula\` — Formula of one formula unit, such as SiO2 or CaCO3.
- \`words\` — Optional. Mineral, compound, or author words, such as quartz.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/cod?formula=SiO2&limit=5\` — silica polymorphs.
- \`GET https://api.duaer.com/v1/data/cod?words=perovskite\` — entries that mention perovskite.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`codId\`, \`cifUrl\` — COD id and CIF download link.
- \`formula\`, \`mineral\`, \`chemicalName\` — formula in Hill order and names.
- \`spaceGroup\`, \`spaceGroupNumber\` — Hermann–Mauguin symbol and number.
- \`a\`, \`b\`, \`c\`, \`alpha\`, \`beta\`, \`gamma\`, \`volume\` — cell lengths (Å), angles (°), and volume (Å³).
- \`year\`, \`journal\`, \`paperTitle\`, \`doi\` — source publication.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/materials-project.md — Duaer Materials Project
- https://skills.duaer.com/jarvis.md — Duaer JARVIS-DFT
- https://skills.duaer.com/compounds.md
`,
	'materials-project': `---
name: duaer-materials-project
description: >-
  Duaer Materials Project. Computed inorganic materials from the Materials Project by formula or by elements they contain, with material id, formula, elements, and site count.
  One successful search uses 1 Duaer credit.
---

# Duaer Materials Project

Duaer Materials Project searches about 150,000 computed materials through the standard OPTIMADE interface. Each row links to the material page with band structure, stability, and more.

## When to use

- List known phases of a composition, such as all LiFePO4 entries.
- Find materials that contain a set of elements for screening.

## When not to use

- Measured structures from papers. Use https://skills.duaer.com/cod.md.
- Band gaps in the result rows. Use https://skills.duaer.com/jarvis.md.

## Call

\`GET https://api.duaer.com/v1/data/materials-project?formula=LiFePO4\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`formula\` or \`elements\`.

- \`formula\` — Formula such as LiFePO4. Matches the reduced formula.
- \`elements\` — Optional. Materials that contain all of these, such as Li,Fe,O.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/materials-project?formula=LiFePO4\` — lithium iron phosphate phases.
- \`GET https://api.duaer.com/v1/data/materials-project?elements=Li,Co,O&limit=20\` — materials containing lithium, cobalt, and oxygen.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`materialId\` — Materials Project id, such as mp-19017.
- \`formula\` — reduced formula, elements in alphabetical order.
- \`elements\`, \`elementCount\` — elements and their count.
- \`sites\` — atoms in the cell.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/jarvis.md — Duaer JARVIS-DFT
- https://skills.duaer.com/nomad.md — Duaer NOMAD
- https://skills.duaer.com/cod.md — Duaer Crystal structures (COD)
`,
	'jarvis': `---
name: duaer-jarvis
description: >-
  Duaer JARVIS-DFT. NIST JARVIS-DFT computed materials with band gap, formation energy, energy above hull, space group, and 2D or 3D dimensionality.
  One successful search uses 1 Duaer credit.
---

# Duaer JARVIS-DFT

Duaer JARVIS-DFT searches the NIST JARVIS-DFT database, which includes many 2D materials. Rows carry key computed properties directly, so an agent can compare candidates without opening each page.

## When to use

- Compare band gaps and stability of candidate semiconductors or 2D materials.
- Screen a composition for the most stable phase (lowest energy above hull).

## When not to use

- Measured crystal data. Use https://skills.duaer.com/cod.md.
- Exact experimental band gaps. DFT (OptB88vdW) tends to underestimate them; mbjBandGapEv is closer when present.

## Call

\`GET https://api.duaer.com/v1/data/jarvis?formula=MoS2\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`formula\` or \`elements\`.

- \`formula\` — Formula such as MoS2. Matches the reduced formula.
- \`elements\` — Optional. Materials that contain all of these, such as Mo,S.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/jarvis?formula=MoS2\` — MoS2 phases, bulk and 2D.
- \`GET https://api.duaer.com/v1/data/jarvis?elements=Ga,N\` — gallium nitride and related entries.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`jarvisId\` — JARVIS id, such as JVASP-664.
- \`formula\`, \`elements\` — composition.
- \`spaceGroup\`, \`crystalSystem\`, \`dimensionality\` — symmetry and 3D or 2D.
- \`bandGapEv\`, \`mbjBandGapEv\` — OptB88vdW and TBmBJ band gaps in eV.
- \`formationEnergyEvPerAtom\`, \`energyAboveHullEv\` — stability in eV per atom.
- \`bulkModulusGpa\`, \`densityGcm3\`, \`sites\` — other properties when computed.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/materials-project.md — Duaer Materials Project
- https://skills.duaer.com/nomad.md — Duaer NOMAD
- https://skills.duaer.com/cod.md — Duaer Crystal structures (COD)
`,
	'nomad': `---
name: duaer-nomad
description: >-
  Duaer NOMAD. Materials simulation entries in the NOMAD repository by formula, elements, and simulation code: method, calculation type, program, author, and upload date.
  One successful search uses 1 Duaer credit.
---

# Duaer NOMAD

Duaer NOMAD searches the NOMAD repository of raw and processed materials simulations (DFT and more), newest uploads first. Use it to find existing calculations before running your own.

## When to use

- Check whether someone already published a VASP or Quantum Espresso run for a system.
- Find recent simulation uploads for a composition.

## When not to use

- A curated property table. Use https://skills.duaer.com/jarvis.md or https://skills.duaer.com/materials-project.md.
- Experimental structures. Use https://skills.duaer.com/cod.md.

## Call

\`GET https://api.duaer.com/v1/data/nomad?formula=GaN&program=VASP\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`formula\` or \`elements\`.

- \`formula\` — Formula such as GaN. Matches the reduced formula.
- \`elements\` — Optional. Entries that contain all of these, such as Ga,N.
- \`program\` — Optional. Simulation code, such as VASP or Quantum Espresso.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/nomad?formula=GaN&program=VASP\` — GaN runs made with VASP.
- \`GET https://api.duaer.com/v1/data/nomad?elements=Si,O&limit=5\` — latest silicon-oxygen entries.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`entryId\`, \`uploadId\` — NOMAD ids.
- \`formula\`, \`elements\`, \`structuralType\` — composition and bulk, surface, or molecule.
- \`method\`, \`calculation\`, \`program\` — such as DFT, GeometryOptimization, VASP.
- \`author\`, \`uploaded\` — origin and upload date.
- \`reference\` — first external reference, when present.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/jarvis.md — Duaer JARVIS-DFT
- https://skills.duaer.com/materials-project.md — Duaer Materials Project
`,
	'inspire-hep': `---
name: duaer-inspire-hep
description: >-
  Duaer INSPIRE-HEP. High-energy physics literature from INSPIRE: papers, preprints, and theses with authors or collaboration, arXiv id, journal, DOI, and citation count.
  One successful search uses 1 Duaer credit.
---

# Duaer INSPIRE-HEP

Duaer INSPIRE-HEP searches the INSPIRE literature database used across particle physics, astrophysics, and related fields. It accepts plain words and INSPIRE syntax such as \`a Witten\` or \`t dark matter\`.

## When to use

- Find the most cited papers on a physics topic with \`sort=mostcited\`.
- Track new preprints from a collaboration or an author.

## When not to use

- General science outside physics. Use https://skills.duaer.com/papers.md.
- Machine learning conference papers. Use https://skills.duaer.com/openreview.md.

## Call

\`GET https://api.duaer.com/v1/data/inspire-hep?words=higgs%20boson&sort=mostcited&limit=5\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`words\`.

- \`words\` — Words or INSPIRE search syntax, such as higgs boson or a Witten.
- \`sort\` — Optional. mostrecent or mostcited. Default mostrecent.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/inspire-hep?words=higgs%20boson&sort=mostcited&limit=5\` — the most cited Higgs papers.
- \`GET https://api.duaer.com/v1/data/inspire-hep?words=a%20Witten&sort=mostrecent\` — recent papers by Witten.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`recordId\` — INSPIRE record id.
- \`authors\`, \`collaboration\` — first authors, or the collaboration.
- \`date\`, \`journal\` — earliest date and journal reference.
- \`arxiv\`, \`doi\` — identifiers.
- \`citations\` — citation count in INSPIRE.
- \`abstract\` — start of the abstract.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/arxiv.md
- https://skills.duaer.com/papers.md
- https://skills.duaer.com/opencitations.md — Duaer OpenCitations
`,
	'open-library': `---
name: duaer-open-library
description: >-
  Duaer Open Library. Books from Open Library by title, author, or subject: authors, first publication year, edition count, ISBN, subjects, e-book access, and cover image.
  One successful search uses 1 Duaer credit.
---

# Duaer Open Library

Duaer Open Library searches the Internet Archive book catalog. Each row is a work that groups its editions, with a cover link when one exists.

## When to use

- Build a reading list or check a book citation.
- Find textbooks and classics on a subject.

## When not to use

- Journal articles. Use https://skills.duaer.com/papers.md.
- Prices and stock. Open Library is a catalog, not a shop.

## Call

\`GET https://api.duaer.com/v1/data/open-library?words=molecular%20biology%20of%20the%20cell\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide at least one of \`words\`, \`author\`, or \`subject\`.

- \`words\` — Title or any words, such as molecular biology of the cell.
- \`author\` — Optional. Author name, such as Alberts.
- \`subject\` — Optional. Subject heading, such as genetics.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/open-library?words=molecular%20biology%20of%20the%20cell\` — find a textbook.
- \`GET https://api.duaer.com/v1/data/open-library?author=Ursula%20K.%20Le%20Guin&limit=20\` — works by an author.
- \`GET https://api.duaer.com/v1/data/open-library?subject=machine%20learning\` — books on a subject.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`workKey\` — Open Library work key.
- \`authors\`, \`firstPublished\`, \`editions\` — authors, first year, and edition count.
- \`isbn\`, \`publisher\`, \`languages\` — one ISBN, a publisher, and languages.
- \`subjects\` — subject headings.
- \`ebookAccess\`, \`coverUrl\` — borrowable, public, or no e-book; cover image.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/papers.md
- https://skills.duaer.com/wikipedia.md — Duaer Wikipedia
`,
	'openreview': `---
name: duaer-openreview
description: >-
  Duaer OpenReview. Machine learning conference submissions on OpenReview (ICLR, NeurIPS, ICML, and more): title, venue and decision, authors, keywords, abstract, and PDF.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenReview

Duaer OpenReview searches submissions and papers on OpenReview. The venue text shows the decision, such as ICLR 2024 poster or oral.

## When to use

- Find accepted papers on a method at recent ML conferences.
- Read public reviews through the forum link.

## When not to use

- arXiv preprints outside OpenReview. Use https://skills.duaer.com/arxiv.md.
- Citation counts. Use https://skills.duaer.com/papers.md or https://skills.duaer.com/opencitations.md.

## Call

\`GET https://api.duaer.com/v1/data/openreview?words=diffusion%20models&limit=10\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`words\`.

- \`words\` — Words in the title or abstract, such as diffusion models.
- \`venue\` — Optional. Venue group id, such as ICLR.cc/2024/Conference.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/openreview?words=diffusion%20models&limit=10\` — recent diffusion papers.
- \`GET https://api.duaer.com/v1/data/openreview?words=graph%20neural%20networks&venue=ICLR.cc/2024/Conference\` — ICLR 2024 only.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`forumId\` — OpenReview forum id (reviews live there).
- \`venue\`, \`venueId\` — venue and decision text, and venue id.
- \`authors\`, \`keywords\` — authors and keywords.
- \`date\` — publication date.
- \`pdfUrl\`, \`abstract\` — PDF link and abstract start.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/arxiv.md
- https://skills.duaer.com/papers.md
- https://skills.duaer.com/inspire-hep.md — Duaer INSPIRE-HEP
`,
	'opencitations': `---
name: duaer-opencitations
description: >-
  Duaer OpenCitations. Papers that cite a DOI, or the papers it references, from the open OpenCitations index, newest first, with titles, authors, venue, and self-citation flag.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenCitations

Duaer OpenCitations walks the citation graph of one paper using the open OpenCitations index and adds titles and authors from OpenCitations Meta.

## When to use

- See who cited a paper recently and in which journals.
- List the references of a paper to follow its sources.

## When not to use

- Searching papers by words. Use https://skills.duaer.com/papers.md.
- Complete counts for every paper. Open indexes miss some publishers.

## Call

\`GET https://api.duaer.com/v1/data/opencitations?doi=10.1038/nature12373&limit=10\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`doi\`.

- \`doi\` — DOI of the paper, such as 10.1038/nature12373.
- \`direction\` — Optional. citations (who cites it) or references (what it cites). Default citations.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/opencitations?doi=10.1038/nature12373&limit=10\` — the ten newest citing papers.
- \`GET https://api.duaer.com/v1/data/opencitations?doi=10.1038/nature12373&direction=references\` — what the paper cites.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`doi\` — DOI of the citing or cited paper.
- \`direction\` — citing or cited, relative to your DOI.
- \`authors\`, \`venue\`, \`published\`, \`type\` — metadata from OpenCitations Meta.
- \`selfCitation\` — true when authors or journal overlap.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/papers.md
- https://skills.duaer.com/crossref.md
- https://skills.duaer.com/icite.md
`,
	'wikipedia': `---
name: duaer-wikipedia
description: >-
  Duaer Wikipedia. Wikipedia articles in any language edition with the short description, a text excerpt, and a thumbnail, for quick background on a term.
  One successful search uses 1 Duaer credit.
---

# Duaer Wikipedia

Duaer Wikipedia searches article titles and text in one Wikipedia language edition. Use it for background, definitions, and the right article link.

## When to use

- Add a one-line definition or background to a report or chat answer.
- Find the article in Chinese, Japanese, or another edition with \`lang\`.

## When not to use

- Structured facts such as IDs and dates. Use https://skills.duaer.com/wikidata.md.
- Peer-reviewed evidence. Use https://skills.duaer.com/papers.md.

## Call

\`GET https://api.duaer.com/v1/data/wikipedia?words=photosynthesis&limit=3\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`words\`.

- \`words\` — Words to find, such as photosynthesis.
- \`lang\` — Optional. Wikipedia language code, such as en, zh, de, or ja. Default en.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/wikipedia?words=photosynthesis&limit=3\` — English articles.
- \`GET https://api.duaer.com/v1/data/wikipedia?words=Photosynthese&lang=de\` — German Wikipedia. Use zh for Chinese or ja for Japanese.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`pageId\`, \`language\` — article id and edition.
- \`description\` — short description.
- \`excerpt\` — matching text snippet.
- \`thumbnailUrl\` — thumbnail image, when present.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/wikidata.md
- https://skills.duaer.com/open-library.md — Duaer Open Library
`,
	'impc': `---
name: duaer-impc
description: >-
  Duaer IMPC mouse phenotypes. Significant phenotypes of knockout mice from the International Mouse Phenotyping Consortium: phenotype term, zygosity, sex, p-value, effect size, and test.
  One successful search uses 1 Duaer credit.
---

# Duaer IMPC mouse phenotypes

Duaer IMPC mouse phenotypes returns statistically significant genotype–phenotype calls from IMPC, strongest p-values first. It shows what happens in a mouse when a gene is knocked out.

## When to use

- Check what a knockout of a gene does in mice before a target study.
- Find genes whose knockout causes a phenotype, such as abnormal eye morphology.

## When not to use

- Curated mouse gene records and alleles. Use https://skills.duaer.com/mgi.md.
- Human disease phenotypes. Use https://skills.duaer.com/phenotypes.md.

## Call

\`GET https://api.duaer.com/v1/data/impc?gene=Pax6\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`gene\` or \`phenotype\`.

- \`gene\` — Mouse gene symbol, such as Pax6.
- \`phenotype\` — Optional. Mammalian Phenotype term name, such as abnormal eye morphology.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/impc?gene=Pax6\` — phenotypes of Pax6 mutants.
- \`GET https://api.duaer.com/v1/data/impc?phenotype=abnormal%20eye%20morphology&limit=20\` — genes with that phenotype.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`gene\`, \`mgiId\` — mouse gene symbol and MGI id.
- \`phenotype\`, \`mpId\`, \`topPhenotype\` — Mammalian Phenotype term and its top-level class.
- \`zygosity\`, \`sex\`, \`lifeStage\` — which mice showed it.
- \`pValue\`, \`effectSize\` — statistics of the call.
- \`allele\`, \`procedure\`, \`parameter\`, \`center\` — allele and test details.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/mgi.md
- https://skills.duaer.com/mp.md
- https://skills.duaer.com/phenotypes.md
`,
	'signor': `---
name: duaer-signor
description: >-
  Duaer SIGNOR signaling. Causal signaling relations from SIGNOR: who activates, inhibits, or phosphorylates a protein, with mechanism, modified residue, PubMed evidence, and score.
  One successful search uses 1 Duaer credit.
---

# Duaer SIGNOR signaling

Duaer SIGNOR signaling returns curated causal relations (regulator → effect → target) for a protein from SIGNOR. Duaer resolves a gene symbol to its reviewed UniProt accession first, and orders rows by SIGNOR score.

## When to use

- Explain a pathway step: which kinase phosphorylates a protein, and at which residue.
- List upstream regulators and downstream targets of a gene with evidence.

## When not to use

- Physical binding without direction. Use https://skills.duaer.com/interactions.md or https://skills.duaer.com/intact.md.
- Whole pathway diagrams. Use https://skills.duaer.com/pathways.md.

## Call

\`GET https://api.duaer.com/v1/data/signor?gene=TP53&limit=20\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`gene\`.

- \`gene\` — Gene symbol or UniProt accession, such as TP53 or P04637.
- \`organism\` — Optional. human, mouse, or rat. Default human.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/signor?gene=TP53&limit=20\` — regulators and targets of p53.
- \`GET https://api.duaer.com/v1/data/signor?gene=P04637\` — the same by UniProt accession.
- \`GET https://api.duaer.com/v1/data/signor?gene=Trp53&organism=mouse\` — mouse relations.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`signorId\` — SIGNOR relation id.
- \`regulator\`, \`regulatorType\`, \`regulatorId\` — the acting entity.
- \`target\`, \`targetType\`, \`targetId\` — the affected entity.
- \`effect\`, \`mechanism\`, \`residue\` — such as up-regulates activity, phosphorylation, Ser15.
- \`pmid\`, \`evidence\` — PubMed id and the curated sentence.
- \`score\` — SIGNOR confidence from 0 to 1.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/interactions.md
- https://skills.duaer.com/pathways.md
- https://skills.duaer.com/omnipath.md
`,
	'pgs-catalog': `---
name: duaer-pgs-catalog
description: >-
  Duaer PGS Catalog. Published polygenic risk scores for a disease or trait from the PGS Catalog: score id, reported trait, variant count, publication, and scoring-file link.
  One successful search uses 1 Duaer credit.
---

# Duaer PGS Catalog

Duaer PGS Catalog finds polygenic scores. With \`trait\`, Duaer matches catalog traits (including child traits) and returns their scores; with \`id\` it returns those scores directly.

## When to use

- Find existing polygenic scores for a disease before building a risk model.
- Get the scoring file and publication of a score id cited in a paper.

## When not to use

- Single-variant associations. Use https://skills.duaer.com/gwas.md.
- Clinical risk decisions for a person. Scores are research tools.

## Call

\`GET https://api.duaer.com/v1/data/pgs-catalog?trait=type%202%20diabetes&limit=10\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`trait\` or \`id\`.

- \`trait\` — Trait or disease words, such as type 2 diabetes.
- \`id\` — Optional. One or more score ids joined by commas, such as PGS000014.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/pgs-catalog?trait=type%202%20diabetes&limit=10\` — scores for type 2 diabetes.
- \`GET https://api.duaer.com/v1/data/pgs-catalog?id=PGS000014,PGS000018\` — two scores by id.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`pgsId\`, \`name\` — score id and name.
- \`traitReported\`, \`traits\` — reported trait and mapped ontology traits.
- \`variants\`, \`weightType\` — number of variants and weight type.
- \`firstAuthor\`, \`journal\`, \`published\`, \`doi\`, \`pmid\` — source publication.
- \`scoringFile\` — download link of the scoring file.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/gwas.md
- https://skills.duaer.com/variants.md
- https://skills.duaer.com/diseases.md
`,
	'who-gho': `---
name: duaer-who-gho
description: >-
  Duaer WHO health statistics. Country health statistics from the WHO Global Health Observatory: life expectancy, mortality, disease burden, risk factors, and health systems, by year and sex.
  One successful search uses 1 Duaer credit.
---

# Duaer WHO health statistics

Duaer WHO health statistics reads the WHO GHO OData API. With an indicator code it returns values newest first, often split by sex; with only \`words\` it lists matching indicator codes.

## When to use

- Compare life expectancy, obesity, or tobacco use across countries.
- Add official WHO figures with confidence intervals to a health report.

## When not to use

- Economic indicators. Use https://skills.duaer.com/world-bank.md.
- Disease records and genetics. Use https://skills.duaer.com/diseases.md.

## Call

\`GET https://api.duaer.com/v1/data/who-gho?indicator=WHOSIS_000001&country=CHN&limit=6\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`indicator\`, or \`words\` to find indicator codes.

- \`indicator\` — GHO indicator code, such as WHOSIS_000001 (life expectancy at birth).
- \`country\` — Optional. Three-letter ISO code, such as CHN.
- \`year\` — Optional. Only this year.
- \`words\` — Optional. Find indicator codes by name, such as obesity, when no indicator is given.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

Common codes: \`WHOSIS_000001\` life expectancy at birth, \`WHOSIS_000015\` life expectancy at 60, \`NCD_BMI_30A\` adult obesity (%), \`M_Est_smk_curr_std\` tobacco use (%), \`MDG_0000000001\` infant mortality.

## Examples

- \`GET https://api.duaer.com/v1/data/who-gho?indicator=WHOSIS_000001&country=CHN&limit=6\` — life expectancy in China.
- \`GET https://api.duaer.com/v1/data/who-gho?words=obesity\` — find obesity indicator codes.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`indicator\`, \`indicatorName\` — GHO code and name.
- \`country\`, \`region\` — ISO3 code and WHO region.
- \`year\`, \`breakdown\` — year and split such as female or both sexes.
- \`value\`, \`low\`, \`high\`, \`display\` — value, uncertainty range, and WHO display text.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators
- https://skills.duaer.com/diseases.md
- https://skills.duaer.com/air-quality.md — Duaer Air quality
`,
	'geocoding': `---
name: duaer-geocoding
description: >-
  Duaer Place lookup. Turn a place name into coordinates, country, region, time zone, population, and elevation from the GeoNames gazetteer via Open-Meteo.
  One successful search uses 1 Duaer credit.
---

# Duaer Place lookup

Duaer Place lookup turns a city, town, or place name into coordinates and basic facts. Several places can share a name, so Duaer returns the best matches first; add \`country\` to narrow them.

## When to use

- Get latitude and longitude before calling a point-based source.
- Tell apart places that share a name, such as Springfield.

## When not to use

- Weather at a place. Use https://skills.duaer.com/weather.md.
- Ground height only. Use https://skills.duaer.com/elevation.md.

## Call

\`GET https://api.duaer.com/v1/data/geocoding?place=Springfield&country=US\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`place\`.

- \`place\` — City, town, or place name, such as Springfield.
- \`country\` — Optional. Two-letter country code, such as US.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/geocoding?place=Springfield&country=US\` — places called Springfield in the United States.
- \`GET https://api.duaer.com/v1/data/geocoding?place=Kyoto&limit=1\` — the best match for Kyoto.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`name\`, \`country\`, \`countryCode\`, \`region\`, \`district\` — place and its administrative areas.
- \`latitude\`, \`longitude\`, \`timezone\` — position and IANA time zone.
- \`population\`, \`elevationM\` — people and height above sea level, when known.
- \`featureCode\`, \`geonameId\` — GeoNames feature class and id.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/elevation.md — Duaer Elevation
- https://skills.duaer.com/weather.md — Duaer Weather forecast
`,
	'elevation': `---
name: duaer-elevation
description: >-
  Duaer Elevation. Ground height above sea level for a place or coordinates, from the Copernicus 90 m digital elevation model.
  One successful search uses 1 Duaer credit.
---

# Duaer Elevation

Duaer Elevation returns the ground height above sea level for one point, from the Copernicus 90 m digital elevation model. Give a place name or exact coordinates.

## When to use

- Check the altitude of a city or a site.
- Add height to coordinates in a survey table.

## When not to use

- Coordinates for a name. Use https://skills.duaer.com/geocoding.md.
- Weather at altitude. Use https://skills.duaer.com/weather.md.

## Call

\`GET https://api.duaer.com/v1/data/elevation?place=Lhasa\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`place\`, or \`latitude\` and \`longitude\`.

- \`place\` — Place name, such as Lhasa. Duaer looks up its coordinates.
- \`latitude\`, \`longitude\` — Optional. Coordinates instead of a place name.

## Examples

- \`GET https://api.duaer.com/v1/data/elevation?place=Lhasa\` — height of Lhasa.
- \`GET https://api.duaer.com/v1/data/elevation?latitude=27.9881&longitude=86.925\` — height near the summit of Everest.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`place\` — resolved place name.
- \`latitude\`, \`longitude\` — the point used.
- \`elevationM\` — metres above sea level.

The search returns one row.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/geocoding.md — Duaer Place lookup
- https://skills.duaer.com/nasa-power.md — Duaer Solar and climate (NASA POWER)
`,
	'nasa-power': `---
name: duaer-nasa-power
description: >-
  Duaer Solar and climate (NASA POWER). Daily or monthly solar radiation, temperature, rain, wind, and humidity for any point since 1981, from NASA POWER.
  One successful search uses 1 Duaer credit.
---

# Duaer Solar and climate (NASA POWER)

Duaer Solar and climate (NASA POWER) reads satellite and model estimates for any point on Earth since 1981. It suits solar sizing, agriculture, and climate checks where no weather station exists.

## When to use

- Estimate solar energy for a site, in kWh per square metre per day.
- Compare monthly temperature and rain for a location over years.

## When not to use

- A forecast for the coming days. Use https://skills.duaer.com/weather.md.
- Hourly station-like history. Use https://skills.duaer.com/weather-history.md.

## Call

\`GET https://api.duaer.com/v1/data/nasa-power?place=Dubai&from=2024-06-01&to=2024-06-07\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`place\` (or \`latitude\` and \`longitude\`), \`from\`, and \`to\`.

- \`place\` — Place name, such as Lhasa. Duaer looks up its coordinates.
- \`latitude\`, \`longitude\` — Optional. Coordinates instead of a place name.
- \`from\` — First day, YYYY-MM-DD. Data starts in 1981.
- \`to\` — Last day, YYYY-MM-DD. Recent days appear after about a week.
- \`step\` — Optional. \`day\` or \`month\`. Default \`day\`. Daily ranges stay within one year; monthly ranges within ten years.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/nasa-power?place=Dubai&from=2024-06-01&to=2024-06-07\` — one week of daily sunlight and heat in Dubai.
- \`GET https://api.duaer.com/v1/data/nasa-power?place=Kunming&from=2023-01-01&to=2023-12-31&step=month&limit=12\` — monthly climate for a year.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`place\`, \`latitude\`, \`longitude\` — the point used.
- \`period\`, \`step\` — day (YYYY-MM-DD) or month (YYYY-MM), oldest first.
- \`solarKwhM2Day\` — all-sky solar radiation on a flat surface.
- \`temperatureMean\`, \`temperatureMax\`, \`temperatureMin\` — °C at 2 m.
- \`precipitationMmDay\`, \`windSpeedMs\`, \`humidityPct\` — rain, wind at 10 m, relative humidity.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather-history.md — Duaer Weather history
- https://skills.duaer.com/elevation.md — Duaer Elevation
`,
	'weather-alerts': `---
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

\`GET https://api.duaer.com/v1/data/weather-alerts?state=CA&severity=Severe\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`state\`, or \`latitude\` and \`longitude\`.

- \`state\` — Two-letter US state or territory code, such as CA.
- \`latitude\`, \`longitude\` — Optional. A US point instead of a state.
- \`severity\` — Optional. Extreme, Severe, Moderate, Minor, or Unknown.
- \`words\` — Optional. Keep alerts whose event, headline, or area contains these words, such as flood.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/weather-alerts?state=CA&severity=Severe\` — severe alerts in California.
- \`GET https://api.duaer.com/v1/data/weather-alerts?latitude=29.76&longitude=-95.37&words=flood\` — flood alerts for Houston.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`alertId\`, \`event\` — NWS id and event type, such as Flood Advisory.
- \`severity\`, \`certainty\`, \`urgency\` — NWS scales.
- \`area\`, \`sender\` — affected areas and issuing office.
- \`effective\`, \`expires\` — validity window.
- \`description\`, \`instruction\` — alert text and what to do.

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
`,
	'eurostat': `---
name: duaer-eurostat
description: >-
  Duaer Eurostat statistics. Official EU statistics by Eurostat dataset code: GDP, prices, jobs, trade, energy, and population, by country and period.
  One successful search uses 1 Duaer credit.
---

# Duaer Eurostat statistics

Duaer Eurostat statistics reads a Eurostat dataset and returns one row per value, newest period first. Narrow it with country codes and dimension filters so each row is a single figure.

## When to use

- Compare GDP, inflation, or unemployment across EU countries.
- Pull an official EU time series into a table.

## When not to use

- Finding datasets by topic. Use https://skills.duaer.com/eu-open-data.md.
- Countries worldwide. Use https://skills.duaer.com/world-bank.md.

## Call

\`GET https://api.duaer.com/v1/data/eurostat?dataset=nama_10_gdp&country=DE,FR&filters=unit=CP_MEUR,na_item=B1GQ&from=2019\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`dataset\`.

- \`dataset\` — Eurostat dataset code, such as nama_10_gdp (GDP) or prc_hicp_manr (inflation).
- \`country\` — Optional. Eurostat geo codes joined by commas, such as DE,FR. EU27_2020 is the EU.
- \`filters\` — Optional. dimension=code pairs joined by commas, such as unit=CP_MEUR,na_item=B1GQ.
- \`from\` — Optional. First period, such as 2019, 2025-06, or 2025-Q1.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

Common datasets: \`nama_10_gdp\` GDP, \`prc_hicp_manr\` inflation, \`une_rt_m\` unemployment, \`demo_pjan\` population, \`nrg_bal_c\` energy balance.

## Examples

- \`GET https://api.duaer.com/v1/data/eurostat?dataset=nama_10_gdp&country=DE,FR&filters=unit=CP_MEUR,na_item=B1GQ&from=2019\` — GDP of Germany and France since 2019.
- \`GET https://api.duaer.com/v1/data/eurostat?dataset=prc_hicp_manr&country=EU27_2020&filters=coicop=CP00&from=2025-01\` — EU inflation this year.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`dataset\`, \`datasetLabel\` — code and title.
- \`country\`, \`countryName\`, \`period\` — geo code, name, and period.
- \`value\`, \`unit\` — the figure and its unit.
- \`breakdown\`, \`filters\` — dimensions that vary between rows, and all dimension codes.
- \`status\` — Eurostat flag, such as p for provisional.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/eu-open-data.md — Duaer EU open data
- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators
`,
	'federal-register': `---
name: duaer-federal-register
description: >-
  Duaer US Federal Register. US federal rules, proposed rules, notices, and presidential documents, newest first, with agencies, abstract, and PDF.
  One successful search uses 1 Duaer credit.
---

# Duaer US Federal Register

Duaer US Federal Register searches the daily journal of the US government, newest first. Filter by words, agency, document type, and date.

## When to use

- Track new or proposed US regulations on a topic.
- List recent notices from one agency.

## When not to use

- Company filings. Use https://skills.duaer.com/sec-filings.md.
- EU datasets. Use https://skills.duaer.com/eu-open-data.md.

## Call

\`GET https://api.duaer.com/v1/data/federal-register?words=artificial%20intelligence&type=rule\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`words\` or \`agency\`.

- \`words\` — Words to search, such as artificial intelligence.
- \`agency\` — Optional. Agency slug, such as environmental-protection-agency.
- \`type\` — Optional. \`rule\`, \`proposed\`, \`notice\`, or \`presidential\`.
- \`from\` — Optional. Published on or after, YYYY-MM-DD.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/federal-register?words=artificial%20intelligence&type=rule\` — final rules that mention AI.
- \`GET https://api.duaer.com/v1/data/federal-register?agency=environmental-protection-agency&type=proposed&from=2026-01-01\` — EPA proposed rules this year.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`documentNumber\`, \`type\`, \`published\` — id, document type, and publication date.
- \`agencies\` — issuing agencies.
- \`abstract\` — summary text.
- \`url\`, \`pdfUrl\` — web page and PDF.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/sec-filings.md — Duaer SEC filings
- https://skills.duaer.com/usaspending.md — Duaer US federal agency budgets
`,
	'un-sdg': `---
name: duaer-un-sdg
description: >-
  Duaer UN SDG indicators. UN Sustainable Development Goal statistics by series and country, such as poverty, health, energy, and education, by year.
  One successful search uses 1 Duaer credit.
---

# Duaer UN SDG indicators

Duaer UN SDG indicators reads the UN SDG Global Database. With a series code it returns values newest year first; with only \`words\` it lists matching series codes.

## When to use

- Compare poverty, electricity access, or school completion across countries.
- Find the SDG series code for a topic.

## When not to use

- Economic indicators. Use https://skills.duaer.com/world-bank.md.
- Health statistics by sex. Use https://skills.duaer.com/who-gho.md.

## Call

\`GET https://api.duaer.com/v1/data/un-sdg?series=SI_POV_DAY1&area=India\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`series\`, or \`words\` to find series codes.

- \`series\` — SDG series code, such as SI_POV_DAY1 (extreme poverty rate).
- \`area\` — Optional. Country or region name, or M49 code, such as India or 356.
- \`words\` — Optional. Find series codes by words, such as electricity, when no series is given.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

Common series: \`SI_POV_DAY1\` extreme poverty, \`EG_ELC_ACCS\` access to electricity, \`SH_STA_MORT\` maternal mortality, \`SE_TOT_CPLR\` completion rate, \`EN_ATM_CO2\` CO2 emissions.

## Examples

- \`GET https://api.duaer.com/v1/data/un-sdg?series=SI_POV_DAY1&area=India\` — extreme poverty rate in India.
- \`GET https://api.duaer.com/v1/data/un-sdg?words=electricity\` — find electricity series codes.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`series\`, \`seriesDescription\`, \`goal\`, \`indicator\` — series code, name, and SDG numbering.
- \`area\`, \`areaCode\` — country or region and its M49 code.
- \`year\`, \`value\`, \`units\` — the figure.
- \`breakdown\`, \`dataSource\` — split such as sex or age, and origin.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators
- https://skills.duaer.com/who-gho.md — Duaer WHO health statistics
`,
	'usaspending': `---
name: duaer-usaspending
description: >-
  Duaer US federal agency budgets. Budget authority, obligations, and outlays of US federal agencies for the current fiscal year, from USAspending.
  One successful search uses 1 Duaer credit.
---

# Duaer US federal agency budgets

Duaer US federal agency budgets lists US federal agencies with their current fiscal year budget authority, obligations, and outlays from USAspending, largest first.

## When to use

- Rank US agencies by budget.
- Get one agency’s share of federal spending.

## When not to use

- Regulations and notices. Use https://skills.duaer.com/federal-register.md.
- Company finances. Use https://skills.duaer.com/sec-filings.md.

## Call

\`GET https://api.duaer.com/v1/data/usaspending?sort=budget&limit=5\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`sort\` or \`words\`.

- \`sort\` — \`budget\`, \`obligated\`, or \`outlays\`. Largest first.
- \`words\` — Optional. Agency name or abbreviation, such as defense or NASA.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/usaspending?sort=budget&limit=5\` — the five largest agencies by budget authority.
- \`GET https://api.duaer.com/v1/data/usaspending?words=NASA\` — NASA’s budget and outlays.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`agency\`, \`abbreviation\`, \`toptierCode\` — agency and its codes.
- \`fiscalYear\`, \`fiscalQuarter\` — reporting period.
- \`budgetAuthorityUsd\`, \`obligatedUsd\`, \`outlaysUsd\` — US dollars.
- \`shareOfTotalPct\` — share of all federal budget authority.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/federal-register.md — Duaer US Federal Register
- https://skills.duaer.com/imf.md — Duaer IMF indicators
`,
	'aflow': `---
name: duaer-aflow
description: >-
  Duaer AFLOW. Computed materials from AFLOW by formula or elements: band gap, formation enthalpy, space group, and Pearson symbol.
  One successful search uses 1 Duaer credit.
---

# Duaer AFLOW

Duaer AFLOW searches the AFLOW database of high-throughput DFT calculations. A formula matches the reduced formula; elements find every compound containing them.

## When to use

- Screen candidate compounds by band gap or formation enthalpy.
- Compare polymorphs of one formula.

## When not to use

- Experimental structures. Use https://skills.duaer.com/cod.md.
- Simulation runs and raw files. Use https://skills.duaer.com/nomad.md.

## Call

\`GET https://api.duaer.com/v1/data/aflow?formula=TiO2\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`formula\` or \`elements\`.

- \`formula\` — Formula such as TiO2. Matches the reduced formula.
- \`elements\` — Optional. Materials that contain all of these, such as Ti,O.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/aflow?formula=TiO2\` — TiO2 polymorphs with band gaps.
- \`GET https://api.duaer.com/v1/data/aflow?elements=Li,Fe&limit=5\` — compounds containing lithium and iron.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`auid\`, \`aflowPath\` — AFLOW ids.
- \`formula\`, \`compound\`, \`elements\` — reduced formula, cell formula, and elements.
- \`spaceGroupNumber\`, \`pearsonSymbol\` — relaxed symmetry.
- \`bandGapEv\`, \`formationEnthalpyEvPerAtom\` — electronic gap and stability.

AFLOW can take several seconds to answer.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/alexandria.md — Duaer Alexandria
- https://skills.duaer.com/materials-project.md — Duaer Materials Project
`,
	'alexandria': `---
name: duaer-alexandria
description: >-
  Duaer Alexandria. Millions of DFT structures in the Alexandria PBE database by formula or elements: band gap, formation energy, and distance to the hull.
  One successful search uses 1 Duaer credit.
---

# Duaer Alexandria

Duaer Alexandria searches the Alexandria PBE database over OPTIMADE. It holds millions of computed structures, including many not found in other databases.

## When to use

- Check whether a composition is predicted stable (hull distance near 0).
- Find computed structures beyond Materials Project.

## When not to use

- Experimental structures. Use https://skills.duaer.com/cod.md.
- Curated properties with elastic data. Use https://skills.duaer.com/jarvis.md.

## Call

\`GET https://api.duaer.com/v1/data/alexandria?formula=GaAs\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`formula\` or \`elements\`.

- \`formula\` — Formula such as GaAs. Matches the reduced formula.
- \`elements\` — Optional. Materials that contain all of these, such as Ga,As.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/alexandria?formula=GaAs\` — GaAs structures with band gap and stability.
- \`GET https://api.duaer.com/v1/data/alexandria?elements=Na,S&limit=5\` — sodium-sulfur compounds.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`alexandriaId\` — Alexandria id.
- \`formula\`, \`elements\`, \`sites\` — reduced formula, elements, and atoms in the cell.
- \`spaceGroupNumber\` — symmetry.
- \`bandGapEv\`, \`formationEnergyEvPerAtom\`, \`energyAboveHullEv\` — gap, formation energy, and distance to the convex hull.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/aflow.md — Duaer AFLOW
- https://skills.duaer.com/materials-project.md — Duaer Materials Project
`,
	'npi': `---
name: duaer-npi
description: >-
  Duaer US provider registry (NPI). US doctors, nurses, clinics, and hospitals in the NPPES NPI registry by name, specialty, and state, with address and license.
  One successful search uses 1 Duaer credit.
---

# Duaer US provider registry (NPI)

Duaer US provider registry (NPI) searches the NPPES registry of every US health care provider with a National Provider Identifier: clinicians and organizations.

## When to use

- Verify a US clinician’s NPI, specialty, and license state.
- List cardiologists or clinics in a city.

## When not to use

- Hospital quality ratings. Use https://skills.duaer.com/cms-hospitals.md.
- Clinical studies. Use https://skills.duaer.com/trials.md.

## Call

\`GET https://api.duaer.com/v1/data/npi?lastName=Smith&specialty=Cardiology&state=MA\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`npi\`, \`lastName\`, \`organization\`, or \`specialty\`.

- \`lastName\` — Clinician’s last name, such as Smith. End with * to match a prefix.
- \`firstName\` — Optional. First name, such as John.
- \`organization\` — Optional. Clinic or hospital name, such as Mayo Clinic.
- \`specialty\` — Optional. Taxonomy description, such as Cardiology.
- \`city\` — Optional. City, such as Boston.
- \`state\` — Optional. Two-letter state code, such as MA.
- \`npi\` — Optional. Ten-digit NPI to look up one provider.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/npi?lastName=Smith&specialty=Cardiology&state=MA\` — cardiologists named Smith in Massachusetts.
- \`GET https://api.duaer.com/v1/data/npi?organization=Mayo%20Clinic&state=MN&limit=5\` — Mayo Clinic entities in Minnesota.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`npi\`, \`name\`, \`type\` — identifier, name with credential, and Individual or Organization.
- \`specialty\`, \`taxonomyCode\`, \`license\`, \`licenseState\` — primary taxonomy and license.
- \`address\`, \`city\`, \`state\`, \`postalCode\`, \`phone\` — practice location.
- \`enumerated\`, \`updated\`, \`status\` — registry dates and status.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/cms-hospitals.md — Duaer US hospitals (CMS)
- https://skills.duaer.com/who-gho.md — Duaer WHO health statistics
`,
	'cms-hospitals': `---
name: duaer-cms-hospitals
description: >-
  Duaer US hospitals (CMS). Medicare-certified US hospitals from CMS Care Compare: type, ownership, emergency services, and overall star rating.
  One successful search uses 1 Duaer credit.
---

# Duaer US hospitals (CMS)

Duaer US hospitals (CMS) searches the CMS Care Compare list of Medicare-certified US hospitals, with the CMS overall star rating where one exists.

## When to use

- Find hospitals in a city or ZIP code with their star rating.
- Check whether a hospital offers emergency services.

## When not to use

- Individual clinicians. Use https://skills.duaer.com/npi.md.
- Global health statistics. Use https://skills.duaer.com/who-gho.md.

## Call

\`GET https://api.duaer.com/v1/data/cms-hospitals?name=general&state=MA\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`name\`, \`city\`, \`state\`, or \`zip\`.

- \`name\` — Words in the hospital name, such as general.
- \`city\` — Optional. City, such as Boston.
- \`state\` — Optional. Two-letter state code, such as MA.
- \`zip\` — Optional. Five-digit ZIP code, such as 02114.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/cms-hospitals?name=general&state=MA\` — general hospitals in Massachusetts.
- \`GET https://api.duaer.com/v1/data/cms-hospitals?city=Houston&state=TX&limit=20\` — hospitals in Houston.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`facilityId\`, \`name\` — CMS certification number and hospital name.
- \`address\`, \`city\`, \`state\`, \`zip\`, \`county\`, \`phone\` — location.
- \`hospitalType\`, \`ownership\`, \`emergencyServices\` — type, owner, and emergency care.
- \`overallRating\` — 1 to 5 stars; left out when CMS has no rating.
- \`birthingFriendly\` — meets the CMS birthing-friendly criteria.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/npi.md — Duaer US provider registry (NPI)
- https://skills.duaer.com/who-gho.md — Duaer WHO health statistics
`,
	'materials-cloud': `---
name: duaer-materials-cloud
description: >-
  Duaer Materials Cloud MC3D. Relaxed 3D crystal structures computed with PBE in Materials Cloud MC3D, by formula or elements, with cell volume, energy, and source database.
  One successful search uses 1 Duaer credit.
---

# Duaer Materials Cloud MC3D

Duaer Materials Cloud MC3D searches the MC3D database of experimentally known 3D crystals relaxed with DFT (PBE) by the Materials Cloud team. Each row names the experimental database the structure came from.

## When to use

- Get a DFT-relaxed version of a known experimental crystal.
- Compare cell volume and magnetization across polymorphs.

## When not to use

- Band gaps and hull stability. Use https://skills.duaer.com/materials-project.md.
- Raw experimental CIFs. Use https://skills.duaer.com/cod.md.

## Call

\`GET https://api.duaer.com/v1/data/materials-cloud?formula=SiO2\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`formula\` or \`elements\`.

- \`formula\` — Formula such as SiO2. Matches the reduced formula.
- \`elements\` — Optional. Materials that contain all of these, such as Si,O.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/materials-cloud?formula=SiO2\` — relaxed silica polymorphs.
- \`GET https://api.duaer.com/v1/data/materials-cloud?elements=Li,Co,O&limit=5\` — lithium cobalt oxides.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`structureId\` — provider id.
- \`formula\`, \`formulaCell\`, \`elements\`, \`sites\` — reduced formula, cell formula, elements, and atoms in the cell.
- \`mc3dId\`, \`sourceDatabase\`, \`sourceId\` — MC3D id and the experimental source (such as mpds or cod).
- \`totalEnergyEv\`, \`cellVolumeA3\`, \`totalMagnetization\` — DFT energy, cell volume in Å³, and magnetization.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/materials-project.md — Duaer Materials Project
- https://skills.duaer.com/alexandria.md — Duaer Alexandria
`,
	'matpedia-2d': `---
name: duaer-matpedia-2d
description: >-
  Duaer 2DMatpedia. Computed two-dimensional materials in 2DMatpedia by formula or elements, with band gap and chemical system.
  One successful search uses 1 Duaer credit.
---

# Duaer 2DMatpedia

Duaer 2DMatpedia searches an open database of single-layer (2D) materials obtained by exfoliating layered bulk crystals and by substitution, with DFT band gaps.

## When to use

- Find monolayer candidates such as MoS2 or graphene analogues.
- Screen 2D materials by band gap for electronics.

## When not to use

- Bulk 3D crystals. Use https://skills.duaer.com/materials-project.md.
- Experimental structures. Use https://skills.duaer.com/cod.md.

## Call

\`GET https://api.duaer.com/v1/data/matpedia-2d?formula=MoS2\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`formula\` or \`elements\`.

- \`formula\` — Formula such as MoS2. Matches the reduced formula.
- \`elements\` — Optional. Materials that contain all of these, such as Mo,S.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/matpedia-2d?formula=MoS2\` — MoS2 monolayers with band gaps.
- \`GET https://api.duaer.com/v1/data/matpedia-2d?elements=W,Se&limit=5\` — tungsten selenide layers.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`structureId\` — provider id.
- \`formula\`, \`formulaCell\`, \`elements\`, \`sites\` — reduced formula, cell formula, elements, and atoms in the cell.
- \`bandGapEv\` — DFT band gap in eV.
- \`chemicalSystem\` — elements joined by dashes, such as Mo-S.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/materials-cloud.md — Duaer Materials Cloud MC3D
- https://skills.duaer.com/jarvis.md — Duaer JARVIS-DFT
`,
	'mpdd': `---
name: duaer-mpdd
description: >-
  Duaer MPDD. Structures in the Material-Property-Descriptor Database by formula or elements, with space group, crystal system, density, and machine-learned formation energy.
  One successful search uses 1 Duaer credit.
---

# Duaer MPDD

Duaer MPDD searches the Material-Property-Descriptor Database, millions of structures with symmetry, density, and a machine-learned (SIPFENN) formation energy for fast screening.

## When to use

- Screen many structures of a composition by predicted formation energy.
- Get space group and density for a formula.

## When not to use

- DFT-computed stability. Use https://skills.duaer.com/alexandria.md.
- Experimental structures. Use https://skills.duaer.com/cod.md.

## Call

\`GET https://api.duaer.com/v1/data/mpdd?formula=Fe2O3\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`formula\` or \`elements\`.

- \`formula\` — Formula such as Fe2O3. Matches the reduced formula.
- \`elements\` — Optional. Materials that contain all of these, such as Fe,O.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/mpdd?formula=Fe2O3\` — iron oxide structures with symmetry and density.
- \`GET https://api.duaer.com/v1/data/mpdd?elements=Mg,Al,O&limit=5\` — magnesium aluminium oxides.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`structureId\` — provider id.
- \`formula\`, \`formulaCell\`, \`elements\`, \`sites\` — reduced formula, cell formula, elements, and atoms in the cell.
- \`spaceGroup\`, \`spaceGroupNumber\`, \`crystalSystem\` — symmetry.
- \`densityGcm3\`, \`volumeA3\` — density in g/cm³ and cell volume in Å³.
- \`predictedFormationEnergyEvPerAtom\` — machine-learned formation energy, not DFT.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/alexandria.md — Duaer Alexandria
- https://skills.duaer.com/materials-project.md — Duaer Materials Project
`,
	'omdb': `---
name: duaer-omdb
description: >-
  Duaer Open Materials Database. Crystal structures in the Open Materials Database by formula or elements, with cell formula, sites, and periodicity.
  One successful search uses 1 Duaer credit.
---

# Duaer Open Materials Database

Duaer Open Materials Database searches the openmaterialsdb.se structure collection over OPTIMADE. It returns standard structure fields only.

## When to use

- Cross-check a structure against another open database.
- List structures that contain a set of elements.

## When not to use

- Band gaps or energies. Use https://skills.duaer.com/materials-project.md.
- 2D layers. Use https://skills.duaer.com/matpedia-2d.md.

## Call

\`GET https://api.duaer.com/v1/data/omdb?formula=CaMgO6Si2\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`formula\` or \`elements\`.

- \`formula\` — Formula such as CaMgO6Si2. Matches the reduced formula.
- \`elements\` — Optional. Materials that contain all of these, such as Ca,Mg.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/omdb?formula=CaMgO6Si2\` — diopside structures.
- \`GET https://api.duaer.com/v1/data/omdb?elements=Ca,Mg&limit=5\` — structures with calcium and magnesium.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`structureId\` — provider id.
- \`formula\`, \`formulaCell\`, \`elements\`, \`sites\` — reduced formula, cell formula, elements, and atoms in the cell.
- \`periodicDimensions\` — 3 for bulk crystals.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/materials-cloud.md — Duaer Materials Cloud MC3D
- https://skills.duaer.com/cod.md — Duaer Crystal structures (COD)
`,
	'osv': `---
name: duaer-osv
description: >-
  Duaer OSV vulnerabilities. Known vulnerabilities in an open-source package or version from OSV, across npm, PyPI, Go, Maven, crates.io, and more, with severity and fixed versions.
  One successful search uses 1 Duaer credit.
---

# Duaer OSV vulnerabilities

Duaer OSV vulnerabilities queries the OSV database that aggregates GitHub advisories, PyPA, Go, RustSec, and other feeds. Give a package, optionally a version, or one vulnerability id.

## When to use

- Check whether a dependency version has known vulnerabilities.
- Find the version that fixes an advisory.

## When not to use

- CVSS details for one CVE. Use https://skills.duaer.com/nvd.md.
- Vulnerabilities attacked in the wild. Use https://skills.duaer.com/cisa-kev.md.

## Call

\`GET https://api.duaer.com/v1/data/osv?package=lodash&version=4.17.15\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`package\`, or \`id\`.

- \`package\` — Package name, such as lodash or requests.
- \`ecosystem\` — Optional. npm, PyPI, Go, Maven, crates.io, NuGet, RubyGems, Packagist, Pub, Hex, Hackage, SwiftURL, Debian, Alpine, or Ubuntu. Default npm.
- \`version\` — Optional. Only vulnerabilities that affect this version.
- \`id\` — Optional. One entry such as GHSA-29mw-wpgm-hmr9 or CVE-2021-44228.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/osv?package=lodash&version=4.17.15\` — vulnerabilities in lodash 4.17.15.
- \`GET https://api.duaer.com/v1/data/osv?package=django&ecosystem=PyPI&limit=5\` — recent Django advisories.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`vulnerabilityId\`, \`aliases\` — OSV id and CVE or GHSA aliases.
- \`severity\`, \`cvss\`, \`cwe\` — severity label, CVSS vector, and weakness ids.
- \`fixedVersions\` — versions that fix it for this package.
- \`published\`, \`modified\` — dates.

Rows are newest first.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/nvd.md — Duaer NVD CVE records
- https://skills.duaer.com/npm.md — Duaer npm packages
`,
	'nvd': `---
name: duaer-nvd
description: >-
  Duaer NVD CVE records. CVE records from the US National Vulnerability Database by keyword or CVE id, newest first, with CVSS score, weakness, and known-exploited date.
  One successful search uses 1 Duaer credit.
---

# Duaer NVD CVE records

Duaer NVD CVE records searches the US National Vulnerability Database. It returns the newest matching CVEs first, with the CVSS score NVD or the vendor assigned.

## When to use

- Get the CVSS score and description of a CVE.
- List recent CVEs for a product such as openssl.

## When not to use

- Affected package versions. Use https://skills.duaer.com/osv.md.
- Only CVEs attacked in the wild. Use https://skills.duaer.com/cisa-kev.md.

## Call

\`GET https://api.duaer.com/v1/data/nvd?words=openssl\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`words\` or \`cve\`.

- \`words\` — Keywords, such as openssl or log4j.
- \`cve\` — Optional. One record such as CVE-2021-44228.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/nvd?words=openssl\` — the newest OpenSSL CVEs.
- \`GET https://api.duaer.com/v1/data/nvd?cve=CVE-2021-44228\` — the Log4Shell record.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`cveId\`, \`description\` — id and English description.
- \`cvssScore\`, \`cvssSeverity\`, \`cvssVector\`, \`cvssVersion\` — best available CVSS (4.0, 3.1, 3.0, then 2).
- \`cwe\`, \`status\` — weakness ids and NVD analysis status.
- \`knownExploitedSince\` — date CISA listed it as exploited, when it is.
- \`published\`, \`lastModified\` — dates.

NVD allows few anonymous calls; a busy period can return 503 at 0 credits.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/osv.md — Duaer OSV vulnerabilities
- https://skills.duaer.com/cisa-kev.md — Duaer CISA known exploited vulnerabilities
`,
	'cisa-kev': `---
name: duaer-cisa-kev
description: >-
  Duaer CISA known exploited vulnerabilities. CVEs that CISA confirms are exploited in the wild, by vendor, words, or date added, with required action and remediation due date.
  One successful search uses 1 Duaer credit.
---

# Duaer CISA known exploited vulnerabilities

Duaer CISA known exploited vulnerabilities reads the CISA KEV catalog: CVEs with confirmed exploitation that US federal agencies must fix by a due date. Newest additions come first.

## When to use

- Prioritize patches that attackers already use.
- List new exploited CVEs for a vendor this month.

## When not to use

- Any CVE, exploited or not. Use https://skills.duaer.com/nvd.md.
- Package-level advisories. Use https://skills.duaer.com/osv.md.

## Call

\`GET https://api.duaer.com/v1/data/cisa-kev?days=30\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`words\`, \`vendor\`, or \`days\`.

- \`words\` — Words in the CVE, product, or description, such as remote code execution.
- \`vendor\` — Optional. Vendor, such as Microsoft or Cisco.
- \`days\` — Optional. Only entries added in the last N days, 1 to 3650.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/cisa-kev?days=30\` — entries added in the last 30 days.
- \`GET https://api.duaer.com/v1/data/cisa-kev?vendor=Microsoft&days=90\` — Microsoft CVEs exploited this quarter.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`cveId\`, \`vendor\`, \`product\` — the vulnerability and affected product.
- \`description\`, \`requiredAction\` — what it is and what to do.
- \`dateAdded\`, \`dueDate\` — catalog date and remediation deadline.
- \`ransomwareUse\`, \`cwe\` — Known when used in ransomware campaigns; weakness ids.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/nvd.md — Duaer NVD CVE records
- https://skills.duaer.com/osv.md — Duaer OSV vulnerabilities
`,
	'npm': `---
name: duaer-npm
description: >-
  Duaer npm packages. JavaScript packages in the npm registry by name or keywords, with latest version, license, and weekly downloads.
  One successful search uses 1 Duaer credit.
---

# Duaer npm packages

Duaer npm packages searches the public npm registry and ranks results by npm relevance, including popularity.

## When to use

- Find a JavaScript library for a task and compare downloads.
- Get the latest version and license of a package.

## When not to use

- Python packages. Use https://skills.duaer.com/pypi.md.
- Vulnerabilities in a package. Use https://skills.duaer.com/osv.md.

## Call

\`GET https://api.duaer.com/v1/data/npm?words=date%20picker\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`words\`.

- \`words\` — Package name or keywords, such as date picker.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/npm?words=date%20picker\` — date picker libraries.
- \`GET https://api.duaer.com/v1/data/npm?words=react&limit=3\` — the top React packages.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`package\`, \`version\`, \`description\`, \`license\` — package facts.
- \`weeklyDownloads\`, \`monthlyDownloads\`, \`dependents\` — popularity.
- \`keywords\`, \`repository\`, \`published\` — tags, source repository, and release date.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/pypi.md — Duaer PyPI package
- https://skills.duaer.com/osv.md — Duaer OSV vulnerabilities
`,
	'pypi': `---
name: duaer-pypi
description: >-
  Duaer PyPI package. One Python package from PyPI with latest version, license, supported Python versions, links, and known vulnerabilities.
  One successful search uses 1 Duaer credit.
---

# Duaer PyPI package

Duaer PyPI package reads one project from the Python Package Index by its exact name.

## When to use

- Check the latest version and Python support of a dependency.
- See whether PyPI lists known vulnerabilities for the latest release.

## When not to use

- Searching by keyword. Use https://skills.duaer.com/npm.md for JavaScript; PyPI has no search API.
- Vulnerabilities in older versions. Use https://skills.duaer.com/osv.md.

## Call

\`GET https://api.duaer.com/v1/data/pypi?package=requests\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`package\`.

- \`package\` — Exact package name, such as requests or numpy.

## Examples

- \`GET https://api.duaer.com/v1/data/pypi?package=requests\` — the requests package.
- \`GET https://api.duaer.com/v1/data/pypi?package=numpy\` — the numpy package.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`package\`, \`version\`, \`description\`, \`license\` — package facts.
- \`requiresPython\`, \`dependencies\` — Python range and number of declared dependencies.
- \`author\`, \`homepage\`, \`documentation\` — people and links.
- \`knownVulnerabilities\`, \`released\` — vulnerabilities PyPI lists for this release, and its upload time.

The search returns one row, or none when the name does not exist.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/osv.md — Duaer OSV vulnerabilities
- https://skills.duaer.com/npm.md — Duaer npm packages
`,
	'rdap': `---
name: duaer-rdap
description: >-
  Duaer Domain registration (RDAP). Registration record of a domain over RDAP: registrar, registration and expiry dates, status codes, name servers, and DNSSEC.
  One successful search uses 1 Duaer credit.
---

# Duaer Domain registration (RDAP)

Duaer Domain registration (RDAP) looks up a domain in the registry that runs its top-level domain, through the rdap.org bootstrap. RDAP is the structured successor to WHOIS.

## When to use

- Check who registered a domain and when it expires.
- Verify name servers and lock status before a migration.

## When not to use

- Company records. Use https://skills.duaer.com/npi.md for US clinicians or a company registry.
- Security advisories. Use https://skills.duaer.com/nvd.md.

## Call

\`GET https://api.duaer.com/v1/data/rdap?domain=github.com\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`domain\`.

- \`domain\` — Registered domain such as github.com. A URL is trimmed to its host.

## Examples

- \`GET https://api.duaer.com/v1/data/rdap?domain=github.com\` — the github.com record.
- \`GET https://api.duaer.com/v1/data/rdap?domain=wikipedia.org\` — the wikipedia.org record.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`domain\`, \`registrar\` — domain and registrar name.
- \`registered\`, \`expires\`, \`lastChanged\` — dates, YYYY-MM-DD.
- \`status\`, \`nameservers\`, \`dnssec\` — EPP status codes, name servers, and whether DNSSEC is signed.

The search returns one row. Some country-code domains have no RDAP service and return none.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/nvd.md — Duaer NVD CVE records
- https://skills.duaer.com/cisa-kev.md — Duaer CISA known exploited vulnerabilities
`,
	'treasury': `---
name: duaer-treasury
description: >-
  Duaer US Treasury fiscal data. US Treasury Fiscal Data: daily total public debt, average interest rates on Treasury securities, and Treasury reporting exchange rates.
  One successful search uses 1 Duaer credit.
---

# Duaer US Treasury fiscal data

Duaer US Treasury fiscal data reads three official US Treasury datasets, newest first: debt to the penny, average interest rates by security, and quarterly reporting exchange rates.

## When to use

- Get the latest US total public debt.
- Look up the rate the US Treasury uses to convert a foreign currency.

## When not to use

- Market exchange rates. Use https://skills.duaer.com/exchange-rates.md.
- Agency budgets. Use https://skills.duaer.com/usaspending.md.

## Call

\`GET https://api.duaer.com/v1/data/treasury?dataset=debt\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`dataset\`.

- \`dataset\` — \`debt\` (debt to the penny), \`interest\` (average rates by security), or \`exchange\` (rates per US dollar).
- \`words\` — Optional. Filter rows, such as Treasury Bills or China.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/treasury?dataset=debt&limit=5\` — the last five days of total public debt.
- \`GET https://api.duaer.com/v1/data/treasury?dataset=exchange&words=China\` — Treasury rates for the renminbi.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`date\` — record date.
- Debt: \`totalDebtUsd\`, \`debtHeldByPublicUsd\`, \`intragovernmentalUsd\`.
- Interest: \`security\`, \`securityType\`, \`averageRatePercent\`.
- Exchange: \`country\`, \`currency\`, \`perUsd\`, \`effectiveDate\`.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/usaspending.md — Duaer US federal agency budgets
- https://skills.duaer.com/exchange-rates.md — Duaer Exchange rates
`,
	'ecb': `---
name: duaer-ecb
description: >-
  Duaer ECB statistics. European Central Bank series by dataflow and key: euro reference exchange rates, interest rates, inflation, and money statistics.
  One successful search uses 1 Duaer credit.
---

# Duaer ECB statistics

Duaer ECB statistics reads series from the ECB Data Portal. A series is a dataflow plus a dotted key; use + to ask for several values in one position.

## When to use

- Get monthly euro reference rates for several currencies.
- Pull euro area inflation or policy rates into a table.

## When not to use

- Daily market rates for any pair. Use https://skills.duaer.com/exchange-rates.md.
- Central bank rates outside the euro area. Use https://skills.duaer.com/bis.md.

## Call

\`GET https://api.duaer.com/v1/data/ecb?dataflow=EXR&key=M.USD%2BJPY.EUR.SP00.A\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`dataflow\` and \`key\`.

- \`dataflow\` — Dataflow such as EXR (exchange rates), FM (financial markets), or ICP (inflation).
- \`key\` — Series key with + for several values, such as M.USD+JPY.EUR.SP00.A. Encode + as %2B in a URL.
- \`observations\` — Optional. Latest periods per series, 1 to 60. Default 5.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

Common keys: \`EXR\` \`D.USD.EUR.SP00.A\` daily dollar rate; \`ICP\` \`M.U2.N.000000.4.ANR\` euro area inflation; \`FM\` \`D.U2.EUR.4F.KR.DFR.LEV\` deposit facility rate.

## Examples

- \`GET https://api.duaer.com/v1/data/ecb?dataflow=EXR&key=M.USD%2BJPY.EUR.SP00.A\` — monthly dollar and yen rates against the euro.
- \`GET https://api.duaer.com/v1/data/ecb?dataflow=ICP&key=M.U2.N.000000.4.ANR&observations=12\` — euro area inflation for a year.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`series\`, \`seriesTitle\` — series key and ECB title.
- \`period\`, \`value\` — time period and figure, newest first.
- One field per key dimension, such as \`CURRENCY\`.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/bis.md — Duaer BIS statistics
- https://skills.duaer.com/eurostat.md — Duaer Eurostat statistics
`,
	'bis': `---
name: duaer-bis
description: >-
  Duaer BIS statistics. Bank for International Settlements series by dataflow and key: central bank policy rates, credit, property prices, and exchange rates by country.
  One successful search uses 1 Duaer credit.
---

# Duaer BIS statistics

Duaer BIS statistics reads series from the BIS Data Portal, which compiles central bank data for about 60 economies. Use + in the key to compare countries.

## When to use

- Compare central bank policy rates across countries.
- Track residential property prices or credit to GDP.

## When not to use

- Euro area only. Use https://skills.duaer.com/ecb.md.
- Broad development indicators. Use https://skills.duaer.com/world-bank.md.

## Call

\`GET https://api.duaer.com/v1/data/bis?dataflow=WS_CBPOL&key=M.US%2BGB%2BCN\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`dataflow\` and \`key\`.

- \`dataflow\` — Dataflow such as WS_CBPOL (policy rates), WS_SPP (property prices), or WS_XRU (exchange rates).
- \`key\` — Series key with + for several countries, such as M.US+GB+CN. Encode + as %2B in a URL.
- \`observations\` — Optional. Latest periods per series, 1 to 60. Default 5.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/bis?dataflow=WS_CBPOL&key=M.US%2BGB%2BCN\` — policy rates of the US, UK, and China.
- \`GET https://api.duaer.com/v1/data/bis?dataflow=WS_CBPOL&key=M.JP&observations=24\` — two years of Japan policy rates.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`series\`, \`seriesTitle\` — series key and BIS title.
- \`period\`, \`value\`, \`unit\` — time period, figure, and unit, newest first.
- One field per key dimension, such as \`REF_AREA\`.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/ecb.md — Duaer ECB statistics
- https://skills.duaer.com/imf.md — Duaer IMF indicators
`,
	'owid': `---
name: duaer-owid
description: >-
  Duaer Our World in Data. Country time series behind any Our World in Data chart, such as life expectancy or CO2 per capita, or find charts by words.
  One successful search uses 1 Duaer credit.
---

# Duaer Our World in Data

Duaer Our World in Data reads the data behind an Our World in Data chart for chosen countries, newest year first. Without a chart, it finds charts that match your words.

## When to use

- Compare countries on a long-run indicator such as life expectancy.
- Find which chart covers a topic, then read its data.

## When not to use

- Official national accounts. Use https://skills.duaer.com/world-bank.md.
- SDG series by code. Use https://skills.duaer.com/un-sdg.md.

## Call

\`GET https://api.duaer.com/v1/data/owid?chart=life-expectancy&countries=CHN,USA\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`chart\`, or \`words\` to find charts.

- \`chart\` — Chart slug from the chart URL, such as life-expectancy or co2-emissions-per-capita.
- \`countries\` — Optional. ISO codes such as CHN,USA; OWID_WRL is the world. Default CHN,USA.
- \`words\` — Optional. With no chart, list charts that match, such as electricity from solar.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/owid?chart=life-expectancy&countries=CHN,USA\` — life expectancy in China and the US.
- \`GET https://api.duaer.com/v1/data/owid?words=electricity%20from%20solar\` — charts about solar electricity.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- Chart data: \`chart\`, \`entity\`, \`code\`, \`year\`, \`unit\`, plus one field per chart column.
- Chart search: \`chart\` slug and \`countries\` covered.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators
- https://skills.duaer.com/un-sdg.md — Duaer UN SDG indicators
`,
	'tides': `---
name: duaer-tides
description: >-
  Duaer US tide predictions. High and low tide times and heights from NOAA for a US coastal station or the nearest station to a place.
  One successful search uses 1 Duaer credit.
---

# Duaer US tide predictions

Duaer US tide predictions returns NOAA high and low water predictions in metres above mean lower low water, in station local time. It covers US coasts and territories.

## When to use

- Plan a beach walk, launch, or survey around low tide.
- List the tides for the next few days at a harbour.

## When not to use

- Waves and swell. Use https://skills.duaer.com/marine.md.
- Coasts outside the US. NOAA has no stations there.

## Call

\`GET https://api.duaer.com/v1/data/tides?place=Seattle&days=2\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`station\`, \`place\`, or \`latitude\` and \`longitude\`.

- \`station\` — Seven-digit NOAA station id, such as 9414290 (San Francisco).
- \`place\` — Place name, such as Seattle. Duaer uses the nearest station.
- \`latitude\`, \`longitude\` — Optional. Coordinates instead of a place name.
- \`date\` — Optional. Start date, YYYY-MM-DD. Default today.
- \`days\` — Optional. 1 to 7. Default 2.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/tides?place=Seattle&days=2\` — two days of tides in Seattle.
- \`GET https://api.duaer.com/v1/data/tides?station=9414290&date=2026-10-01\` — San Francisco tides from October 1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`stationId\`, \`station\`, \`state\` — the station used.
- \`time\`, \`tide\`, \`heightM\` — local time, high or low, and height in metres.

A place with no US station nearby returns no rows.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/marine.md — Duaer Marine forecast
- https://skills.duaer.com/sunrise.md — Duaer Sunrise and sunset
`,
	'sunrise': `---
name: duaer-sunrise
description: >-
  Duaer Sunrise and sunset. Sunrise, sunset, solar noon, civil twilight, and day length for a place and up to seven consecutive days.
  One successful search uses 1 Duaer credit.
---

# Duaer Sunrise and sunset

Duaer Sunrise and sunset calculates sun times for a place in its local time zone, one row per day.

## When to use

- Plan photography or fieldwork around daylight.
- Compare day length across seasons or latitudes.

## When not to use

- Weather. Use https://skills.duaer.com/weather.md.
- Solar energy estimates. Use https://skills.duaer.com/nasa-power.md.

## Call

\`GET https://api.duaer.com/v1/data/sunrise?place=Reykjavik&date=2026-12-21\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`place\`, or \`latitude\` and \`longitude\`.

- \`place\` — Place name, such as Seattle. Duaer looks up its coordinates.
- \`latitude\`, \`longitude\` — Optional. Coordinates instead of a place name.
- \`date\` — Optional. YYYY-MM-DD. Default today.
- \`days\` — Optional. Consecutive days, 1 to 7. Default 1.

## Examples

- \`GET https://api.duaer.com/v1/data/sunrise?place=Reykjavik&date=2026-12-21\` — the shortest day in Reykjavik.
- \`GET https://api.duaer.com/v1/data/sunrise?place=Shanghai&days=7\` — a week of sun times in Shanghai.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`place\`, \`latitude\`, \`longitude\`, \`timezone\` — the point and its time zone.
- \`date\`, \`sunrise\`, \`sunset\`, \`solarNoon\` — ISO times with offset.
- \`dayLengthSeconds\`, \`civilTwilightBegin\`, \`civilTwilightEnd\` — daylight and twilight.

During polar day or night, \`sunrise\` and \`sunset\` are left out and the summary says so.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/tides.md — Duaer US tide predictions
- https://skills.duaer.com/weather.md — Duaer Weather forecast
`,
	'climate-projection': `---
name: duaer-climate-projection
description: >-
  Duaer Climate projection. High-resolution CMIP6 climate model projections to 2050 for a place: mean temperature and yearly rainfall by year or decade.
  One successful search uses 1 Duaer credit.
---

# Duaer Climate projection

Duaer Climate projection aggregates daily output of HighResMIP CMIP6 climate models (through Open-Meteo) for one point, from 1950 to 2050. Compare models to see the spread.

## When to use

- Estimate how warm a city may be in the 2040s.
- Compare rainfall trends between climate models.

## When not to use

- Past observations. Use https://skills.duaer.com/weather-history.md.
- Next week. Use https://skills.duaer.com/weather.md.

## Call

\`GET https://api.duaer.com/v1/data/climate-projection?place=Shanghai\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`place\`, or \`latitude\` and \`longitude\`.

- \`place\` — Place name, such as Seattle. Duaer looks up its coordinates.
- \`latitude\`, \`longitude\` — Optional. Coordinates instead of a place name.
- \`from\`, \`to\` — Optional. Years from 1950 to 2050. Default 2021 to 2050.
- \`step\` — Optional. \`year\` or \`decade\`. Default \`decade\`.
- \`models\` — Optional. Up to 3 of EC_Earth3P_HR, MRI_AGCM3_2_S, CMCC_CM2_VHR4, FGOALS_f3_H, HiRAM_SIT_HR, MPI_ESM1_2_XR, NICAM16_8S. Default EC_Earth3P_HR.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/climate-projection?place=Shanghai\` — Shanghai by decade to 2050.
- \`GET https://api.duaer.com/v1/data/climate-projection?place=Madrid&step=year&from=2040&models=EC_Earth3P_HR,MRI_AGCM3_2_S\` — yearly values from two models.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`place\`, \`latitude\`, \`longitude\` — the point.
- \`period\`, \`model\` — year or decade, and the climate model.
- \`meanTemperatureC\`, \`precipitationMmPerYear\`, \`years\` — averages and years in the period.

These are model projections, not forecasts; single years vary a lot between models.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather-history.md — Duaer Weather history
- https://skills.duaer.com/nasa-power.md — Duaer Solar and climate (NASA POWER)
`,
	'small-bodies': `---
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

\`GET https://api.duaer.com/v1/data/small-bodies?object=Apophis\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`object\`.

- \`object\` — Name, number, or designation, such as Eros, 433, Apophis, or 1P.

## Examples

- \`GET https://api.duaer.com/v1/data/small-bodies?object=Apophis\` — asteroid Apophis.
- \`GET https://api.duaer.com/v1/data/small-bodies?object=1P\` — comet Halley.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`designation\`, \`fullName\`, \`kind\`, \`orbitClass\` — identity and orbit class.
- \`nearEarthObject\`, \`potentiallyHazardous\`, \`earthMoidAu\` — Earth risk flags and minimum orbit distance.
- \`diameterKm\`, \`albedo\`, \`rotationHours\`, \`absoluteMagnitude\`, \`spectralType\` — physical data, when measured.
- \`semiMajorAxisAu\`, \`eccentricity\`, \`inclinationDeg\`, \`perihelionAu\`, \`aphelionAu\`, \`orbitalPeriodDays\` — orbit.

Several matches return one row each with \`designation\` only; call again with that designation.

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
`,
	'close-approaches': `---
name: duaer-close-approaches
description: >-
  Duaer Asteroid close approaches. Upcoming asteroid and comet close approaches to Earth from NASA JPL, with date, distance in lunar distances, speed, and size.
  One successful search uses 1 Duaer credit.
---

# Duaer Asteroid close approaches

Duaer Asteroid close approaches lists objects that will pass near Earth, soonest first, from the NASA JPL close-approach data.

## When to use

- See which asteroids pass within ten lunar distances this month.
- Report the closest upcoming flyby.

## When not to use

- Orbit and size of one object. Use https://skills.duaer.com/small-bodies.md.
- Space weather. Use https://skills.duaer.com/space-weather.md.

## Call

\`GET https://api.duaer.com/v1/data/close-approaches?days=60&lunarDistances=10\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`days\` or \`lunarDistances\`.

- \`days\` — Optional. From now through this many days, 1 to 365. Default 60.
- \`lunarDistances\` — Optional. Only approaches within this many Moon distances, 0.1 to 100. Default 10.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/close-approaches?days=60&lunarDistances=10\` — flybys within ten lunar distances in 60 days.
- \`GET https://api.duaer.com/v1/data/close-approaches?days=365&lunarDistances=1\` — objects passing closer than the Moon this year.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`designation\`, \`fullName\` — object.
- \`closeApproachUtc\` — time of closest approach.
- \`distanceAu\`, \`distanceKm\`, \`distanceLunar\` — nominal distance.
- \`relativeSpeedKms\`, \`absoluteMagnitude\`, \`diameterKm\` — speed, brightness, and size when known.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/small-bodies.md — Duaer Asteroids and comets (JPL)
- https://skills.duaer.com/space-weather.md — Duaer Space weather alerts
`,
	'exoplanets': `---
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

\`GET https://api.duaer.com/v1/data/exoplanets?words=TRAPPIST\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`words\`, \`method\`, or \`since\`.

- \`words\` — Part of a planet or host star name, such as TRAPPIST or Kepler-452.
- \`method\` — Optional. Transit, Radial Velocity, Microlensing, Imaging, Astrometry, and other archive methods.
- \`since\` — Optional. Discovered in or after this year, such as 2024.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/exoplanets?words=TRAPPIST\` — the TRAPPIST-1 planets.
- \`GET https://api.duaer.com/v1/data/exoplanets?method=Imaging&since=2024\` — recent directly imaged planets.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`planet\`, \`hostStar\` — names.
- \`discoveryYear\`, \`discoveryMethod\`, \`discoveryFacility\` — discovery.
- \`radiusEarth\`, \`massEarth\`, \`orbitalPeriodDays\`, \`equilibriumTempK\` — planet properties.
- \`distanceParsec\` — distance to the system.

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
`,
	'space-weather': `---
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

\`GET https://api.duaer.com/v1/data/space-weather?days=3\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`days\` or \`words\`.

- \`days\` — Optional. Alerts issued in the last N days, 1 to 30. Default 3.
- \`words\` — Optional. Words in the alert, such as geomagnetic or radio blackout.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/space-weather?days=3\` — alerts from the last three days.
- \`GET https://api.duaer.com/v1/data/space-weather?days=7&words=geomagnetic\` — geomagnetic messages this week.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`messageCode\`, \`productId\` — SWPC message code, such as WARK05.
- \`headline\`, \`message\` — first alert line and full text.
- \`issuedUtc\` — issue time.

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
`,
	'kp-index': `---
name: duaer-kp-index
description: >-
  Duaer Planetary Kp index. NOAA planetary Kp index in three-hour steps: recent observed geomagnetic activity or the three-day forecast, with storm level.
  One successful search uses 1 Duaer credit.
---

# Duaer Planetary Kp index

Duaer Planetary Kp index returns the Kp index from 0 to 9 in three-hour steps. Kp 5 and above is a geomagnetic storm, rated G1 to G5.

## When to use

- Judge aurora chances from the forecast.
- Check whether a recent storm reached G3.

## When not to use

- Alert texts. Use https://skills.duaer.com/space-weather.md.
- Solar energy at a site. Use https://skills.duaer.com/nasa-power.md.

## Call

\`GET https://api.duaer.com/v1/data/kp-index?view=forecast\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`view\`.

- \`view\` — \`recent\` (observed, newest first) or \`forecast\` (next three days).
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/kp-index?view=forecast\` — the three-day Kp forecast.
- \`GET https://api.duaer.com/v1/data/kp-index?view=recent&limit=8\` — the last 24 hours.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`timeUtc\`, \`kp\` — start of the three-hour step and the index.
- \`status\` — observed, estimated, or predicted.
- \`stormScale\` — G1 to G5 when Kp is 5 or more.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/space-weather.md — Duaer Space weather alerts
- https://skills.duaer.com/close-approaches.md — Duaer Asteroid close approaches
`,
	'met-museum': `---
name: duaer-met-museum
description: >-
  Duaer The Met collection. Artworks at The Metropolitan Museum of Art by artist, title, or subject, with date, medium, department, gallery, and public-domain image.
  One successful search uses 1 Duaer credit.
---

# Duaer The Met collection

Duaer The Met collection searches the open access collection of The Metropolitan Museum of Art in New York. Works with images come first.

## When to use

- Find works by an artist or on a subject.
- Get reusable public-domain images with credit lines.

## When not to use

- Chicago collection. Use https://skills.duaer.com/art-institute.md.
- Books. Use https://skills.duaer.com/open-library.md.

## Call

\`GET https://api.duaer.com/v1/data/met-museum?words=sunflowers\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`words\`.

- \`words\` — Artist, title, or subject, such as sunflowers.
- \`publicDomain\` — Optional. \`yes\` to keep only works free to reuse.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/met-museum?words=sunflowers\` — works about sunflowers.
- \`GET https://api.duaer.com/v1/data/met-museum?words=Hokusai&publicDomain=yes\` — public-domain Hokusai prints.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`objectId\`, \`artist\`, \`date\`, \`culture\` — work and maker.
- \`medium\`, \`classification\`, \`department\`, \`dimensions\` — object facts.
- \`publicDomain\`, \`image\`, \`creditLine\`, \`onView\` — reuse status, image link, credit, and gallery.

The Met loads each object separately, so large limits take longer.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/art-institute.md — Duaer Art Institute of Chicago
- https://skills.duaer.com/cleveland-art.md — Duaer Cleveland Museum of Art
`,
	'art-institute': `---
name: duaer-art-institute
description: >-
  Duaer Art Institute of Chicago. Artworks at the Art Institute of Chicago by artist, title, or subject, with date, medium, department, and IIIF image.
  One successful search uses 1 Duaer credit.
---

# Duaer Art Institute of Chicago

Duaer Art Institute of Chicago searches the museum collection API, ranked by relevance, with IIIF image links.

## When to use

- Find paintings by an artist in Chicago.
- Get image links for public-domain works.

## When not to use

- The Met collection. Use https://skills.duaer.com/met-museum.md.
- Encyclopedia articles. Use https://skills.duaer.com/wikipedia.md.

## Call

\`GET https://api.duaer.com/v1/data/art-institute?words=water%20lilies\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`words\`.

- \`words\` — Artist, title, or subject, such as water lilies.
- \`publicDomain\` — Optional. \`yes\` to keep only works free to reuse.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/art-institute?words=water%20lilies\` — water lily paintings.
- \`GET https://api.duaer.com/v1/data/art-institute?words=Hopper&publicDomain=yes\` — public-domain works related to Hopper.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`artworkId\`, \`artist\`, \`date\`, \`placeOfOrigin\` — work and maker.
- \`medium\`, \`department\` — object facts.
- \`publicDomain\`, \`image\` — reuse status and IIIF image link.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/met-museum.md — Duaer The Met collection
- https://skills.duaer.com/cleveland-art.md — Duaer Cleveland Museum of Art
`,
	'cleveland-art': `---
name: duaer-cleveland-art
description: >-
  Duaer Cleveland Museum of Art. Open access artworks at the Cleveland Museum of Art by artist, title, or subject, with creator, technique, gallery, and CC0 image.
  One successful search uses 1 Duaer credit.
---

# Duaer Cleveland Museum of Art

Duaer Cleveland Museum of Art searches the museum open access API. Most works with images are CC0.

## When to use

- Find works on view in a gallery.
- Get CC0 images for reuse.

## When not to use

- The Met collection. Use https://skills.duaer.com/met-museum.md.
- Chicago collection. Use https://skills.duaer.com/art-institute.md.

## Call

\`GET https://api.duaer.com/v1/data/cleveland-art?words=monet\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`words\`.

- \`words\` — Artist, title, or subject, such as monet.
- \`publicDomain\` — Optional. \`yes\` to keep only works free to reuse.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/cleveland-art?words=monet\` — works by Monet.
- \`GET https://api.duaer.com/v1/data/cleveland-art?words=armor&publicDomain=yes\` — CC0 armor.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`artworkId\`, \`accessionNumber\`, \`artist\`, \`date\`, \`culture\` — work and maker.
- \`technique\`, \`type\`, \`department\`, \`onView\` — object facts and gallery.
- \`publicDomain\`, \`image\` — CC0 status and web image.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/met-museum.md — Duaer The Met collection
- https://skills.duaer.com/art-institute.md — Duaer Art Institute of Chicago
`,
	'cms-nursing-homes': `---
name: duaer-cms-nursing-homes
description: >-
  Duaer US nursing homes (CMS). Medicare nursing homes from CMS Care Compare: beds, ownership, and star ratings for overall, inspections, staffing, and quality.
  One successful search uses 1 Duaer credit.
---

# Duaer US nursing homes (CMS)

Duaer US nursing homes (CMS) searches the CMS list of Medicare and Medicaid nursing homes with their five-star ratings.

## When to use

- Find highly rated nursing homes in a city.
- Compare staffing and inspection ratings.

## When not to use

- Hospitals. Use https://skills.duaer.com/cms-hospitals.md.
- Individual clinicians. Use https://skills.duaer.com/cms-clinicians.md.

## Call

\`GET https://api.duaer.com/v1/data/cms-nursing-homes?city=Boston&state=MA&minRating=4\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`name\`, \`city\`, \`state\`, \`zip\`, or \`minRating\`.

- \`name\` — Optional. Words in the name, such as care.
- \`city\` — Optional. City, such as Boston.
- \`state\` — Optional. Two-letter state code, such as MA.
- \`zip\` — Optional. Five-digit ZIP code, such as 02114.
- \`minRating\` — Optional. Overall rating from 1 to 5.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/cms-nursing-homes?city=Boston&state=MA&minRating=4\` — four- and five-star homes in Boston.
- \`GET https://api.duaer.com/v1/data/cms-nursing-homes?zip=10025\` — homes in one ZIP code.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`ccn\`, \`name\`, \`address\`, \`city\`, \`state\`, \`zip\`, \`phone\` — facility.
- \`ownership\`, \`chain\`, \`certifiedBeds\`, \`residentsPerDay\` — size and owner.
- \`overallRating\`, \`healthInspectionRating\`, \`staffingRating\`, \`qualityRating\` — 1 to 5 stars.
- \`abuseCitation\` — CMS abuse icon.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/cms-hospitals.md — Duaer US hospitals (CMS)
- https://skills.duaer.com/cms-clinicians.md — Duaer US clinicians (CMS)
`,
	'cms-clinicians': `---
name: duaer-cms-clinicians
description: >-
  Duaer US clinicians (CMS). Medicare doctors and clinicians from CMS Care Compare by name, specialty, or place, with practice, medical school, and Medicare assignment.
  One successful search uses 1 Duaer credit.
---

# Duaer US clinicians (CMS)

Duaer US clinicians (CMS) searches the CMS doctors and clinicians file of providers who bill Medicare, with practice address and specialty.

## When to use

- Find cardiologists in a state who accept Medicare assignment.
- Look up where a clinician practises and trained.

## When not to use

- Every US provider, including non-Medicare. Use https://skills.duaer.com/npi.md.
- Hospitals. Use https://skills.duaer.com/cms-hospitals.md.

## Call

\`GET https://api.duaer.com/v1/data/cms-clinicians?specialty=cardiology&state=MA\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`lastName\`, \`specialty\`, \`city\`, \`state\`, or \`zip\`.

- \`lastName\` — Optional. Exact last name, such as Smith.
- \`specialty\` — Words in the primary specialty, such as cardiology.
- \`city\` — Optional. City, such as Boston.
- \`state\` — Optional. Two-letter state code, such as MA.
- \`zip\` — Optional. Five-digit ZIP code, such as 02114.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/cms-clinicians?specialty=cardiology&state=MA\` — cardiologists in Massachusetts.
- \`GET https://api.duaer.com/v1/data/cms-clinicians?lastName=Smith&city=Boston\` — clinicians named Smith in Boston.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`npi\`, \`name\`, \`credential\`, \`gender\` — clinician.
- \`primarySpecialty\`, \`otherSpecialties\`, \`medicalSchool\`, \`graduationYear\` — training.
- \`practice\`, \`address\`, \`city\`, \`state\`, \`zip\`, \`phone\` — practice location.
- \`acceptsMedicareAssignment\` — accepts the Medicare-approved amount.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/npi.md — Duaer US provider registry (NPI)
- https://skills.duaer.com/cms-nursing-homes.md — Duaer US nursing homes (CMS)
`,
	'cdc-data': `---
name: duaer-cdc-data
description: >-
  Duaer CDC open data. CDC open datasets on data.cdc.gov: find datasets by words, then read rows from one dataset, such as influenza deaths or vaccination coverage.
  One successful search uses 1 Duaer credit.
---

# Duaer CDC open data

Duaer CDC open data works in two steps: search the data.cdc.gov catalog for datasets, then read rows from one dataset by its id.

## When to use

- Find the CDC dataset for a disease or indicator.
- Pull the first rows of a CDC dataset into a table.

## When not to use

- Global health statistics. Use https://skills.duaer.com/who-gho.md.
- Hospitals and clinicians. Use https://skills.duaer.com/cms-hospitals.md.

## Call

\`GET https://api.duaer.com/v1/data/cdc-data?words=influenza\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`words\`, or \`dataset\`.

- \`words\` — Words such as influenza deaths or vaccination coverage.
- \`dataset\` — Optional. Dataset id such as ynw2-4viq to read its rows instead.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/cdc-data?words=influenza\` — CDC datasets about influenza.
- \`GET https://api.duaer.com/v1/data/cdc-data?dataset=ynw2-4viq&limit=5\` — rows of the provisional flu, pneumonia, and COVID-19 deaths dataset.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- Dataset search: \`dataset\`, \`description\`, \`publisher\`, \`category\`, \`columns\`, \`dataUpdated\`, \`downloads\`.
- Dataset rows: \`dataset\` plus the dataset columns as fields.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/who-gho.md — Duaer WHO health statistics
- https://skills.duaer.com/cms-hospitals.md — Duaer US hospitals (CMS)
`,
	'nih-reporter': `---
name: duaer-nih-reporter
description: >-
  Duaer NIH RePORTER grants. NIH-funded research projects from NIH RePORTER by words, fiscal year, and institution, with investigators, institute, and award amount.
  One successful search uses 1 Duaer credit.
---

# Duaer NIH RePORTER grants

Duaer NIH RePORTER grants searches NIH-funded projects by title and terms, newest fiscal year first.

## When to use

- Find who NIH funds to work on a topic.
- List an institution’s NIH projects in a year range.

## When not to use

- Papers. Use https://skills.duaer.com/inspire-hep.md for physics or a literature source.
- US federal budgets. Use https://skills.duaer.com/usaspending.md.

## Call

\`GET https://api.duaer.com/v1/data/nih-reporter?words=CRISPR%20sickle%20cell\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide \`words\`.

- \`words\` — Words in the title or terms, such as CRISPR sickle cell.
- \`fromYear\`, \`toYear\` — Optional. Fiscal years, at most 30 years apart.
- \`organization\` — Optional. Institution name as NIH lists it, such as STANFORD UNIVERSITY.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/nih-reporter?words=CRISPR%20sickle%20cell\` — NIH projects on CRISPR for sickle cell.
- \`GET https://api.duaer.com/v1/data/nih-reporter?words=Alzheimer&fromYear=2024&toYear=2025&organization=STANFORD%20UNIVERSITY\` — Stanford Alzheimer projects.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, and \`summary\`, plus:

- \`applicationId\`, \`projectNumber\`, \`activityCode\` — NIH ids.
- \`fiscalYear\`, \`awardUsd\`, \`institute\` — funding.
- \`organization\`, \`investigators\` — institution and principal investigators.
- \`startDate\`, \`endDate\`, \`abstract\` — project period and abstract.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/usaspending.md — Duaer US federal agency budgets
- https://skills.duaer.com/wikipedia.md — Duaer Wikipedia
`,
};
