# File Structure

```
status.kervian.com/
├── index.html      # Main status page — lists all sites
├── site.html       # Per-site detail page (reads ?name= from the URL)
├── data.js         # All site data — edit this to update statuses
├── CNAME           # GitHub Pages custom domain config
└── docs/           # This documentation
    ├── overview.md
    ├── file-structure.md
    ├── data-reference.md
    └── deployment.md
```

## Key design decisions

- **Single data file.** `data.js` is the only file that needs to be edited for routine status updates. Both pages load it as a plain `<script>` tag.
- **No framework, no build.** The site is three files of standard HTML/CSS/JS. It can be edited and tested by opening the HTML files directly in a browser.
- **URL-based routing.** `site.html` reads the `?name=` query parameter to know which site to show, so no server-side routing is needed.
