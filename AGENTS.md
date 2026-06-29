# AGENTS.md

## Project

React 19 + TypeScript + Vite + react-router v6 + Bootstrap 5 dashboard.

## Verification commands

Run these from the project root. All should pass before considering work done:

- `npm run typecheck` — `tsc --noEmit` (strict mode)
- `npm run lint` — ESLint 10 flat config (`eslint.config.js`)
- `npm test` — Vitest run (jsdom, `src/test/setup.ts` loads jest-dom matchers)
- `npm run build` — increments `src/metadata.json` build number, then `vite build` -> `dist/`

When verifying a build without intending to release, use `npx vite build` directly instead of `npm run build` to avoid incrementing the build number. The build number is user-facing in the footer and referenced in JIRA tickets, so only bump it on actual release builds.

Quick check all four: `npm run typecheck && npm run lint && npm test && npx vite build`

## Dev server

`npm run dev` (or `npm start`) — Vite dev server on http://localhost:5173.

## Layout

- `src/index.tsx` — entry; mounts `AppProvider` > `BrowserRouter` > `AppRoutes` in `StrictMode`.
- `src/components/context/` — `AppContext` + `AppProvider` + `useAppContext` hook + `CurrentUserNav`.
- `src/components/start-layout/` — `routes.tsx`, `default-layout.tsx`, `nav.tsx`, `side-nav.tsx`, `footer.tsx`.
- `src/components/pages/` — `index-page.tsx`, `about-page.tsx`, `data-page.tsx`, `users-page.tsx`, `profile-page.tsx`, `settings-page.tsx`.
- `src/components/simple-grid/grid.tsx` — static data grid.
- `src/components/common/` — reusable form field components (`ValidatedForm`, `InputField`, `SelectField`, `OptionField`, `RadioField`); used by the Settings page.
- `src/lib/fetch-json.ts` — typed fetch helper; used by the Users page to fetch from JSONPlaceholder.
- `src/metadata.json` — build number, auto-incremented by `generate-buildno.js` on `npm run build`.
- `vite.config.ts` — Vite + Vitest config (`base: "./"` for relative asset paths).

## Notes

- Font Awesome 4 is still loaded via CDN `<link>` in `index.html`; not yet migrated.
- The Users page (`/users`) fetches live data from `https://jsonplaceholder.typicode.com/users` — requires network access.
- The top nav Sign out button clears auth state in AppContext; it's disabled when not authenticated.
- `"type": "module"` is set in package.json; `generate-buildno.js` is ESM.
