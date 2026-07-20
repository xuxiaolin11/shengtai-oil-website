<script setup lang="ts">
import localCompanyBannerUrl from '~/assets/images/company_1.png'

const companyBannerUrl = useSiteAsset('images/company_1.png', localCompanyBannerUrl)

useSeoMeta({
  title: '联系我们 | 东营胜泰石油工程技术有限公司',
  description: '东营胜泰石油工程技术有限公司官方联系页面。'
})

const contactPhone = '0546-8080866'
const contactPhoneHref = `tel:${contactPhone}`

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
            欢迎就业务合作、项目咨询与来访接待等事宜与东营胜泰石油工程技术有限公司取得联系。
            我们将以规范、及时、负责的态度做好业务沟通与来访接待。
          </p>
        </div>
      </div>
    </section>

    <section class="contact-phone-section">
      <div class="phone-copy">
        <span>联系电话</span>
        <strong>业务咨询与来访联络</strong>
      </div>
      <a class="phone-link" :href="contactPhoneHref" :aria-label="`拨打电话 ${contactPhone}`">
        {{ contactPhone }}
      </a>
    </section>

    <section v-if="showContactOverviewSection || showMapSection" class="contact-shell">
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
              <p>公司地址及来访指引以公司对外发布的正式信息为准。</p>
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

.contact-phone-section {
  width: min(1240px, calc(100% - 32px));
  margin: 22px auto 48px;
  padding: 20px 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: #ffffff;
  border: 1px solid rgba(17, 49, 85, 0.1);
  border-left: 4px solid #c92f36;
}

.phone-copy {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.phone-copy span {
  color: #8a7583;
  font-size: 13px;
  font-weight: 700;
}

.phone-copy strong {
  color: #1d2d40;
  font-size: 18px;
  line-height: 1.4;
}

.phone-link {
  color: #b9252c;
  font-family: "Times New Roman", serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
}

.phone-link:hover,
.phone-link:focus-visible {
  color: #8f1c24;
  text-decoration: underline;
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
.qr-panel {
  background: #ffffff;
  border: 1px solid rgba(17, 49, 85, 0.08);
}

.overview-main,
.overview-side,
.map-card,
.qr-panel {
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
.qr-card strong {
  display: block;
  margin-top: 10px;
  color: #1d2d40;
  font-size: 20px;
  line-height: 1.5;
}

.contact-card p,
.qr-head p,
.map-copy p,
.qr-card p {
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

@media (max-width: 1080px) {
  .contact-overview,
  .map-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 860px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .contact-hero,
  .contact-phone-section,
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

  .contact-phone-section {
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
    padding: 18px 20px;
  }

  .phone-link {
    font-size: 28px;
  }

  .hero-copy p,
  .contact-card p,
  .map-copy p,
  .qr-card p {
    font-size: 14px;
  }

  .block-head h2 {
    font-size: 28px;
  }

  .overview-main,
  .overview-side,
  .map-card,
  .qr-panel {
    padding-left: 16px;
    padding-right: 16px;
  }

  .map-visual {
    min-height: 240px;
  }

}
</style>
