import type { BusinessConfig, SectionId } from '../types/business';

export type BuilderMode = 'preview' | 'edit';
export type BuilderPanel = 'ai' | 'content' | 'design' | 'sections' | 'seo' | 'assets';

export interface BuilderState {
  mode: BuilderMode;
  activePanel: BuilderPanel;
  selectedSection?: SectionId;
  dirty: boolean;
  revision: number;
}

export interface BuilderSnapshot { business: BusinessConfig; state: BuilderState; }

export const initialBuilderState: BuilderState = {
  mode: 'preview', activePanel: 'content', dirty: false, revision: 0,
};
