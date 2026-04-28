<script setup lang="ts">
useSeoMeta({
  title: '发展历程 | 东营胜泰石油工程技术有限公司',
  description:
    '东营胜泰石油工程技术有限公司发展历程页面，展示企业成立、装备扩充、市场拓展与稳步成长的关键节点。'
})

const phaseItems = [
  {
    title: '初创阶段',
    years: '2009年-2013年',
    text: '以陕西延安市场为起点，完成企业改制后的组织建立、队伍组建和首台钻机投运，夯实规范经营与安全生产基础。'
  },
  {
    title: '成长阶段',
    years: '2014年-2019年',
    text: '注册资本持续提升，钻机数量快速增加，工程装备体系逐步完善，经营规模和区域市场覆盖能力同步增强。'
  },
  {
    title: '成熟阶段',
    years: '2020年-2025年',
    text: '形成多型号钻机协同作业体系，业务由传统区域稳步延伸至新疆市场，持续服务油气开发和煤层气项目建设。'
  }
]

const timelineItems = [
  {
    year: '2009',
    date: '11月',
    stage: '初创',
    title: '公司成立，完成起步建制',
    text: '东营胜泰石油工程技术有限公司正式成立，注册资本500万元，配置30钻机1部，工人35名，企业从陕西延安市场稳步起步。',
    metrics: ['注册资本500万元', '30钻机1部', '工人35名'],
    tags: ['改制起步', '延安市场', '队伍组建']
  },
  {
    year: '2014',
    date: '3月',
    stage: '成长',
    title: '资本与装备同步扩充',
    text: '公司注册资本增加至1100万元，钻机增至5部，经营基础进一步增强，为后续区域拓展和项目履约提供支撑。',
    metrics: ['注册资本1100万元', '钻机5部'],
    tags: ['装备扩充', '经营增强']
  },
  {
    year: '2014',
    date: '12月',
    stage: '成长',
    title: '经营规模明显提升',
    text: '注册资本增至5000万元，钻机增至7部，全年营业额达到9852万元，企业经营能力和市场竞争力实现阶段性提升。',
    metrics: ['注册资本5000万元', '钻机7部', '营业额9852万元'],
    tags: ['资本壮大', '规模提升']
  },
  {
    year: '2017',
    date: '全年',
    stage: '成长',
    title: '高端装备补强，经营效益突破',
    text: '公司购进70钻机1部，设备体系进一步完善，全年营业额突破12000万元，纳税额达到600万元，并获垦利区纳税荣誉企业称号。',
    metrics: ['新增70钻机1部', '营业额突破12000万元', '纳税额600万元'],
    tags: ['设备完善', '纳税荣誉', '稳步增效']
  },
  {
    year: '2020',
    date: '全年',
    stage: '成熟',
    title: '形成多型号钻机协同体系',
    text: '公司形成30钻机2部、40钻机3部、50钻机3部、70钻机2部的装备体系，现场作业能力、工况适配能力和区域调配能力持续增强。',
    metrics: ['30钻机2部', '40钻机3部', '50钻机3部', '70钻机2部'],
    tags: ['体系化装备', '协同作业']
  },
  {
    year: '2025',
    date: '全年',
    stage: '成熟',
    title: '新疆市场开拓取得实效',
    text: '公司开辟新疆亚新煤层气项目市场，7个月内安全完工6口井，钻井总进尺13199米，全年营业额达到12500万元，市场外拓能力进一步显现。',
    metrics: ['安全完工6口井', '总进尺13199米', '营业额12500万元'],
    tags: ['新疆拓展', '煤层气项目', '安全完工']
  }
]

const marketItems = [
  { name: '陕西延安', desc: '企业起步区域，完成初期市场进入与项目积累。', level: '起点' },
  { name: '陕西榆林', desc: '沿陕北油气开发带持续延伸，增强区域施工协同能力。', level: '拓展' },
  { name: '内蒙古', desc: '逐步进入乌审旗等区域市场，提升跨区域作业经验。', level: '增长' },
  { name: '山东', desc: '围绕东营、滨州、菏泽等地稳步深耕本土与周边市场。', level: '巩固' },
  { name: '新疆', desc: '进入阜康、乌鲁木齐、拜城等区域，拓展煤层气与油气项目业务。', level: '突破' }
]
</script>

<template>
  <div class="history-page">
    <section class="history-shell">
      <aside class="history-side">
        <div class="history-side-title">发展历程</div>
        <div class="history-side-body">
          <div v-for="item in phaseItems" :key="item.title" class="phase-card">
            <strong>{{ item.title }}</strong>
            <span>{{ item.years }}</span>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </aside>

      <section class="history-main">
        <header class="history-main-head">
          <h2>发展历程</h2>
          <div class="breadcrumb">当前位置： 首页 &gt; 发展历程</div>
        </header>

        <article class="history-section history-intro">
          <div class="section-title-line">
            <strong>发展概述</strong>
          </div>
          <div class="history-intro-copy">
            <p>
              自2009年成立以来，东营胜泰石油工程技术有限公司坚持立足石油工程主业，围绕安全生产、装备建设、
              市场拓展和规范管理持续发力，逐步形成覆盖多区域、多井型、多工况的综合服务能力。
            </p>
            <p>
              公司从陕西延安起步，稳步辐射榆林、内蒙古、山东及新疆等区域，走出了一条稳扎稳打、持续成长、
              服务国家能源开发和区域油气建设的务实发展路径。
            </p>
          </div>
        </article>

        <article class="history-section">
          <div class="section-title-line">
            <strong>关键发展节点</strong>
          </div>
          <div class="timeline">
            <div v-for="item in timelineItems" :key="`${item.year}-${item.date}-${item.title}`" class="timeline-item">
              <div class="timeline-meta">
                <span class="timeline-stage">{{ item.stage }}</span>
                <strong>{{ item.year }}</strong>
                <small>{{ item.date }}</small>
              </div>
              <div class="timeline-card">
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
                <div class="timeline-metrics">
                  <span v-for="metric in item.metrics" :key="metric">{{ metric }}</span>
                </div>
                <div class="timeline-tags">
                  <em v-for="tag in item.tags" :key="tag">{{ tag }}</em>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article class="history-section">
          <div class="section-title-line">
            <strong>市场拓展路径</strong>
          </div>
          <div class="market-panel">
            <div class="market-route">
              <div v-for="item in marketItems" :key="item.name" class="market-node">
                <span>{{ item.level }}</span>
                <strong>{{ item.name }}</strong>
                <p>{{ item.desc }}</p>
              </div>
            </div>
            <div class="market-summary">
              <div class="summary-line">
                <span>区域拓展主线</span>
                <strong>陕西延安 → 榆林 → 内蒙古 → 山东 → 新疆</strong>
              </div>
              <p>
                公司在区域拓展中始终坚持“先立足、后延伸，先稳定、后扩展”的经营思路，
                依托成熟的现场组织能力和装备保障能力，逐步建立跨区域项目执行与资源调配体系。
              </p>
            </div>
          </div>
        </article>
      </section>
    </section>
  </div>
</template>

<style scoped>
.history-page {
  background: linear-gradient(180deg, #f8f8f9 0%, #f3f4f6 100%);
}

.history-shell {
  width: min(1240px, calc(100% - 32px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 305px minmax(0, 1fr);
  gap: 0;
  padding: 20px 0 50px;
}

.history-side {
  background: #ffffff;
  border: 1px solid rgba(210, 54, 59, 0.12);
  border-right: 0;
}

.history-side-title {
  min-height: 58px;
  display: flex;
  align-items: center;
  padding: 0 18px;
  color: #222222;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid rgba(210, 54, 59, 0.12);
  background: #ffffff;
}

.history-side-body {
  padding: 18px;
  display: grid;
  gap: 14px;
}

.phase-card {
  padding: 16px 16px 14px;
  background: #fbfbfc;
  border: 1px solid rgba(210, 54, 59, 0.08);
  border-left: 4px solid #d2363b;
}

.phase-card strong {
  display: block;
  color: #222222;
  font-size: 16px;
}

.phase-card span {
  display: block;
  margin-top: 6px;
  color: #b12731;
  font-size: 13px;
  font-weight: 700;
}

.phase-card p {
  margin: 10px 0 0;
  color: #4e5560;
  font-size: 14px;
  line-height: 1.8;
}

.history-main {
  min-width: 0;
  background: #ffffff;
  border: 1px solid rgba(210, 54, 59, 0.12);
}

.history-main-head {
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 24px;
  border-bottom: 1px solid rgba(210, 54, 59, 0.12);
  background: #ffffff;
}

.history-main-head h2 {
  margin: 0;
  color: #222222;
  font-size: 18px;
  font-weight: 700;
}

.breadcrumb {
  color: #8a9098;
  font-size: 13px;
}

.history-section {
  padding: 24px;
  border-top: 1px solid rgba(210, 54, 59, 0.05);
}

.history-section:first-of-type {
  border-top: 0;
}

.section-title-line {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(210, 54, 59, 0.08);
}

.section-title-line strong {
  color: #222222;
  font-size: 20px;
  font-weight: 700;
}

.history-intro-copy {
  padding-top: 18px;
}

.history-intro-copy p {
  margin: 0 0 14px;
  color: #333333;
  font-size: 15px;
  line-height: 1.95;
  text-align: justify;
}

.timeline {
  position: relative;
  margin-top: 22px;
  padding-left: 44px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 18px;
  top: 16px;
  bottom: 16px;
  width: 2px;
  background: linear-gradient(180deg, rgba(210, 54, 59, 0.9), rgba(210, 54, 59, 0.18));
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 96px minmax(0, 1fr);
  align-items: start;
  gap: 16px;
  padding-bottom: 20px;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -34px;
  top: 16px;
  width: 14px;
  height: 14px;
  border: 3px solid #d2363b;
  background: #ffffff;
  border-radius: 50%;
  box-sizing: border-box;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding-top: 2px;
}

.timeline-stage {
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 12px;
  background: linear-gradient(180deg, #d2363b, #b92430);
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
}

.timeline-meta strong {
  display: block;
  color: #222222;
  font-size: 26px;
  line-height: 1;
}

.timeline-meta small {
  display: block;
  color: #8b9098;
  font-size: 14px;
  line-height: 1.2;
}

.timeline-card {
  min-width: 0;
  padding: 18px 20px;
  background: #fbfbfc;
  border: 1px solid rgba(210, 54, 59, 0.08);
}

.timeline-card h3 {
  margin: 0;
  color: #222222;
  font-size: 20px;
  line-height: 1.5;
}

.timeline-card p {
  margin: 10px 0 0;
  color: #333333;
  font-size: 15px;
  line-height: 1.9;
  text-align: justify;
}

.timeline-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}

.timeline-metrics span {
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid rgba(210, 54, 59, 0.1);
  color: #5b6169;
  font-size: 14px;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}

.timeline-tags em {
  color: #b12731;
  font-size: 13px;
  font-style: normal;
}

.market-panel {
  padding-top: 20px;
}

.market-route {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}

.market-node {
  position: relative;
  min-height: 170px;
  padding: 18px 16px;
  background: #fbfbfc;
  border: 1px solid rgba(210, 54, 59, 0.08);
}

.market-node:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 38px;
  right: -8px;
  width: 16px;
  height: 2px;
  background: rgba(210, 54, 59, 0.4);
}

.market-node span {
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 10px;
  background: #f8e9ea;
  color: #b12731;
  font-size: 12px;
  font-weight: 700;
}

.market-node strong {
  display: block;
  margin-top: 14px;
  color: #222222;
  font-size: 18px;
}

.market-node p {
  margin: 12px 0 0;
  color: #4f5660;
  font-size: 14px;
  line-height: 1.8;
}

.market-summary {
  margin-top: 18px;
  padding: 18px 20px;
  background: #fbf7f7;
  border-left: 4px solid #d2363b;
}

.summary-line {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.summary-line span {
  color: #8b9098;
  font-size: 14px;
}

.summary-line strong {
  color: #222222;
  font-size: 18px;
}

.market-summary p {
  margin: 12px 0 0;
  color: #333333;
  font-size: 15px;
  line-height: 1.9;
  text-align: justify;
}

@media (max-width: 1080px) {
  .history-shell {
    grid-template-columns: 1fr;
  }

  .history-side {
    border-right: 1px solid rgba(210, 54, 59, 0.12);
  }

  .market-route {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .history-shell {
    width: min(1240px, calc(100% - 20px));
    padding: 14px 0 32px;
  }

  .history-main-head {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding: 12px 16px;
  }

  .history-section {
    padding: 18px 16px;
  }

  .timeline {
    padding-left: 28px;
  }

  .timeline::before {
    left: 10px;
    top: 16px;
    bottom: 16px;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 10px;
    padding-bottom: 18px;
  }

  .timeline-item::before {
    left: -25px;
  }

  .timeline-meta strong {
    font-size: 24px;
  }

  .market-route {
    grid-template-columns: 1fr;
  }

  .market-node:not(:last-child)::after {
    display: none;
  }
}
</style>
