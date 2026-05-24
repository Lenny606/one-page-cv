---
name: verify
description: Run the full quality-gate suite for this project (type check, lint, E2E tests). Use before committing or when asked to verify changes.
---

Run each command in order. Stop and report the failure if any step exits non-zero.

1. `npm run check` — Astro type and syntax check
2. `npm run lint` — ESLint
3. `npm run test:e2e` — Playwright E2E tests (starts dev server automatically)

Report a pass/fail summary for each step. If all pass, confirm the changes are ready to commit.
