<script setup lang="ts">
import { newsArticles } from '~/content/news'
import companyImageUrl from '~/assets/images/company.png'
import cultureImage1Url from '~/assets/images/culture/culture_1.jpg'
import cultureImage2Url from '~/assets/images/culture/culture_2.jpg'
import cultureImage3Url from '~/assets/images/culture/culture_3.jpg'
import cultureImage4Url from '~/assets/images/culture/culture_4.jpg'
import cultureImage5Url from '~/assets/images/culture/culture_5.jpg'
import cultureImage6Url from '~/assets/images/culture/culture_6.jpg'

useSeoMeta({
  title: '首页 | 东营胜泰石油工程技术有限公司',
  description:
    '东营胜泰石油工程技术有限公司首页，展示企业轮播主图、最新动态与核心栏目快捷入口。'
})

const slides = [
  {
    date: '2026-04-27',
    title: '公司持续强化石油工程主业能力建设，重点井场项目组织运行平稳有序',
    summary: '后续可通过后台 API 配置轮播图片、标题、副标题、跳转链接与上下线状态。',
    label: '01',
    image: cultureImage1Url
  },
  {
    date: '2026-04-18',
    title: '坚持安全生产与规范管理并重，推进现场管理标准化、精细化、数字化',
    summary: '本区域为 Banner 轮播位静态结构，后续可直接接入后台内容管理系统。',
    label: '02',
    image: cultureImage2Url
  },
  {
    date: '2026-04-08',
    title: '深耕油气工程服务主业，稳步拓展地热井施工与新能源相关业务领域',
    summary: '支持展示企业重点新闻、项目成果、责任信息与年度专题活动内容。',
    label: '03',
    image: cultureImage3Url
  },
  {
    date: '2026-03-26',
    title: '持续强化技术队伍建设与现场执行能力，夯实复杂工况施工组织基础',
    summary: '围绕重点区块项目执行与班组协作管理，进一步提升现场保障与履约能力。',
    label: '04',
    image: cultureImage4Url
  },
  {
    date: '2026-03-09',
    title: '坚持标准化作业与精细化管控并行，稳步提升钻井施工品质与安全水平',
    summary: '通过严格过程控制与班组协同管理，持续提升工程质量与现场管理成效。',
    label: '05',
    image: cultureImage5Url
  },
  {
    date: '2026-02-22',
    title: '聚焦一线实战与人才培养并重，推动项目执行、技术提升与团队成长协同发力',
    summary: '以项目实践带动队伍成长，进一步增强复杂井施工能力与区域服务支撑能力。',
    label: '06',
    image: cultureImage6Url
  }
]

const newsTabs = ['公司要闻']

const newsItems = newsArticles.slice(0, 3).map((item) => ({
  ...item,
  day: item.date.slice(8, 10),
  ym: item.date.slice(0, 7)
}))

const quickLinks = [
  { title: '公司概况', subtitle: 'Company profile' },
  { title: '企业文化', subtitle: 'Enterprise culture' },
  { title: '核心业务', subtitle: 'Core business' },
  { title: '客户服务', subtitle: 'Customer service' }
]

const showQuickLinks = false
const showDivisionSection = false
const showCultureSection = false
const showBannerOverlayContent = false

const divisionItems = [
  { title: '石油工程技术服务板块', date: '2026-04-11' },
  { title: '能源环保事业板块', date: '2026-03-18' },
  { title: '钻采装备制造服务板块', date: '2026-02-26' },
  { title: '地热井施工与保障服务', date: '2026-01-15' },
  { title: '井下作业支持体系', date: '2025-12-19' },
  { title: '区域项目协同管理中心', date: '2025-11-28' }
]

const businessShowcase = [
  {
    title: '石油工程技术',
    subtitle: 'Petroleum engineering',
    text: '围绕钻井、井下作业、现场保障和区域施工组织，形成稳定的工程技术服务体系。',
    tone: 'blue'
  },
  {
    title: '城市服务配套',
    subtitle: 'Urban support',
    text: '面向办公基地、园区保障、综合管理等场景，强化规范运营与服务支撑能力。',
    tone: 'light'
  },
  {
    title: '节能环保技术',
    subtitle: 'Energy conservation',
    text: '结合绿色发展导向，逐步拓展节能环保、资源利用与新能源相关业务能力。',
    tone: 'blue'
  }
]

const cultureSlides = [
  { title: '参加专业培训与团队建设', tag: '企业风貌 01', image: cultureImage1Url },
  { title: '综合办公区域与管理环境', tag: '企业风貌 02', image: cultureImage2Url },
  { title: '主办公楼及园区形象展示', tag: '企业风貌 03', image: cultureImage3Url },
  { title: '技术团队开展现场研讨交流', tag: '企业风貌 04', image: cultureImage4Url },
  { title: '班组协作与现场执行场景', tag: '企业风貌 05', image: cultureImage5Url },
  { title: '一线作业与文化建设展示', tag: '企业风貌 06', image: cultureImage6Url }
]

const cultureMarqueeSlides = [...cultureSlides, ...cultureSlides]

const currentIndex = ref(0)

const currentSlide = computed(() => slides[currentIndex.value])

const prevSlide = () => {
  currentIndex.value = (currentIndex.value + slides.length - 1) % slides.length
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(nextSlide, 5000)
})

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<template>
  <div id="top" class="home-page">
    <section class="home-banner panel">
      <div class="banner-grid">
        <article class="banner-slider">
          <header class="slider-head">
            <span class="slider-date">{{ currentSlide.date }}</span>
            <h1>{{ currentSlide.title }}</h1>
          </header>

          <div class="slider-visual" aria-label="首页轮播主图展示区域">
            <img class="slider-image" :src="currentSlide.image" :alt="currentSlide.title" />
            <button class="slider-arrow slider-arrow-prev" type="button" aria-label="上一张轮播图" @click="prevSlide">
              ‹
            </button>
            <button class="slider-arrow slider-arrow-next" type="button" aria-label="下一张轮播图" @click="nextSlide">
              ›
            </button>
            <div v-if="showBannerOverlayContent" class="visual-overlay">
              <div class="visual-copy">
                <div class="visual-kicker">Shengtai Petroleum Engineering</div>
                <p>{{ currentSlide.summary }}</p>
              </div>
              <div class="visual-badge">Banner {{ currentSlide.label }}</div>
            </div>
          </div>
        </article>

        <aside class="banner-news">
          <div class="news-heading">
            <div class="news-title-wrap">
              <span class="news-title">NEWS</span>
              <div class="news-subtitle">
                <strong>最新动态</strong>
                <span>THE LATEST INFORMATION</span>
              </div>
            </div>
            <div class="news-tabs">
              <button
                v-for="(tab, index) in newsTabs"
                :key="tab"
                :class="['news-tab', { active: index === 0 }]"
                type="button"
              >
                {{ tab }}
              </button>
            </div>
          </div>

          <div class="news-list">
            <NuxtLink v-for="item in newsItems" :key="item.slug" :to="`/news/${item.slug}`" class="news-item">
              <div class="news-date-box">
                <strong>{{ item.day }}</strong>
                <span>{{ item.ym }}</span>
              </div>
              <div class="news-body">
                <h2>{{ item.title }}</h2>
                <p>{{ item.summary }}</p>
              </div>
            </NuxtLink>
          </div>
        </aside>
      </div>

      <div v-if="showQuickLinks" class="quick-links">
        <a v-for="item in quickLinks" :key="item.title" href="javascript:void(0)" class="quick-link">
          <span class="quick-icon" aria-hidden="true"></span>
          <span class="quick-copy">
            <strong>{{ item.title }}</strong>
            <small>{{ item.subtitle }}</small>
          </span>
          <span class="quick-arrow" aria-hidden="true">›</span>
        </a>
      </div>
    </section>

    <section class="company-section">
      <div :class="['company-top', { 'single-column': !showDivisionSection }]">
        <div class="company-column">
          <div class="section-bar">
            <div class="section-bar-title">
              <span class="dot-mark"></span>
              <strong>公司简介</strong>
              <span>Company</span>
            </div>
            <a href="javascript:void(0)" class="more-link">MORE</a>
          </div>

          <div class="company-intro">
            <div class="company-image">
              <img :src="companyImageUrl" alt="东营胜泰石油工程技术有限公司办公与厂区展示" />
            </div>
            <div class="company-copy">
              <p>
                东营胜泰石油工程技术有限公司成立于2009年，由中石化胜利石油管理局黄河钻井公司改制成立，
                是一家深耕石油工程主业、面向油气开发与能源服务领域持续发展的综合型工程技术企业。
              </p>
              <p>
                公司坚持规范管理与市场化经营并重，围绕石油天然气技术服务、陆地油气开采、地热井施工、
                井下作业及钻采设备制造等方向，持续提升安全生产、技术立企、数字化管理和绿色发展能力。
              </p>
              <p>
                目前公司业务覆盖山东、陕西、内蒙古、新疆等区域，形成了较为完善的工程组织、现场保障、
                质量管理和人才建设体系。
              </p>
            </div>
          </div>
        </div>

        <div v-if="showDivisionSection" class="company-column">
          <div class="section-bar">
            <div class="section-bar-title">
              <span class="dot-mark"></span>
              <strong>事业板块</strong>
              <span>Division</span>
            </div>
            <a href="javascript:void(0)" class="more-link">MORE</a>
          </div>

          <div class="division-list">
            <article v-for="item in divisionItems" :key="item.title" class="division-item">
              <div class="division-title">
                <span class="triangle-mark">›</span>
                <span>{{ item.title }}</span>
              </div>
              <time :datetime="item.date">{{ item.date }}</time>
            </article>
          </div>
        </div>
      </div>

      <div class="company-bottom">
        <div class="company-side-brand">
          <div class="side-brand-mark"></div>
          <div class="side-brand-text">
            <strong>东营胜泰石油工程技术有限公司</strong>
            <span>DONGYING SHENGTAI PETROLEUM ENGINEERING TECHNOLOGY CO., LTD.</span>
          </div>
        </div>

        <div class="company-main-area">
          <div class="green-banner">
            <h2>坚持“规范管理、技术立企、绿色发展”导向，持续提升工程质量、安全水平与综合保障能力</h2>
            <p>
              围绕石油工程主业，公司持续推进安全生产、技术创新、提质增效、数字化管理与人才建设，
              努力构建更加专业、可靠、可持续的综合服务体系。
            </p>
          </div>

          <div class="business-grid">
            <article
              v-for="item in businessShowcase"
              :key="item.title"
              :class="['business-showcase', `tone-${item.tone}`]"
            >
              <div class="showcase-image" aria-hidden="true"></div>
              <div class="showcase-body">
                <h3>{{ item.title }}</h3>
                <strong>{{ item.subtitle }}</strong>
                <p>{{ item.text }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section v-if="showCultureSection" class="culture-section">
      <div class="culture-head">
        <div class="culture-head-center">
          <h2>企业文化</h2>
          <span>Culture</span>
          <i></i>
        </div>
        <a href="javascript:void(0)" class="more-link">MORE</a>
      </div>

      <div class="culture-slider">
        <div class="culture-track">
          <article v-for="(item, index) in cultureMarqueeSlides" :key="`${item.tag}-${index}`" class="culture-card">
            <img class="culture-image" :src="item.image" :alt="item.title" />
            <div class="culture-overlay">
              <strong>{{ item.title }}</strong>
              <span>{{ item.tag }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  padding-top: 2px;
  background: #ffffff;
}

.home-banner {
  padding: 0;
}

.banner-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.86fr) minmax(360px, 0.74fr);
  gap: 26px;
  align-items: start;
  padding: 8px 0 14px;
  background: #ffffff;
}

.banner-slider {
  min-width: 0;
}

.slider-head {
  padding: 0 0 10px;
  border-top: 4px solid #c11f26;
}

.slider-head h1 {
  margin: 8px 0 0;
  color: #154173;
  font-size: 22px;
  line-height: 1.4;
  font-weight: 700;
}

.slider-date {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 14px;
  background: linear-gradient(90deg, #19569b, #2c76cc);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
}

.slider-visual {
  position: relative;
  min-height: 300px;
  overflow: hidden;
  border: 1px solid rgba(17, 67, 122, 0.16);
  background: #d9e2ec;
}

.slider-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.slider-visual::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(8, 27, 49, 0.18) 0%, rgba(8, 27, 49, 0.42) 100%),
    linear-gradient(90deg, rgba(8, 27, 49, 0.48) 0%, rgba(8, 27, 49, 0.08) 56%, rgba(8, 27, 49, 0.12) 100%);
}

.slider-arrow {
  position: absolute;
  top: 50%;
  z-index: 2;
  width: 42px;
  height: 56px;
  border: 0;
  background: rgba(8, 27, 49, 0.34);
  color: #ffffff;
  font-size: 34px;
  line-height: 1;
  cursor: pointer;
  transform: translateY(-50%);
  transition:
    background-color 0.2s ease,
    opacity 0.2s ease;
}

.slider-arrow:hover {
  background: rgba(8, 27, 49, 0.54);
}

.slider-arrow-prev {
  left: 0;
}

.slider-arrow-next {
  right: 0;
}

.visual-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px;
}

.visual-copy {
  max-width: 74%;
  padding: 12px 14px;
  background: rgba(11, 35, 64, 0.58);
  color: rgba(255, 255, 255, 0.92);
}

.visual-kicker {
  margin-bottom: 10px;
  color: #d8b77b;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.visual-copy p {
  margin: 0;
  line-height: 1.7;
  font-size: 14px;
}

.visual-badge {
  align-self: flex-end;
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.88);
  color: #14457c;
  font-size: 12px;
  font-weight: 700;
}

.banner-news {
  min-width: 0;
}

.news-heading {
  display: grid;
  gap: 12px;
  margin-bottom: 14px;
}

.news-title-wrap {
  display: flex;
  align-items: flex-end;
  gap: 14px;
}

.news-title {
  color: #1d5ca3;
  font-family: "Times New Roman", serif;
  font-size: 54px;
  line-height: 1;
}

.news-subtitle {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 4px;
}

.news-subtitle strong {
  color: #1a1a1a;
  font-size: 22px;
  font-weight: 500;
}

.news-subtitle span {
  color: #6f7f90;
  font-size: 14px;
  letter-spacing: 0.05em;
}

.news-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.news-tab {
  min-height: 36px;
  padding: 0 18px;
  border: 1px solid rgba(20, 69, 124, 0.14);
  background: #a9aaad;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

.news-tab.active {
  background: #145ea8;
}

.news-list {
  display: grid;
  gap: 14px;
}

.news-item {
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  gap: 18px;
  align-items: start;
  padding-bottom: 10px;
  border-bottom: 1px dashed rgba(20, 69, 124, 0.14);
}

.news-item:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.news-date-box {
  border: 1px solid rgba(20, 69, 124, 0.12);
  background: #fbfcfe;
  text-align: center;
}

.news-date-box strong {
  display: block;
  padding: 8px 0 6px;
  color: #0b2340;
  font-size: 24px;
  line-height: 1;
}

.news-date-box span {
  display: block;
  padding: 8px 0;
  border-top: 1px solid rgba(20, 69, 124, 0.08);
  color: #7d8895;
  font-size: 13px;
}

.news-body h2 {
  margin: 0;
  color: #17477e;
  font-size: 17px;
  line-height: 1.55;
  font-weight: 700;
}

.news-body p {
  margin: 6px 0 0;
  color: #79889a;
  font-size: 14px;
  line-height: 1.7;
}

.quick-links {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  margin-top: 10px;
  padding: 10px 0 0;
  border-top: 3px solid #1f67ad;
  background: #f5f7fa;
}

.quick-link {
  min-height: 78px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 18px;
  background: #f7f8fa;
  border-top: 1px solid rgba(20, 69, 124, 0.06);
  border-right: 1px solid rgba(20, 69, 124, 0.06);
}

.quick-link:nth-child(even) {
  background: #eef2f6;
}

.quick-link:last-child {
  border-right: 0;
}

.quick-icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background:
    radial-gradient(circle at center, rgba(20, 69, 124, 0.16) 0 38%, transparent 39%),
    linear-gradient(135deg, rgba(20, 69, 124, 0.14), rgba(177, 34, 40, 0.1));
  flex: 0 0 auto;
}

.quick-copy {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.quick-copy strong {
  color: #51606f;
  font-size: 16px;
  font-weight: 700;
}

.quick-copy small {
  margin-top: 4px;
  color: #9aa4af;
  font-size: 12px;
}

.quick-arrow {
  margin-left: auto;
  color: #1f67ad;
  font-size: 24px;
  line-height: 1;
}

@media (max-width: 1080px) {
  .banner-grid {
    grid-template-columns: 1fr;
  }

  .news-title {
    font-size: 44px;
  }
}

@media (max-width: 720px) {
  .home-banner {
    padding: 0;
  }

  .slider-head h1 {
    font-size: 19px;
  }

  .slider-visual {
    min-height: 220px;
  }

  .visual-copy {
    max-width: 100%;
    padding: 14px;
  }

  .slider-arrow {
    width: 34px;
    height: 48px;
    font-size: 28px;
  }

  .news-title-wrap {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .news-title {
    font-size: 38px;
  }

  .news-item {
    grid-template-columns: 74px minmax(0, 1fr);
    gap: 14px;
  }

  .news-body h2 {
    font-size: 16px;
  }

  .quick-links {
    grid-template-columns: 1fr;
    background: #f5f7fa;
  }

.quick-link,
.quick-link:last-child {
    border-right: 0;
  }
}

.company-section {
  margin-top: 18px;
  background: #f7f8fa;
  padding: 14px 12px 0;
}

.company-top {
  display: grid;
  grid-template-columns: minmax(0, 0.64fr) minmax(320px, 0.36fr);
  gap: 28px;
  padding-bottom: 12px;
  background: #ffffff;
}

.company-top.single-column {
  grid-template-columns: 1fr;
}

.company-column {
  min-width: 0;
}

.section-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 4px 0 8px;
  border-bottom: 1px solid rgba(16, 40, 66, 0.26);
}

.section-bar-title {
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1;
}

.dot-mark {
  width: 12px;
  height: 12px;
  border: 3px solid #0d5aa6;
  border-radius: 50%;
  flex: 0 0 auto;
}

.section-bar-title strong {
  color: #0d4e93;
  font-size: 18px;
}

.section-bar-title span:last-child {
  color: #f08b1f;
  font-size: 16px;
  font-weight: 700;
}

.more-link {
  min-width: 54px;
  min-height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(16, 40, 66, 0.16);
  border-radius: 999px;
  color: #5f6d7f;
  font-size: 11px;
  font-weight: 700;
}

.company-intro {
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr);
  gap: 14px;
  padding: 12px 6px 0 6px;
}

.company-image {
  min-height: 136px;
  border: 1px solid rgba(20, 69, 124, 0.12);
  overflow: hidden;
  background: #e8edf3;
}

.company-image img {
  width: 100%;
  height: 100%;
  min-height: 220px;
  display: block;
  object-fit: cover;
}

.company-copy p {
  margin: 0 0 8px;
  color: #5d6f84;
  font-size: 14px;
  line-height: 1.78;
}

.division-list {
  padding: 8px 4px 0;
}

.division-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-height: 34px;
  border-bottom: 1px dashed rgba(16, 40, 66, 0.14);
}

.division-title {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  color: #2a4d72;
  font-size: 15px;
}

.triangle-mark {
  color: #0d5aa6;
  font-size: 18px;
  font-weight: 700;
}

.division-item time {
  color: #a58b5d;
  font-size: 14px;
  white-space: nowrap;
}

.company-bottom {
  display: grid;
  grid-template-columns: 165px minmax(0, 1fr);
  gap: 0;
  margin-top: 10px;
  background: #eef2f6;
}

.company-side-brand {
  display: flex;
  flex-direction: column;
  background: #ffffff;
}

.side-brand-mark {
  min-height: 80px;
  background:
    linear-gradient(180deg, #0f59a4, #0a4a8c);
  position: relative;
}

.side-brand-mark::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 14px;
  width: 58px;
  height: 46px;
  transform: translateX(-50%);
  background:
    linear-gradient(180deg, #d82028 0%, #ef2831 100%);
  clip-path: polygon(40% 0, 60% 0, 60% 30%, 95% 30%, 80% 52%, 20% 52%, 5% 30%, 40% 30%);
}

.side-brand-text {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 8px;
  writing-mode: vertical-rl;
}

.side-brand-text strong {
  color: #0c3470;
  font-size: 16px;
  line-height: 1.4;
}

.side-brand-text span {
  color: #2d4670;
  font-size: 9px;
  letter-spacing: 0.06em;
}

.company-main-area {
  background: #eef2f6;
}

.green-banner {
  padding: 10px 14px 6px;
}

.green-banner h2 {
  margin: 0;
  color: #3f4d5d;
  font-size: 20px;
  line-height: 1.4;
  font-weight: 700;
}

.green-banner p {
  margin: 6px 0 0;
  color: #7b8795;
  font-size: 14px;
  line-height: 1.7;
}

.business-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
}

.business-showcase {
  background: #eef2f6;
}

.showcase-image {
  min-height: 126px;
  background:
    linear-gradient(180deg, rgba(15, 89, 164, 0.05), rgba(15, 89, 164, 0.02)),
    linear-gradient(135deg, #dbe6ef 0%, #f6f8fb 100%);
}

.tone-blue .showcase-image {
  background:
    linear-gradient(180deg, rgba(15, 89, 164, 0.08), rgba(15, 89, 164, 0.02)),
    linear-gradient(135deg, #a7c3df 0%, #eff5fa 100%);
}

.tone-light .showcase-image {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),
    linear-gradient(135deg, #ebe9e3 0%, #faf9f6 100%);
}

.showcase-body {
  padding: 10px 12px 12px;
}

.showcase-body h3 {
  margin: 0;
  color: #0d4e93;
  font-size: 16px;
  line-height: 1.5;
}

.showcase-body strong {
  display: block;
  margin-top: 3px;
  color: #1b61ad;
  font-size: 12px;
  font-weight: 700;
}

.showcase-body p {
  margin: 8px 0 0;
  color: #6e7d8f;
  font-size: 13px;
  line-height: 1.7;
}

.culture-section {
  margin-top: 16px;
  padding: 16px 14px 12px;
  background: #ffffff;
}

.culture-head {
  position: relative;
  padding: 0 0 12px;
  border-bottom: 1px solid rgba(16, 40, 66, 0.12);
}

.culture-head-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.culture-head-center h2 {
  margin: 0;
  color: #0d5aa6;
  font-size: 22px;
  line-height: 1.2;
}

.culture-head-center span {
  margin-top: 2px;
  color: #f08b1f;
  font-size: 14px;
}

.culture-head-center i {
  width: 54px;
  height: 4px;
  margin-top: 6px;
  background: linear-gradient(90deg, #0d5aa6, #1a78d1);
}

.culture-head .more-link {
  position: absolute;
  right: 0;
  top: 0;
}

.culture-slider {
  position: relative;
  margin-top: 14px;
  overflow: hidden;
}

.culture-slider::after,
.culture-slider::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 64px;
  z-index: 2;
  pointer-events: none;
}

.culture-slider::before {
  left: 0;
  background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
}

.culture-slider::after {
  right: 0;
  background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
}

.culture-track {
  display: flex;
  gap: 12px;
  width: max-content;
  animation: culture-marquee 32s linear infinite;
}

.culture-slider:hover .culture-track {
  animation-play-state: paused;
}

.culture-card {
  position: relative;
  width: 280px;
  min-height: 180px;
  overflow: hidden;
  background: #d7e0ea;
}

.culture-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.culture-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px 14px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.34) 100%);
}

.culture-overlay strong {
  color: #ffffff;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
}

.culture-overlay span {
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 12px;
}

@keyframes culture-marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-50% - 6px));
  }
}

@media (max-width: 1080px) {
  .company-top {
    gap: 20px;
  }

  .company-bottom {
    grid-template-columns: 1fr;
  }

  .company-side-brand {
    display: none;
  }

  .culture-card {
    width: 240px;
  }
}

@media (max-width: 720px) {
  .company-section {
    margin-top: 14px;
    padding: 12px 8px 0;
  }

  .company-intro {
    grid-template-columns: 1fr;
    padding: 10px 0 0;
  }

  .company-image {
    min-height: 120px;
  }

  .division-item {
    align-items: flex-start;
    flex-direction: column;
    gap: 6px;
    padding: 10px 0;
  }

  .green-banner h2 {
    font-size: 18px;
  }

  .business-grid {
    grid-template-columns: 1fr;
  }

  .showcase-image {
    min-height: 120px;
  }

  .culture-section {
    margin-top: 12px;
    padding: 14px 10px 10px;
  }

  .culture-slider {
    margin-top: 12px;
  }

  .culture-card {
    width: 220px;
    min-height: 150px;
  }

  .culture-overlay {
    padding: 10px 12px;
  }

  .culture-overlay strong {
    font-size: 14px;
  }
}
</style>
