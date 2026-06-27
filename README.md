# DkFit — Copenhagen Fitness Map

A "Fit" edition for Denmark, starting with Copenhagen. Same engine as FoFit —
the only edition-specific files are `config.js` (map centre, brand colours) and
`data.js` (the gyms).

> Status: **comprehensive greater-Copenhagen dataset** — 89 locations:
> **PureGym ×27** (address/coords/hours/photos from puregym.dk structured data),
> **SATS ×28** and **LOOP ×22** (addresses from their sites, coords geocoded),
> **FitnessX ×10** (budget 24h-ish chain, all classes incl., no binding),
> plus Butcher's Lab and Beatriders. Covers central CPH out to
> Helsingør, Hillerød, Roskilde, Køge, Dragør. Prices/offers are chain-level and
> time-sensitive (`DATA_UPDATED`). The location-tab strip is horizontally
> scrollable and **filters to whatever's in the current map view**.
>
> Extras: a **Browse / compare** page (`compare.html`, sortable + filterable) via
> the ≣ button; an **Active offer** badge per gym; chain **Classes**; chain hero
> images where available; and a **View on Google** link (reviews/photos/score
> live on Google — they need the paid Places API to pull in directly).
>
> ⚠️ **Offers and prices are time-sensitive** (e.g. the SATS "free until 1 Aug"
> campaign expires 30 Jun 2026) — refresh `data.js` periodically. All entries are
> still `verified:false` pending per-location confirmation.

## Files

| File | What it is |
|------|------------|
| `index.html` | The engine — identical across all "Fit" editions. Reads `config.js` + `data.js`. |
| `config.js`  | This edition: title, map centre/zoom, per-brand colours. |
| `data.js`    | The gyms. **Edit this to add real Copenhagen locations.** |
| `README.md`  | This file. |

## Run / deploy

Open `index.html` (needs internet for map tiles/font/Leaflet). Deploy on GitHub
Pages exactly like FoFit: publish the folder as a public repo → Settings → Pages
→ Deploy from branch `main` / root. Live at `https://<user>.github.io/DkFit/`.

## Adding real gyms

Edit `data.js`. Each location is one object — copy the shape from FoFit's data
(price tiers incl. the PBS/direct-debit rate, weekly hours, classes, amenities).
Set `verified: true` once details are confirmed from the gym's own site, and put
the real `[lat, lng]` (geocode the street address).

Brands group automatically from the text before `" — "` in `name`; give each
brand a colour in `config.js → brandColors`.

## This is part of a multi-country kit

DkFit, FoFit (and future NoFit, SeFit…) share one engine. The reusable template
and a scaffold script live in `../_fitkit/`. To spin up a new country, scaffold a
new edition (sets centre + brand colours), then research its gym data.
