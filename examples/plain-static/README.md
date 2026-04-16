# Plain Static Example

This example has no build step. Deploy the folder directly to any static host.

## Local Preview

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173/examples/plain-static/` if you run the command from the repository root, or `http://localhost:4173/` if you run it inside this folder.

## Deploy

Publish this folder as static files.

## Environment

This example reads no real environment variables. Use `.env.example` only as a documentation pattern.
