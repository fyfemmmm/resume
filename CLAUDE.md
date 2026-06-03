# Reasonix Code 项目指引

## 项目概述

个人简历 Apple 设计风格展示页面。将 PDF 简历转换为像素级 Apple 设计语言的高质量 Web 页面。

## 项目标准文件路径

| 文件 | 路径 | 说明 |
|------|------|------|
| 📋 需求规格 | `docs/01-requirements.md` | 功能需求与质量要求 |
| 🔧 技术方案 | `docs/02-technical.md` | 技术选型与架构 |
| 🎨 设计规范 | `docs/03-design-spec.md` | Apple 设计系统规范 |
| 📐 执行指南 | `docs/04-execution-guide.md` | 开发步骤与工作流 |
| 📝 设计引用 | `apple/DESIGN.md` | Apple 设计系统分析 |
| 📓 开发日志 | `dev-log/` | 每日日志目录 |
| 📄 主页面 | `index.html` | 简历展示页面 |
| 🎭 样式 | `assets/css/style.css` | 设计系统样式 |
| ⚡ 交互 | `assets/js/main.js` | 交互脚本 |

## 工作说明

### 设计语言
本项目严格遵循 **Apple 设计系统**，详细 tokens 定义见 `docs/03-design-spec.md`。关键要点：
- 唯一交互色：`#0066cc` (Action Blue)
- 字体栈：SF Pro Display / SF Pro Text → system-ui
- 排版使用负字距（Apple tight）
- 装饰元素最小化
- 使用底色变化替代边框和阴影

### 开发模式
- **实现阶段**：逐组件编码，从 Nav → Hero → Timeline → Grid → Footer
- **审查阶段**：调用 `/review` 进行代码审查
- **技术讨论**：调用 `/grill-with-docs` 进行设计讨论
- **设计验证**：对照 `docs/03-design-spec.md` 验证视觉一致性

### 项目约束
- 纯前端，零框架
- 零外部依赖（CDN 资源除外）
- 响应式：320px / 734px / 1068px / 1440px 断点
- 使用 CSS Variables 实现设计系统 tokens
- 所有文本安全渲染（textContent，非 innerHTML）
