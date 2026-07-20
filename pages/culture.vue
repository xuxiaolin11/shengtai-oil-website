<script setup lang="ts">
import localCompanyBannerUrl from '~/assets/images/company_1.png'

const companyBannerUrl = useSiteAsset('images/company_1.png', localCompanyBannerUrl)

useSeoMeta({
  title: '企业文化 | 东营胜泰石油工程技术有限公司',
  description:
    '东营胜泰石油工程技术有限公司企业文化页面，展示企业使命、经营理念、核心价值观、企业准则与文化表达。'
})

const showExtendedCultureSections = false

const philosophyItems = [
  {
    title: '安全至上',
    text: '坚持把安全生产摆在首位，把风险防控、责任落实和规范执行贯穿工程施工全过程。'
  },
  {
    title: '技术立企',
    text: '坚持专业深耕和技术支撑并重，以扎实工艺、严谨方案和持续改进提升现场保障能力。'
  },
  {
    title: '诚信共赢',
    text: '坚守契约精神与商业底线，以真实、负责、可信的服务态度构建稳定合作关系。'
  }
]

const valueItems = [
  {
    title: '客户为先',
    text: '始终围绕客户需求组织施工与服务，以稳定履约和可靠交付赢得长期信任。'
  },
  {
    title: '务实高效',
    text: '坚持实干导向，注重过程协同和执行效率，把每一项工作做扎实、做落地。'
  },
  {
    title: '科技创新',
    text: '坚持技术进步和管理创新双轮驱动，不断提升复杂工况应对和工程保障能力。'
  },
  {
    title: '绿色发展',
    text: '牢固树立生态底线意识，在施工组织、资源利用和环保管理中持续推进绿色实践。'
  }
]

const ruleItems = [
  {
    title: '精益求精',
    text: '把质量标准细化到每一道工序、每一个环节，以工匠精神提升工程品质。'
  },
  {
    title: '百折不挠',
    text: '面对复杂工况和任务压力，保持坚韧作风和责任担当，确保项目稳步推进。'
  },
  {
    title: '协同共进',
    text: '强化部门协同、班组协作和上下联动，形成同目标、同标准、同节奏的执行体系。'
  },
  {
    title: '不断超越',
    text: '在实践中总结，在复盘中提升，以持续改进推动队伍能力和管理水平不断进阶。'
  }
]

const expressionItems = [
  {
    title: '钻塔家园',
    subtitle: 'Rig Home',
    text: '把井场当阵地、把团队当家人，在严格纪律和规范管理中营造彼此信任、共同担当的工作氛围。',
    scene: 'team'
  },
  {
    title: '严谨但不失温度',
    subtitle: 'Discipline With Warmth',
    text: '制度执行严格，现场管理有序，同时注重对员工成长、生活保障和团队归属感的持续关照。',
    scene: 'warmth'
  },
  {
    title: '师徒传承与创新探索并重',
    subtitle: 'Inheritance & Innovation',
    text: '既重视经验传承，也鼓励技术钻研和方法创新，让成熟经验与新思路在一线共同生长。',
    scene: 'study'
  },
  {
    title: '一线是最好的课堂，实践是最真的成长',
    subtitle: 'Practice Makes Growth',
    text: '坚持在现场锻炼队伍、在项目中培养人才，把每一次任务执行都转化为能力提升的机会。',
    scene: 'field'
  }
]

const coordinateItems = [
  {
    label: '企业愿景',
    title: '扎根国家油气地热沃土，打造区域领先、行业前沿、社会认可的能源开发标杆企业',
    text: '立足能源开发主业，面向区域深耕、能力提升与长远发展，持续塑造专业可靠、社会认可的企业形象。'
  },
  {
    label: '企业使命',
    title: '以专业精神钻探能源，以扎实技术保障安全，以负责的态度成为值得信赖的合作伙伴',
    text: '坚持把专业精神、技术支撑和责任担当落实到项目执行全过程，持续为客户提供稳定、可信、可依赖的工程服务。'
  },
  {
    label: '企业精神',
    title: '数载坚守，匠心铸就长胜；精益求精，铁军永保恒泰',
    text: '突出能源工程企业在长期经营中形成的纪律性、韧性、专业性与团队作风。'
  }
]

const sceneItems = [
  {
    title: '团队作业场景',
    text: '围绕井场组织、班组执行、设备保障和工序衔接，体现责任清晰、协作有序的团队作风。',
    tone: 'team'
  },
  {
    title: '培训学习场景',
    text: '围绕安全教育、技术培训、经验复盘和岗位传帮带，体现师徒传承与能力进阶机制。',
    tone: 'training'
  },
  {
    title: '班组协作场景',
    text: '围绕现场沟通、交接配合和问题闭环，强调一线是课堂、实践出能力的成长路径。',
    tone: 'coop'
  }
]
</script>

<template>
  <div class="culture-page">
    <section class="culture-hero">
      <img :src="companyBannerUrl" alt="东营胜泰石油工程技术有限公司企业文化展示横幅" />
      <div class="culture-hero-overlay">
        <div class="hero-copy">
          <span class="hero-kicker">Corporate Culture</span>
          <h1>企业文化</h1>
          <p>
            东营胜泰石油工程技术有限公司坚持以责任为底色、以纪律为保障、以实干为路径、以成长为导向，
            在长期工程实践中形成了安全为先、技术立企、协同奋斗、稳健经营的文化品格。
          </p>
        </div>
      </div>
    </section>

    <section class="culture-shell">
      <section class="culture-block">
        <header class="block-head">
          <span class="section-en">Mission</span>
          <h2>企业使命</h2>
        </header>
        <article class="mission-card">
          <p>
            以专业精神钻探能源，以扎实技术保障安全，以负责的态度成为值得信赖的合作伙伴。
          </p>
        </article>
      </section>

      <section class="culture-block">
        <header class="block-head">
          <span class="section-en">Business Philosophy</span>
          <h2>经营理念</h2>
        </header>
        <div class="philosophy-grid">
          <article v-for="item in philosophyItems" :key="item.title" class="philosophy-card">
            <strong>{{ item.title }}</strong>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section class="culture-block">
        <header class="block-head">
          <span class="section-en">Core Values</span>
          <h2>核心价值观</h2>
        </header>
        <div class="value-grid">
          <article v-for="item in valueItems" :key="item.title" class="value-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section class="culture-block">
        <header class="block-head">
          <span class="section-en">Code Of Conduct</span>
          <h2>企业准则</h2>
        </header>
        <div class="rule-grid">
          <article v-for="item in ruleItems" :key="item.title" class="rule-card">
            <strong>{{ item.title }}</strong>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section v-if="showExtendedCultureSections" class="culture-block">
        <header class="block-head">
          <span class="section-en">Culture Expression</span>
          <h2>文化表达</h2>
        </header>
        <div class="expression-grid">
          <article
            v-for="item in expressionItems"
            :key="item.title"
            :class="['expression-card', `scene-${item.scene}`]"
          >
            <div class="expression-visual" aria-hidden="true"></div>
            <div class="expression-body">
              <span>{{ item.subtitle }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </article>
        </div>
      </section>

      <section class="culture-block">
        <header class="block-head">
          <span class="section-en">Cultural Coordinates</span>
          <h2>文化坐标</h2>
        </header>
        <div class="coordinate-list">
          <article v-for="item in coordinateItems" :key="item.label" class="coordinate-card">
            <span>{{ item.label }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section v-if="showExtendedCultureSections" class="culture-block">
        <header class="block-head">
          <span class="section-en">Scenes</span>
          <h2>文化场景</h2>
        </header>
        <div class="scene-grid">
          <article v-for="item in sceneItems" :key="item.title" :class="['scene-card', `tone-${item.tone}`]">
            <div class="scene-image" aria-hidden="true"></div>
            <div class="scene-body">
              <strong>{{ item.title }}</strong>
              <p>{{ item.text }}</p>
            </div>
          </article>
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped>
.culture-page {
  background: linear-gradient(180deg, #f7f8fa 0%, #f2f4f7 100%);
}

.culture-hero {
  position: relative;
  width: min(1240px, calc(100% - 32px));
  margin: 0 auto;
  padding-top: 18px;
  overflow: hidden;
}

.culture-hero img {
  width: 100%;
  height: 320px;
  display: block;
  object-fit: cover;
  object-position: center center;
}

.culture-hero-overlay {
  position: absolute;
  inset: 18px 0 0;
  display: flex;
  align-items: stretch;
  background:
    linear-gradient(90deg, rgba(10, 31, 56, 0.86) 0%, rgba(10, 31, 56, 0.7) 40%, rgba(10, 31, 56, 0.26) 100%),
    linear-gradient(180deg, rgba(177, 34, 40, 0.08), rgba(177, 34, 40, 0.08));
}

.hero-copy {
  max-width: 760px;
  padding: 44px 42px 34px;
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
  font-size: clamp(34px, 4.2vw, 50px);
  line-height: 1.2;
  font-family: "STSong", "Songti SC", "Noto Serif SC", serif;
}

.hero-copy p {
  margin: 18px 0 0;
  color: rgba(241, 244, 248, 0.9);
  font-size: 16px;
  line-height: 2;
}

.culture-shell {
  width: min(1240px, calc(100% - 32px));
  margin: 0 auto;
  padding: 22px 0 50px;
}

.intro-main,
.intro-side,
.mission-card,
.philosophy-card,
.value-card,
.rule-card,
.coordinate-card,
.scene-card {
  background: #ffffff;
  border: 1px solid rgba(17, 49, 85, 0.08);
}

.culture-block {
  padding-top: 28px;
}

.block-head {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 20px;
  align-items: end;
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

.mission-card {
  padding: 30px 34px;
  border-left: 5px solid #c7a56a;
  background:
    linear-gradient(180deg, #ffffff 0%, #fbfcfd 100%);
}

.mission-card p {
  margin: 0;
  color: #1d2d40;
  font-size: 24px;
  line-height: 1.8;
  font-family: "STSong", "Songti SC", "Noto Serif SC", serif;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.philosophy-card,
.value-card,
.rule-card {
  padding: 22px 22px 20px;
}

.philosophy-card {
  border-top: 4px solid #1c4c80;
}

.philosophy-card strong,
.rule-card strong,
.scene-body strong {
  display: block;
  color: #1d2d40;
  font-size: 22px;
}

.philosophy-card p,
.value-card p,
.rule-card p,
.coordinate-card p,
.scene-body p {
  margin: 12px 0 0;
  color: #4d5c6b;
  font-size: 14px;
  line-height: 1.9;
}

.value-grid,
.rule-grid,
.scene-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.value-card {
  position: relative;
  padding-left: 24px;
}

.value-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background: linear-gradient(180deg, #c7a56a, #b8893f);
}

.value-card h3,
.coordinate-card h3,
.expression-body h3 {
  margin: 0;
  color: #1d2d40;
  font-size: 22px;
  line-height: 1.55;
}

.rule-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.rule-card {
  background:
    linear-gradient(180deg, #ffffff 0%, #fbfcfd 100%);
}

.expression-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.expression-card {
  overflow: hidden;
  background: #ffffff;
  border: 1px solid rgba(17, 49, 85, 0.08);
}

.expression-visual {
  min-height: 180px;
  background:
    linear-gradient(180deg, rgba(10, 31, 56, 0.16), rgba(10, 31, 56, 0.06)),
    linear-gradient(135deg, #cfd9e3 0%, #f2f5f8 52%, #bfcddb 100%);
}

.scene-team .expression-visual {
  background:
    linear-gradient(180deg, rgba(10, 31, 56, 0.18), rgba(10, 31, 56, 0.08)),
    linear-gradient(135deg, #bccbdd 0%, #edf2f7 56%, #d1dae4 100%);
}

.scene-warmth .expression-visual {
  background:
    linear-gradient(180deg, rgba(97, 31, 24, 0.16), rgba(97, 31, 24, 0.06)),
    linear-gradient(135deg, #d8d1c7 0%, #f6f1ea 50%, #ddd4c7 100%);
}

.scene-study .expression-visual {
  background:
    linear-gradient(180deg, rgba(18, 62, 101, 0.16), rgba(18, 62, 101, 0.05)),
    linear-gradient(135deg, #c4d2de 0%, #f2f6f9 50%, #d6e0e8 100%);
}

.scene-field .expression-visual {
  background:
    linear-gradient(180deg, rgba(92, 56, 18, 0.18), rgba(92, 56, 18, 0.06)),
    linear-gradient(135deg, #d7caa6 0%, #f6f2e5 50%, #e0d2ae 100%);
}

.expression-body {
  padding: 20px 22px 22px;
}

.expression-body span,
.coordinate-card span {
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 12px;
  background: #f5f0e4;
  color: #9a7741;
  font-size: 12px;
  font-weight: 700;
}

.expression-body p {
  margin: 12px 0 0;
  color: #4d5c6b;
  font-size: 14px;
  line-height: 1.9;
}

.coordinate-list {
  display: grid;
  gap: 16px;
}

.coordinate-card {
  padding: 22px 24px;
  border-left: 5px solid #c7a56a;
}

.coordinate-card h3 {
  margin-top: 14px;
}

.scene-card {
  overflow: hidden;
}

.scene-image {
  min-height: 180px;
  background:
    linear-gradient(180deg, rgba(13, 43, 76, 0.16), rgba(13, 43, 76, 0.04)),
    linear-gradient(135deg, #ccd6e0 0%, #eef3f7 50%, #c3d0da 100%);
}

.tone-team .scene-image {
  background:
    linear-gradient(180deg, rgba(14, 47, 82, 0.16), rgba(14, 47, 82, 0.04)),
    linear-gradient(135deg, #b9c9d8 0%, #eaf0f6 50%, #c7d3de 100%);
}

.tone-training .scene-image {
  background:
    linear-gradient(180deg, rgba(93, 58, 22, 0.14), rgba(93, 58, 22, 0.04)),
    linear-gradient(135deg, #d8cfbf 0%, #f4f1ea 50%, #ddd3c4 100%);
}

.tone-coop .scene-image {
  background:
    linear-gradient(180deg, rgba(18, 61, 99, 0.16), rgba(18, 61, 99, 0.04)),
    linear-gradient(135deg, #c4d1db 0%, #f2f6f9 50%, #d0dae2 100%);
}

.scene-body {
  padding: 20px 22px 22px;
}

@media (max-width: 1080px) {
  .block-head,
  .philosophy-grid,
  .rule-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 860px) {
  .value-grid,
  .expression-grid,
  .scene-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .culture-hero,
  .culture-shell {
    width: min(1240px, calc(100% - 20px));
  }

  .culture-hero {
    padding-top: 14px;
  }

  .culture-hero img {
    height: 260px;
  }

  .culture-hero-overlay {
    inset: 14px 0 0;
  }

  .hero-copy {
    padding: 24px 18px 20px;
  }

  .hero-copy p,
  .intro-main p,
  .mission-card p {
    font-size: 14px;
  }

  .mission-card {
    padding: 20px 18px;
  }

  .block-head h2 {
    font-size: 28px;
  }

  .intro-main,
  .intro-side,
  .philosophy-card,
  .value-card,
  .rule-card,
  .expression-body,
  .coordinate-card,
  .scene-body {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
