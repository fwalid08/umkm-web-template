/** Shared immutable helpers for the configuration editor. */

export type ConfigPath = string[];

export function setConfigPath<T>(root: T, path: ConfigPath, value: unknown): T {
  if (path.length === 0) return value as T;

  const [head, ...tail] = path;
  const source = root as unknown as Record<string, unknown> | unknown[] | null | undefined;
  const copy = Array.isArray(source) ? [...source] : { ...(source ?? {}) };

  if (tail.length === 0) {
    (copy as Record<string, unknown> | unknown[])[head as never] = value as never;
  } else {
    const current = Array.isArray(copy)
      ? copy[Number(head)]
      : (copy as Record<string, unknown>)[head];
    const next = setConfigPath(current, tail, value);
    if (Array.isArray(copy)) copy[Number(head)] = next;
    else (copy as Record<string, unknown>)[head] = next;
  }

  return copy as T;
}

export function deleteConfigPath<T>(root: T, path: ConfigPath): T {
  if (path.length === 0) return root;

  const [head, ...tail] = path;
  const source = root as unknown as Record<string, unknown> | unknown[] | null | undefined;
  const copy = Array.isArray(source) ? [...source] : { ...(source ?? {}) };

  if (tail.length === 0) {
    if (Array.isArray(copy)) copy.splice(Number(head), 1);
    else delete (copy as Record<string, unknown>)[head];
    return copy as T;
  }

  const current = Array.isArray(copy)
    ? copy[Number(head)]
    : (copy as Record<string, unknown>)[head];
  const next = deleteConfigPath(current, tail);
  if (Array.isArray(copy)) copy[Number(head)] = next;
  else (copy as Record<string, unknown>)[head] = next;
  return copy as T;
}

export function emptyValueLike(value: unknown): unknown {
  if (typeof value === 'string') return '';
  if (typeof value === 'number') return 0;
  if (typeof value === 'boolean') return false;
  if (Array.isArray(value)) return [];
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, emptyValueLike(child)]),
    );
  }
  return '';
}

export function cloneConfig<T>(value: T): T {
  if (typeof structuredClone === 'function') return structuredClone(value);
  return JSON.parse(JSON.stringify(value)) as T;
}
