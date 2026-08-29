# status.kervian.com

A static status page for the Kervian network — the operational state of every
Kervian-hosted site, in one place.

**Live:** [status.kervian.com](https://status.kervian.com)

No build step, no server, no dependencies. Plain HTML, CSS and JavaScript
served directly by GitHub Pages.

## Updating a status

Edit `data.js` — it is the only file you need to touch.

```js
{
  name:        "kervian.com",
  status:      "operational",   // "operational" | "degraded" | "outage"
  description: "Main Kervian homepage.",
  note:        "",              // optional, shown under the description
}
```

Commit and push. GitHub Pages serves the repo root directly, so the change is
live as soon as the push completes.

## Files

| File | Purpose |
|---|---|
| `index.html` | The main status page — lists every site |
| `site.html` | Per-site detail page, selected by `?name=` |
| `data.js` | All site data. The only file you normally edit |
| `CNAME` | GitHub Pages custom-domain config |

## Documentation

| Doc | Covers |
|---|---|
| [`docs/overview.md`](docs/overview.md) | What the site is and how the pages relate |
| [`docs/data-reference.md`](docs/data-reference.md) | Full `SITES` object shape and field meanings |
| [`docs/file-structure.md`](docs/file-structure.md) | Repository layout |
| [`docs/deployment.md`](docs/deployment.md) | How GitHub Pages deployment works |

## A note on rendering user-controlled values

`site.html` reads `?name=` from the query string. That value is attacker-
controlled — anyone can craft a link to this page with any `name` in it — so it
must never be interpolated into `innerHTML`.

It previously was, which made the page vulnerable to reflected XSS: a link like
`site.html?name=<img src=x onerror=...>` executed arbitrary JavaScript on the
`status.kervian.com` origin for whoever clicked it. The "not found" branch now
builds DOM nodes and sets `textContent`, so the value can only ever render as
text.

If you extend this page, keep that rule: **anything from the URL goes through
`textContent` or `createElement`, never a template literal into `innerHTML`.**

Values from `data.js` are different — you control that file — but note that
they *are* still interpolated into `innerHTML` in the success branch. That is
fine as long as `data.js` stays hand-edited and never accepts outside input.
