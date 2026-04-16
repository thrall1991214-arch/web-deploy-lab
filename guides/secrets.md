# Safe Secret Handling

Frontend deployments often need configuration. Some values are safe to expose, while others must stay private.

## Public Values

Public values can appear in browser code. Examples:

- Public API base URL
- Analytics project ID
- Feature flag name

## Secrets

Secrets must not appear in browser bundles, public logs, or documentation. Examples:

- API tokens
- Private keys
- Database passwords
- Webhook signing secrets

## Rules

- Commit `.env.example`, not `.env`.
- Use placeholders such as `replace-me`.
- Treat `VITE_` and `NEXT_PUBLIC_` variables as public.
- Rotate any secret that was committed or printed.
- Keep private production values in the deployment provider or secret manager.

## Review Checklist

- [ ] No real token appears in Git.
- [ ] No secret is referenced by client-side code.
- [ ] `.env.example` documents required variables.
- [ ] Production variables are configured in the provider.
