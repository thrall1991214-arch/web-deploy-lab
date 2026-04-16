# Security Policy

## Reporting a Vulnerability

If you find a security issue in `web-deploy-lab`, please do not publish exploit details in a public issue.

Instead, contact the maintainer privately through the repository owner's GitHub profile or another listed project contact.

Please include:

- A clear description of the issue
- Steps to reproduce it
- The affected files or lab instructions
- Any suggested fix, if available

## Secrets And Credentials

This project should never contain real deployment secrets, API keys, tokens, private domains, or account-specific credentials.

If you accidentally commit a secret:

1. Revoke the secret immediately.
2. Replace it with a documented placeholder.
3. Open an issue or pull request explaining the cleanup.

## Supported Versions

This project is documentation-first. Security fixes should target the latest version of the default branch.
