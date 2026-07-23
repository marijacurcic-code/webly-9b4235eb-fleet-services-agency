export type FilterOption      = { label: string; value: string }
export type FilterControlType = 'select' | 'chip' | 'radio' | 'checkbox'
export type FilterFieldConfig = { field: string; label?: string; controlType?: FilterControlType }
export type FilterGroup       = { field: string; label: string; controlType: FilterControlType; options: FilterOption[] }
export type SortOption        = { value: string; label: string }

const titleCase = (s: string) =>
  s.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

/**
 * Derives filter groups from collection items.
 * `fields` accepts plain strings (backwards-compat) or FilterFieldConfig objects.
 * `allLabel` is the display text for the clear-filter option (__all__ sentinel is unchanged).
 */
export function deriveFilterGroups(
  items: any[],
  fields: (string | FilterFieldConfig)[],
  allLabel = 'All',
): FilterGroup[] {
  if (!Array.isArray(items) || items.length === 0 || !fields?.length) return []
  const groups: FilterGroup[] = []
  for (const spec of fields) {
    const field       = typeof spec === 'string' ? spec : spec.field
    const label       = typeof spec === 'string' ? titleCase(field) : (spec.label ?? titleCase(field))
    const controlType = typeof spec === 'string' ? 'select' : (spec.controlType ?? 'select')
    const raw    = items.map(i => (i == null ? null : i[field])).filter(v => v != null && !Array.isArray(v) && typeof v !== 'object')
    const values = Array.from(new Set(raw.map(String))).sort()
    if (values.length >= 2) {
      groups.push({
        field,
        label,
        controlType,
        options: [{ label: allLabel, value: '__all__' }, ...values.map(v => ({ label: v, value: v }))],
      })
    }
  }
  return groups
}

export function applyFilters(items: any[], active: Record<string, string>): any[] {
  if (!items?.length) return []
  const entries = Object.entries(active ?? {}).filter(([, v]) => v != null && v !== '' && v !== '__all__')
  if (entries.length === 0) return items
  return items.filter(item =>
    entries.every(([field, expected]) => String(item?.[field] ?? '') === String(expected))
  )
}

export function applySearch(items: any[], query: string, fields: string[]): any[] {
  if (!items?.length || !query || !fields?.length) return items ?? []
  const q = query.trim().toLowerCase()
  if (!q) return items
  return items.filter(item =>
    fields.some(f => {
      const v = item?.[f]
      return v != null && String(v).toLowerCase().includes(q)
    })
  )
}

export function applySort(items: any[], sortKey: string): any[] {
  if (!items?.length || !sortKey) return items ?? []
  const desc = sortKey.startsWith('-')
  const field = desc ? sortKey.slice(1) : sortKey
  const arr = [...items]
  arr.sort((a, b) => {
    const av = a?.[field]
    const bv = b?.[field]
    if (av == null && bv == null) return 0
    if (av == null) return 1
    if (bv == null) return -1
    if (typeof av === 'number' && typeof bv === 'number') return desc ? bv - av : av - bv
    return desc ? String(bv).localeCompare(String(av)) : String(av).localeCompare(String(bv))
  })
  return arr
}

export function paginate(items: any[], page: number, pageSize: number): any[] {
  if (!items?.length || pageSize <= 0) return []
  const start = Math.max(0, (page - 1) * pageSize)
  return items.slice(start, start + pageSize)
}

export function findCollectionItem(items: any[], idField: string, id: string | undefined): any | undefined {
  if (!items?.length || !idField || id == null) return undefined
  return items.find(i => String(i?.[idField] ?? '') === String(id))
}

/**
 * Merges a live collection item over a static content template.
 * When the content template has an array field but the collection item supplies a scalar
 * (e.g. bio: string in JSON vs bio: string[] expected by the component), the scalar is
 * automatically wrapped in an array so .map() calls never crash.
 */
export function mergeCollectionItem<T extends Record<string, unknown>>(
  content: Partial<T>,
  item: Record<string, unknown>,
): T {
  const merged: Record<string, unknown> = { ...content, ...item }
  for (const [k, v] of Object.entries(merged)) {
    const tmpl = (content as Record<string, unknown>)[k]
    if (Array.isArray(tmpl) && !Array.isArray(v) && v != null)
      merged[k] = [String(v)]
  }
  return merged as T
}