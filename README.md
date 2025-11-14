# Tiptap Monorepo

This repository contains the frontend and backend applications for the Tiptap project.

## Getting Started

Install dependencies from the repository root:

```bash
npm install
```

> **Note:** If you are behind a corporate proxy, make sure your npm registry configuration allows access to the public npm registry.

### Available Scripts

Run scripts from the repository root using npm workspaces.

- `npm run dev:frontend` – start the Vite development server for the React app.
- `npm run dev:backend` – start the Express development server with hot-reload.
- `npm run build` – build both applications.
- `npm run lint` – lint all workspaces with ESLint.
- `npm run format` – format source files with Prettier.
- `npm run test` – run workspace test suites.

### Frontend

The frontend is a Vite + React + TypeScript application located in `apps/frontend`.

- Development server: [http://localhost:5173](http://localhost:5173)
- Entry point: `apps/frontend/src/main.tsx`
- Root component: `apps/frontend/src/App.tsx`

### Backend

The backend is an Express + TypeScript server located in `apps/backend`.

- Development server: [http://localhost:4000](http://localhost:4000)
- Health check endpoint: `GET /health`

Start the backend in development mode:

```bash
npm run dev:backend
```

### Linting & Formatting

ESLint and Prettier are configured at the repository root and shared across workspaces.

- ESLint configuration: `.eslintrc.cjs`
- Prettier configuration: `.prettierrc`

### TypeScript Configuration

A base `tsconfig.json` resides at the repository root and is extended by each workspace.
