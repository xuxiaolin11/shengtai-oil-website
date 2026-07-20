export function useSiteAsset(path: string, fallback = '') {
  const config = useRuntimeConfig()
  const cdnBase = String(config.public.cdnBase || '')
    .trim()
    .replace(/\/+$/, '')
  const normalizedPath = path.replace(/^\/+/, '')

  return cdnBase ? `${cdnBase}/${normalizedPath}` : fallback
}
