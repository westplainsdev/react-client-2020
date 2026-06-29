## React Dashboard Application

A React 19 dashboard with a sidebar and top navigation plus a persistent
footer. Large or long pages scroll while both navigation bars stay in place.
Hooks are used throughout, with a typed `fetchJson` helper for data access.

Built with Vite, TypeScript, react-router v6, and Bootstrap 5.

## Pages

### Side navigation
- **Home** (`/`) — landing page with current route info.
- **About** (`/about`) — description of the application.
- **Data Example** (`/data`) — live data grid fetching posts from
  [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
- **Users** (`/users`) — user directory fetching live data from JSONPlaceholder,
  demonstrating the `fetchJson` helper with loading and error states.
- **404 Example** (`/404-example`) — demonstrates the not-found page.

### Top navigation
- **Settings** (`/settings`) — settings form using reusable form components
  (`ValidatedForm`, `InputField`, `SelectField`, `OptionField`, `RadioField`)
  with browser-native validation.
- **Profile** (`/profile`) — shows the current user's info from app context
  when authenticated, or a login prompt when not.
- **Sign out** — clears authentication state in the app context. Disabled when
  not signed in.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Starts the Vite dev server. Open the printed URL (default
http://localhost:5173) to view the app. The page hot-reloads on edits.

### `npm test`

Runs the Vitest test suite once. Use `npm run test:watch` for interactive
watch mode.

### `npm run build`

Increments the build number in `src/metadata.json` and builds the app for
production into the `dist/` folder. The build is minified and filenames
include hashes. The build number is displayed in the footer and can be
referenced in issue tracking.

### `npm run preview`

Serves the production build locally so you can preview it before deploying.

### `npm run lint`

Runs ESLint over the project.

### `npm run typecheck`

Runs `tsc --noEmit` to type-check the project without emitting files.

## Project Structure

- `src/index.tsx` — entry; mounts `AppProvider` > `BrowserRouter` > `AppRoutes`.
- `src/components/context/` — app context, provider, and `useAppContext` hook.
- `src/components/start-layout/` — routes, default layout, nav, side nav, footer.
- `src/components/pages/` — all page components.
- `src/components/common/` — reusable form field components.
- `src/components/simple-grid/` — live data grid component.
- `src/lib/fetch-json.ts` — typed fetch helper used by the data pages.
- `src/metadata.json` — build number, auto-incremented on `npm run build`.
