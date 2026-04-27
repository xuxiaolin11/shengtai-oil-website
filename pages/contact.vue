<script setup lang="ts">
useSeoMeta({
  title: '联系我们 | 企业官网',
  description: '联系表单与咨询入口。'
})
</script>

<template>
  <section class="panel page">
    <h1 class="section-title">联系我们</h1>
    <p class="section-copy">
      这里预留官网询盘表单入口。后续会接到后端 `POST /api/forms/contact` 接口，并进入后台线索管理。
    </p>
  </section>
</template>

<style scoped>
.page {
  padding: 32px;
}
</style>

