# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AKI Sport is a Serbian sports apparel showcase website (jerseys, tracksuits, t-shirts, shorts) built with Vite + React. The site is entirely static with no backend API — the contact form only logs to console.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server (Vite)
npm run build        # Production build (tsc + vite build)
npm run preview      # Preview production build
npm run lint         # ESLint
```

Package manager is **npm**. No test framework is configured.

## Architecture

- **Single-page app**: Entry point is `src/App.tsx`, rendered from `src/main.tsx`
- **Vite** as build tool with `@vitejs/plugin-react`
- **No global state** — local `useState` only in interactive components
- **No API layer** — purely static content
- **shadcn/ui** (new-york style) components in `src/components/ui/` (~55 Radix-based components)
- **Tailwind CSS v4** via PostCSS (`@tailwindcss/postcss`), no `tailwind.config.js` — theming is CSS-first with `oklch()` custom properties in `src/globals.css`
- **Dark/light theme** via `next-themes` (`theme-provider.tsx`)
- **Fonts**: Poppins (body), Montserrat (headings), Barlow Condensed (display) loaded via Google Fonts `<link>` in `index.html`

## Key Components

- `src/components/product-gallery.tsx` — Main product display with tabbed jersey categories (fudbal/kosarka/odbojka), reusable `SimpleGallerySection`, and full-screen `Lightbox` with keyboard nav
- `src/components/contact-section.tsx` — Contact form (no backend wired up)
- `src/components/design-examples.tsx` — Design showcase grid

## Build Notes

- Path alias: `@/*` maps to `./src/*` (configured in both `vite.config.ts` and `tsconfig.json`)
- Product images are in `public/` organized by category: `dresovi/{fudbal,kosarka,odbojka}/`, `majice/`, `sorcevi/`, `trenerke/`
- UI language is Serbian (lang="sr")
- `.npmrc` has `legacy-peer-deps=true` due to some packages not yet supporting React 19 peer deps
