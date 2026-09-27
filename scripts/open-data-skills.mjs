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
};
