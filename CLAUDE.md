# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

Astro 6 (SSG), Tailwind CSS 4, GSAP, TypeScript. Node ≥22.12.0 required.

## Commands

```bash
npm run dev          # dev server at http://localhost:4321
npm run build        # production build
npm run check        # Astro type/syntax check
npm run lint         # ESLint
npm run lint:fix     # ESLint with auto-fix
npm run format       # Prettier (writes in place)
npm run test:e2e     # Playwright E2E (auto-starts dev server)
```

No `npm test` script — the README references Python validation scripts in `.agent/scripts/` that require separate setup.

## Code Style

Prettier config: single quotes, semicolons, 2-space indent, trailing commas (es5), `prettier-plugin-astro` for `.astro` files. ESLint extends TypeScript strict + `eslint-plugin-astro` with jsx-a11y rules.

## Environment Variables

`PUBLIC_GTM_ID` — Google Tag Manager container ID. Copy `.env.example` to `.env` to set it locally.

## Deployment

Pushing to `main` triggers GitHub Actions (`deploy.yml`): builds with `npm run build`, then SCPs `dist/` to the VPS at `/var/www/html/sites/one-page-cv/public`. Required secrets: `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_PASSWORD`.

## Playwright

Tests run on Chromium, Firefox, and WebKit. The config auto-starts the Astro dev server before running tests — no need to run `npm run dev` first.

## .agent/ Directory

This repo uses the Antigravity Kit (`@vudovn/ag-kit`) — a separate agent-orchestration framework with its own agents, skills, and workflows under `.agent/`. It is independent of Claude Code's native `.claude/` tooling.
