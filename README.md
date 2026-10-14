# The Global Polo Dashboard

A single-page dashboard blog tracking the latest polo from every global region, aggregated from the sport's primary press, federations and broadcasters.

**Live site:** https://marhall15.github.io/polo-dashboard/

---

## What it covers

| Section | Contents |
|---|---|
| **Triple Crown tracker** | Live status of the three Argentine legs — Hurlingham, Tortugas, Palermo |
| **The Wire** | 50 filterable stories across 7 regions |
| **Results ledger** | 32 finals from the 2026 global high-goal calendar, each linked to its source |
| **What's Next** | Forward calendar through to May 2027 |
| **Drills & Stick-and-Ball** | 12 sourced drills plus a four-shots reference, filterable by type |
| **The Forum** | Community discussion, powered by GitHub Discussions via giscus |
| **Where to Watch** | Broadcasters and streaming platforms by region |
| **The Source Desk** | 28 outlets, federations and clubs |

Regions tracked: Argentina & South America, USA & North America, UK & Europe, Middle East, Asia, Africa, Oceania.

## The drills section

Every drill cites a named coach, club or governing-body rulebook. The mounted drills are built on rule text quoted from the HPA Blue Book and the USPA Rulebook.

Two deliberate omissions, both common online but unverifiable against a primary source:

- **No solo figure-of-eight ball-control drill.** The only verified "figure of eight" in polo is an unrelated six-rider team formation.
- **No "polo pit."** The apparatus is a **wooden horse**, housed in a hitting cage.

**Equipment rules differ by jurisdiction** and the page shows both: the HPA mandates eye protection for all players (since March 2026) and knee pads; the USPA mandates eye protection only for under-18s and does not require knee pads in its rule text. Helmet standards differ as well — NOCSAE ND050 for the USPA, a wider list of equestrian standards for the HPA.

## The forum

Discussion runs on **[GitHub Discussions](https://github.com/marhall15/polo-dashboard/discussions)**, embedded in the page with [giscus](https://giscus.app).

> **Setup requirement:** the [giscus GitHub App](https://github.com/apps/giscus) must be installed on this repository before visitors can post from the embedded widget. Until then the page falls back to a button linking to Discussions directly.

Posting requires a GitHub account. To open it to a wider audience later, swap the `mountGiscus()` block in `js/app.js` for a Disqus embed or point at a hosted Discourse instance — the surrounding markup stays the same.

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
- `drills` — the drills section: `primer`, `categories`, `shots`, `items`, `note`
- `forum` — giscus config, board rules and category links
- `watch` / `sources` — the broadcaster and source directories

Every story and result takes a `sources: [{ name, url }]` array, which renders as the linked attributions in the card footer.

## Running locally

```bash
python3 -m http.server 8787
# then open http://127.0.0.1:8787
```

## Licence

Content summaries and original editorial are © the repository owner. All linked reporting remains the property of its respective publisher.
