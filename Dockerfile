FROM node:24-alpine AS base
WORKDIR /app

# Install bun
RUN npm install -g bun

# Install dependencies
COPY package.json bun.lock bunfig.toml ./
RUN bun install --frozen-lockfile

COPY . .

# ── Development ──────────────────────────────────────────────────────────────
FROM base AS dev
EXPOSE 3000
CMD ["bun", "run", "dev"]

# ── Build ─────────────────────────────────────────────────────────────────────
FROM base AS build
RUN bun run build

# ── Production ────────────────────────────────────────────────────────────────
FROM node:24-alpine AS prod
RUN npm install -g bun
WORKDIR /app

COPY --from=build /app/.output ./.output
COPY --from=build /app/package.json ./

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
