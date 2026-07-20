# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm install

# Build (webpack bundle + TypeScript compile)
npm run build

# Build only the React frontend (webpack)
npm run build:webpack

# Build only the backend service (TypeScript → dist/)
npm run build:service

# Build and run the server
npm run dev

# Run server after build (uses swerve with local config)
npm run server

# Lint
npm lint

# Lint with auto-fix
npm run lint:fix
```

There are no test scripts defined in this project.

## Architecture

This is a **swizzyweb** full-stack template using the `@swizzyweb/swizzy-web-service` framework. The backend is Express-based (v5) wrapped in swizzy abstractions; the frontend is React + Tailwind CSS bundled by webpack.

### Request flow

```
HTTP request
  → swerve (process runner / reverse proxy)
    → Express app (WebService)
      → PageWebRouter (path: "") — serves static bundle/ files
      → ApiWebRouter (path: "api") — JSON API endpoints
          → FunnyJokeController (GET /api/funnyJoke)
              → FunnyJokeClient → external joke API
```

### Two separate build targets

| Target | Tool | Input | Output |
|--------|------|-------|--------|
| Frontend | webpack (Babel) | `react/` | `bundle/` |
| Backend | tsc | `src/` | `dist/` |

`tsconfig.json` **excludes** `react/` — the React code is transpiled by Babel via webpack, not by tsc. `dist/app.js` is the backend entry point; `bundle/index.html` + `bundle/js/bundle.js` are the frontend assets served statically.

### swizzy-web-service layering

Each layer narrows the state type passed down from the service:

- **WebService** (`src/web-service.ts`) — top-level; holds `SampleFrontendWebServiceState` (currently just `funnyJokeClient`).
- **WebRouter** (`src/routers/*/`) — receives service state, converts it to a router-scoped state via a `StateConverter`, registers controllers and middleware.
- **WebController** (`src/routers/ApiRouter/controllers/`) — receives router state, converts it to a controller-scoped state, registers a single route (`action` → path segment, `method` → HTTP verb).

To add a new API endpoint: create a new `WebController` subclass and register it in the relevant router's `webControllerClasses` array. To add a new route group, create a new `WebRouter` subclass and register it in `SampleFrontendWebService`'s `routerClasses` array.

### Configuration (swerve)

The service is launched by `swerve`, which reads a JSON config file:

- `web-service-config.example.json` — example for production/Docker use (`packageName` field).
- `web-service-config.local.example.json` — example for local dev (`servicePath: "."` loads from local dist/).

`serviceArgs` inside the service block (e.g. `funnyJokeBaseUrl`) are passed as props to `getWebservice()` in `src/app.ts`.

### Docker

`Dockerfile` runs `npm install && npm run build` then starts via `entrypoint.sh` (`npm run server`). The server listens on port `3005`.
