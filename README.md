# CodeCare Solutions — Website

One-page marketing site for CodeCare Solutions, Bangalore: websites, apps and
monthly handling for growing businesses. Hand-built from a blank page — no
template, no framework, no build step.

**Live:** https://codecare-solutions.vercel.app

## What's in here

| Path | What it is |
| --- | --- |
| `homepage.html` | The entire site in one file: HTML, CSS, inline SVG icons, vanilla JS. No dependencies. This is the source of truth. |
| `site/` | Deployment folder. `index.html` is a copy of `homepage.html`; this is what Vercel serves. `vercel.json` enables clean URLs. |
| `src/`, `index.html`, `dist/`, `package.json` | An older React + Vite build of the same business, kept for reference. Not deployed. |
| `.tools/` | Self-contained Node used only to run the Vercel CLI. Gitignored. |
| `screenshots/` | Captures from design reviews. Gitignored. |

## Editing locally

Open `homepage.html` straight in a browser — it has no imports to resolve. For a
local URL:

```bash
python3 -m http.server 5173 --bind 127.0.0.1
# http://localhost:5173/homepage.html
