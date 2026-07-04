# AGENTS.md

## Project

**Altered Pixel** — marketing site for a French B2B software consulting and AI services firm. Built with TanStack Start (full-stack React).

## Commands

```bash
bun run dev        # Start dev server (port 3000)
bun run build      # Production build
bun run lint       # ESLint
bun run format     # Prettier
```

No test suite is configured.

### Running with Docker Compose

```bash
docker compose up          # Build and start the dev server at http://localhost:3000
docker compose up --build  # Force a rebuild (after dependency changes)
docker compose down        # Stop and remove the container
```

The `app` service mounts the source tree for hot-reload while keeping `node_modules` inside the container, so `bun install` does not need to run locally. Use this to launch or test the project without installing Bun on the host.

## Architecture

**TanStack Start** (Vite + Nitro) with file-based routing via TanStack Router.

- `src/routes/__root.tsx` — app shell; wraps everything in `QueryClientProvider` and error boundary
- `src/routes/index.tsx` — main landing page (all sections inline)
- `src/routeTree.gen.ts` — **auto-generated, never edit manually**; regenerates on `dev`/`build`
- `src/router.tsx` — router config; React Query `QueryClient` injected into router context
- `src/start.ts` — server entry point (Nitro middleware, error wrapping)
- `src/server.ts` — server fetch handler with SSR error normalization

### Routing Conventions

Routes live in `src/routes/` and map directly to URLs:

| File | URL |
|------|-----|
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/$id.tsx` | `/users/:id` |
| `_layout.tsx` | layout route (renders children via `<Outlet />`) |
| `$.tsx` | catch-all |

### State Management

React Query for server state; React Hook Form + Zod for forms; local `useState` for UI state. No Redux/Zustand.

## UI & Styling

**shadcn/ui** components in `src/components/ui/` (Radix UI + Tailwind + `cva` variants). Add new ones via `npx shadcn@latest add <component>` — config is in `components.json` (style: new-york, no RSC).

**Tailwind CSS v4** with custom design tokens in `src/styles.css`:

| Token | Hex | Usage |
|-------|-----|-------|
| `--encre` | `#061B33` | Primary dark / ink |
| `--marque` | `#0059BB` | Brand blue |
| `--cyan` | `#26BEF2` | Accent cyan |
| `--brume` | `#8FA9C7` | Secondary / mist |
| `--trame` | `#10304F` | Tertiary / frame |
| `--papier` | `#F5F8FC` | Light / paper |

Font: **Space Grotesk**. Dark theme by default. Use `cn()` from `@/lib/utils` for conditional class merging.

`src/components/PixelField.tsx` is the signature brand component — SVG pixel-grid generator with logic in `src/lib/pixel-field.js`.

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

## Conventions

- **Path alias**: `@/` maps to `src/` — always use it for imports
- **File naming**: routes and lib = kebab-case; components = PascalCase
- **Formatting**: Prettier with `printWidth: 100`, double quotes, trailing commas
- **No CSS Modules** — all utility-driven Tailwind
