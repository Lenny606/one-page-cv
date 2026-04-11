# One Page CV - Astro SSG

A premium, localized (EN) one-page CV built with Astro, Tailwind CSS v4, and GSAP. Designed for high performance and smooth interactive experiences.

## 🚀 Features

- **Astro v6 (SSG)**: Blazing fast static site generation.
- **Tailwind CSS v4**: Modern, CSS-first utility styling.
- **GSAP Animations**: High-performance, professional animations.
- **Quality Control**:
    - **Playwright**: Cross-browser E2E testing.
    - **ESLint & Prettier**: Automated code standards and formatting.
    - **Astro Check**: Component type and syntax validation.
- **Agent Orchestration**: Integrated verification scripts (`checklist.py`, `verify_all.py`).
- **GitHub Actions**: Automated deployment to GitHub Pages.

## 🛠️ Project Structure

- `src/`: Application source code (Astro components, styles).
- `tests/`: End-to-end test suite (Playwright).
- `.agent/`: Master validation scripts, specialist agents, and domain skills.
- `.github/workflows/`: CI/CD deployment pipeline.

## 📦 Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Start development server**:
    ```bash
    npm run dev
    ```
3.  **Run Quality Checks**:
    ```bash
    npm run lint       # Code analysis
    npm run check      # Astro validation
    npm test           # Core verification checklist
    ```
4.  **Run E2E Tests**:
    ```bash
    npm run test:e2e   # Playwright tests
    ```
5.  **Build for production**:
    ```bash
    npm run build
    ```

## 📝 Automation & Verification

The project includes advanced automation scripts located in `.agent/scripts/`:
- **Core Checklist**: `npm test` runs critical security, quality, and UX checks.
- **Full Verification**: `npm run verify` performing a comprehensive audit including Lighthouse and mobile tests.

Major project changes are tracked in `.agent/brain/` as part of the agentic development workflow.
