<script setup lang="ts">
import logoUrl from '~/assets/images/logo1.png'
</script>

<template>
  <footer class="footer">
    <div class="inner">
      <div class="footer-brand">
        <img class="footer-logo" :src="logoUrl" alt="东营胜泰石油工程技术有限公司 Logo" />
        <div class="footer-brand-copy">
          <strong>东营胜泰石油工程技术有限公司</strong>
          <span>服务国家能源安全战略，深耕石油工程主业，稳步拓展新能源业务。</span>
        </div>
      </div>
      <div class="footer-meta">
        <span>版权所有 © 2026 东营胜泰石油工程技术有限公司</span>
        <span>备案信息：鲁ICP备XXXXXXXX号</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  background: #7a7b7f;
}

.inner {
  width: min(1240px, calc(100% - 32px));
  margin: 0 auto;
  min-height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
  color: rgba(233, 239, 246, 0.8);
  font-size: 14px;
}

.footer-brand,
.footer-meta {
  display: flex;
  gap: 8px;
}

.footer-brand {
  align-items: center;
  gap: 12px;
}

.footer-brand-copy,
.footer-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-logo {
  width: 74px;
  height: auto;
  display: block;
  flex: 0 0 auto;
  margin-right: -8px;
}

.footer-brand strong {
  color: #ffffff;
  font-size: 18px;
}

.footer-brand span,
.footer-meta span {
  line-height: 1.7;
}

@media (max-width: 840px) {
  .inner {
    align-items: flex-start;
    flex-direction: column;
  }

  .footer-brand {
    align-items: flex-start;
  }
}
</style>
