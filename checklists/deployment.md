# Deployment Checklist

Use this checklist before and after shipping a frontend deployment.

## Before Deploy

- [ ] Build command is documented.
- [ ] Output directory is documented.
- [ ] Required environment variables are configured.
- [ ] `.env.example` is up to date.
- [ ] Secrets are not committed.
- [ ] Lockfile is committed when the project uses one.
- [ ] Preview deployment passes smoke tests.
- [ ] Rollback path is known.

## After Deploy

- [ ] Production URL returns HTTP 200.
- [ ] Critical routes load.
- [ ] CSS, JavaScript, images, and fonts load.
- [ ] Browser console has no deployment-related errors.
- [ ] Forms or calls to APIs work.
- [ ] Canonical domain and redirects behave as expected.
- [ ] HTTPS certificate is valid.
- [ ] Monitoring or error reporting is checked.

## Release Note Prompt

Record:

- What changed
- Why it changed
- How it was verified
- Known risks
- Rollback instructions
