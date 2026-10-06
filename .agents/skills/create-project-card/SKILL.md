---
name: create-project-card
description: Automatically formats and adds a new showcased case study or project item into the portfolio projects data file and checks image asset resolution.
---

# Create Project Card Skill

This skill guides the AI assistant in creating, validating, and inserting a new project case study into the **Portfolio Hub** application.

---

## Required & Standard Inputs

When creating a new project card, collect or define the following attributes:

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | **Yes** | Project title (e.g., "Neural Canvas AI") |
| `tags` | `string[]` | **Yes** | List of technologies (e.g., `["Next.js", "TypeScript", "Tailwind CSS"]`) |
| `description` | `string` | **Yes** | Comprehensive summary of the project's purpose and architecture |
| `liveUrl` | `string` | **Yes** | URL pointing to the live application or demo |
| `githubUrl` | `string` | **Yes** | URL pointing to the source code repository |
| `category` | `string` | Optional | Must be one of: `'AI & ML' \| 'Cloud & DevOps' \| 'Fintech & Web3' \| 'DevTools'` (defaults to `'DevTools'`) |
| `tagline` | `string` | Optional | Concise one-line subtitle |
| `image` | `string` | Optional | Asset path (defaults to `/projects/<slug>.jpg`) |
| `metrics` | `string` | Optional | Quantifiable impact metric (e.g., `"Reduced latency by 50%"`) |
| `highlights` | `string[]` | Optional | List of 2–3 architectural breakthroughs |

---

## Workflow Steps

### Step 1: Slug & ID Generation
Generate a URL-safe kebab-case `id` from the `title`:
```typescript
const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
```

### Step 2: Image Asset Resolution & Verification
1. Ensure the referenced image asset exists in the `public/projects/` directory (e.g., `public/projects/<slug>.jpg`).
2. Verify image specifications:
   - Recommended aspect ratio: `16:9`
   - Optimal format: `.jpg`, `.webp`, or `.png`
   - If missing, generate or provide a matching high-tech asset in `public/projects/`.

### Step 3: Insert into `src/data/portfolioData.ts`
Append the new object to the `projects` array in `src/data/portfolioData.ts`, adhering strictly to the `Project` interface:

```typescript
{
  id: "<slug>",
  title: "<title>",
  tagline: "<tagline>",
  description: "<description>",
  image: "/projects/<slug>.jpg",
  tags: [...],
  category: "<category>",
  demoUrl: "<liveUrl>",
  githubUrl: "<githubUrl>",
  featured: false,
  metrics: "<metrics>",
  highlights: [
    "<highlight 1>",
    "<highlight 2>"
  ],
}
```

---

## Quality Gate & Verification

Before concluding the task:

1. **TypeScript Type Safety**:
   Run `npx tsc --noEmit` inside `portfolio-hub/` and verify that the new object matches the `Project` interface with **zero errors**.

2. **Lint & Syntax Validation**:
   Run `npm run lint` and verify there are no unescaped entity errors or unused imports.

3. **Visual & Layout Verification**:
   - Verify that the card renders in the `#projects` section at `http://localhost:3000`.
   - Test category filtering to confirm the new project displays under its designated category.
   - Test search filtering with keywords from its `title` and `tags`.
   - Open the "View Architecture" modal to confirm that all highlights and links function without layout overflow or distortion.
