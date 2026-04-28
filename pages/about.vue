<script setup lang="ts">
useSeoMeta({
  title: '公司简介 | 东营胜泰石油工程技术有限公司',
  description:
    '东营胜泰石油工程技术有限公司公司简介页面，展示企业成立背景、规模信息、经营范围与组织架构。'
})

const sideMenu = ['公司简介', '企业资质', '公司领导', '组织架构']
const sectionMap = {
  company: '公司简介',
  qualification: '企业资质',
  leaders: '公司领导',
  org: '组织架构'
} as const

const selectedSection = ref<keyof typeof sectionMap>('company')

const scaleItems = [
  { label: '注册资本', value: '5000万元' },
  { label: '占地面积', value: '48亩' },
  { label: '固定职工', value: '180人' },
  { label: '本科及以上', value: '35人' },
  { label: '高级职称人员', value: '7人' },
  { label: '高级技术人员', value: '28人' }
]

const rigItems = ['30钻机', '40钻机', '50钻机', '70钻机', '共计10部钻机']

const businessItems = [
  '石油天然气技术服务',
  '陆地石油和天然气开采',
  '地热井施工',
  '井下作业',
  '石油钻采专用设备制造',
  '再生资源回收'
]

const qualificationItems = [
  '安全生产许可证',
  '质量管理体系认证证书',
  '职业健康安全管理体系认证证书',
  '环境管理体系认证证书',
  '石油天然气工程技术服务相关备案资质',
  '钻采设备制造与维修相关许可资质'
]

const leaderItems = [
  { title: '董事长', name: '张某某', text: '主持公司战略规划、重大事项决策与规范治理体系建设。' },
  { title: '总经理', name: '李某某', text: '负责公司全面经营管理、生产组织与年度目标落实。' },
  { title: '副总经理', name: '王某某', text: '分管工程技术、安全环保与现场作业体系建设。' },
  { title: '总工程师', name: '赵某某', text: '负责技术管理、施工方案审定、质量控制与技术创新。' }
]

const orgUnits = [
  { title: '股东会 / 董事会', text: '统筹战略方向、重大事项决策与经营监督。', level: 'top' },
  { title: '经理层', text: '负责生产经营组织、资源配置和目标落实。', level: 'middle' },
  { title: '综合管理部', text: '行政、人事、后勤、制度与综合协调。', level: 'bottom' },
  { title: '安全环保部', text: '安全生产、职业健康、环保管理与监督。', level: 'bottom' },
  { title: '工程技术部', text: '工程技术支持、施工组织与质量控制。', level: 'bottom' },
  { title: '市场经营部', text: '市场拓展、合同管理、客户服务与经营协同。', level: 'bottom' },
  { title: '装备保障部', text: '钻采设备、物资保障、维修维护与供应支持。', level: 'bottom' },
  { title: '财务管理部', text: '财务核算、资金管理、成本控制与风险管理。', level: 'bottom' }
]
</script>

<template>
  <div class="about-page">
    <section class="about-shell">
      <aside class="about-side">
        <div class="about-side-title">关于胜泰</div>
        <nav class="about-side-nav" aria-label="公司简介栏目">
          <button
            v-for="item in sideMenu"
            :key="item"
            type="button"
            :class="['side-link', { active: item === sectionMap[selectedSection] }]"
            @click="
              selectedSection =
                item === '公司简介'
                  ? 'company'
                  : item === '企业资质'
                    ? 'qualification'
                    : item === '公司领导'
                      ? 'leaders'
                      : 'org'
            "
          >
            <span>{{ item }}</span>
            <i>›</i>
          </button>
        </nav>
      </aside>

      <section class="about-main">
        <header class="about-main-head">
          <h2>{{ sectionMap[selectedSection] }}</h2>
          <div class="breadcrumb">当前位置： 首页 &gt; 关于胜泰 &gt; {{ sectionMap[selectedSection] }}</div>
        </header>

        <template v-if="selectedSection === 'company'">
          <article class="about-section">
            <div class="section-title-line">
              <strong>公司介绍</strong>
            </div>
            <div class="intro-grid">
              <div class="intro-image" aria-hidden="true"></div>
              <div class="intro-copy">
                <p>
                  东营胜泰石油工程技术有限公司成立于2009年，由中石化胜利石油管理局黄河钻井公司改制成立，
                  是面向石油天然气工程服务领域持续发展的工程技术企业。
                </p>
                <p>
                  公司兼具国有企业规范管理基因与市场化经营机制，在继承传统油气工程企业标准化、制度化、组织化管理基础上，
                  持续强化经营效率、工程履约能力和区域市场响应能力。
                </p>
                <p>
                  围绕服务国家能源安全战略和深耕石油工程主业的发展定位，公司聚焦石油天然气技术服务、陆地油气开采、
                  地热井施工、井下作业及钻采设备制造等方向，稳步拓展新能源相关业务，持续提升安全生产、技术创新、
                  数字化管理、人才建设和绿色发展水平。
                </p>
              </div>
            </div>
          </article>

          <article class="about-section">
            <div class="section-title-line">
              <strong>企业规模</strong>
            </div>
            <div class="scale-grid">
              <div v-for="item in scaleItems" :key="item.label" class="scale-item">
                <span>{{ item.label }}</span>
                <strong>{{ item.value }}</strong>
              </div>
            </div>
            <div class="rig-box">
              <div class="rig-box-title">钻机配置</div>
              <div class="rig-tags">
                <span v-for="item in rigItems" :key="item">{{ item }}</span>
              </div>
            </div>
          </article>

          <article class="about-section">
            <div class="section-title-line">
              <strong>业务领域</strong>
            </div>
            <div class="business-panel">
              <p>
                公司经营范围涵盖油气工程服务链条多个关键环节，形成较为完整的业务布局与现场服务支撑能力。
              </p>
              <div class="business-list">
                <div v-for="item in businessItems" :key="item" class="business-item">
                  <span class="bullet"></span>
                  <strong>{{ item }}</strong>
                </div>
              </div>
            </div>
          </article>
        </template>

        <article v-else-if="selectedSection === 'qualification'" class="about-section">
          <div class="section-title-line">
            <strong>企业资质</strong>
          </div>
          <div class="qualification-panel">
            <p>
              公司持续推进制度建设、质量管理、安全环保管理和专业能力提升，已建立较为完善的资质与认证体系，
              为油气工程施工组织、设备保障与综合服务提供规范支撑。
            </p>
            <div class="qualification-list">
              <div v-for="item in qualificationItems" :key="item" class="qualification-item">
                <span class="bullet"></span>
                <strong>{{ item }}</strong>
              </div>
            </div>
          </div>
        </article>

        <article v-else-if="selectedSection === 'leaders'" class="about-section">
          <div class="section-title-line">
            <strong>公司领导</strong>
          </div>
          <div class="leader-grid">
            <div v-for="item in leaderItems" :key="item.title" class="leader-item">
              <div class="leader-head">
                <span>{{ item.title }}</span>
                <strong>{{ item.name }}</strong>
              </div>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </article>

        <article v-else class="about-section">
          <div class="section-title-line">
            <strong>组织架构</strong>
          </div>
          <div class="org-chart">
            <div class="org-row top">
              <div v-for="item in orgUnits.filter((unit) => unit.level === 'top')" :key="item.title" class="org-box top-box">
                <strong>{{ item.title }}</strong>
                <p>{{ item.text }}</p>
              </div>
            </div>
            <div class="org-row middle">
              <div v-for="item in orgUnits.filter((unit) => unit.level === 'middle')" :key="item.title" class="org-box middle-box">
                <strong>{{ item.title }}</strong>
                <p>{{ item.text }}</p>
              </div>
            </div>
            <div class="org-row bottom">
              <div v-for="item in orgUnits.filter((unit) => unit.level === 'bottom')" :key="item.title" class="org-box">
                <strong>{{ item.title }}</strong>
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  background: #f7f8fa;
}

.about-shell {
  width: min(1240px, calc(100% - 32px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 305px minmax(0, 1fr);
  gap: 0;
  padding: 20px 0 50px;
}

.about-side {
  background: #ffffff;
  border: 1px solid rgba(16, 40, 66, 0.12);
  border-right: 0;
}

.about-side-title {
  min-height: 58px;
  display: flex;
  align-items: center;
  padding: 0 18px;
  color: #0d4e93;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid rgba(16, 40, 66, 0.12);
}

.about-side-nav {
  display: grid;
}

.side-link {
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  color: #3d5470;
  font-size: 16px;
  border-bottom: 1px solid rgba(16, 40, 66, 0.12);
  background: #ffffff;
  border-left: 0;
  border-right: 0;
  text-align: left;
  cursor: pointer;
}

.side-link.active {
  background: linear-gradient(180deg, #115aa4, #0c4c8f);
  color: #ffffff;
  font-weight: 700;
}

.side-link i {
  font-style: normal;
  font-size: 18px;
}

.about-main {
  min-width: 0;
  background: #ffffff;
  border: 1px solid rgba(16, 40, 66, 0.12);
}

.about-main-head {
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 24px;
  border-bottom: 1px solid rgba(16, 40, 66, 0.12);
}

.about-main-head h2 {
  margin: 0;
  color: #0d4e93;
  font-size: 18px;
  font-weight: 700;
}

.breadcrumb {
  color: #8a96a3;
  font-size: 13px;
}

.about-section {
  padding: 24px;
  border-top: 1px solid rgba(16, 40, 66, 0.05);
  scroll-margin-top: 110px;
}

.about-section:first-of-type {
  border-top: 0;
}

.section-title-line {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(16, 40, 66, 0.08);
}

.section-title-line strong {
  color: #0d4e93;
  font-size: 20px;
  font-weight: 700;
}

.intro-grid {
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  gap: 24px;
  padding-top: 20px;
}

.intro-image {
  min-height: 220px;
  border: 1px solid rgba(20, 69, 124, 0.12);
  background:
    linear-gradient(180deg, rgba(22, 83, 146, 0.08), rgba(22, 83, 146, 0.02)),
    linear-gradient(135deg, #e1e9f1 0%, #c8d7e6 46%, #f5f8fb 100%);
  position: relative;
}

.intro-image::before {
  content: "";
  position: absolute;
  inset: 18px 28px 18px 28px;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.78)) top center / 86% 8px no-repeat,
    linear-gradient(180deg, #dbe5ef 0%, #ffffff 100%);
  clip-path: polygon(18% 0, 82% 0, 100% 22%, 100% 100%, 0 100%, 0 22%);
  border: 1px solid rgba(20, 69, 124, 0.1);
}

.intro-image::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 46px;
  width: 62%;
  height: 120px;
  transform: translateX(-50%);
  background:
    repeating-linear-gradient(
      90deg,
      rgba(23, 71, 126, 0.16) 0,
      rgba(23, 71, 126, 0.16) 2px,
      transparent 2px,
      transparent 18px
    ),
    linear-gradient(180deg, #fdfefe 0%, #eef3f8 100%);
  border: 1px solid rgba(20, 69, 124, 0.12);
}

.intro-copy p {
  margin: 0 0 14px;
  color: #5e6f82;
  font-size: 15px;
  line-height: 1.95;
  text-align: justify;
}

.scale-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  padding-top: 18px;
}

.scale-item {
  min-height: 86px;
  padding: 16px 18px;
  background: #f7f9fc;
  border: 1px solid rgba(16, 40, 66, 0.08);
}

.scale-item span {
  display: block;
  color: #7c8a97;
  font-size: 14px;
}

.scale-item strong {
  display: block;
  margin-top: 8px;
  color: #0d4e93;
  font-size: 24px;
  line-height: 1.2;
}

.rig-box {
  margin-top: 16px;
  padding: 16px 18px;
  background: #f1f5f9;
  border-left: 4px solid #0f5aa4;
}

.rig-box-title {
  color: #0d4e93;
  font-size: 16px;
  font-weight: 700;
}

.rig-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.rig-tags span {
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid rgba(16, 40, 66, 0.1);
  color: #4b5f76;
  font-size: 14px;
}

.business-panel {
  padding-top: 18px;
}

.business-panel > p {
  margin: 0;
  color: #6b7b8d;
  font-size: 15px;
  line-height: 1.9;
}

.business-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 18px;
  margin-top: 18px;
}

.qualification-panel,
.leader-grid {
  padding-top: 18px;
}

.qualification-panel > p {
  margin: 0;
  color: #6b7b8d;
  font-size: 15px;
  line-height: 1.9;
}

.qualification-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 18px;
  margin-top: 18px;
}

.qualification-item {
  min-height: 52px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 14px;
  background: #f8fafc;
  border: 1px solid rgba(16, 40, 66, 0.08);
}

.qualification-item strong {
  color: #36506d;
  font-size: 15px;
}

.leader-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.leader-item {
  padding: 16px 18px;
  background: #f7f9fc;
  border: 1px solid rgba(16, 40, 66, 0.08);
}

.leader-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.leader-head span {
  color: #6d7b8a;
  font-size: 14px;
}

.leader-head strong {
  color: #0d4e93;
  font-size: 18px;
}

.leader-item p {
  margin: 12px 0 0;
  color: #6f7f90;
  font-size: 14px;
  line-height: 1.8;
}

.business-item {
  min-height: 52px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 14px;
  background: #f8fafc;
  border: 1px solid rgba(16, 40, 66, 0.08);
}

.bullet {
  width: 8px;
  height: 8px;
  background: #0f5aa4;
  border-radius: 50%;
  flex: 0 0 auto;
}

.business-item strong {
  color: #36506d;
  font-size: 15px;
}

.org-chart {
  padding-top: 18px;
}

.org-row {
  display: grid;
  gap: 14px;
}

.org-row + .org-row {
  margin-top: 14px;
}

.org-row.top {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.org-row.middle {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.org-row.bottom {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.org-box {
  padding: 16px 18px;
  background: #f7f9fc;
  border: 1px solid rgba(16, 40, 66, 0.08);
}

.top-box,
.middle-box {
  background: #eef4fa;
  border-left: 4px solid #0f5aa4;
}

.org-box strong {
  display: block;
  color: #0d4e93;
  font-size: 16px;
}

.org-box p {
  margin: 10px 0 0;
  color: #6f7f90;
  font-size: 14px;
  line-height: 1.8;
}

@media (max-width: 1080px) {
  .about-shell {
    grid-template-columns: 1fr;
  }

  .about-side {
    border-right: 1px solid rgba(16, 40, 66, 0.12);
  }

  .intro-grid,
  .scale-grid,
  .business-list,
  .qualification-list,
  .leader-grid,
  .org-row.bottom {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .about-shell {
    width: min(1240px, calc(100% - 20px));
    padding: 14px 0 32px;
  }

  .about-main-head {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding: 12px 16px;
  }

  .about-section {
    padding: 18px 16px;
  }

  .intro-grid {
    padding-top: 14px;
  }

  .intro-image {
    min-height: 170px;
  }

  .intro-copy p,
  .business-panel > p {
    font-size: 14px;
  }

  .scale-item strong {
    font-size: 20px;
  }
}
</style>
