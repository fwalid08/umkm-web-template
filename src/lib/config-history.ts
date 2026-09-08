import { useCallback, useMemo, useState } from 'react';
import { cloneConfig } from './config-editor';

export interface ConfigHistory<T> {
  value: T;
  canUndo: boolean;
  canRedo: boolean;
  setValue: (next: T) => void;
  undo: () => void;
  redo: () => void;
  reset: (next: T) => void;
}

/**
 * Small, immutable undo/redo history for the website configurator.
 * The history is intentionally generic so it can later be reused by a
 * standalone builder as well as DevPanelV2.
 */
export function useConfigHistory<T>(initialValue: T, maxEntries = 50): ConfigHistory<T> {
  const [past, setPast] = useState<T[]>([]);
  const [present, setPresent] = useState<T>(() => cloneConfig(initialValue));
  const [future, setFuture] = useState<T[]>([]);

  const setValue = useCallback((next: T) => {
    setPast((items) => [...items, cloneConfig(present)].slice(-maxEntries));
    setPresent(cloneConfig(next));
    setFuture([]);
  }, [maxEntries, present]);

  const undo = useCallback(() => {
    setPast((items) => {
      if (!items.length) return items;
      const previous = items[items.length - 1];
      setFuture((itemsAfter) => [cloneConfig(present), ...itemsAfter].slice(0, maxEntries));
      setPresent(cloneConfig(previous));
      return items.slice(0, -1);
    });
  }, [maxEntries, present]);

  const redo = useCallback(() => {
    setFuture((items) => {
      if (!items.length) return items;
      const next = items[0];
      setPast((itemsBefore) => [...itemsBefore, cloneConfig(present)].slice(-maxEntries));
      setPresent(cloneConfig(next));
      return items.slice(1);
    });
  }, [maxEntries, present]);

  const reset = useCallback((next: T) => {
    setPast([]);
    setPresent(cloneConfig(next));
    setFuture([]);
  }, []);

  return useMemo(() => ({
    value: present,
    canUndo: past.length > 0,
    canRedo: future.length > 0,
    setValue,
    undo,
    redo,
    reset,
  }), [future.length, past.length, present, redo, reset, setValue, undo]);
}
