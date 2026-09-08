import React from 'react';
import { GripVertical, Plus, Trash2 } from 'lucide-react';
import { deleteConfigPath, emptyValueLike, setConfigPath, type ConfigPath } from '../../lib/config-editor';

const labelize = (value: string) =>
  value
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

const isColor = (value: unknown): value is string =>
  typeof value === 'string' && /^#[0-9a-f]{3,8}$/i.test(value);

const isUrl = (key: string) => /url|image|logo/i.test(key);
const isLong = (key: string, value: string) =>
  value.length > 90 || /description|text|content|message|comment|answer|address/i.test(key);

export interface ConfigEditorProps<T> {
  value: T;
  onChange: (value: T) => void;
  onDelete?: (path: ConfigPath) => void;
  excludeKeys?: string[];
}

interface FieldProps {
  label: string;
  value: unknown;
  path: ConfigPath;
  onChange: (path: ConfigPath, value: unknown) => void;
  onDelete?: (path: ConfigPath) => void;
  depth?: number;
}

const Field: React.FC<FieldProps> = ({ label, value, path, onChange, onDelete, depth = 0 }) => {
  if (Array.isArray(value)) {
    return (
      <div className="dev-panel-array">
        <div className="dev-panel-array-head">
          <div>
            <b>{labelize(label)}</b>
            <span>{value.length} item</span>
          </div>
          <button
            type="button"
            className="dev-panel-add"
            onClick={() => onChange(path, [...value, emptyValueLike(value[0] ?? '')])}
          >
            <Plus className="h-3.5 w-3.5" />Tambah item
          </button>
        </div>
        <div className="dev-panel-array-list">
          {value.map((item, index) => (
            <div key={index} className="dev-panel-array-item">
              <div className="dev-panel-array-item-head">
                <span><GripVertical className="inline h-3 w-3 mr-1" />Item {index + 1}</span>
                <button
                  type="button"
                  className="dev-panel-delete"
                  onClick={() => onDelete?.([...path, String(index)])}
                >
                  <Trash2 className="h-3.5 w-3.5" />Hapus
                </button>
              </div>
              <Field
                label={typeof item === 'object' ? `Item ${index + 1}` : `${label} ${index + 1}`}
                value={item}
                path={[...path, String(index)]}
                onChange={onChange}
                onDelete={onDelete}
                depth={depth + 1}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (value && typeof value === 'object') {
    return (
      <div className={depth ? 'dev-panel-object dev-panel-object-nested' : 'dev-panel-object'}>
        {depth === 0 && <b className="dev-panel-object-title">{labelize(label)}</b>}
        {Object.entries(value as Record<string, unknown>).map(([key, child]) => (
          <Field
            key={key}
            label={key}
            value={child}
            path={[...path, key]}
            onChange={onChange}
            onDelete={onDelete}
            depth={depth + 1}
          />
        ))}
      </div>
    );
  }

  const stringValue = value == null ? '' : String(value);

  if (typeof value === 'boolean') {
    return (
      <label className="dev-panel-toggle">
        <span>{labelize(label)}</span>
        <button type="button" onClick={() => onChange(path, !value)} className={value ? 'is-on' : ''}>
          <span />
        </button>
      </label>
    );
  }

  if (isColor(value)) {
    return (
      <label className="dev-panel-field">
        <span className="dev-panel-field-label">{labelize(label)}</span>
        <div className="flex gap-2">
          <input
            type="color"
            value={stringValue.length === 7 ? stringValue : '#000000'}
            onChange={(event) => onChange(path, event.target.value)}
            className="h-10 w-12 rounded-lg border p-1"
          />
          <input
            value={stringValue}
            onChange={(event) => onChange(path, event.target.value)}
            className="dev-panel-input font-mono"
          />
        </div>
      </label>
    );
  }

  if (typeof value === 'number') {
    return (
      <label className="dev-panel-field">
        <span className="dev-panel-field-label">{labelize(label)}</span>
        <input
          type="number"
          value={value}
          onChange={(event) => onChange(path, Number(event.target.value))}
          className="dev-panel-input"
        />
      </label>
    );
  }

  if (isUrl(label)) {
    return (
      <label className="dev-panel-field">
        <span className="dev-panel-field-label">{labelize(label)}</span>
        <input
          type="url"
          value={stringValue}
          onChange={(event) => onChange(path, event.target.value)}
          placeholder="https://..."
          className="dev-panel-input"
        />
      </label>
    );
  }

  if (isLong(label, stringValue)) {
    return (
      <label className="dev-panel-field">
        <span className="dev-panel-field-label">{labelize(label)}</span>
        <textarea
          value={stringValue}
          onChange={(event) => onChange(path, event.target.value)}
          rows={3}
          className="dev-panel-input dev-panel-textarea"
        />
      </label>
    );
  }

  return (
    <label className="dev-panel-field">
      <span className="dev-panel-field-label">{labelize(label)}</span>
      <input
        value={stringValue}
        onChange={(event) => onChange(path, event.target.value)}
        className="dev-panel-input"
      />
    </label>
  );
};

export const ConfigEditor = <T extends object>({
  value,
  onChange,
  onDelete,
  excludeKeys = [],
}: ConfigEditorProps<T>) => {
  const root = value as Record<string, unknown>;
  const update = (path: ConfigPath, nextValue: unknown) => onChange(setConfigPath(value, path, nextValue));
  const remove = (path: ConfigPath) => onDelete?.(path) ?? onChange(deleteConfigPath(value, path));

  return (
    <div className="dev-panel-stack">
      {Object.entries(root)
        .filter(([key]) => !excludeKeys.includes(key))
        .map(([key, child]) => (
          <Field key={key} label={key} value={child} path={[key]} onChange={update} onDelete={remove} />
        ))}
    </div>
  );
};
