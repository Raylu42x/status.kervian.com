# Deployment

The site is deployed via **GitHub Pages**.

## How it works

1. Push changes to the repository's default branch.
2. GitHub Pages serves the repo root directly — no build step.
3. The `CNAME` file tells GitHub Pages to serve the site at `status.kervian.com`.

## Making a change live

```bash
git add data.js          # or whichever files changed
git commit -m "your message"
git push
```

GitHub Pages picks up the push automatically. Changes are usually live within 30–60 seconds.

## Custom domain

The `CNAME` file contains a single line:

```
status.kervian.com
```

DNS must have a CNAME record pointing `status.kervian.com` to the GitHub Pages endpoint. Do not delete or rename the `CNAME` file or the custom domain will stop resolving.
