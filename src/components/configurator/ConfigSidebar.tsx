import React from 'react';
import type { LucideIcon } from 'lucide-react';
import type { ConfigEditorGroup, ConfigEditorTab } from '../../config/schema';

export interface ConfigSidebarProps {
  groups: ConfigEditorGroup[];
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
          const Icon = item.icon as LucideIcon;
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
