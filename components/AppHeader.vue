<script setup lang="ts">
const route = useRoute()
import logoUrl from '~/assets/images/logo1.png'
</script>

<template>
  <header class="header">
    <div class="inner">
      <NuxtLink class="brand" to="/" aria-label="东营胜泰石油工程技术有限公司首页">
        <img class="brand-logo" :src="logoUrl" alt="东营胜泰石油工程技术有限公司 Logo" />
        <span class="brand-copy">
          <strong>东营胜泰石油工程技术有限公司</strong>
          <small>Dongying Shengtai Petroleum Engineering Technology Co., Ltd.</small>
        </span>
      </NuxtLink>
      <nav class="nav" aria-label="站点导航">
        <NuxtLink class="nav-item" to="/" :aria-current="route.path === '/' ? 'page' : undefined">首页</NuxtLink>
        <NuxtLink class="nav-item" to="/about" :aria-current="route.path === '/about' ? 'page' : undefined">公司简介</NuxtLink>
        <NuxtLink class="nav-item" to="/history" :aria-current="route.path === '/history' ? 'page' : undefined">发展历程</NuxtLink>
        <span class="nav-item is-placeholder">资质荣誉</span>
        <span class="nav-item is-placeholder">企业文化</span>
        <span class="nav-item is-placeholder">新闻动态</span>
        <span class="nav-item is-placeholder">联系我们</span>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(16px);
  background: linear-gradient(180deg, #d93a40 0%, #c92f36 52%, #b9252c 100%);
  border-bottom: 1px solid rgba(128, 18, 23, 0.32);
  box-shadow: 0 10px 24px rgba(90, 21, 31, 0.12);
}

.inner {
  width: min(1240px, calc(100% - 32px));
  margin: 0 auto;
  min-height: 88px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 360px;
  margin-right: auto;
  padding: 10px 22px 10px 0;
  background: transparent;
}

.brand-logo {
  width: 92px;
  height: auto;
  flex: 0 0 auto;
  display: block;
  margin-left: 20px;
  margin-right: -18px;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  flex: 1;
}

.brand-copy strong {
  font-size: 22px;
  line-height: 1.2;
  color: #ffffff;
  white-space: nowrap;
  letter-spacing: 0.02em;
}

.brand-copy small {
  font-size: 11px;
  line-height: 1.2;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.74);
  text-transform: uppercase;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px 26px;
  margin-left: auto;
}

.nav-item {
  position: relative;
  padding: 10px 0;
  color: rgba(255, 255, 255, 0.92);
  font-size: 17px;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
}

.nav a.nav-item {
  transition: color 0.2s ease;
}

.nav a.nav-item[aria-current="page"] {
  color: #ffffff;
}

.nav a.nav-item::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 2px;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left;
  background: rgba(255, 255, 255, 0.96);
  transition: transform 0.2s ease;
}

.nav a.nav-item:hover,
.nav a.nav-item:focus-visible {
  color: #ffffff;
}

.nav a.nav-item:hover::after,
.nav a.nav-item:focus-visible::after,
.nav a.nav-item[aria-current="page"]::after {
  transform: scaleX(1);
}

.is-placeholder {
  color: rgba(255, 255, 255, 0.76);
  cursor: default;
}

@media (max-width: 1080px) {
  .inner {
    padding: 14px 0;
    align-items: flex-start;
    flex-direction: column;
  }

  .brand {
    min-width: 0;
    margin-right: 0;
    padding-right: 12px;
  }

  .nav {
    width: 100%;
    justify-content: flex-start;
    margin-left: 0;
  }
}

@media (max-width: 640px) {
  .brand {
    align-items: flex-start;
    gap: 6px;
  }

  .brand-logo {
    width: 68px;
    margin-left: 12px;
    margin-right: -10px;
  }

  .brand-copy strong {
    font-size: 18px;
    white-space: normal;
  }

  .brand-copy small {
    font-size: 10px;
    letter-spacing: 0.04em;
  }

  .nav {
    gap: 8px 18px;
  }

  .nav-item {
    padding: 6px 0;
    font-size: 15px;
  }
}
</style>
