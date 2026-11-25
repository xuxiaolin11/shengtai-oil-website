type SitemapEntry = {
  path: string
  lastModified?: string
  priority: string
}

const STATIC_SITEMAP_ENTRIES: SitemapEntry[] = [
  {
    path: '/',
    priority: '1.0'
  },
  {
    path: '/about',
    priority: '0.8'
  },
  {
    path: '/history',
    priority: '0.7'
  },
  {
    path: '/honor',
    priority: '0.8'
  },
  {
    path: '/culture',
    priority: '0.7'
  },
  {
    path: '/news',
    priority: '0.9'
  },
  {
    path: '/contact',
    priority: '0.6'
  }
]

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const siteUrl = runtimeConfig.public.siteUrl.replace(/\/$/, '')
  const apiBase = String(runtimeConfig.public.apiBase || 'http://localhost:3001').replace(/\/+$/, '')

  let publishedNews: { slug: string; date: string }[] = []
  try {
    const response = await $fetch<{ code: number; data: { slug: string; date: string }[] }>(
      `${apiBase}/api/public/news/sitemap`
    )
    if (response.code === 0) {
      publishedNews = response.data
    }
  } catch (error) {
    console.error('sitemap 获取新闻数据失败', error)
  }

  const newsEntries: SitemapEntry[] = publishedNews.map((article) => ({
    path: `/news/${article.slug}`,
    lastModified: article.date,
    priority: '0.7'
  }))
  const entries = [...STATIC_SITEMAP_ENTRIES, ...newsEntries]
  const urls = entries
    .map((entry) => {
      const lastModified = entry.lastModified ? `<lastmod>${entry.lastModified}</lastmod>` : ''
      const location = escapeXml(`${siteUrl}${entry.path}`)

      return [
        '<url>',
        `<loc>${location}</loc>`,
        lastModified,
        `<priority>${entry.priority}</priority>`,
        '</url>'
      ].join('')
    })
    .join('')

  setHeader(event, 'content-type', 'application/xml; charset=UTF-8')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>'
  ].join('')
})
