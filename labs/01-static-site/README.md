# Lab 01: Deploy a Static Site

## Scenario

You have a small HTML, CSS, and JavaScript site that works locally. Your task is to publish it as a production static site and verify the deployed result.

## Learning Goals

- Identify the files that should be deployed
- Serve a static site locally before deployment
- Verify links, assets, and browser behavior after deployment
- Record a repeatable deployment checklist

## Prerequisites

- A GitHub account
- A local Git checkout
- A static hosting provider, such as GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any equivalent platform

## Tasks

1. Open `examples/plain-static`.
2. Serve the folder locally with any static server.
3. Confirm the page loads, styles apply, and JavaScript runs.
4. Deploy the folder to a static hosting provider.
5. Open the production URL in a fresh browser session.
6. Record the production URL and any issue you found.

## Verification

- The production page returns HTTP 200.
- CSS and JavaScript files load without 404s.
- The page works after a hard refresh.
- The browser console has no deployment-related errors.

## Common Failures

- Symptom: CSS does not load.
  Cause: the deployment root is wrong or asset paths are absolute.
  Fix: deploy the correct folder and use relative asset paths.

- Symptom: the homepage works but nested URLs return 404.
  Cause: the host does not know how to serve client-side routes.
  Fix: add the provider-specific fallback or rewrite rule.

- Symptom: an old version is still visible.
  Cause: browser or CDN cache.
  Fix: hard refresh, purge cache, or use fingerprinted assets.

## Stretch Exercises

- Add a `404.html` page.
- Add a custom domain.
- Add a post-deploy smoke test checklist.
