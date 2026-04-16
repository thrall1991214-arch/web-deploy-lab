# web-deploy-lab

A hands-on deployment lab for frontend developers.

[简体中文](README.zh-CN.md)

Documentation site: https://thrall1991214-arch.github.io/web-deploy-lab/

[![Documentation checks](https://github.com/thrall1991214-arch/web-deploy-lab/actions/workflows/docs-check.yml/badge.svg)](https://github.com/thrall1991214-arch/web-deploy-lab/actions/workflows/docs-check.yml)
[![Deploy documentation site](https://github.com/thrall1991214-arch/web-deploy-lab/actions/workflows/pages.yml/badge.svg)](https://github.com/thrall1991214-arch/web-deploy-lab/actions/workflows/pages.yml)

`web-deploy-lab` is an open source learning project for practicing the practical parts of shipping frontend applications: building, configuring, deploying, observing, and debugging real web projects.

The goal is simple: help frontend developers move from "it works locally" to "it is reliably online."

## What You Will Practice

- Preparing a frontend app for production builds
- Managing environment variables safely
- Deploying static sites and full-stack frontend apps
- Configuring custom domains, redirects, and rewrites
- Debugging failed builds and broken deployments
- Understanding preview, staging, and production environments
- Writing deployment checklists that teams can reuse

## Who This Is For

This project is for frontend developers who already know the basics of HTML, CSS, JavaScript, or a frontend framework, and want more confidence with the deployment workflow around real projects.

It is especially useful if you have ever wondered:

- Why does my app work locally but fail after deployment?
- What should I check before pushing to production?
- How do environment variables differ between local and hosted environments?
- How do I make a deployment process repeatable?

## Lab Format

Each lab is designed to be small, practical, and repeatable.

Most labs should include:

- A scenario
- Learning goals
- Required tools
- Step-by-step tasks
- Verification steps
- Common failure cases
- Stretch exercises

Start with the lab catalog in [labs/README.md](labs/README.md).

You can also browse the documentation website at https://thrall1991214-arch.github.io/web-deploy-lab/.

## Repository Structure

```text
.
+-- .github/              # Issue and pull request templates
+-- checklists/           # Deployment and release checklists
+-- docs/                 # GitHub Pages documentation site
+-- examples/             # Example frontend apps for labs
+-- guides/               # Deployment guides and Chinese translations
+-- labs/                 # Hands-on deployment lab catalog and exercises
+-- CODE_OF_CONDUCT.md    # Community behavior expectations
+-- CONTRIBUTING.md       # How to contribute labs and fixes
+-- LICENSE               # MIT License
+-- README.md             # Project overview
+-- SECURITY.md           # Responsible disclosure guidance
```

## Roadmap

- Add beginner deployment labs for static sites
- Add frontend framework deployment labs
- Add environment variable and secret handling exercises
- Add CI build and preview deployment labs
- Add troubleshooting guides for common deployment failures
- Add learner feedback and deployment failure story collection

See [TODO.md](TODO.md) for the active project task list.

## Contributing

Contributions are welcome. You can help by:

- Adding a new lab
- Improving an existing lab
- Reporting unclear instructions
- Sharing deployment failure cases
- Fixing typos or broken links

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
