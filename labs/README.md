# Lab Catalog

This directory contains hands-on labs for practicing frontend deployment workflows.

## Lab Principles

Each lab should be:

- Practical: the learner ships or verifies something real
- Focused: one core deployment concept at a time
- Reproducible: clear setup, tasks, and verification steps
- Debuggable: includes common failures and recovery steps

## Planned Labs

### [01. Deploy a Static Site](01-static-site/README.md)

Practice turning a simple frontend project into a production deployment.

Topics:

- Production build output
- Static hosting
- Cache behavior
- Deployment verification

### [02. Environment Variables](02-environment-variables/README.md)

Practice using environment variables across local development, preview deployments, and production.

Topics:

- Public vs private values
- Build-time variables
- Runtime variables
- Safe secret handling

### [03. Preview Deployments](03-preview-deployments/README.md)

Practice reviewing changes before merging them into production.

Topics:

- Branch-based previews
- Pull request review workflows
- Smoke testing
- Rollback thinking

### [04. Custom Domains](04-custom-domains/README.md)

Practice connecting a deployed frontend app to a custom domain.

Topics:

- DNS records
- HTTPS certificates
- Redirects
- Domain verification

### [05. Failed Build Debugging](05-failed-build-debugging/README.md)

Practice diagnosing and fixing deployment failures.

Topics:

- Build logs
- Missing dependencies
- Environment mismatches
- Framework-specific output paths

## Lab Template

Use this structure when adding a new lab:

```markdown
# Lab Title

## Scenario

Describe the real-world deployment situation.

## Learning Goals

- Goal one
- Goal two

## Prerequisites

- Required tool or account
- Required local setup

## Tasks

1. Do the first step.
2. Do the second step.
3. Verify the result.

## Verification

- Expected result
- Command, URL, or checklist item to confirm success

## Common Failures

- Symptom: what the learner sees
- Cause: why it happens
- Fix: how to recover

## Stretch Exercises

- Extra challenge
```
