# Lab 04: Connect a Custom Domain

## Scenario

Your site is deployed at a provider URL. Your task is to connect a custom domain, enable HTTPS, and verify redirects.

## Learning Goals

- Understand common DNS records
- Connect apex and subdomain records
- Verify HTTPS certificate issuance
- Check canonical redirects

## Prerequisites

- A deployed frontend site
- Access to a domain registrar or DNS provider
- Access to hosting provider domain settings

## Tasks

1. Choose the canonical domain, such as `www.example.com`.
2. Add the domain in the hosting provider.
3. Create the required DNS records.
4. Wait for DNS propagation.
5. Confirm HTTPS certificate status.
6. Test apex, `www`, HTTP, and HTTPS behavior.

## Verification

- The canonical URL loads with HTTPS.
- Non-canonical URLs redirect to the canonical URL.
- The certificate is valid in a fresh browser session.
- No mixed-content warnings appear.

## Common Failures

- Symptom: the domain does not resolve.
  Cause: DNS records are missing or not propagated.
  Fix: verify records with your DNS provider and wait for TTL.

- Symptom: HTTPS certificate is pending.
  Cause: the provider cannot validate the domain.
  Fix: confirm DNS records match the provider instructions.

- Symptom: both apex and `www` show duplicate sites.
  Cause: no canonical redirect is configured.
  Fix: configure one domain as canonical.

## Stretch Exercises

- Add a redirect map.
- Document the DNS records in a private deployment runbook.
