# swizzy-frontend-template-web-service

Minimal starting point for a swizzyweb frontend service: a React + Tailwind
frontend served by a swizzy web service backend. Ships with a bare page (no
routes beyond static serving) — build your UI and API routes from here.

## Web service

The Swizzy web service logic lives in `src/`. Use the `swizzy-ai-skill` MCP
tools (`create_router`, `create_controller`, `create_middleware`) to add API
routes rather than hand-editing generated files.

## React

The React code lives in `react/`, bundled separately by webpack (see below).
Image imports (`import logo from "./logo.png"`, or a CSS `url(...)` background
image) work out of the box — `webpack.config.cjs` has an asset-module rule for
common image extensions. A default `react/favicon.ico` is included and wired
into `HtmlWebpackPlugin`'s `favicon` option, so generated sites don't 404 on
`/favicon.ico`.

## Running

### Install

```sh
npm install
```

### Build and run immediately

```sh
npm run dev
```

### Only build

```sh
npm run build
```

### Running server after build

```sh
npm run server
```

### With swerve

After build you can also just run `swerve` in the root directory.

### Lint

```sh
npm run lint
npm run lint:fix
```

## Notes

- Requires express v5.x and swerve v0.6.0 or later.
