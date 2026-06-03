# 设计规范

> 基于 Apple 设计系统分析 — 参考 [apple/DESIGN.md](../apple/DESIGN.md)

## 1. 设计原则

- **摄影优先，UI 退后** — 内容即界面
- **单个强调色** — 仅使用 Action Blue (#0066cc) 作为交互色
- **大块留白** — 每个 section 至少 80px 垂直间距
- **无装饰性边框/渐变** — 颜色切换即分节符
- **SF 字体语言** — 系统原生字体栈

## 2. 色彩系统

### 品牌色
| 用途 | Token | 色值 | 说明 |
|------|-------|------|------|
| 强调色 | `--color-primary` | `#0066cc` | 所有交互元素唯一色 |
| 聚焦环 | `--color-primary-focus` | `#0071e3` | 键盘焦点指示 |
| 暗色链接 | `--color-primary-on-dark` | `#2997ff` | 深色背景上的链接 |

### 背景色
| 用途 | Token | 色值 |
|------|-------|------|
| 纯白画布 | `--color-canvas` | `#ffffff` |
| 羊皮纸 | `--color-canvas-parchment` | `#f5f5f7` |
| 珍珠白 | `--color-surface-pearl` | `#fafafc` |
| 深色 Tile 1 | `--color-surface-tile-1` | `#272729` |
| 深色 Tile 2 | `--color-surface-tile-2` | `#2a2a2c` |
| 纯黑 | `--color-surface-black` | `#000000` |

### 文字色
| 用途 | Token | 色值 |
|------|-------|------|
| 正文标题 | `--color-ink` | `#1d1d1f` |
| 浅色正文 | `--color-body-muted` | `#cccccc` |
| 置灰 80% | `--color-ink-muted-80` | `#333333` |
| 置灰 48% | `--color-ink-muted-48` | `#7a7a7a` |

## 3. 排版系统

| Token | 字号 | 字重 | 行高 | 字距 | 字体族 | 用途 |
|-------|------|------|------|------|--------|------|
| hero-display | 56px | 600 | 1.07 | -0.28px | Display | Hero 标题 |
| display-lg | 40px | 600 | 1.10 | 0 | Display | Section 大标题 |
| display-md | 34px | 600 | 1.47 | -0.374px | Text | 区域副标题 |
| lead | 28px | 400 | 1.14 | 0.196px | Display | 引文 |
| tagline | 21px | 600 | 1.19 | 0.231px | Display | 标签行 |
| body | 17px | 400 | 1.47 | -0.374px | Text | 正文 |
| caption | 14px | 400 | 1.43 | -0.224px | Text | 标注 |

**字体栈：**
- Display: `"SF Pro Display", "Inter", system-ui, -apple-system, sans-serif`
- Text: `"SF Pro Text", "Inter", system-ui, -apple-system, sans-serif`

## 4. 间距系统

| Token | 值 | 使用场景 |
|-------|-----|----------|
| `--spacing-xxs` | 4px | 微调 |
| `--spacing-xs` | 8px | 图标与文字间距 |
| `--spacing-sm` | 12px | 紧凑布局间距 |
| `--spacing-md` | 17px | 卡片内边距基础 |
| `--spacing-lg` | 24px | 区块间距 |
| `--spacing-xl` | 32px | 大区块间距 |
| `--spacing-xxl` | 48px | 区域分隔 |
| `--spacing-section` | 80px | 全局 Section 间距 |

## 5. 圆角系统

| Token | 值 | 使用场景 |
|-------|-----|----------|
| `--radius-none` | 0px | 全幅 Tile |
| `--radius-sm` | 8px | 小型按钮 |
| `--radius-md` | 11px | 胶囊按钮 Pearl |
| `--radius-lg` | 18px | 卡片 |
| `--radius-pill` | 9999px | 主按钮（标志性药丸） |

## 6. 阴影

**唯一阴影：** 产品图片浮在表面时
```
box-shadow: rgba(0, 0, 0, 0.22) 3px 5px 30px 0;
```
UI 元素不添加阴影 —— 层次通过底色变化表达。

## 7. 组件规范

### 导航栏
- 固定顶部，纯黑背景，高 44px
- 字体: 12px/400/-0.12px
- 左侧 Logo，右侧搜索和购物车图标

### 主按钮 (Primary CTA)
- 蓝色填充 `#0066cc` + 白色文字
- 圆角 pill (9999px)
- padding: 11px × 22px
- 点击态: `transform: scale(0.95)`

### 次按钮 (Secondary)
- 透明背景 + 蓝色边框 1px
- 圆角 pill
- 与主按钮相同的 padding

### Tile (区块)
- 全幅，无圆角
- 间隔为 0（颜色切换充当分割）
- 内边距 80px 上下
