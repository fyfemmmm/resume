# 技术方案

## 1. 技术选型

| 技术 | 选择 | 理由 |
|------|------|------|
| 框架 | 无（Vanilla） | 单页应用，无需框架开销 |
| 样式 | Vanilla CSS + CSS Variables | 最大灵活性，零依赖 |
| 交互 | Vanilla JavaScript | 轻量，控制精准 |
| 字体 | system-ui 栈 | 跨平台 Apple 风格 |
| 图标 | SVG 内联 | 零请求，高清晰度 |
| 构建 | 无（直接部署） | 静态页面，无需构建 |

## 2. 架构设计

### 2.1 目录结构
```
/
├── index.html              # 主页面
├── assets/
│   ├── css/
│   │   └── style.css       # 设计系统样式
│   └── js/
│       └── main.js         # 交互脚本
├── dev-log/                 # 开发日志
│   ├── log-template.md      # 日志模板
│   └── YYYY-MM-DD.md       # 每日日志
├── docs/                    # 项目文档
│   ├── 01-requirements.md
│   ├── 02-technical.md
│   ├── 03-design-spec.md
│   └── 04-execution-guide.md
└── CLAUDE.md                # AI 指引
```

### 2.2 组件树
```
Page
├── GlobalNav (fixed, dark)
├── HeroSection
│   ├── Avatar
│   ├── DisplayHeadline
│   └── Tagline
├── EducationTimeline
│   └── TimelineCard[]
├── SkillsGrid
│   └── SkillCategory[]
├── WorkExperience
│   └── ExperienceCard[]
├── Projects
│   └── ProjectCard[]
├── ContactSection
└── Footer
```

## 3. 关键实现

### 3.1 设计系统实现
使用 CSS Custom Properties 实现 Apple 设计 tokens：
```css
:root {
  --color-primary: #0066cc;
  --color-canvas: #ffffff;
  --color-canvas-parchment: #f5f5f7;
  --color-ink: #1d1d1f;
  --font-display: "SF Pro Display", system-ui, sans-serif;
  --font-text: "SF Pro Text", system-ui, sans-serif;
}
```

### 3.2 响应式断点
```css
/* 移动端 */  @media (max-width: 734px)
/* 平板 */    @media (min-width: 735px) and (max-width: 1068px)
/* 桌面端 */  @media (min-width: 1069px)
```

### 3.3 动画性能
- 使用 `transform` 和 `opacity` 属性（GPU 加速）
- `requestAnimationFrame` 驱动滚动动画
- `will-change` 在适当元素上使用
- 避免 Layout Thrashing

## 4. 安全考量
- 所有用户输入通过 textContent 而非 innerHTML
- 无第三方 CDN 加载
- 邮件地址使用分割展示防爬虫
