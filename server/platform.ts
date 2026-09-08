import express, { type Request, type Response, type NextFunction } from 'express';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';
import { config as loadEnv } from 'dotenv';

loadEnv();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dataDir = path.resolve(root, process.env.UMKM_DATA_DIR || 'data');
const dbFile = path.join(dataDir, 'platform.json');
const assetDir = path.join(dataDir, 'assets');
const port = Number(process.env.PORT || 8787);

type Id = string;
type PublishStatus = 'draft' | 'ready' | 'published';
interface User { id: Id; email: string; name: string; passwordHash: string; createdAt: string; }
interface Workspace { id: Id; ownerUserId: Id; name: string; slug: string; createdAt: string; }
interface Website { id: Id; workspaceId: Id; name: string; slug: string; status: PublishStatus; createdAt: string; updatedAt: string; }
interface ContentVersion { id: Id; websiteId: Id; version: number; label: string; config: unknown; createdAt: string; }
interface Asset { id: Id; websiteId: Id; kind: string; name: string; url: string; alt?: string; createdAt: string; }
interface Theme { id: Id; websiteId: Id; config: unknown; updatedAt: string; }
interface Domain { id: Id; websiteId: Id; hostname: string; verified: boolean; createdAt: string; }
interface PublishRecord { id: Id; websiteId: Id; version: number; status: 'published'; url: string; publishedAt: string; }
interface Session { tokenHash: string; userId: Id; expiresAt: string; }
interface Store { users: User[]; workspaces: Workspace[]; websites: Website[]; contentVersions: ContentVersion[]; assets: Asset[]; themes: Theme[]; domains: Domain[]; publishes: PublishRecord[]; sessions: Session[]; }

const now = () => new Date().toISOString();
const id = (prefix: string) => `${prefix}_${crypto.randomUUID()}`;
const slugify = (v: string) => v.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'website';
const hash = (v: string) => crypto.createHash('sha256').update(v).digest('hex');
const passwordHash = (password: string, salt = crypto.randomBytes(16).toString('hex')) => `${salt}:${crypto.scryptSync(password, salt, 64).toString('hex')}`;
const verifyPassword = (password: string, encoded: string) => { const [salt, digest] = encoded.split(':'); if (!salt || !digest) return false; return crypto.timingSafeEqual(Buffer.from(digest, 'hex'), crypto.scryptSync(password, salt, 64)); };

const defaultStore: Store = { users: [], workspaces: [], websites: [], contentVersions: [], assets: [], themes: [], domains: [], publishes: [], sessions: [] };
let store: Store = defaultStore;
let writeQueue = Promise.resolve();

async function persist() { writeQueue = writeQueue.then(async () => { await fs.mkdir(dataDir, { recursive: true }); await fs.writeFile(dbFile, JSON.stringify(store, null, 2)); }); return writeQueue; }
async function loadStore() { try { store = { ...defaultStore, ...JSON.parse(await fs.readFile(dbFile, 'utf8')) }; } catch { store = defaultStore; await persist(); } await fs.mkdir(assetDir, { recursive: true }); }
function body(req: Request) { return (req.body || {}) as Record<string, any>; }
function sendError(res: Response, status: number, message: string) { return res.status(status).json({ error: message }); }
function auth(req: Request, res: Response, next: NextFunction) { const token = req.headers.authorization?.replace(/^Bearer\s+/i, ''); if (!token) return sendError(res, 401, 'Authentication required.'); const session = store.sessions.find(s => s.tokenHash === hash(token) && new Date(s.expiresAt) > new Date()); if (!session) return sendError(res, 401, 'Invalid or expired session.'); (req as any).userId = session.userId; next(); }
function ownedWebsite(req: Request, res: Response) { const website = store.websites.find(w => w.id === req.params.websiteId); if (!website) { sendError(res, 404, 'Website not found.'); return null; } const workspace = store.workspaces.find(w => w.id === website.workspaceId && w.ownerUserId === (req as any).userId); if (!workspace) { sendError(res, 403, 'Website access denied.'); return null; } return website; }

async function main() {
  await loadStore();
  const app = express();
  app.use(express.json({ limit: '2mb' }));
  app.use((req, res, next) => { res.header('Access-Control-Allow-Origin', process.env.CORS_ORIGIN || '*'); res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS'); if (req.method === 'OPTIONS') return res.sendStatus(204); next(); });

  app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'umkm-platform', time: now() }));

  app.post('/api/auth/register', async (req, res) => { const b = body(req); if (!b.email || !b.password || !b.name) return sendError(res, 400, 'name, email and password are required.'); if (store.users.some(u => u.email.toLowerCase() === String(b.email).toLowerCase())) return sendError(res, 409, 'Email already registered.'); const user: User = { id: id('usr'), email: String(b.email).toLowerCase(), name: String(b.name), passwordHash: passwordHash(String(b.password)), createdAt: now() }; const workspace: Workspace = { id: id('ws'), ownerUserId: user.id, name: `${user.name}'s Workspace`, slug: slugify(user.name), createdAt: now() }; store.users.push(user); store.workspaces.push(workspace); await persist(); return res.status(201).json({ user: { id: user.id, email: user.email, name: user.name }, workspace }); });
  app.post('/api/auth/login', async (req, res) => { const b = body(req); const user = store.users.find(u => u.email === String(b.email || '').toLowerCase()); if (!user || !verifyPassword(String(b.password || ''), user.passwordHash)) return sendError(res, 401, 'Invalid email or password.'); const token = crypto.randomBytes(32).toString('hex'); store.sessions = store.sessions.filter(s => new Date(s.expiresAt) > new Date()); store.sessions.push({ tokenHash: hash(token), userId: user.id, expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString() }); await persist(); return res.json({ token, user: { id: user.id, email: user.email, name: user.name } }); });
  app.post('/api/auth/logout', auth, async (req, res) => { const token = req.headers.authorization?.replace(/^Bearer\s+/i, ''); store.sessions = store.sessions.filter(s => s.tokenHash !== hash(token || '')); await persist(); res.sendStatus(204); });

  app.get('/api/workspaces', auth, (_req, res) => res.json(store.workspaces.filter(w => w.ownerUserId === (_req as any).userId)));
  app.get('/api/websites', auth, (req, res) => { const wsIds = new Set(store.workspaces.filter(w => w.ownerUserId === (req as any).userId).map(w => w.id)); res.json(store.websites.filter(w => wsIds.has(w.workspaceId))); });
  app.post('/api/websites', auth, async (req, res) => { const b = body(req); const ws = store.workspaces.find(w => w.id === b.workspaceId && w.ownerUserId === (req as any).userId); if (!ws || !b.name) return sendError(res, 400, 'workspaceId and name are required.'); const website: Website = { id: id('site'), workspaceId: ws.id, name: String(b.name), slug: slugify(b.slug || b.name), status: 'draft', createdAt: now(), updatedAt: now() }; store.websites.push(website); if (b.config) store.contentVersions.push({ id: id('ver'), websiteId: website.id, version: 1, label: 'Initial', config: b.config, createdAt: now() }); await persist(); res.status(201).json(website); });
  app.get('/api/websites/:websiteId', auth, (req, res) => { const website = ownedWebsite(req, res); if (!website) return; const versions = store.contentVersions.filter(v => v.websiteId === website.id).sort((a,b) => b.version-a.version); const theme = store.themes.find(t => t.websiteId === website.id); const domains = store.domains.filter(d => d.websiteId === website.id); res.json({ website, config: versions[0]?.config || null, versions, theme: theme?.config || null, domains }); });
  app.patch('/api/websites/:websiteId', auth, async (req, res) => { const website = ownedWebsite(req, res); if (!website) return; const b = body(req); if (b.name) website.name = String(b.name); if (b.slug) website.slug = slugify(String(b.slug)); website.updatedAt = now(); await persist(); res.json(website); });

  app.post('/api/websites/:websiteId/versions', auth, async (req, res) => { const website = ownedWebsite(req, res); if (!website) return; if (!('config' in body(req))) return sendError(res, 400, 'config is required.'); const latest = store.contentVersions.filter(v => v.websiteId === website.id).sort((a,b) => b.version-a.version)[0]; const version: ContentVersion = { id: id('ver'), websiteId: website.id, version: (latest?.version || 0) + 1, label: String(body(req).label || `Version ${(latest?.version || 0) + 1}`), config: body(req).config, createdAt: now() }; store.contentVersions.push(version); website.updatedAt = now(); website.status = 'draft'; await persist(); res.status(201).json(version); });
  app.get('/api/websites/:websiteId/versions/:version', auth, (req, res) => { const website = ownedWebsite(req, res); if (!website) return; const version = store.contentVersions.find(v => v.websiteId === website.id && v.version === Number(req.params.version)); if (!version) return sendError(res, 404, 'Version not found.'); res.json(version); });
  app.post('/api/websites/:websiteId/versions/:version/restore', auth, async (req, res) => { const website = ownedWebsite(req, res); if (!website) return; const source = store.contentVersions.find(v => v.websiteId === website.id && v.version === Number(req.params.version)); if (!source) return sendError(res, 404, 'Version not found.'); const latest = store.contentVersions.filter(v => v.websiteId === website.id).sort((a,b) => b.version-a.version)[0]; const restored: ContentVersion = { id: id('ver'), websiteId: website.id, version: (latest?.version || 0) + 1, label: `Restored v${source.version}`, config: source.config, createdAt: now() }; store.contentVersions.push(restored); website.status = 'draft'; website.updatedAt = now(); await persist(); res.status(201).json(restored); });

  app.put('/api/websites/:websiteId/theme', auth, async (req, res) => { const website = ownedWebsite(req, res); if (!website) return; let theme = store.themes.find(t => t.websiteId === website.id); if (!theme) { theme = { id: id('theme'), websiteId: website.id, config: body(req).config, updatedAt: now() }; store.themes.push(theme); } else { theme.config = body(req).config; theme.updatedAt = now(); } await persist(); res.json(theme); });
  app.get('/api/websites/:websiteId/assets', auth, (req, res) => { const website = ownedWebsite(req, res); if (!website) return; res.json(store.assets.filter(a => a.websiteId === website.id)); });
  app.post('/api/websites/:websiteId/assets', auth, async (req, res) => { const website = ownedWebsite(req, res); if (!website) return; const b = body(req); if (!b.name || !b.url) return sendError(res, 400, 'name and url are required.'); const asset: Asset = { id: id('asset'), websiteId: website.id, kind: String(b.kind || 'gallery'), name: String(b.name), url: String(b.url), alt: b.alt ? String(b.alt) : undefined, createdAt: now() }; store.assets.push(asset); await persist(); res.status(201).json(asset); });
  app.delete('/api/websites/:websiteId/assets/:assetId', auth, async (req, res) => { const website = ownedWebsite(req, res); if (!website) return; store.assets = store.assets.filter(a => !(a.websiteId === website.id && a.id === req.params.assetId)); await persist(); res.sendStatus(204); });

  app.get('/api/websites/:websiteId/domains', auth, (req, res) => { const website = ownedWebsite(req, res); if (!website) return; res.json(store.domains.filter(d => d.websiteId === website.id)); });
  app.post('/api/websites/:websiteId/domains', auth, async (req, res) => { const website = ownedWebsite(req, res); if (!website) return; const hostname = String(body(req).hostname || '').toLowerCase().trim(); if (!hostname) return sendError(res, 400, 'hostname is required.'); if (store.domains.some(d => d.hostname === hostname && d.websiteId !== website.id)) return sendError(res, 409, 'Domain already mapped.'); const domain: Domain = { id: id('dom'), websiteId: website.id, hostname, verified: false, createdAt: now() }; store.domains.push(domain); await persist(); res.status(201).json({ ...domain, verification: { type: 'TXT', name: `_umkm.${hostname}`, value: `umkm-site=${website.id}` } }); });
  app.post('/api/websites/:websiteId/domains/:domainId/verify', auth, async (req, res) => { const website = ownedWebsite(req, res); if (!website) return; const domain = store.domains.find(d => d.id === req.params.domainId && d.websiteId === website.id); if (!domain) return sendError(res, 404, 'Domain not found.'); domain.verified = true; await persist(); res.json(domain); });

  app.post('/api/websites/:websiteId/publish', auth, async (req, res) => { const website = ownedWebsite(req, res); if (!website) return; const latest = store.contentVersions.filter(v => v.websiteId === website.id).sort((a,b) => b.version-a.version)[0]; if (!latest) return sendError(res, 400, 'Create a content version before publishing.'); const host = String(process.env.PUBLIC_BASE_URL || `http://localhost:${port}`).replace(/\/$/, ''); const record: PublishRecord = { id: id('pub'), websiteId: website.id, version: latest.version, status: 'published', url: `${host}/site/${website.slug}`, publishedAt: now() }; store.publishes.push(record); website.status = 'published'; website.updatedAt = now(); await persist(); res.json({ status: 'published', version: latest.version, url: record.url, publishedAt: record.publishedAt }); });
  app.get('/api/websites/:websiteId/publishes', auth, (req, res) => { const website = ownedWebsite(req, res); if (!website) return; res.json(store.publishes.filter(p => p.websiteId === website.id).sort((a,b) => b.publishedAt.localeCompare(a.publishedAt))); });

  app.get('/site/:slug', (req, res) => { const website = store.websites.find(w => w.slug === req.params.slug && w.status === 'published'); if (!website) return res.status(404).send('Website not published.'); const latest = store.contentVersions.filter(v => v.websiteId === website.id).sort((a,b) => b.version-a.version)[0]; res.type('html').send(`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${website.name}</title></head><body><div id="root"></div><script>window.__UMKM_SITE__=${JSON.stringify(latest?.config || {})}</script><p style="font-family:system-ui;padding:2rem">Published website: ${website.name}. Connect the production renderer to this artifact.</p></body></html>`); });

  if (process.env.NODE_ENV !== 'production') { const vite = await createViteServer({ root, server: { middlewareMode: true }, appType: 'spa' }); app.use(vite.middlewares); } else { app.use(express.static(path.join(root, 'dist'))); app.get('*', (_req, res) => res.sendFile(path.join(root, 'dist', 'index.html'))); }
  app.listen(port, () => console.log(`UMKM platform API listening on http://localhost:${port}`));
}

main().catch(error => { console.error(error); process.exit(1); });
