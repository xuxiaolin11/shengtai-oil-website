# awesome-design-md 接入说明

## 1. 来源

- 上游仓库：<https://github.com/VoltAgent/awesome-design-md>
- 仓库定位：一组可供 AI 代理读取的 `DESIGN.md` 设计系统参考集合。

## 2. 为什么不直接作为前端依赖安装

- 它不是组件库，也不是 npm 包。
- 它的核心价值是 `DESIGN.md` 设计规则文本，而不是运行时代码。
- 直接把整个仓库作为嵌套 Git 仓库塞进项目，会增加管理复杂度，也不利于后续维护。

## 3. 当前项目采用的接入方式

本项目采用“方法论接入 + 本地化沉淀”的方式：

1. 保留上游仓库作为参考来源
2. 在项目根目录创建 `DESIGN.md`
3. 将官网实际需要的视觉规则、组件规则、文案气质写入本项目自己的设计规范
4. 后续页面开发统一优先遵循本项目 `DESIGN.md`

## 4. 与本项目最接近的参考气质

根据上游仓库 README 中的描述，以下几个方向与本项目较接近：

- IBM
  - structured blue palette
  - enterprise technology
  - 适合借鉴企业级秩序感和蓝色体系
- HashiCorp
  - enterprise-clean
  - black and white / structured layout
  - 适合借鉴企业信息架构和规整布局
- NVIDIA
  - technical power aesthetic
  - green-black energy
  - 适合借鉴工程力量感，但不能直接照搬其暗黑风格

## 5. 当前落地结果

- 项目根目录新增：
  - [DESIGN.md](X:\code\corp-site-web\DESIGN.md)
- 本文件用于说明：
  - [awesome-design-md.md](X:\code\corp-site-web\docs\design-references\awesome-design-md.md)

## 6. 后续使用方式

当你让我继续开发官网内页时，可以直接说：

- “按项目 DESIGN.md 做公司简介页”
- “按项目 DESIGN.md 优化业务领域页”
- “按 IBM/HashiCorp 那种更规整的感觉继续收紧页面”

这样后续页面就不会跑偏成互联网营销风，而会持续贴合能源工程企业官网气质。
