<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">跳转至主要内容</a>
    <AppHeader />
    <main id="main-content" class="site-main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
