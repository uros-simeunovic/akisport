# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AKI Sport is a Serbian sports apparel showcase website (jerseys, tracksuits, t-shirts, shorts) built with Next.js 15 App Router. It was generated via Vercel's v0.dev. The site is entirely static with no backend API — the contact form only logs to console.

## Commands

```bash
bun install          # Install dependencies
bun run dev          # Dev server at localhost:3000
bun run build        # Production build
bun run start        # Start production server
bun run lint         # ESLint
```

Package manager is **Bun**. No test framework is configured.

## Architecture

- **Single-page app**: Only route is `app/page.tsx` (home page)
- **Server Components** by default; `"use client"` used for `product-gallery.tsx`, `contact-section.tsx`, `theme-provider.tsx`
- **No global state** — local `useState` only in client components
- **No API layer** — purely static content
- **shadcn/ui** (new-york style) components in `components/ui/` (~55 Radix-based components)
- **Tailwind CSS v4** via PostCSS (`@tailwindcss/postcss`), no `tailwind.config.js` — theming is CSS-first with `oklch()` custom properties in `app/globals.css`
- **Dark/light theme** via `next-themes` (`theme-provider.tsx`)
- **Fonts**: Poppins (body) and Montserrat (headings) via `next/font/google`

## Key Components

- `product-gallery.tsx` — Main product display with tabbed jersey categories (fudbal/kosarka/odbojka), reusable `SimpleGallerySection`, and full-screen `Lightbox` with keyboard nav
- `contact-section.tsx` — Contact form (no backend wired up)
- `design-examples.tsx` — Design showcase grid

## Build Notes

- `next.config.mjs` has `typescript.ignoreBuildErrors: true` and `images.unoptimized: true`
- Path alias: `@/*` maps to project root
- Product images are in `public/` organized by category: `dresovi/{fudbal,kosarka,odbojka}/`, `majice/`, `sorcevi/`, `trenerke/`
- UI language is Serbian (lang="sr")
- Vercel Analytics is integrated in the root layout
