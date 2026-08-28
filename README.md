# Vega Charts PoC

A frontend-only workspace for experimenting with Vega charts and mocked conversational streams.

## App

- `apps/web` — React + Vite frontend

## Getting started

Requirements: Node.js 22.12 or newer and npm 10 or newer.

```sh
npm install
npm run dev
```

The frontend runs at [http://localhost:5173](http://localhost:5173). Streaming responses can be mocked entirely in the browser with `ReadableStream`, so no backend is required for the PoC.

## Commands

```sh
npm run dev        # Start the frontend in watch mode
npm run build      # Create the production build
npm run typecheck  # Type-check the app
npm run preview    # Preview the production build locally
```

## GitHub Pages

The production build is published from the `gh-pages` branch and served at [https://sachinkr23.github.io/vega-charts-poc/](https://sachinkr23.github.io/vega-charts-poc/).

The Vite base path is applied automatically when `GITHUB_PAGES` is set during the production build.
