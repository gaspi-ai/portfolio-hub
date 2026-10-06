<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Workspace Guidelines for Portfolio Hub

All AI agents and pair-programming assistants working in this repository must strictly adhere to the following rules and standards.

---

## 1. Tech Stack

- **Framework**: Next.js 16 using the App Router (`src/app/`).
- **Runtime & UI Library**: React 19 (Server Components by default, `"use client"` only when client interactivity or state is required).
- **Language**: TypeScript with strict mode enabled (`tsconfig.json`). Never use `any` unless explicitly justified.
- **Styling Engine**: Tailwind CSS v4 utilizing `@import "tailwindcss";` and `@theme inline` tokens in `src/app/globals.css`.

---

## 2. Styling Standards

- **Mobile-First Responsive Layouts**: Design and code with mobile viewports in mind first, progressively enhancing with `sm:`, `md:`, `lg:`, and `xl:` breakpoints.
- **Dark-Mode First**: The application is built around a futuristic, sleek dark obsidian theme (`#07090e`) with ambient radial glows and glassmorphic panels (`glass-panel`).
- **Accessible Contrast Tokens**: Ensure all text, badges, and interactive controls maintain WCAG AAA/AA compliant contrast against dark backgrounds.
- **Micro-Interactions**: Incorporate subtle, performant transitions (`transition-all duration-300`, hover glows, and smooth active press feedback). Avoid jarring layout shifts.

---

## 3. Git Hygiene

- **Conventional Commits**: Every commit message must follow the Conventional Commits specification:
  - `feat: <description>` for new features or sections.
  - `fix: <description>` for bug, lint, or styling fixes.
  - `refactor: <description>` for code improvements without behavior change.
  - `chore: <description>` for tooling, config, or dependency updates.
- **Format**: Keep the summary line imperative, concise, and under 72 characters (e.g., `feat: add case study filtering to projects section`).
- **Clean Diffs**: Ensure only intentional project files are staged; never commit temporary artifacts, logs, or unignored build output.

---

## 4. Quality Gate & Verification

Before declaring **any** task or prompt complete:

1. **Type Safety**: Execute `npx tsc --noEmit` and confirm **zero** TypeScript compilation errors.
2. **Linting**: Execute `npm run lint` and confirm **zero** ESLint warnings or errors (including unescaped entities and unused imports).
3. **Runtime Verification**: Ensure the Next.js development server builds and serves the affected routes without runtime 500 exceptions or hydration errors.
