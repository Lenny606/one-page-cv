---
name: Project Management
description: "Guidelines for managing tasks, monitoring progress, and using the `temp` folder for references and data."
---

# Project Management Skill

This skill provides instructions for managing the lifecycle of the Astro project.

## Project Structure

- `temp/`: Contains temporary data, references, and task monitoring files.
  - `temp/task-log.md`: A log of completed and upcoming tasks.
  - `temp/references/`: Storage for project-related documents and assets.

## Workflow

1.  **Task Monitoring**: Before starting any major change, update `temp/task-log.md`.
2.  **Data Management**: Use `temp/` for any non-versioned datasets or reference materials.
3.  **Refactoring**: If a refactor exceeds 100 lines, ensure tests are run and the `walkthrough_plan.md` artifact is updated with code examples.

## Key Files

- `package.json`: Manage dependencies.
- `astro.config.mjs`: Configure Astro integrations (Tailwind, GSAP).
- `.github/workflows/deploy.yml`: Monitor deployment status.
