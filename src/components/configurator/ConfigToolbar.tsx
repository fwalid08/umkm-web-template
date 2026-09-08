import React from 'react';
import { Check, Clipboard, Download, Redo2, RotateCcw, Undo2 } from 'lucide-react';

export interface ConfigToolbarProps {
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onReset: () => void;
  onValidate: () => void;
  onExport: () => void;
  onCopy: () => void;
}

const ActionButton = ({
  label,
  onClick,
  disabled,
  children,
}: React.PropsWithChildren<{ label: string; onClick: () => void; disabled?: boolean }>) => (
  <button
    type="button"
    title={label}
    aria-label={label}
    onClick={onClick}
    disabled={disabled}
    className="dev-panel-secondary disabled:cursor-not-allowed disabled:opacity-40"
  >
    {children}
    <span className="hidden sm:inline">{label}</span>
  </button>
);

export const ConfigToolbar: React.FC<ConfigToolbarProps> = ({
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onReset,
  onValidate,
  onExport,
  onCopy,
}) => (
  <div className="flex flex-wrap items-center gap-2">
    <ActionButton label="Undo" onClick={onUndo} disabled={!canUndo}>
      <Undo2 className="h-4 w-4" />
    </ActionButton>
    <ActionButton label="Redo" onClick={onRedo} disabled={!canRedo}>
      <Redo2 className="h-4 w-4" />
    </ActionButton>
    <ActionButton label="Reset" onClick={onReset}>
      <RotateCcw className="h-4 w-4" />
    </ActionButton>
    <ActionButton label="Validate" onClick={onValidate}>
      <Check className="h-4 w-4" />
    </ActionButton>
    <ActionButton label="Copy JSON" onClick={onCopy}>
      <Clipboard className="h-4 w-4" />
    </ActionButton>
    <button type="button" onClick={onExport} className="dev-panel-primary">
      <Download className="h-4 w-4" />
      <span className="hidden sm:inline">Export Config</span>
    </button>
  </div>
);
