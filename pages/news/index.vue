<script setup lang="ts">
useSeoMeta({
  title: '新闻资讯 | 企业官网',
  description: '新闻资讯列表页。'
})

const news = [
  { title: '项目骨架已初始化', date: '2026-04-27', summary: '官网、后台、后端三端目录已经拆分完成。' },
  { title: '本机开发环境正在完善', date: '2026-04-27', summary: 'Node 20、JDK 17、Redis 兼容服务已就位。' }
]
</script>

<template>
  <section class="panel page">
    <h1 class="section-title">新闻资讯</h1>
    <div class="list">
      <article v-for="item in news" :key="item.title" class="item">
        <div class="meta">{{ item.date }}</div>
        <h2>{{ item.title }}</h2>
        <p>{{ item.summary }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.page {
  padding: 32px;
}

.list {
  display: grid;
  gap: 20px;
}

.item {
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(23, 33, 38, 0.08);
}

.meta {
  color: var(--site-accent);
  font-size: 13px;
}

h2 {
  margin: 8px 0;
}

p {
  margin: 0;
  color: var(--site-muted);
}
</style>

