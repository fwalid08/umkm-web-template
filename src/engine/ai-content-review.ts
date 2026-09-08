import type { AiContentDraft, GeneratedBusinessContent } from './ai-content';

export function createContentDraft(content: GeneratedBusinessContent, request: AiContentDraft['request']): AiContentDraft {
  return { id: `draft-${Date.now()}`, request, content, status: 'draft', createdAt: new Date().toISOString() };
}

export function acceptContentDraft(draft: AiContentDraft): AiContentDraft { return { ...draft, status: 'accepted' }; }
export function rejectContentDraft(draft: AiContentDraft): AiContentDraft { return { ...draft, status: 'rejected' }; }

export function mergeGeneratedContent<T extends Record<string, unknown>>(base: T, generated: Partial<T>): T {
  return { ...base, ...generated };
}
