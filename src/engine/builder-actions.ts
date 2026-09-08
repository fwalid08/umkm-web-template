import type { BusinessConfig, SectionId } from '../types/business';
import type { BuilderState } from './builder-types';

export const updateBusiness = (business: BusinessConfig, patch: Partial<BusinessConfig>): BusinessConfig => ({ ...business, ...patch });
export const selectSection = (state: BuilderState, selectedSection?: SectionId): BuilderState => ({ ...state, selectedSection, mode: 'edit', dirty: true, revision: state.revision + 1 });
export const setBuilderPanel = (state: BuilderState, activePanel: BuilderState['activePanel']): BuilderState => ({ ...state, activePanel });
export const markSaved = (state: BuilderState): BuilderState => ({ ...state, dirty: false });
