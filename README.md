# CodeCare Solutions — Website

One-page marketing site for CodeCare Solutions, Bangalore: websites, apps and
monthly handling for growing businesses. Hand-built from a blank page — no
template, no framework, no build step.

**Live:** <https://codecare-solutions.vercel.app>

## What's in here

| Path | What it is |
| --- | --- |
| `homepage.html` | The entire site in one file: HTML, CSS, inline SVG icons, vanilla JS. No dependencies. This is the source of truth. |
| `site/` | Deployment folder. `index.html` is a copy of `homepage.html`; this is what Vercel serves. `vercel.json` enables clean URLs. |
| `src/`, `index.html`, `dist/`, `package.json` | An older React + Vite build of the same business, kept for reference. Not deployed. |
| `.tools/` | Self-contained Node used only to run the Vercel CLI. Gitignored. |
| `screenshots/` | Captures from design reviews. |

## Editing locally

Open `homepage.html` straight in a browser — it has no imports to resolve. For a
local URL:

```bash
python3 -m http.server 5173 --bind 127.0.0.1
# http://localhost:5173/homepage.html
```

There is no build, no watcher and no hot reload. Save the file and refresh.

## Design system

Every colour on the page comes from one `:root` block at the top of the `<style>`
tag. Change these and the whole page re-skins.

| Token | Value | Used for |
| --- | --- | --- |
| `--primary` | `#EA460F` | buttons, links, kickers, highlighted words |
| `--primary-dark` | `#C93A0B` | hover states |
| `--accent` | `#FF7A3D` | small marks, icon strokes, chart line |
| `--accent-soft` | `#FFEDE3` | icon circles, pill backgrounds |
| `--ink` | `#101010` | headlines and dark sections |
| `--ink-soft` | `#3D3D3D` | card copy |
| `--muted` | `#6E6E6E` | supporting text |
| `--surface` | `#FAF7F2` | warm paper bands |
| `--surface-2` | `#F3ECE4` | deeper paper panels |
| `--line` | `rgba(17,17,17,.12)` | hairlines and borders |

Type is Archivo for headings and Inter for body, loaded from Google Fonts.
Layout is mobile-first, with breakpoints at 960, 900, 620, 520 and 400px.
`prefers-reduced-motion` is respected; the only motion is hover and focus.

## Page sections

Hero (with worldwide flags strip) → industries → four services → the
"from brand to website" explainer → four build phases → what's included →
the CodeCare standard → reviews → free-homepage timeline → FAQ → enquiry form →
footer.

## Deploying

The Vercel project is `codecare-solutions`, and production is aliased to
`codecare-solutions.vercel.app`. To ship a change:

```bash
cd site
cp ../homepage.html index.html
../.tools/node/bin/npx vercel deploy --prod --yes
```

That copy step is the only manual part. Editing `homepage.html` alone does **not**
change the live site.

## Contact handling

All enquiries go to **hellocodecaresolutions@gmail.com**. There is no backend:

- Every CTA is a `mailto:` link with a pre-filled subject.
- The enquiry form validates name, business and phone, then opens the visitor's
  mail app with the message written out.
- If no mail client is registered, the success panel offers **Copy my details**
  plus the address in plain text.

## Before you publish or claim

- Replace the five testimonials in `#reviews` with real client quotes. They are
  placeholder copy written for the layout, not real customers.
- Verify "100+ brands served · 50+ projects shipped" before repeating it anywhere else.
- Add real work samples — screenshots of live sites or apps. This is the biggest
  gap for a non-technical buyer.
- Prices are intentionally not shown; every project is quoted upfront.
- The phone number field accepts any number and is not verified.

## Properties

Static HTML. No cookies, no analytics, no tracking scripts, no third-party JS
beyond Google Fonts.
