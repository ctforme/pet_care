# 项目信息备忘

## 项目概览

这是一个中文宠物洗护门店展示与预约页面项目，品牌名为“毛茸茸宠物洗护”。页面内容面向猫犬洗澡、美容修剪、皮毛护理、SPA 护理、预约到店和周边接送等服务。

当前主要实现是一个 Next.js 单页应用，页面首屏就是实际门店官网体验，不是营销占位页。页面包含：

- 顶部固定导航：服务、价目、作品、环境、预约、联系。
- Hero 首屏：品牌名、服务卖点、预约和查看价目的按钮。
- 服务区：基础洗护、美容造型、皮毛护理、预约接送。
- 护理流程：到店评估、温和洗护、修剪整理、护理反馈。
- 价格区：小型犬基础洗护、洗护加造型、猫咪专属护理。
- 作品展示：使用 Unsplash 宠物图片。
- 店内环境轮播：使用本地三张环境图。
- 用户评价：三条熟客反馈。
- 预约表单：姓名、电话、宠物类型、服务项目、日期、时间、备注，提交后只在前端更新提示文案。
- 页脚：版权和社交入口图标。

## 技术栈

- 框架：Next.js 16，App Router。
- 语言：TypeScript + React。
- 图标：`lucide-react`。
- 样式：全局 CSS，主要写在 `app/globals.css`。
- 包管理：npm，仓库里有 `package-lock.json`。
- TypeScript 配置开启 `strict`，`allowJs` 为 true，`noEmit` 为 true。
- ESLint 使用 `eslint-config-next/core-web-vitals` 和 `eslint-config-next/typescript`，并忽略 `.tools/**`。

## 常用命令

在项目根目录执行：

```powershell
npm run dev
npm run build
npm run start
npm run lint
```

已有开发日志显示曾用：

```powershell
next dev --hostname 127.0.0.1 --port 3000
```

本地访问地址为 `http://127.0.0.1:3000`。

## 目录结构

- `app/layout.tsx`：Next 根布局，设置 `zh-CN` 语言和页面 metadata。
- `app/page.tsx`：主页面组件，包含页面所有主要内容、环境轮播状态和预约表单提交逻辑。
- `app/globals.css`：全站样式、响应式布局和组件视觉样式。
- `public/assets/environment/`：Next 页面直接引用的店内环境图片资源。
- `assets/environment/`：同样三张环境图片的源资源副本。
- `index.html`：较完整的静态 HTML 原型，内容和样式与当前 Next 页面高度对应，可作为文案和结构参考。
- `.tools/`：本地工具缓存，包含 npm 包，不属于业务源码。
- `.next/`、`node_modules/`：生成目录和依赖目录，不应手动编辑。
- `dev-server.out.log`、`dev-server.err.log`：本地开发服务日志，已被 `.gitignore` 忽略。

## 关键实现细节

- `app/page.tsx` 是客户端组件，文件顶部有 `"use client"`。
- 环境轮播数据来自 `environmentSlides` 数组，图片路径使用 `/assets/environment/*.png`。
- 评价数据来自 `reviews` 数组，星级由 `ReviewStars` 组件渲染。
- 环境轮播通过 `activeSlide` 状态和 `translateX(-${activeSlide * 100}%)` 切换。
- 预约表单的 `handleSubmit` 会阻止默认提交，读取 `FormData`，更新 `formNote`，然后 `form.reset()`；目前没有后端接口、持久化或真实短信/电话流程。
- 页面大量使用锚点跳转，CSS 中启用了 `html { scroll-behavior: smooth; }`。
- 图片来源混合使用 Unsplash 远程图片和本地环境图。

## 样式与视觉约定

- 主色包括深墨色、青绿色、珊瑚红、黄色和浅纸色背景：
  - `--ink: #1f2a2e`
  - `--teal: #0f766e`
  - `--coral: #e85d4f`
  - `--yellow: #f4bf45`
  - `--paper: #fbfbf7`
- UI 圆角基本使用 8px。
- 页面最大内容宽度多为 1180px。
- 断点主要是 `960px` 和 `680px`。
- 桌面端服务卡片为四列，价格卡片和评价为三列；移动端逐步降为单列。
- Hero 使用远程宠物图片作为背景，并叠加深色渐变保证文字可读性。

## 已知注意事项

- `index.html` 是静态原型，不是当前 Next 应用入口；实际 Next 应用入口是 `app/page.tsx`。
- `assets/environment/` 和 `public/assets/environment/` 下存在同名图片副本。页面使用的是 `public/assets/environment/`，因为 Next 可以直接从 `/assets/...` 路径访问 `public` 内容。
- 当前仓库中 `AGENTS.md` 原本为空，本文档为新增内容。
- PowerShell 直接 `Get-Content -Raw` 时中文可能显示成乱码，但 `Select-String` 能正确识别中文；修改中文内容时要注意保持 UTF-8 编码。
- `.tools/` 是工具缓存，`node_modules/` 和 `.next/` 是生成或依赖目录，不应作为业务代码阅读重点。

## 开发与维护建议

- 修改页面文案和结构时，优先改 `app/page.tsx`。
- 修改视觉布局时，优先改 `app/globals.css`，保持现有变量和 8px 圆角风格。
- 新增可公开访问的静态图片时，放在 `public/` 下并用根路径引用。
- 如果要把预约表单接入真实业务，需要新增后端接口或第三方表单服务，并处理校验、错误提示、隐私说明和提交成功状态。
- 如果调整中文文案，建议同时检查 `app/layout.tsx` 的 metadata。
- 变更后至少运行 `npm run lint`；涉及构建或 Next 配置时再运行 `npm run build`。

## 操作约束

- 禁止批量删除文件或目录。
- 不要使用 `del /s`、`rd /s`、`rmdir /s`、`Remove-Item -Recurse`、`rm -rf`。
- 需要删除文件时，只能一次删除一个明确路径的文件，例如：

```powershell
Remove-Item "C:\path\to\file.txt"
```

- 如果确实需要批量删除文件，应停止操作并请求用户手动删除。
