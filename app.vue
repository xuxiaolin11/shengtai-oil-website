<script setup lang="ts">
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const canonicalUrl = computed(() => {
  const siteUrl = runtimeConfig.public.siteUrl.replace(/\/$/, '')

  return `${siteUrl}${route.path}`
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
