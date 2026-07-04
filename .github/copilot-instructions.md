# Copilot Instructions

## Project Overview
**Altered Pixel** — French B2B software consulting and AI services firm. This is a TanStack Start (full-stack React) marketing site.

---

## Commands

```bash
bun run dev        # Start dev server
bun run build      # Production build
bun run lint       # ESLint
bun run format     # Prettier (printWidth 100, double quotes, trailing commas)
```

No test suite is configured.

### Running with Docker Compose

```bash
docker compose up          # Build and start the dev server at http://localhost:3000
docker compose up --build  # Force a rebuild (after dependency changes)
docker compose down        # Stop and remove the container
```

The `app` service mounts the source tree for hot-reload while keeping `node_modules` inside the container, so `bun install` does not need to run locally. Use this to launch or test the project without installing Bun on the host.

---

## Architecture

**TanStack Start** (Vite + Nitro) with **file-based routing** via TanStack Router.

- `src/routes/__root.tsx` — app shell; wraps everything in `QueryClientProvider` and error boundary
- `src/routes/index.tsx` — main landing page (single-file, all sections inline)
- `src/routeTree.gen.ts` — **auto-generated, never edit manually**; regenerates on `dev`/`build`
- `src/router.tsx` — router config; React Query `QueryClient` is injected into router context
- `src/start.ts` — server entry point (Nitro middleware, error wrapping)

**State**: React Query for server state; React Hook Form + Zod for forms; local `useState` for UI state. No Redux/Zustand.

---

## Routing Conventions

Routes live in `src/routes/` and map directly to URLs:

| File | URL |
|------|-----|
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/$id.tsx` | `/users/:id` |
| `posts/{-$category}.tsx` | `/posts/:category?` |
| `$.tsx` | `/*` (catch-all) |

Each route file exports `export const Route = createFileRoute('/path')(...)`. See `src/routes/README.md` for full routing conventions.

---

## UI Components

All reusable components are in `src/components/ui/` — 48 components following **shadcn/ui** patterns (Radix UI primitives + Tailwind + `cva` for variants). Add new components by following the same `cva`/`cn` pattern.

`src/components/PixelField.tsx` is the signature brand component — an SVG pixel-grid generator. Its underlying logic is in `src/lib/pixel-field.js` (with `pixel-field.d.ts` types).

---

## Styling

**Tailwind CSS v4** with custom design tokens defined in `src/styles.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--encre` | `#061B33` | Primary dark / ink |
| `--marque` | `#0059BB` | Brand blue |
| `--cyan` | `#26BEF2` | Accent cyan |
| `--brume` | `#8FA9C7` | Secondary / mist |
| `--trame` | `#10304F` | Tertiary / frame |
| `--papier` | `#F5F8FC` | Light / paper |

Custom `@utility` classes: `.eyebrow`, `.text-brume`, `.bg-encre`, `.bg-cyan`, `.text-cyan`, `.text-papier`, `.border-hairline`, `.ap-pulse`, `.ap-rise`.

Font: **Space Grotesk** (Google Fonts) for both `font-sans` and `font-display`. Dark theme by default.

Use `cn()` from `@/lib/utils` for conditional class merging.

## Language

All code, comments, and documentation should be in English. The marketing site content is in French, but the codebase is English-only.

## Wording

Never use straw-man positioning: do not define anything by opposition to a vague or
implied "bad other." Avoid "not X but Y", "it's not just… it's…", "this isn't about…
it's about…", emphatic "real/really/actually/genuinely" implying others are fake, and
false dichotomies (good option vs. caricatured alternative). State value directly,
through facts, with no disparaging contrast.

Never use the em dash (—) or the en dash (–), in any context. Replace them with appropriate alternatives:
- For a break or aside, use a comma, parentheses, or a colon, or split into two sentences.
- For a range, write "from X to Y" or use "to" (e.g. "2020 to 2026"), not "2020–2026".
- Never substitute a hyphen (-) flanked by spaces as a stand-in for a dash.
  Keep the regular hyphen (-) for compound words and normal spelling (e.g. "well-known").

---

## Key Conventions

- **Path alias**: `@/` maps to `src/` — always use it for imports
- **File naming**: routes and lib = kebab-case; components = PascalCase
- **No CSS Modules** — all utility-driven Tailwind
- **Error handling**: SSR errors rendered via `src/lib/error-page.ts`
