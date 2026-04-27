export default defineNuxtConfig({
  compatibilityDate: '2025-04-01',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.css'],
  app: {
    head: {
      title: '东营胜泰石油工程技术有限公司',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            '东营胜泰石油工程技术有限公司官方网站，聚焦石油天然气技术服务、陆地油气开采、地热井施工、井下作业与钻采设备制造。'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8080/api'
    }
  }
})
