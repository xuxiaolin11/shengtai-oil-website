<template>
  <footer class="footer">
    <div class="inner">
      <div class="footer-brand">
        <strong>东营胜泰石油工程技术有限公司</strong>
        <span>服务国家能源安全战略，深耕石油工程主业，稳步拓展新能源业务。</span>
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
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(10, 31, 58, 0.98), rgba(7, 23, 43, 1)),
    #081a30;
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
  color: rgba(229, 237, 247, 0.78);
  font-size: 14px;
}

.footer-brand,
.footer-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
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
}
</style>
