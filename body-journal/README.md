# 一隅手记

纯静态个人博客与本机记录工具。沿用原有 React 界面、训练及饮食计算；使用项目自带的轻量 Markdown 静态生成器（scripts/build.mjs）生成每篇文章的独立 HTML，无服务器、登录或 ChatGPT 依赖。这样可以复用现有代码，构建依赖少。支持标题、段落、列表、引用、粗体、斜体、代码块与安全链接；不执行文章 HTML。

## 本地使用

需要 Node.js 24。

```sh
cd body-journal
npm ci
npm test
npm run dev
```

打开 http://127.0.0.1:4321/exercise/ 。修改后重新运行命令生成预览。`npm run build` 输出 dist/。

## 写文章

在 `content/posts/` 新建英文文件名 `.md`，格式如下（仅格式示例，站点不内置示例文章）：

```markdown
---
title: 文章标题
slug: my-note
date: 2026-01-01
category: 随笔
excerpt: 一句话摘要
draft: true
---
## 正文
写下内容。
```

删除 draft 或改为 false 才会公开。slug 只使用小写英文字母、数字和连字符。分类自动加入筛选，搜索匹配标题、摘要及正文。文章 URL 为 `/exercise/p/my-note/`，支持直接访问与刷新。

从仓库根目录提交：

```sh
git add body-journal .github/workflows/pages.yml
git commit -m "Update journal"
git push origin main
```

## 保存、备份与恢复

新站没有身体测量、训练或饮食历史。默认身高170为通用占位值，请在身体档案中更改。食物模板仅在点击后记入饮食。

记录在当前浏览器 localStorage 中保存，修改后必须点击顶部「保存记录」。状态显示未保存/已保存；离开未保存页面会提示。不同浏览器、设备、域名均不共享数据，清理浏览器数据可能导致丢失。请定期「导出完整备份」。JSON 包含器械、训练、饮食、消耗、身体测量及设置，也包含当前尚未保存的输入。

「导入备份」支持原 `body-training-v1` 格式，验证成功后确认覆盖，点击保存才完成持久化。无饮食字段的旧记录会补为空饮食，不会删除训练。无效文件不会修改现有数据。多标签页保存时通过修订号检查冲突。存储不可用或空间不足会显示错误，不会报告保存成功。

本机与旧云端属于不同来源，需从旧站导出 JSON 再导入。原站及云端数据不受此项目影响。不要把实际备份提交到仓库；`.private/`、备份文件、dist 与 node_modules 已排除。公开文章只能放非敏感内容，所有 content/posts 文章都会进入公开构建。

## Pages

仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。
工作流 `.github/workflows/pages.yml` 在 main 更新后测试、构建并发布 **body-journal/dist**，不会发布仓库中的历史记录目录或其他源码。固定项目子路径 `/exercise/`；修改仓库名时需同步修改客户端链接和生成器。

首次若设置尚未启用，请选择 GitHub Actions 后在 Actions 页面重新运行 Publish journal。

名义容量只汇总完成且非热身的普通负重组；自重和辅助重量不纳入。挂片重量按器械自重加左右挂片计算后保存总名义重量。有氧热量仅为设备估算记录，不从力量容量换算热量。全天消耗和静息+活动是互斥口径，运动热量不重复叠加。仅饮食完整、热量均已知且消耗齐全时展示差额。
