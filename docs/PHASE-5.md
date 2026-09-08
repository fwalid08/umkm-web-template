# Phase 5 — Multi-tenant Platform

Phase 5 adds the platform boundary around the config-driven website engine.

## 5A — Backend & data model

`server/platform.ts` provides a small Express API with persistent storage under `data/platform.json` for development. The storage model contains:

- User
- Workspace
- Website
- ContentVersion
- Asset
- Theme
- Domain
- PublishRecord
- Session

The repository is intentionally isolated behind the API so the JSON store can later be replaced by PostgreSQL without changing the frontend contracts.

## 5B — Website persistence

A website owns versioned `BusinessConfig` snapshots. The latest version is returned by `GET /api/websites/:websiteId` and can be saved through `POST /api/websites/:websiteId/versions`.

The existing engine normalizer remains the rendering boundary: persisted config should be passed through `normalizeBusinessConfig()` before rendering.

## 5C — Version history

Every save creates an immutable version number. Versions can be inspected and restored; restore creates a new version instead of mutating history.

## 5D — Assets

The platform has an asset metadata API (`GET/POST/DELETE /api/websites/:websiteId/assets`). Asset binaries are represented by URLs for now, keeping storage provider concerns out of the engine. `AssetManager` remains the abstraction point for S3/R2/local storage in the next infrastructure pass.

## 5E — Authentication & workspace

Registration creates a user and workspace. Login creates a 30-day hashed session token. Website APIs verify workspace ownership before allowing access. This provides the minimum multi-tenant isolation needed by the builder.

## 5F — Publishing

Publishing selects the latest content version, records an immutable publish record, marks the website as published, and returns a public URL. The artifact remains config-first so a production renderer can be deployed independently.

## 5G — Domains

Domains can be mapped to a website and verified. The API returns a DNS TXT challenge. Production DNS/SSL automation should be implemented in the infrastructure phase rather than in the browser.

## Running

```bash
pnpm install
pnpm platform
```

Optional environment variables:

```env
PORT=8787
PUBLIC_BASE_URL=http://localhost:8787
CORS_ORIGIN=http://localhost:3000
UMKM_DATA_DIR=data
```

> The JSON store is a development persistence adapter, not the final production database. For production, replace it with PostgreSQL and a managed object store.
