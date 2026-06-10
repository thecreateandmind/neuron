# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projekt áttekintés

**Neuron Kids Learning Platform** — 9-12 éves tanulóknak szánt oktatási platform.

- **Frontend:** Angular 17 (standalone components) → `www.neuron.cmai.site`
- **Backend:** NestJS → `api.neuron.cmai.site`
- **Automatizáció:** n8n → `n8n.neuron.cmai.site`
- **Szerver:** `neuron.cmai.site` (Ubuntu, SSH kulcssal elérhető)

## Parancsok

### Frontend (Angular)
```bash
cd frontend
npm install
npm run build          # production build → dist/neuron-frontend/
```

### Backend (NestJS)
```bash
cd backend
npm install
npm run build          # TypeScript compile → dist/
node dist/main         # futtatás
```

### Deploy (szerveren)
```bash
ssh root@neuron.cmai.site
cd /opt/neuron-app && git pull
cd infra && docker compose up -d --build   # újraépít és indít
docker compose up -d --build frontend      # csak frontend
docker compose up -d --build backend       # csak backend
docker logs infra-n8n-1                    # logok
```

## Architektúra

```
neuron/
├── frontend/          # Angular 17 SPA
│   └── src/app/
│       ├── app.routes.ts          # routing (/, /tasks, /chat, /task/:id, /success)
│       ├── dashboard/             # főoldal
│       ├── task-list/             # feladatlista
│       ├── task-detail/           # feladat részletei
│       ├── chat-rooms/            # chat szobák
│       └── success/               # sikeres beküldés
├── backend/           # NestJS REST API
│   └── src/
│       ├── main.ts                # bootstrap, port 3000, CORS engedélyezett
│       ├── app.module.ts
│       └── app.controller.ts      # GET / → { status: 'ok' }
└── infra/             # Docker + Caddy
    ├── docker-compose.yml         # caddy + n8n + backend + frontend
    └── Caddyfile                  # reverse proxy + auto HTTPS
```

### Infrastruktúra

A szerveren `/opt/neuron-app/` mappában van a repo klón. A deploy folyamat:
1. `git pull` a szerveren
2. `docker compose up -d --build` az `infra/` mappából futtatva

A `docker-compose.yml` az `infra/` mappából relatív útvonalakkal hivatkozik a `../frontend` és `../backend` Dockerfile-okra.

### Frontend design rendszer

A design Google Stitch-ből lett generálva (projekt ID: `2694201894079775005`). A Tailwind konfig (egyedi színek, spacing, border-radius) az `src/index.html`-ben van definiálva a Tailwind CDN script **előtt** — ez kritikus, mert Angular komponensekből a `<script>` tagek nem futnak le. A komponensek `screen.html` fájljai az eredeti Stitch-exportált HTML-ek (referenciaként megőrizve).

**Design tokenek:** Quicksand font, pill-shaped gombok (`rounded-full`), sky blue primary (`#005db8`), mint green secondary (`#006e29`), 8px grid.

### n8n konfiguráció

`N8N_PROXY_HOPS=1` szükséges, mert Caddy proxy mögött fut — enélkül `X-Forwarded-For` hiba lép fel.

## Design frissítés Stitch-ből

Új screen leszedése a Stitch MCP API-n keresztül (lásd memory: `stitch_api.md`):
```bash
# MCP endpoint
POST https://stitch.googleapis.com/mcp
Header: X-Goog-Api-Key: <api_key>

# Screen HTML letöltése
{"method":"tools/call","params":{"name":"get_screen","arguments":{"name":"projects/2694201894079775005/screens/<screen_id>"}}}
# → result.content[0].text → JSON parse → htmlCode.downloadUrl → fetch HTML
```
