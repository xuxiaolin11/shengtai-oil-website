<script setup lang="ts">
import localSafetyLicenseUrl from '~/assets/images/honor/anquan.png'

const safetyLicenseUrl = useSiteAsset('images/honor/anquan.png', localSafetyLicenseUrl)

useSeoMeta({
  title: '资质荣誉 | 东营胜泰石油工程技术有限公司',
  description:
    '东营胜泰石油工程技术有限公司资质荣誉页面，展示企业资质认证、行业荣誉、质量管理与履约能力。'
})

const qualificationItems = [
  {
    title: '安全生产许可证',
    subtitle: 'Safety Production License',
    summary: '围绕工程施工现场的安全责任落实、风险辨识、作业许可和应急管理，公司持续夯实安全生产制度基础。',
    points: ['强化现场风险管控', '规范作业许可流程', '夯实安全履约底线'],
    tone: 'featured',
    image: safetyLicenseUrl
  },
  {
    title: '质量管理体系认证',
    subtitle: 'Quality Management System',
    summary: '坚持把质量控制嵌入施工组织、工序管理、过程监督和结果验收各环节，持续提升工程品质稳定性。',
    points: ['坚持质量底线', '全过程质量追踪', '持续优化施工品质'],
    tone: 'standard'
  },
  {
    title: '职业健康管理体系认证',
    subtitle: 'Occupational Health Management',
    summary: '聚焦人员健康防护、岗位风险告知、职业病防控和作业环境改善，强化员工与项目现场双重保障。',
    points: ['岗位风险分级提示', '作业环境持续改善', '员工职业健康保障'],
    tone: 'standard'
  },
  {
    title: '环境管理体系认证',
    subtitle: 'Environmental Management System',
    summary: '围绕绿色施工、污染防治、资源节约与规范排放管理，推动工程建设与生态环保要求协同落实。',
    points: ['推动绿色施工', '强化环保责任落实', '提升资源利用效率'],
    tone: 'standard'
  }
]

const strengthItems = [
  {
    title: '坚持质量底线',
    text: '以制度标准约束施工全流程，把质量要求落实到方案审查、技术交底、现场执行和交付验收各节点。'
  },
  {
    title: '强化现场管理',
    text: '围绕井场作业安全、设备保障、工序衔接和过程监督建立闭环管理机制，持续提升现场执行力。'
  },
  {
    title: '提升履约能力',
    text: '依托长期稳定经营基础和多区域项目组织经验，形成较强的工程统筹、资源调配和履约交付能力。'
  }
]

const honorItems = [
  {
    title: '川庆钻探甲级钻井队',
    tag: '行业认可',
    text: '体现公司钻井队伍在现场组织、工程质量、安全管理和综合执行方面具备较高专业水准。'
  },
  {
    title: '示范钻井队',
    tag: '现场管理',
    text: '体现公司持续推进标准化施工、规范化管理和样板化建设，现场作业质量与管理成效受到认可。'
  },
  {
    title: '标杆钻井队',
    tag: '品质建设',
    text: '反映公司在钻井施工品质、工序控制、团队协同和履约表现方面形成较强示范作用。'
  },
  {
    title: '长庆油田钻井先进单位',
    tag: '客户评价',
    text: '体现公司在重点区域项目组织和施工保障中保持良好执行能力，得到服务单位和行业客户认可。'
  },
  {
    title: '纳税荣誉企业',
    tag: '稳定经营',
    text: '反映公司经营运行稳定、依法合规经营基础扎实，具备持续健康发展的良好企业形象。'
  },
  {
    title: '先进单位荣誉',
    tag: '综合表现',
    text: '展示公司在安全、质量、管理与协同履约方面的综合表现，体现长期积累形成的组织竞争力。'
  }
]

const progressItems = [
  {
    stage: '标准筑基',
    title: '以制度体系夯实管理根基',
    text: '围绕安全、质量、职业健康与环境管理持续完善标准体系，保证工程项目全过程有章可循、有据可依。'
  },
  {
    stage: '现场提效',
    title: '以井场执行强化品质控制',
    text: '坚持把现场管理作为荣誉形成的重要基础，持续强化施工组织、过程监督、工序衔接与队伍作风建设。'
  },
  {
    stage: '口碑沉淀',
    title: '以稳定履约赢得行业认可',
    text: '通过长期稳定经营和持续履约表现，逐步形成良好的客户评价、行业口碑和区域市场竞争能力。'
  }
]

const valueItems = [
  { label: '长期经营', value: '2009年成立以来稳步发展' },
  { label: '管理导向', value: '质量、安全、环保并重' },
  { label: '履约表现', value: '多区域项目组织执行能力' },
  { label: '行业评价', value: '资质齐备，荣誉持续积累' }
]
</script>

<template>
  <div class="honor-page">
    <section class="honor-hero">
      <div class="hero-shell">
        <div class="hero-copy">
          <span class="hero-kicker">Qualification &amp; Honors</span>
          <h1>资质荣誉</h1>
          <p>
            东营胜泰石油工程技术有限公司坚持把质量底线、安全要求和现场标准落实到工程建设全过程，
            持续提升施工品质、管理水平和履约能力，以长期稳定经营赢得行业认可与客户信赖。
          </p>
        </div>

        <div class="hero-panel">
          <div v-for="item in valueItems" :key="item.label" class="hero-panel-item">
            <span>{{ item.label }}</span>
            <strong>{{ item.value }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="honor-intro">
      <div class="intro-main">
        <div class="section-title-line">
          <strong>荣誉与资质说明</strong>
        </div>
        <p>
          公司围绕油气工程施工组织、现场安全环保、技术质量控制和综合保障能力，持续推进制度建设与标准执行。
          现有资质认证与荣誉成果既体现企业规范运营水平，也反映公司在行业服务中的稳定交付能力和专业可信度。
        </p>
      </div>

      <div class="intro-side">
        <div class="intro-side-title">核心表达</div>
        <ul>
          <li>坚持质量底线，持续完善全过程质量管理机制</li>
          <li>强化现场管理，推动施工组织标准化、精细化</li>
          <li>保持长期稳定经营，形成较强项目履约与客户服务能力</li>
        </ul>
      </div>
    </section>

    <section class="honor-section">
      <header class="section-head-block">
        <div>
          <span class="section-en">Enterprise Qualifications</span>
          <h2>企业资质</h2>
        </div>
        <p>
          资质体系覆盖安全生产、质量管理、职业健康和环境管理等关键领域，
          为公司规范组织工程施工、提升综合管控水平和保障项目高质量交付提供坚实支撑。
        </p>
      </header>

      <div class="qualification-grid">
        <article
          v-for="item in qualificationItems"
          :key="item.title"
          :class="['qualification-card', `tone-${item.tone}`]"
        >
          <div class="qualification-preview">
            <img v-if="item.image" :src="item.image" :alt="item.title" />
            <div v-else class="certificate-visual" aria-hidden="true">
              <span class="certificate-mark">CERTIFICATE</span>
              <strong>{{ item.title }}</strong>
              <small>{{ item.subtitle }}</small>
            </div>
          </div>

          <div class="qualification-body">
            <div class="qualification-head">
              <h3>{{ item.title }}</h3>
              <span>{{ item.subtitle }}</span>
            </div>
            <p>{{ item.summary }}</p>
            <div class="qualification-tags">
              <em v-for="point in item.points" :key="point">{{ point }}</em>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="strength-section">
      <article v-for="item in strengthItems" :key="item.title" class="strength-card">
        <strong>{{ item.title }}</strong>
        <p>{{ item.text }}</p>
      </article>
    </section>

    <section class="honor-section">
      <header class="section-head-block">
        <div>
          <span class="section-en">Enterprise Honors</span>
          <h2>企业荣誉</h2>
        </div>
        <p>
          荣誉成果集中体现公司在钻井施工、现场管理、标准执行和综合履约方面的持续积累，
          反映企业行业认可度高、项目执行稳定、综合竞争能力较强。
        </p>
      </header>

      <div class="honor-layout">
        <div class="honor-wall">
          <article v-for="item in honorItems" :key="item.title" class="honor-card">
            <div class="honor-medal" aria-hidden="true"></div>
            <div class="honor-card-body">
              <span>{{ item.tag }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </article>
        </div>

        <aside class="honor-progress">
          <div class="progress-head">
            <strong>荣誉沉淀路径</strong>
            <p>从制度建设到现场执行，再到客户与行业认可，形成稳定可信的企业品牌形象。</p>
          </div>

          <div class="progress-list">
            <article v-for="item in progressItems" :key="item.stage" class="progress-item">
              <span>{{ item.stage }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped>
.honor-page {
  background:
    linear-gradient(180deg, #f7f8fa 0%, #f2f4f7 100%);
}

.honor-hero {
  position: relative;
  overflow: hidden;
  padding: 22px 0 0;
}

.honor-hero::before {
  content: "";
  position: absolute;
  inset: 22px 0 0;
  background:
    linear-gradient(135deg, rgba(12, 34, 61, 0.96), rgba(20, 52, 92, 0.92) 48%, rgba(91, 20, 33, 0.92) 100%);
}

.honor-hero::after {
  content: "";
  position: absolute;
  inset: 22px 0 0;
  background:
    radial-gradient(circle at 12% 20%, rgba(199, 165, 106, 0.2), transparent 22%),
    radial-gradient(circle at 88% 18%, rgba(210, 54, 59, 0.16), transparent 18%),
    repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.06) 0,
      rgba(255, 255, 255, 0.06) 1px,
      transparent 1px,
      transparent 72px
    );
  opacity: 0.8;
}

.hero-shell {
  position: relative;
  z-index: 1;
  width: min(1240px, calc(100% - 32px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) 360px;
  gap: 28px;
  padding: 38px 0 42px;
}

.hero-copy {
  max-width: 760px;
}

.hero-kicker {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 14px;
  background: rgba(199, 165, 106, 0.14);
  border: 1px solid rgba(199, 165, 106, 0.35);
  color: #d8ba85;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-copy h1 {
  margin: 18px 0 0;
  color: #ffffff;
  font-size: clamp(34px, 4.4vw, 52px);
  line-height: 1.2;
  font-family: "STSong", "Songti SC", "Noto Serif SC", serif;
}

.hero-copy p {
  max-width: 720px;
  margin: 18px 0 0;
  color: rgba(241, 244, 248, 0.9);
  font-size: 16px;
  line-height: 2;
}

.hero-panel {
  display: grid;
  gap: 12px;
  align-self: end;
}

.hero-panel-item {
  padding: 16px 18px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(6px);
}

.hero-panel-item span {
  display: block;
  color: rgba(216, 224, 235, 0.76);
  font-size: 13px;
}

.hero-panel-item strong {
  display: block;
  margin-top: 8px;
  color: #ffffff;
  font-size: 18px;
  line-height: 1.5;
}

.honor-intro,
.honor-section,
.strength-section {
  width: min(1240px, calc(100% - 32px));
  margin: 0 auto;
}

.honor-intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 22px;
  padding: 24px 0 0;
}

.intro-main,
.intro-side {
  background: #ffffff;
  border: 1px solid rgba(17, 49, 85, 0.08);
}

.intro-main {
  padding: 24px 26px;
}

.section-title-line {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(17, 49, 85, 0.1);
}

.section-title-line strong {
  color: #1b2b3e;
  font-size: 22px;
  font-weight: 700;
}

.intro-main p {
  margin: 18px 0 0;
  color: #415160;
  font-size: 15px;
  line-height: 2;
  text-align: justify;
}

.intro-side {
  padding: 22px 24px;
  background:
    linear-gradient(180deg, #ffffff 0%, #fbfcfd 100%);
}

.intro-side-title {
  color: #1b2b3e;
  font-size: 18px;
  font-weight: 700;
}

.intro-side ul {
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
}

.intro-side li {
  position: relative;
  padding-left: 18px;
  color: #495867;
  font-size: 14px;
  line-height: 1.9;
}

.intro-side li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  background: linear-gradient(180deg, #c7a56a, #b8893f);
  border-radius: 50%;
}

.honor-section {
  padding: 28px 0 0;
}

.section-head-block {
  display: grid;
  grid-template-columns: minmax(0, 340px) minmax(0, 1fr);
  gap: 24px;
  align-items: end;
  margin-bottom: 20px;
}

.section-en {
  display: inline-block;
  color: #a8834a;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.section-head-block h2 {
  margin: 8px 0 0;
  color: #1a2a3c;
  font-size: 34px;
  line-height: 1.2;
  font-family: "STSong", "Songti SC", "Noto Serif SC", serif;
}

.section-head-block p {
  margin: 0;
  color: #5c6875;
  font-size: 15px;
  line-height: 1.95;
}

.qualification-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.qualification-card {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  background: #ffffff;
  border: 1px solid rgba(17, 49, 85, 0.08);
  overflow: hidden;
}

.qualification-card.tone-featured {
  border-color: rgba(199, 165, 106, 0.38);
  box-shadow: 0 14px 28px rgba(17, 34, 56, 0.06);
}

.qualification-preview {
  min-height: 250px;
  padding: 16px;
  background:
    linear-gradient(180deg, rgba(11, 36, 65, 0.04), rgba(11, 36, 65, 0.01)),
    linear-gradient(135deg, #eef2f7 0%, #f8fafc 100%);
  border-right: 1px solid rgba(17, 49, 85, 0.08);
}

.qualification-preview img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  background: #ffffff;
  border: 1px solid rgba(17, 49, 85, 0.08);
  padding: 8px;
}

.certificate-visual {
  position: relative;
  height: 100%;
  min-height: 216px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 18px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 252, 0.96)),
    linear-gradient(135deg, rgba(199, 165, 106, 0.1), rgba(17, 49, 85, 0.06));
  border: 1px solid rgba(199, 165, 106, 0.28);
  text-align: center;
}

.certificate-visual::before,
.certificate-visual::after {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  border-color: #c7a56a;
  border-style: solid;
}

.certificate-visual::before {
  top: 10px;
  left: 10px;
  border-width: 2px 0 0 2px;
}

.certificate-visual::after {
  right: 10px;
  bottom: 10px;
  border-width: 0 2px 2px 0;
}

.certificate-mark {
  color: #a8834a;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.certificate-visual strong {
  margin-top: 16px;
  color: #1a2a3c;
  font-size: 24px;
  line-height: 1.45;
  font-family: "STSong", "Songti SC", "Noto Serif SC", serif;
}

.certificate-visual small {
  margin-top: 10px;
  color: #6c7885;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.qualification-body {
  padding: 22px 22px 20px;
}

.qualification-head h3 {
  margin: 0;
  color: #1a2a3c;
  font-size: 22px;
  line-height: 1.45;
}

.qualification-head span {
  display: block;
  margin-top: 6px;
  color: #9a7a47;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.qualification-body p {
  margin: 16px 0 0;
  color: #4a5867;
  font-size: 14px;
  line-height: 1.9;
}

.qualification-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.qualification-tags em {
  padding: 8px 12px;
  background: #f6f8fb;
  border: 1px solid rgba(17, 49, 85, 0.08);
  color: #4e5d6d;
  font-size: 13px;
  font-style: normal;
}

.strength-section {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  padding: 22px 0 0;
}

.strength-card {
  padding: 22px 22px 20px;
  background:
    linear-gradient(180deg, #ffffff 0%, #fbfcfd 100%);
  border-top: 4px solid #c7a56a;
  border-right: 1px solid rgba(17, 49, 85, 0.08);
  border-bottom: 1px solid rgba(17, 49, 85, 0.08);
  border-left: 1px solid rgba(17, 49, 85, 0.08);
}

.strength-card strong {
  display: block;
  color: #1b2b3e;
  font-size: 20px;
}

.strength-card p {
  margin: 12px 0 0;
  color: #4f5d6c;
  font-size: 14px;
  line-height: 1.9;
}

.honor-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 22px;
}

.honor-wall {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.honor-card {
  position: relative;
  min-height: 220px;
  padding: 24px 22px 22px;
  background:
    linear-gradient(180deg, rgba(255, 250, 240, 0.98), rgba(248, 240, 224, 0.98)),
    linear-gradient(135deg, rgba(199, 165, 106, 0.18), rgba(155, 114, 53, 0.08));
  border: 1px solid rgba(191, 152, 85, 0.42);
  box-shadow: 0 12px 24px rgba(72, 51, 24, 0.08);
}

.honor-card::after {
  content: "";
  position: absolute;
  inset: 10px;
  border: 1px solid rgba(191, 152, 85, 0.28);
  pointer-events: none;
}

.honor-medal {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.58), transparent 28%),
    linear-gradient(180deg, #e4c88f 0%, #bf9348 100%);
  box-shadow: inset 0 0 0 6px rgba(255, 250, 240, 0.42);
}

.honor-medal::before,
.honor-medal::after {
  content: "";
  position: absolute;
  top: 52px;
  width: 16px;
  height: 28px;
  background: linear-gradient(180deg, #b22631, #8f1f2b);
}

.honor-medal::before {
  margin-left: 10px;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 78%);
}

.honor-medal::after {
  margin-left: 30px;
  clip-path: polygon(0 0, 100% 0, 100% 78%, 20% 100%);
}

.honor-card-body {
  margin-top: 18px;
  position: relative;
  z-index: 1;
}

.honor-card-body span {
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 12px;
  background: rgba(140, 27, 38, 0.08);
  color: #8f2330;
  font-size: 12px;
  font-weight: 700;
}

.honor-card-body h3 {
  margin: 14px 0 0;
  color: #50361a;
  font-size: 22px;
  line-height: 1.45;
  font-family: "STSong", "Songti SC", "Noto Serif SC", serif;
}

.honor-card-body p {
  margin: 12px 0 0;
  color: #71563b;
  font-size: 14px;
  line-height: 1.9;
}

.honor-progress {
  background: #ffffff;
  border: 1px solid rgba(17, 49, 85, 0.08);
  padding: 22px 22px 18px;
}

.progress-head strong {
  color: #1a2a3c;
  font-size: 22px;
}

.progress-head p {
  margin: 12px 0 0;
  color: #52606f;
  font-size: 14px;
  line-height: 1.9;
}

.progress-list {
  position: relative;
  display: grid;
  gap: 16px;
  margin-top: 20px;
  padding-left: 22px;
}

.progress-list::before {
  content: "";
  position: absolute;
  left: 6px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, #c7a56a, rgba(199, 165, 106, 0.18));
}

.progress-item {
  position: relative;
  padding: 0 0 0 14px;
}

.progress-item::before {
  content: "";
  position: absolute;
  left: -22px;
  top: 8px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ffffff;
  border: 3px solid #c7a56a;
  box-sizing: border-box;
}

.progress-item span {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 0 10px;
  background: #f8f1e2;
  color: #9a7741;
  font-size: 12px;
  font-weight: 700;
}

.progress-item h3 {
  margin: 12px 0 0;
  color: #1f3042;
  font-size: 18px;
  line-height: 1.5;
}

.progress-item p {
  margin: 10px 0 0;
  color: #4e5c6a;
  font-size: 14px;
  line-height: 1.85;
}

@media (max-width: 1180px) {
  .hero-shell,
  .honor-intro,
  .honor-layout,
  .section-head-block,
  .qualification-card {
    grid-template-columns: 1fr;
  }

  .hero-panel {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .qualification-preview {
    border-right: 0;
    border-bottom: 1px solid rgba(17, 49, 85, 0.08);
  }
}

@media (max-width: 860px) {
  .qualification-grid,
  .honor-wall,
  .strength-section,
  .hero-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .honor-hero {
    padding-top: 14px;
  }

  .honor-hero::before,
  .honor-hero::after {
    inset: 14px 0 0;
  }

  .hero-shell,
  .honor-intro,
  .honor-section,
  .strength-section {
    width: min(1240px, calc(100% - 20px));
  }

  .hero-shell {
    gap: 18px;
    padding: 28px 0 30px;
  }

  .hero-copy p,
  .section-head-block p,
  .intro-main p {
    font-size: 14px;
  }

  .intro-main,
  .intro-side,
  .qualification-body,
  .honor-progress,
  .strength-card {
    padding-left: 16px;
    padding-right: 16px;
  }

  .qualification-preview {
    min-height: 210px;
    padding: 12px;
  }

  .certificate-visual strong,
  .honor-card-body h3 {
    font-size: 20px;
  }

  .section-head-block h2 {
    font-size: 28px;
  }
}
</style>
