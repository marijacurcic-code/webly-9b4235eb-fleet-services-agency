import { useCallback, useMemo, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'

type Updater<T> = T | ((prev: T) => T)

/**
 * useUrlState
 * Mirrors a value into a URL query parameter. Refresh-friendly, shareable links.
 *
 * @param prefix Stable id of the binding (used as query-key prefix when multiple
 *               bindings on the page would otherwise collide). Pass '' for none.
 * @param defaultValue Value used when the param is absent or unparseable.
 * @param key The local key (e.g. 'page', 'q', 'sort'). Will be combined with prefix.
 */
export function useUrlState<T>(prefix: string, defaultValue: T, key: string): [T, (next: Updater<T>) => void] {
  const [params, setParams] = useSearchParams()
  const fullKey = prefix ? `${prefix}.${key}` : key

  // Stabilize defaultValue — object/array literals are recreated every render,
  // which would invalidate the memo on every render and cause infinite re-renders.
  const defaultRef = useRef(defaultValue)

  const value = useMemo<T>(() => {
    const def = defaultRef.current
    const raw = params.get(fullKey)
    if (raw == null) return def

    // Heuristic decoding — matches the encoding below.
    if (typeof def === 'number') {
      const n = Number(raw)
      return (Number.isFinite(n) ? n : def) as T
    }
    if (typeof def === 'boolean') {
      return (raw === 'true') as unknown as T
    }
    if (def && typeof def === 'object' && !Array.isArray(def)) {
      try {
        return JSON.parse(raw) as T
      } catch {
        return def
      }
    }
    return raw as unknown as T
  }, [params, fullKey]) // defaultValue intentionally excluded — stabilized via ref

  const setValue = useCallback((next: Updater<T>) => {
    setParams(prev => {
      const out = new URLSearchParams(prev)
      const resolved = typeof next === 'function' ? (next as (p: T) => T)(value) : next
      const isEmpty =
        resolved == null ||
        resolved === '' ||
        (typeof resolved === 'number' && !Number.isFinite(resolved)) ||
        (typeof resolved === 'object' && !Array.isArray(resolved) && Object.keys(resolved as object).length === 0) ||
        (Array.isArray(resolved) && (resolved as unknown[]).length === 0)

      if (isEmpty) {
        out.delete(fullKey)
      } else if (typeof resolved === 'object') {
        out.set(fullKey, JSON.stringify(resolved))
      } else {
        out.set(fullKey, String(resolved))
      }
      return out
    }, { replace: true })
  }, [setParams, fullKey, value])

  return [value, setValue]
}