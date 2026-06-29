# AGENTS.md

## Project

React 19 + TypeScript + Vite + react-router v6 + Bootstrap 5 dashboard.

## Verification commands

Run these from the project root. All should pass before considering work done:

- `npm run typecheck` — `tsc --noEmit` (strict mode)
- `npm run lint` — ESLint 10 flat config (`eslint.config.js`)
- `npm test` — Vitest run (jsdom, `src/test/setup.ts` loads jest-dom matchers)
- `npm run build` — increments `src/metadata.json` build number, then `vite build` -> `dist/`

Quick check all four: `npm run typecheck && npm run lint && npm test && npm run build`

## Dev server

`npm run dev` (or `npm start`) — Vite dev server on http://localhost:5173.

## Layout

- `src/index.tsx` — entry; mounts `AppProvider` > `BrowserRouter` > `AppRoutes` in `StrictMode`.
- `src/components/context/` — `AppContext` + `AppProvider` + `useAppContext` hook + `CurrentUserNav`.
- `src/components/start-layout/` — `routes.tsx`, `default-layout.tsx`, `nav.tsx`, `side-nav.tsx`, `footer.tsx`.
- `src/components/pages/` — `index-page.tsx`, `about-page.tsx`, `data-page.tsx`.
- `src/components/simple-grid/grid.tsx` — static data grid.
- `src/components/common/` — form field components (currently orphaned/unused).
- `src/lib/fetch-json.ts` — typed fetch helper (currently orphaned/unused).
- `src/metadata.json` — build number, auto-incremented by `generate-buildno.js` on `npm run build`.
- `vite.config.ts` — Vite + Vitest config (`base: "./"` for relative asset paths).

## Notes

- Font Awesome 4 is still loaded via CDN `<link>` in `index.html`; not yet migrated.
- `src/components/common/*` and `src/lib/fetch-json.ts` are not imported anywhere (dead code kept for reference).
- `"type": "module"` is set in package.json; `generate-buildno.js` is ESM.
