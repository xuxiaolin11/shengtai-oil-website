<template>
  <header class="header">
    <div class="inner">
      <NuxtLink class="brand" to="/" aria-label="东营胜泰石油工程技术有限公司首页">
        <span class="brand-mark">胜泰</span>
        <span class="brand-copy">
          <strong>东营胜泰石油工程技术有限公司</strong>
          <small>Dongying Shengtai Petroleum Engineering Technology Co., Ltd.</small>
        </span>
      </NuxtLink>
      <nav class="nav" aria-label="首页导航">
        <a class="nav-item" href="#top" aria-current="page">首页</a>
        <span class="nav-item is-placeholder">公司简介</span>
        <span class="nav-item is-placeholder">业务领域</span>
        <span class="nav-item is-placeholder">发展历程</span>
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
  background: rgba(248, 251, 255, 0.94);
  border-bottom: 1px solid rgba(16, 53, 94, 0.1);
  box-shadow: 0 10px 30px rgba(7, 29, 56, 0.06);
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
  gap: 16px;
  min-width: 0;
  margin-right: auto;
}

.brand-mark {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(135deg, rgba(179, 34, 34, 0.94), rgba(126, 10, 10, 0.96)),
    linear-gradient(180deg, #143d74, #0d2748);
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.08em;
  box-shadow: 0 12px 24px rgba(126, 10, 10, 0.24);
}

.brand-copy {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.brand-copy strong {
  font-size: 22px;
  line-height: 1.2;
  color: #102f57;
}

.brand-copy small {
  font-size: 11px;
  line-height: 1.2;
  letter-spacing: 0.08em;
  color: #5e718b;
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
  color: #27486d;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
}

.nav a.nav-item {
  transition: color 0.2s ease;
}

.nav a.nav-item[aria-current="page"] {
  color: #0f2e55;
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
  background: linear-gradient(90deg, #b41f24, #183f72);
  transition: transform 0.2s ease;
}

.nav a.nav-item:hover,
.nav a.nav-item:focus-visible {
  color: #0f2e55;
}

.nav a.nav-item:hover::after,
.nav a.nav-item:focus-visible::after {
  transform: scaleX(1);
}

.is-placeholder {
  color: #4a6788;
  cursor: default;
}

@media (max-width: 1080px) {
  .inner {
    padding: 14px 0;
    align-items: flex-start;
    flex-direction: column;
  }

  .brand {
    margin-right: 0;
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
  }

  .brand-mark {
    width: 46px;
    height: 46px;
    border-radius: 12px;
    font-size: 16px;
  }

  .brand-copy strong {
    font-size: 18px;
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
