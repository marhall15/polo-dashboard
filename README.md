# The Global Polo Dashboard

A single-page dashboard blog tracking the latest polo from every global region, aggregated from the sport's primary press, federations and broadcasters.

**Live site:** https://marhall15.github.io/polo-dashboard/

---

## What it covers

| Section | Contents |
|---|---|
| **Triple Crown tracker** | Live status of the three Argentine legs — Hurlingham, Tortugas, Palermo |
| **The Wire** | 46 filterable stories across 7 regions |
| **Results ledger** | 29 finals from the 2026 global high-goal calendar, each linked to its source |
| **What's Next** | Forward calendar through to May 2027 |
| **Where to Watch** | Broadcasters and streaming platforms by region |
| **The Source Desk** | 28 outlets, federations and clubs |

Regions tracked: Argentina & South America, USA & North America, UK & Europe, Middle East, Asia, Africa, Oceania.

## Sources

Aggregates and links to reporting by Pololine, the USPA, PoloCam TV, La Dolfina, Los Machitos, the AAP, Prensa Polo, the HPA, Polo Times, POLO+10, FIP and others. It does not reproduce their articles — every result, score and date carries a link to its primary source.

Items that could not be independently verified are labelled as such in the copy rather than stated as fact.

## Structure

```
index.html        # page shell and section markup
css/styles.css    # dark "turf & brass" theme
js/data.js        # all content — edit this to update the dashboard
js/app.js         # render layer, reads window.POLO_DATA
```

No build step, no dependencies, no backend. It is four static files.

## Updating content

All content lives in `js/data.js` as a single `window.POLO_DATA` object:

- `meta.updated` / `meta.edition` — the dateline shown in the hero
- `meta.stats` — the five headline figures
- `crown.legs` — the Triple Crown tracker cards
- `stories` — The Wire. Set `region` to one of the `regions[].id` values
- `results` — the results ledger table
- `calendar` — the forward calendar
- `watch` / `sources` — the broadcaster and source directories

Every story and result takes a `sources: [{ name, url }]` array, which renders as the linked attributions in the card footer.

## Running locally

```bash
python3 -m http.server 8787
# then open http://127.0.0.1:8787
```

## Licence

Content summaries and original editorial are © the repository owner. All linked reporting remains the property of its respective publisher.
