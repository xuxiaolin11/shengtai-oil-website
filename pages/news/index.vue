<script setup lang="ts">
import companyBannerUrl from '~/assets/images/company_1.png'
import { newsArticles, newsCategoryTabs } from '~/content/news'

useSeoMeta({
  title: '新闻动态 | 东营胜泰石油工程技术有限公司',
  description:
    '东营胜泰石油工程技术有限公司新闻动态页面，展示公司要闻、媒体报道和专题专栏等内容。'
})

const activeTab = ref('全部新闻')

const filteredNews = computed(() =>
  activeTab.value === '全部新闻'
    ? newsArticles
    : newsArticles.filter((item) => item.category === activeTab.value)
)
</script>

<template>
  <div class="news-page">
    <section class="news-hero">
      <img :src="companyBannerUrl" alt="东营胜泰石油工程技术有限公司新闻动态横幅" />
      <div class="news-hero-overlay">
        <div class="hero-copy">
          <span class="hero-kicker">News Center</span>
          <h1>新闻动态</h1>
          <p>聚焦公司要闻、项目进展、管理提升与专题信息，集中展示企业生产经营与工程服务动态。</p>
        </div>
      </div>
    </section>

    <section class="news-shell">
      <div class="news-toolbar">
        <button
          v-for="tab in newsCategoryTabs"
          :key="tab"
          type="button"
          :class="['toolbar-tab', { active: tab === activeTab }]"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <div class="news-list">
        <NuxtLink
          v-for="item in filteredNews"
          :key="item.slug"
          :to="`/news/${item.slug}`"
          class="news-item"
        >
          <div class="news-date">
            <strong>{{ item.date.slice(8, 10) }}</strong>
            <span>{{ item.date.slice(0, 7) }}</span>
          </div>

          <div class="news-body">
            <div class="news-meta">
              <em>{{ item.category }}</em>
              <span>{{ item.date }}</span>
            </div>
            <h2>{{ item.title }}</h2>
            <p>{{ item.summary }}</p>
          </div>

          <div class="news-more">查看详情</div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.news-page {
  background: linear-gradient(180deg, #f7f8fa 0%, #f2f4f7 100%);
}

.news-hero {
  position: relative;
  width: min(1240px, calc(100% - 32px));
  margin: 0 auto;
  padding-top: 18px;
  overflow: hidden;
}

.news-hero img {
  width: 100%;
  height: 280px;
  display: block;
  object-fit: cover;
}

.news-hero-overlay {
  position: absolute;
  inset: 18px 0 0;
  background:
    linear-gradient(90deg, rgba(10, 31, 56, 0.84) 0%, rgba(10, 31, 56, 0.66) 42%, rgba(10, 31, 56, 0.22) 100%);
}

.hero-copy {
  max-width: 720px;
  padding: 40px 40px 30px;
}

.hero-kicker {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 14px;
  background: rgba(199, 165, 106, 0.12);
  border: 1px solid rgba(199, 165, 106, 0.28);
  color: #d7b982;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-copy h1 {
  margin: 18px 0 0;
  color: #ffffff;
  font-size: clamp(34px, 4vw, 48px);
  line-height: 1.2;
  font-family: "STSong", "Songti SC", "Noto Serif SC", serif;
}

.hero-copy p {
  margin: 18px 0 0;
  color: rgba(241, 244, 248, 0.9);
  font-size: 16px;
  line-height: 1.9;
}

.news-shell {
  width: min(1240px, calc(100% - 32px));
  margin: 0 auto;
  padding: 22px 0 48px;
}

.news-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.toolbar-tab {
  min-height: 40px;
  padding: 0 18px;
  border: 1px solid rgba(17, 49, 85, 0.12);
  background: #ffffff;
  color: #52606f;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.toolbar-tab.active {
  border-color: rgba(210, 54, 59, 0.2);
  background: linear-gradient(180deg, #d2363b, #b51f2f);
  color: #ffffff;
}

.news-list {
  display: grid;
  gap: 16px;
  margin-top: 20px;
}

.news-item {
  display: grid;
  grid-template-columns: 96px minmax(0, 1fr) 90px;
  gap: 18px;
  align-items: center;
  padding: 18px 20px;
  background: #ffffff;
  border: 1px solid rgba(17, 49, 85, 0.08);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.news-item:hover,
.news-item:focus-visible {
  border-color: rgba(210, 54, 59, 0.18);
  box-shadow: 0 12px 24px rgba(8, 29, 55, 0.06);
  transform: translateY(-1px);
}

.news-date {
  border: 1px solid rgba(17, 49, 85, 0.08);
  background: #fbfcfd;
  text-align: center;
}

.news-date strong {
  display: block;
  padding: 10px 0 6px;
  color: #19385e;
  font-size: 28px;
  line-height: 1;
}

.news-date span {
  display: block;
  padding: 8px 0;
  border-top: 1px solid rgba(17, 49, 85, 0.06);
  color: #788593;
  font-size: 13px;
}

.news-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.news-meta em {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 0 10px;
  background: #f5f0e4;
  color: #9a7741;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
}

.news-meta span {
  color: #7f8a96;
  font-size: 13px;
}

.news-body h2 {
  margin: 10px 0 0;
  color: #1d2d40;
  font-size: 22px;
  line-height: 1.5;
}

.news-body p {
  margin: 10px 0 0;
  color: #536170;
  font-size: 14px;
  line-height: 1.85;
}

.news-more {
  color: #b22731;
  font-size: 14px;
  font-weight: 700;
  text-align: right;
}

@media (max-width: 960px) {
  .news-item {
    grid-template-columns: 86px minmax(0, 1fr);
  }

  .news-more {
    text-align: left;
  }
}

@media (max-width: 720px) {
  .news-hero,
  .news-shell {
    width: min(1240px, calc(100% - 20px));
  }

  .news-hero {
    padding-top: 14px;
  }

  .news-hero img {
    height: 220px;
  }

  .news-hero-overlay {
    inset: 14px 0 0;
  }

  .hero-copy {
    padding: 24px 18px 18px;
  }

  .hero-copy p {
    font-size: 14px;
  }

  .news-item {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 16px;
  }

  .news-body h2 {
    font-size: 18px;
  }

  .news-date {
    width: 90px;
  }
}
</style>
