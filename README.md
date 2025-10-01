# SkillSearch MVP (React + Node + Express)

Minimal implementation of the Junior Full‑Stack Test.

## Stack
- **Frontend:** React + Vite + React Router + Tailwind (utility classes)
- **Backend:** Node.js + Express, data from `data/profiles.json`
- **Endpoints:** `GET /profiles`, `POST /search`

## Quick Start

### 1) Clone & install
```bash
git clone <repo-url>
cd skillsearch
```

#### Backend
```bash
cd server
npm install
npm run server         # http://localhost:4000
```

#### Frontend (in a second terminal)
```bash
cd client
npm install
npm run dev            # http://localhost:5173
```

### Scripts
- Backend: `npm run server` (prod), `npm run dev` (watch)
- Frontend: `npm run dev`, `npm run build`, `npm run preview`

## API
- `GET /profiles` → returns all profiles
- `POST /search` with `{ "skills": string[] }`
  - Filter: at least 1 overlapping skill
  - Score: +1 per match (max 5)
  - Sort: score desc, then rating desc
  - Response: `{ results: ProfileWithScore[], count: number }`

## Notes
- Search ranking logic is isolated on the backend (`/src/server.js`).
- Home includes a simple **TagCloud** with chaotic motion inside its container.
- UI has loading/empty/error states on Search and Profile pages.
