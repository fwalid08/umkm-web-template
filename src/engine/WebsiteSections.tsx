import type { BusinessConfig } from '../types/business';
import { renderSections } from './section-registry';

interface WebsiteSectionsProps {
  business: BusinessConfig;
}

export function WebsiteSections({ business }: WebsiteSectionsProps) {
  return <>{renderSections(business)}</>;
}
