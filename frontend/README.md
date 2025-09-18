# Frontend (Vite + React)

This project has been migrated from Create React App to Vite for faster dev/build.

## Scripts

- `npm run dev`: Start dev server at `http://localhost:3000`
- `npm run build`: Build to `dist/`
- `npm run preview`: Preview the production build

## API base URL

- Configure `VITE_API_BASE_URL` in an `.env` file (e.g. `http://localhost:5000`).
- Dev server proxies `/api` to `http://localhost:5000` (see `vite.config.js`).

## Notes

- Static assets remain in `public/` (served at `/`).
- Entry HTML moved to `frontend/index.html`.
- JSX files now use `.jsx` extensions for Vite compatibility.
