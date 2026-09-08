import type { BusinessConfig } from '../types/business';

export interface PlatformWebsite {
  id: string;
  workspaceId: string;
  name: string;
  slug: string;
  status: 'draft' | 'ready' | 'published';
  createdAt: string;
  updatedAt: string;
}

const baseUrl = () => (import.meta.env.VITE_PLATFORM_API_URL || '').replace(/\/$/, '');
const token = () => localStorage.getItem('umkm_platform_token');

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(`${baseUrl()}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(token() ? { Authorization: `Bearer ${token()}` } : {}), ...(init.headers || {}) },
  });
  if (!response.ok) throw new Error((await response.json().catch(() => null))?.error || `Platform API ${response.status}`);
  return response.status === 204 ? (undefined as T) : response.json();
}

export const platformApi = {
  enabled: () => Boolean(baseUrl()),
  register: async (name: string, email: string, password: string) => request<{ token?: string; user: unknown; workspace: unknown }>('/api/auth/register', { method: 'POST', body: JSON.stringify({ name, email, password }) }),
  login: async (email: string, password: string) => { const result = await request<{ token: string; user: unknown }>('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }); localStorage.setItem('umkm_platform_token', result.token); return result; },
  logout: () => request<void>('/api/auth/logout', { method: 'POST' }),
  websites: () => request<PlatformWebsite[]>('/api/websites'),
  website: (id: string) => request<{ website: PlatformWebsite; config: BusinessConfig | null; versions: unknown[]; theme: unknown; domains: unknown[] }>(`/api/websites/${id}`),
  saveVersion: (id: string, config: BusinessConfig, label = 'Editor save') => request(`/api/websites/${id}/versions`, { method: 'POST', body: JSON.stringify({ config, label }) }),
  restoreVersion: (id: string, version: number) => request(`/api/websites/${id}/versions/${version}/restore`, { method: 'POST' }),
  publish: (id: string) => request<{ status: 'published'; version: number; url: string; publishedAt: string }>(`/api/websites/${id}/publish`, { method: 'POST' }),
  assets: (id: string) => request(`/api/websites/${id}/assets`),
  addAsset: (id: string, asset: { kind: string; name: string; url: string; alt?: string }) => request(`/api/websites/${id}/assets`, { method: 'POST', body: JSON.stringify(asset) }),
  addDomain: (id: string, hostname: string) => request(`/api/websites/${id}/domains`, { method: 'POST', body: JSON.stringify({ hostname }) }),
  verifyDomain: (id: string, domainId: string) => request(`/api/websites/${id}/domains/${domainId}/verify`, { method: 'POST' }),
};
