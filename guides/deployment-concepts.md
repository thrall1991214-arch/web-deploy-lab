# Deployment Concepts

This guide explains common deployment terms without tying them to a single provider.

## Build

A build turns source files into deployable output. For frontend projects, this often means optimized HTML, CSS, JavaScript, and assets.

## Output Directory

The output directory is the folder a hosting provider publishes. Common examples include `dist`, `build`, `out`, and `.next`.

## Preview Environment

A preview environment is a temporary deployment for a branch or pull request. It lets reviewers test changes before production.

## Staging Environment

Staging is a longer-lived environment used for final verification before production. Some teams use previews instead of staging.

## Production Environment

Production is the public or customer-facing deployment.

## Environment Variables

Environment variables configure an app without hard-coding values. Some variables are bundled at build time, while others are read at runtime.

## Rollback

A rollback restores a previous working deployment. A good rollback plan is known before production changes are merged.
