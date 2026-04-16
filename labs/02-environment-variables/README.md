# Lab 02: Manage Environment Variables

## Scenario

Your app needs configuration values that differ between local, preview, and production environments. Your task is to separate public configuration from secrets and document the deployment settings.

## Learning Goals

- Distinguish public variables from private secrets
- Understand build-time and runtime configuration
- Create `.env.example` files without exposing real values
- Verify deployed configuration safely

## Prerequisites

- A frontend example app from `examples/`
- Access to the deployment provider's environment variable settings

## Tasks

1. Copy the relevant `.env.example` file to a local `.env` file.
2. Replace placeholders with safe local values.
3. Start the app locally and confirm it reads the expected values.
4. Add matching variables in your hosting provider.
5. Deploy a preview build.
6. Verify the app behavior without exposing secret values in the UI.

## Verification

- `.env` is ignored by Git.
- `.env.example` contains only placeholder values.
- Public values are safe to expose in browser code.
- Secrets are never printed to the page, logs, or client bundle.

## Common Failures

- Symptom: the variable is `undefined` in the browser.
  Cause: the framework requires a public prefix.
  Fix: use the provider or framework prefix, such as `VITE_` or `NEXT_PUBLIC_`, only for public values.

- Symptom: production uses a stale value.
  Cause: the variable is read at build time.
  Fix: rebuild and redeploy after changing build-time configuration.

- Symptom: a secret appears in browser devtools.
  Cause: the secret was bundled into client-side code.
  Fix: move the secret to server-side code or remove it from the frontend.

## Stretch Exercises

- Document local, preview, and production values in a private team runbook.
- Add a deployment check that confirms required variables exist.
