## React Dashboard Application

A React 19 dashboard with a sidebar and top navigation plus a persistent
footer. Large or long pages scroll while both navigation bars stay in place.
Hooks are used throughout, with a simplified `fetch` helper for data access.

Built with Vite, TypeScript, react-router v6, and Bootstrap 5.

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
include hashes.

### `npm run preview`

Serves the production build locally so you can preview it before deploying.

### `npm run lint`

Runs ESLint over the project.

### `npm run typecheck`

Runs `tsc --noEmit` to type-check the project without emitting files.
