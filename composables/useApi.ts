type ApiEnvelope<T> = {
  code: number
  message: string
  data: T
}

export const useApiBase = () => {
  const config = useRuntimeConfig()
  return String(config.public.apiBase || 'http://localhost:3001').replace(/\/+$/, '')
}

export const useApiUrl = (path: string) => `${useApiBase()}${path}`

export const useAssetUrl = (path: string) => {
  const apiBase = useApiBase()
  if (/^https?:\/\//i.test(path)) return path
  if (path.startsWith('/uploads/')) return `${apiBase}${path}`
  return useSiteAsset(path)
}

export const apiFetch = async <T>(path: string, options?: Parameters<typeof $fetch>[1]) => {
  const response = await $fetch<ApiEnvelope<T>>(useApiUrl(path), options)
  return response.data
}
