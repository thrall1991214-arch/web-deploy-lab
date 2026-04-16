# Deployment Smoke Tests

Smoke tests are quick checks that catch obvious deployment failures.

## Basic Checks

- Open the production URL in a private browser window.
- Confirm the homepage returns HTTP 200.
- Confirm CSS and JavaScript load.
- Check the browser console for deployment-related errors.
- Hard refresh the page.

## Route Checks

- Open the homepage.
- Open one nested route.
- Refresh the nested route.
- Check a 404 route if the site defines one.

## Data Checks

- Confirm API calls use the expected environment.
- Submit one safe test form if the app has forms.
- Confirm public environment labels are correct.

## Domain Checks

- Open `http://`.
- Open `https://`.
- Open apex and `www` if both exist.
- Confirm redirects land on the canonical domain.

## Result Template

```text
URL:
Commit:
Checked by:
Result: pass/fail
Notes:
```
