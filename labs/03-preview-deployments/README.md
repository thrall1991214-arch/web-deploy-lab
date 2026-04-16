# Lab 03: Use Preview Deployments

## Scenario

Your team wants to review frontend changes before they reach production. Your task is to use branch-based preview deployments and verify changes from a pull request.

## Learning Goals

- Connect pull requests to preview deployments
- Run smoke tests against a preview URL
- Compare preview behavior with production
- Decide when a change is ready to merge

## Prerequisites

- A GitHub repository
- A hosting provider that supports preview deployments
- A small frontend change to test

## Tasks

1. Create a branch for a small visible change.
2. Open a pull request.
3. Wait for the provider to create a preview URL.
4. Run the smoke test guide from `guides/smoke-tests.md`.
5. Compare the preview URL with the production URL.
6. Record the result in the pull request.

## Verification

- The pull request includes a preview URL.
- The preview reflects the branch changes.
- Production is unchanged before merge.
- Reviewer feedback can be tested without local setup.

## Common Failures

- Symptom: no preview deployment appears.
  Cause: the provider is not connected to the repository or branch.
  Fix: check provider project settings and GitHub permissions.

- Symptom: preview uses production data unexpectedly.
  Cause: preview environment variables are missing.
  Fix: define preview-specific variables.

- Symptom: preview build fails but local build works.
  Cause: Node version, lockfile, or environment mismatch.
  Fix: pin versions and commit the lockfile.

## Stretch Exercises

- Add a pull request checklist item for preview smoke tests.
- Add a comment template for preview deployment results.
