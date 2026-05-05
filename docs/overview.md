# Overview

**status.kervian.com** is a static status page for the Kervian network. It displays the live operational state of every Kervian-hosted site in one place.

The page is hosted on GitHub Pages and served at `status.kervian.com` via the `CNAME` file. No build step or server is required — it is plain HTML, CSS, and JavaScript.

## Pages

| File | URL | Purpose |
|------|-----|---------|
| `index.html` | `/` | Lists all tracked sites with their current status |
| `site.html` | `/site.html?name=<site>` | Detail view for a single site |
| `data.js` | loaded by both pages | Single source of truth for all site data |

## Status levels

| Value | Color | Meaning |
|-------|-------|---------|
| `operational` | Green | Site is fully up |
| `degraded` | Yellow | Site is up but experiencing issues |
| `outage` | Red | Site is down |
