# Lab 05: Debug Failed Builds

## Scenario

A deployment fails even though the app worked locally. Your task is to read the build logs, identify the failure class, and document the fix.

## Learning Goals

- Read build logs without guessing
- Identify dependency, command, environment, and output path failures
- Reproduce the failure locally when possible
- Turn the fix into a checklist item

## Prerequisites

- A frontend project with a build command
- Access to deployment logs

## Tasks

1. Open the failed deployment log.
2. Find the first meaningful error, not the final summary line.
3. Classify the error.
4. Reproduce the build locally.
5. Apply the smallest fix.
6. Redeploy and record the result.

## Verification

- The next deployment succeeds.
- The fix is committed with a clear message.
- The failure and recovery steps are documented.
- The checklist is updated if the issue can happen again.

## Common Failures

- Symptom: command not found.
  Cause: missing script or package manager mismatch.
  Fix: update `package.json`, lockfile, or provider build command.

- Symptom: module not found.
  Cause: dependency is not installed or casing differs between local and Linux.
  Fix: add the dependency and match exact import casing.

- Symptom: output directory not found.
  Cause: provider output path does not match the framework.
  Fix: configure the correct output directory.

- Symptom: environment variable missing.
  Cause: provider environment variables are incomplete.
  Fix: add required variables and redeploy.

## Stretch Exercises

- Create a failure log taxonomy for your team.
- Add build command and output directory checks to pull request review.
