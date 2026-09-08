import type { BusinessConfig } from '../types/business';

export type PublishStatus = 'draft' | 'ready' | 'published';
export interface PublishTarget { type: 'static' | 'managed'; slug: string; }
export interface PublishArtifact { version: number; generatedAt: string; business: BusinessConfig; }
export interface PublishResult { status: PublishStatus; url?: string; artifact: PublishArtifact; }

export function createPublishArtifact(business: BusinessConfig, version = 1): PublishArtifact {
  return { version, generatedAt: new Date().toISOString(), business: JSON.parse(JSON.stringify(business)) };
}
