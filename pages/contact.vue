<script setup lang="ts">
import localCompanyBannerUrl from '~/assets/images/company_1.png'

const companyBannerUrl = useSiteAsset('images/company_1.png', localCompanyBannerUrl)

useSeoMeta({
  title: '联系我们 | 东营胜泰石油工程技术有限公司',
  description:
    '东营胜泰石油工程技术有限公司联系我们页面，展示公司联系方式、联系地址、地图位置、二维码与在线留言入口。'
})

const showContactOverviewSection = false
const showMapSection = false

const contactItems = [
  {
    label: '公司名称',
    value: '东营胜泰石油工程技术有限公司',
    note: 'DONGYING SHENGTAI PETROLEUM ENGINEERING TECHNOLOGY CO., LTD.'
  },
  {
    label: '公司地址',
    value: '山东省东营市企业办公地址待补充',
    note: '建议补充营业执照/对外宣传统一使用的正式联系地址'
  },
  {
    label: '联系电话',
    value: '对外联系电话待补充',
    note: '建议填写固定电话及主要业务咨询电话'
  },
  {
    label: '电子邮箱',
    value: '企业邮箱待补充',
    note: '建议使用官网统一对外邮箱，便于商务与招聘咨询分流'
  }
]

const serviceItems = [
  '工程业务咨询',
  '客户合作洽谈',
  '项目履约沟通',
  '招聘与来访联系'
]

const qrItems = [
  { title: '微信公众号', desc: '用于企业动态发布、业务宣传与服务信息更新。' },
  { title: '业务咨询二维码', desc: '用于客户联络、项目咨询或资料提交入口。' }
]

const officeItems = [
  { label: '服务时间', value: '工作日 08:30 - 17:30' },
  { label: '建议联络', value: '来访前请提前电话预约' },
  { label: '响应方式', value: '电话、邮箱、在线留言统一受理' }
]
</script>

<template>
  <div class="contact-page">
    <section class="contact-hero">
      <img :src="companyBannerUrl" alt="东营胜泰石油工程技术有限公司联系我们页面横幅" />
      <div class="contact-hero-overlay">
        <div class="hero-copy">
          <span class="hero-kicker">Contact Us</span>
          <h1>联系我们</h1>
          <p>
            欢迎通过电话、邮箱、在线留言等方式与东营胜泰石油工程技术有限公司取得联系。
            我们将以规范、及时、负责的态度做好业务沟通与来访接待。
          </p>
        </div>
      </div>
    </section>

    <section class="contact-shell">
      <section v-if="showContactOverviewSection" class="contact-overview">
        <div class="overview-main">
          <header class="block-head">
            <span class="section-en">Contact Information</span>
            <h2>公司联系方式</h2>
          </header>

          <div class="contact-grid">
            <article v-for="item in contactItems" :key="item.label" class="contact-card">
              <span>{{ item.label }}</span>
              <strong>{{ item.value }}</strong>
              <p>{{ item.note }}</p>
            </article>
          </div>
        </div>

        <aside class="overview-side">
          <div class="side-title">联系指引</div>
          <div class="office-list">
            <div v-for="item in officeItems" :key="item.label" class="office-item">
              <span>{{ item.label }}</span>
              <strong>{{ item.value }}</strong>
            </div>
          </div>
          <div class="service-box">
            <div class="service-title">受理事项</div>
            <ul>
              <li v-for="item in serviceItems" :key="item">{{ item }}</li>
            </ul>
          </div>
        </aside>
      </section>

      <section v-if="showMapSection" class="contact-block">
        <header class="block-head">
          <span class="section-en">Location</span>
          <h2>地图位置</h2>
        </header>

        <div class="map-layout">
          <div class="map-card">
            <div class="map-visual" aria-label="地图位置展示区域">
              <div class="map-pin">
                <span></span>
              </div>
              <div class="map-badge">MAP</div>
            </div>
            <div class="map-copy">
              <strong>公司位置展示区</strong>
              <p>
                当前页面为标准地图展示版式，后续可直接接入百度地图、高德地图或腾讯地图 iframe / JS SDK，
                用于展示公司办公地址、导航路线与来访指引。
              </p>
            </div>
          </div>

          <div class="qr-panel">
            <div class="qr-head">
              <strong>二维码区域</strong>
              <p>建议放置企业公众号、业务咨询或客户服务二维码，便于移动端快速联系。</p>
            </div>
            <div class="qr-grid">
              <article v-for="item in qrItems" :key="item.title" class="qr-card">
                <div class="qr-box" aria-hidden="true">
                  <div class="qr-pattern"></div>
                </div>
                <strong>{{ item.title }}</strong>
                <p>{{ item.desc }}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-block">
        <header class="block-head">
          <span class="section-en">Online Message</span>
          <h2>在线留言</h2>
        </header>

        <div class="form-panel">
          <div class="form-copy">
            <strong>欢迎提交您的咨询信息</strong>
            <p>
              如您有工程合作、项目咨询、来访预约、招聘沟通等需求，可填写以下信息。
              页面当前为前端展示版本，后续可接入 `POST /api/forms/contact` 进行线索提交与后台管理。
            </p>
          </div>

          <form class="message-form" @submit.prevent>
            <div class="form-grid">
              <label class="field">
                <span>联系人</span>
                <input type="text" placeholder="请输入联系人姓名" />
              </label>
              <label class="field">
                <span>联系电话</span>
                <input type="text" placeholder="请输入联系电话" />
              </label>
              <label class="field">
                <span>电子邮箱</span>
                <input type="email" placeholder="请输入电子邮箱" />
              </label>
              <label class="field">
                <span>联系单位</span>
                <input type="text" placeholder="请输入单位名称" />
              </label>
            </div>

            <label class="field textarea-field">
              <span>留言内容</span>
              <textarea rows="6" placeholder="请输入您的咨询内容、合作需求或来访说明"></textarea>
            </label>

            <div class="form-actions">
              <button type="submit">提交留言</button>
              <small>提交功能可在后续接入后台接口后启用</small>
            </div>
          </form>
        </div>
      </section>

      <section class="contact-block footer-note-block">
        <div class="footer-note">
          <strong>版权与备案信息</strong>
          <p>版权所有 © 2026 东营胜泰石油工程技术有限公司</p>
          <p>备案信息：鲁ICP备XXXXXXXX号</p>
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped>
.contact-page {
  background: linear-gradient(180deg, #f7f8fa 0%, #f2f4f7 100%);
}

.contact-hero {
  position: relative;
  width: min(1240px, calc(100% - 32px));
  margin: 0 auto;
  padding-top: 18px;
  overflow: hidden;
}

.contact-hero img {
  width: 100%;
  height: 300px;
  display: block;
  object-fit: cover;
  object-position: center center;
}

.contact-hero-overlay {
  position: absolute;
  inset: 18px 0 0;
  background:
    linear-gradient(90deg, rgba(9, 31, 56, 0.84) 0%, rgba(9, 31, 56, 0.68) 42%, rgba(9, 31, 56, 0.24) 100%);
}

.hero-copy {
  max-width: 720px;
  padding: 42px 40px 32px;
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
  line-height: 1.95;
}

.contact-shell {
  width: min(1240px, calc(100% - 32px));
  margin: 0 auto;
  padding: 22px 0 48px;
}

.contact-overview {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 330px;
  gap: 20px;
}

.overview-main,
.overview-side,
.contact-card,
.map-card,
.qr-panel,
.form-panel,
.footer-note {
  background: #ffffff;
  border: 1px solid rgba(17, 49, 85, 0.08);
}

.overview-main,
.overview-side,
.map-card,
.qr-panel,
.form-panel,
.footer-note {
  padding: 22px 24px;
}

.contact-block {
  padding-top: 28px;
}

.block-head {
  margin-bottom: 18px;
}

.section-en {
  display: inline-block;
  color: #a8834a;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.block-head h2 {
  margin: 8px 0 0;
  color: #1a2a3c;
  font-size: 34px;
  line-height: 1.2;
  font-family: "STSong", "Songti SC", "Noto Serif SC", serif;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.contact-card {
  padding: 18px 18px 16px;
}

.contact-card span,
.office-item span {
  display: block;
  color: #8a7583;
  font-size: 13px;
  font-weight: 700;
}

.contact-card strong,
.office-item strong,
.map-copy strong,
.form-copy strong,
.qr-card strong,
.footer-note strong {
  display: block;
  margin-top: 10px;
  color: #1d2d40;
  font-size: 20px;
  line-height: 1.5;
}

.contact-card p,
.qr-head p,
.map-copy p,
.form-copy p,
.qr-card p,
.footer-note p {
  margin: 10px 0 0;
  color: #52606f;
  font-size: 14px;
  line-height: 1.85;
}

.side-title,
.service-title {
  color: #1b2b3e;
  font-size: 18px;
  font-weight: 700;
}

.office-list {
  display: grid;
  gap: 14px;
}

.office-item {
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(17, 49, 85, 0.08);
}

.service-box {
  margin-top: 18px;
  padding: 18px;
  background: #f7f9fb;
  border-left: 4px solid #c7a56a;
}

.service-box ul {
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
}

.service-box li {
  position: relative;
  padding-left: 16px;
  color: #4f5d6c;
  font-size: 14px;
}

.service-box li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #c7a56a;
}

.map-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 20px;
}

.map-visual {
  position: relative;
  min-height: 320px;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(13, 42, 75, 0.08), rgba(13, 42, 75, 0.04)),
    linear-gradient(135deg, #dbe4ec 0%, #f5f8fb 52%, #c9d5e0 100%);
  border: 1px solid rgba(17, 49, 85, 0.08);
}

.map-visual::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      90deg,
      rgba(17, 49, 85, 0.08) 0,
      rgba(17, 49, 85, 0.08) 1px,
      transparent 1px,
      transparent 68px
    ),
    repeating-linear-gradient(
      0deg,
      rgba(177, 34, 40, 0.05) 0,
      rgba(177, 34, 40, 0.05) 1px,
      transparent 1px,
      transparent 54px
    );
}

.map-pin {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 62px;
  height: 62px;
  transform: translate(-50%, -50%);
  border-radius: 50% 50% 50% 0;
  background: linear-gradient(180deg, #d2363b, #a8202d);
  rotate: -45deg;
  box-shadow: 0 16px 28px rgba(90, 21, 31, 0.18);
}

.map-pin span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 22px;
  height: 22px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #ffffff;
}

.map-badge {
  position: absolute;
  right: 18px;
  bottom: 18px;
  min-height: 28px;
  padding: 0 12px;
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  color: #1a4d86;
  font-size: 12px;
  font-weight: 700;
}

.map-copy {
  margin-top: 16px;
}

.qr-head strong {
  color: #1b2b3e;
  font-size: 22px;
}

.qr-grid {
  display: grid;
  gap: 16px;
  margin-top: 18px;
}

.qr-card {
  padding: 18px;
  background: #f9fafc;
  border: 1px solid rgba(17, 49, 85, 0.08);
}

.qr-box {
  width: 132px;
  height: 132px;
  display: grid;
  place-items: center;
  background: #ffffff;
  border: 1px solid rgba(17, 49, 85, 0.1);
}

.qr-pattern {
  width: 92px;
  height: 92px;
  background:
    linear-gradient(90deg, #1b2b3e 12px, transparent 12px) 0 0 / 28px 28px,
    linear-gradient(#1b2b3e 12px, transparent 12px) 0 0 / 28px 28px,
    linear-gradient(90deg, #1b2b3e 8px, transparent 8px) 14px 14px / 20px 20px,
    linear-gradient(#1b2b3e 8px, transparent 8px) 14px 14px / 20px 20px;
}

.form-panel {
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 22px;
}

.message-form {
  min-width: 0;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.field {
  display: grid;
  gap: 8px;
}

.field span {
  color: #1d2d40;
  font-size: 14px;
  font-weight: 700;
}

.field input,
.field textarea {
  width: 100%;
  border: 1px solid rgba(17, 49, 85, 0.14);
  background: #fbfcfd;
  color: #2c3642;
  padding: 12px 14px;
  outline: none;
}

.field input:focus,
.field textarea:focus {
  border-color: rgba(210, 54, 59, 0.42);
  box-shadow: 0 0 0 3px rgba(210, 54, 59, 0.08);
}

.textarea-field {
  margin-top: 16px;
}

.form-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 18px;
}

.form-actions button {
  min-width: 148px;
  min-height: 46px;
  border: 0;
  background: linear-gradient(180deg, #d2363b, #b51f2f);
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}

.form-actions small {
  color: #7d8793;
  font-size: 13px;
  line-height: 1.7;
}

.footer-note-block {
  padding-top: 24px;
}

.footer-note {
  text-align: center;
}

@media (max-width: 1080px) {
  .contact-overview,
  .map-layout,
  .form-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 860px) {
  .contact-grid,
  .form-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .contact-hero,
  .contact-shell {
    width: min(1240px, calc(100% - 20px));
  }

  .contact-hero {
    padding-top: 14px;
  }

  .contact-hero img {
    height: 240px;
  }

  .contact-hero-overlay {
    inset: 14px 0 0;
  }

  .hero-copy {
    padding: 24px 18px 18px;
  }

  .hero-copy p,
  .contact-card p,
  .map-copy p,
  .form-copy p,
  .qr-card p {
    font-size: 14px;
  }

  .block-head h2 {
    font-size: 28px;
  }

  .overview-main,
  .overview-side,
  .map-card,
  .qr-panel,
  .form-panel,
  .footer-note {
    padding-left: 16px;
    padding-right: 16px;
  }

  .map-visual {
    min-height: 240px;
  }

  .form-actions {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
