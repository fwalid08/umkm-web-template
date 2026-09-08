import React from 'react';
import {
  BriefcaseBusiness,
  FileText,
  HelpCircle,
  Image as ImageIcon,
  LayoutTemplate,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Search,
  type LucideIcon,
} from 'lucide-react';
import type { ConfigEditorSection, ConfigEditorTab } from '../../config/schema';

export interface ConfigSidebarGroup {
  id: 'brand' | 'content';
  title: string;
  items: ConfigEditorSection[];
}

const icons: Record<ConfigEditorTab, LucideIcon> = {
  business: BriefcaseBusiness,
  theme: Palette,
  navigation: Menu,
  hero: LayoutTemplate,
  seo: Search,
  services: BriefcaseBusiness,
  testimonials: MessageCircle,
  gallery: ImageIcon,
  faq: HelpCircle,
  location: MapPin,
  cta: MessageCircle,
  footer: FileText,
};

export interface ConfigSidebarProps {
  groups: ConfigSidebarGroup[];
  activeTab: ConfigEditorTab;
  onTabChange: (tab: ConfigEditorTab) => void;
  onReset: () => void;
  resetLabel?: string;
  resetIcon?: LucideIcon;
}

export const ConfigSidebar: React.FC<ConfigSidebarProps> = ({
  groups,
  activeTab,
  onTabChange,
  onReset,
  resetLabel = 'Reset preset',
  resetIcon: ResetIcon,
}) => (
  <nav className="dev-panel-sidebar" aria-label="Config sections">
    {groups.map((group) => (
      <div key={group.id} className="mb-5">
        <p className="dev-panel-group-title">{group.title}</p>
        {group.items.map((item) => {
          const Icon = icons[item.id];
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onTabChange(item.id)}
              className={`dev-panel-nav ${activeTab === item.id ? 'is-active' : ''}`}
              aria-current={activeTab === item.id ? 'page' : undefined}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </div>
    ))}
    <button type="button" onClick={onReset} className="dev-panel-nav text-slate-500">
      {ResetIcon ? <ResetIcon className="h-4 w-4" /> : null}
      {resetLabel}
    </button>
  </nav>
);
