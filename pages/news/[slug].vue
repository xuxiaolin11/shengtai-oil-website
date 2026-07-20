<script setup lang="ts">
import localCompanyBannerUrl from '~/assets/images/company_1.png'
import { findNewsArticleBySlug, newsArticles } from '~/content/news'

const companyBannerUrl = useSiteAsset('images/company_1.png', localCompanyBannerUrl)

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const article = computed(() => findNewsArticleBySlug(slug.value))

if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: '新闻不存在'
  })
}

useSeoMeta({
  title: `${article.value.title} | 东营胜泰石油工程技术有限公司`,
  description: article.value.summary
})

const relatedArticles = computed(() =>
  newsArticles.filter((item) => item.slug !== article.value?.slug).slice(0, 4)
)
</script>

<template>
  <div class="news-detail-page">
    <section class="detail-hero">
      <img :src="companyBannerUrl" alt="东营胜泰石油工程技术有限公司新闻详情横幅" />
      <div class="detail-hero-overlay">
        <div class="hero-copy">
          <span class="hero-kicker">{{ article?.category }}</span>
          <h1>{{ article?.title }}</h1>
          <div class="hero-meta">
            <span>{{ article?.date }}</span>
            <i></i>
            <span>东营胜泰石油工程技术有限公司</span>
          </div>
        </div>
      </div>
    </section>

    <section class="detail-shell">
      <article class="detail-main">
        <div class="article-head">
          <div class="article-tags">
            <span v-for="item in article?.keywords" :key="item">{{ item }}</span>
          </div>
          <div class="breadcrumb">当前位置： 首页 &gt; 新闻动态 &gt; {{ article?.title }}</div>
        </div>

        <div class="article-content">
          <p v-for="paragraph in article?.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </article>

      <aside class="detail-side">
        <div class="side-card">
          <div class="side-title">相关新闻</div>
          <div class="related-list">
            <NuxtLink
              v-for="item in relatedArticles"
              :key="item.slug"
              :to="`/news/${item.slug}`"
              class="related-item"
            >
              <strong>{{ item.title }}</strong>
              <span>{{ item.date }}</span>
            </NuxtLink>
          </div>
        </div>

        <div class="side-card nav-card">
          <NuxtLink to="/news" class="back-link">返回新闻列表</NuxtLink>
        </div>
      </aside>
    </section>
  </div>
</template>

<style scoped>
.news-detail-page {
  background: linear-gradient(180deg, #f7f8fa 0%, #f2f4f7 100%);
}

.detail-hero {
  position: relative;
  width: min(1240px, calc(100% - 32px));
  margin: 0 auto;
  padding-top: 18px;
  overflow: hidden;
}

.detail-hero img {
  width: 100%;
  height: 280px;
  display: block;
  object-fit: cover;
}

.detail-hero-overlay {
  position: absolute;
  inset: 18px 0 0;
  background:
    linear-gradient(90deg, rgba(10, 31, 56, 0.86) 0%, rgba(10, 31, 56, 0.68) 48%, rgba(10, 31, 56, 0.24) 100%);
}

.hero-copy {
  max-width: 820px;
  padding: 34px 40px 24px;
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
  letter-spacing: 0.14em;
}

.hero-copy h1 {
  margin: 18px 0 0;
  color: #ffffff;
  font-size: clamp(28px, 3.4vw, 40px);
  line-height: 1.5;
  font-family: "STSong", "Songti SC", "Noto Serif SC", serif;
}

.hero-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
  color: rgba(241, 244, 248, 0.84);
  font-size: 14px;
}

.hero-meta i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(241, 244, 248, 0.6);
}

.detail-shell {
  width: min(1240px, calc(100% - 32px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 20px;
  padding: 22px 0 48px;
}

.detail-main,
.side-card {
  background: #ffffff;
  border: 1px solid rgba(17, 49, 85, 0.08);
}

.detail-main {
  padding: 24px 26px;
}

.article-head {
  display: grid;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(17, 49, 85, 0.08);
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.article-tags span {
  padding: 8px 12px;
  background: #f6f8fb;
  border: 1px solid rgba(17, 49, 85, 0.08);
  color: #536170;
  font-size: 13px;
}

.breadcrumb {
  color: #7e8995;
  font-size: 13px;
}

.article-content {
  padding-top: 20px;
}

.article-content p {
  margin: 0 0 16px;
  color: #344252;
  font-size: 16px;
  line-height: 2;
  text-align: justify;
  text-indent: 2em;
}

.detail-side {
  display: grid;
  gap: 16px;
  align-self: start;
}

.side-card {
  padding: 20px 18px;
}

.side-title {
  color: #1d2d40;
  font-size: 20px;
  font-weight: 700;
}

.related-list {
  display: grid;
  gap: 14px;
  margin-top: 16px;
}

.related-item {
  display: grid;
  gap: 6px;
  padding-bottom: 14px;
  border-bottom: 1px dashed rgba(17, 49, 85, 0.12);
}

.related-item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.related-item strong {
  color: #1d2d40;
  font-size: 15px;
  line-height: 1.7;
}

.related-item span {
  color: #8a95a1;
  font-size: 13px;
}

.nav-card {
  padding: 16px 18px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 42px;
  background: linear-gradient(180deg, #d2363b, #b51f2f);
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
}

@media (max-width: 1080px) {
  .detail-shell {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .detail-hero,
  .detail-shell {
    width: min(1240px, calc(100% - 20px));
  }

  .detail-hero {
    padding-top: 14px;
  }

  .detail-hero img {
    height: 240px;
  }

  .detail-hero-overlay {
    inset: 14px 0 0;
  }

  .hero-copy {
    padding: 22px 18px 18px;
  }

  .hero-copy h1 {
    font-size: 24px;
  }

  .detail-main,
  .side-card {
    padding-left: 16px;
    padding-right: 16px;
  }

  .article-content p {
    font-size: 15px;
  }
}
</style>
