# Merch Tech Take-Home Assignment

## Setup Instructions

## Prerequisite
`Node.js	>= 16.x (Node 18 LTS recommended)`
`npm (Node Package Manager)	>= 8.x`

### Backend
1. `cd backend`
2. `npm install`
3. `node index.js`
- Runs on `http://localhost:4000`

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm start`
- Runs on `http://localhost:3000`

## API Routes

- `GET /api/skus` – List all SKUs
- `GET /api/skus/:id` – Get SKU details with notes
- `POST /api/skus/:id/notes` – Add a note (JSON: `{ note: "your note" }`)

## Assumptions

- Notes are stored in memory for simplicity.
- User roles are not implemented in base version.
- Mock data is static.

## If I Had More Time

- Implement role-based UI
- Persist notes using a file or DB
- Add filtering/sorting/search
- Deploy on Vercel/Render
- Add unit tests and loading/error UI