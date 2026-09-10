# data.js Reference

`data.js` exports a single global array `SITES`. Both `index.html` and `site.html` load this file and read from it at runtime.

## Site object shape

```js
{
  name:        string,   // display name and URL — used as a unique key
  status:      string,   // "operational" | "degraded" | "outage"
  description: string,   // one-line description shown on the detail page
  note:        string,   // optional — shown below description (e.g. ETA, incident ID)
                         // omit the field or set to "" to hide it
}
```

## Adding a site

Copy any existing block in `SITES` and fill in the fields:

```js
{
  name:        "example.kervian.com",
  status:      "operational",
  description: "Short description of what this site does.",
},
```

The new entry will appear automatically on the index page in the order it appears in the array.

## Updating a status

Change the `status` field on the relevant entry:

```js
status: "degraded",
```

Optionally add a `note` to communicate context or an estimated resolution time:

```js
note: "Investigating — ETA unknown.",
```

## Removing a site

Delete the entire object block from the `SITES` array.

## Current tracked sites

| Name | Status | Description |
|------|--------|-------------|
| kervian.com | operational | Main Kervian homepage |
| status.kervian.com | operational | This status page |
| assets.kervian.com | operational | Asset hosting for the Kervian network |
| countdown.kervian.com | operational | Countdown timer site |
| docs.kervian.com | degraded | Documentation site for the Kervian network |
| lmc.kervian.com | operational | Labyrinth co-op Minecraft server site |
| labyrinthmc.org | operational | Primary domain for the Labyrinth Minecraft server site (mirrors lmc.kervian.com) |
| cms.kervian.com | operational | Self-hosted CMS for the Kervian network's 11ty sites |
| tlp.kervian.com | operational | Self-hosted student newspaper management system |
| address.kervian.com | operational | Open addressing protocol for the near-Earth shell |
| focus.kervian.com | operational | Generated ambient focus-music track |
| sailsofcombat.kervian.com | operational | Turn-based age-of-sail gunnery game (under active development) |

This table is a snapshot for reference — `data.js` is the actual source of truth and can drift ahead
of this doc. If they disagree, trust `data.js`.
