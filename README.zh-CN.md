# web-deploy-lab

面向前端开发者的部署实战实验室。

[English](README.md)

文档网站：https://thrall1991214-arch.github.io/web-deploy-lab/

`web-deploy-lab` 是一个开源学习项目，用来练习前端应用上线过程中的真实工作：构建、配置、部署、观测和排查问题。

这个项目的目标很简单：帮助前端开发者从“本地能跑”走到“稳定上线”。

## 你会练习什么

- 为前端应用准备生产构建
- 安全管理环境变量
- 部署静态站点和全栈前端应用
- 配置自定义域名、重定向和重写规则
- 排查构建失败和部署异常
- 理解预览环境、测试环境和生产环境
- 编写团队可复用的部署检查清单

## 适合谁

这个项目适合已经掌握 HTML、CSS、JavaScript 或某个前端框架基础，并且想提升部署能力的前端开发者。

如果你遇到过这些问题，这个项目会很适合你：

- 为什么我的应用本地能跑，上线后却失败？
- 推到生产环境前应该检查什么？
- 本地环境、预览环境和线上环境的环境变量有什么区别？
- 怎样把部署流程变成可重复执行的步骤？

## 实验形式

每个实验都尽量保持小而实用，方便重复练习。

大多数实验会包含：

- 场景说明
- 学习目标
- 所需工具
- 分步任务
- 验证步骤
- 常见失败情况
- 进阶练习

实验目录从 [labs/README.md](labs/README.md) 开始。

也可以直接访问文档网站：https://thrall1991214-arch.github.io/web-deploy-lab/。

## 仓库结构

```text
.
+-- .github/              # Issue 和 Pull Request 模板
+-- docs/                 # GitHub Pages 文档网站
+-- labs/                 # 部署实验目录和练习
+-- CODE_OF_CONDUCT.md    # 社区行为准则
+-- CONTRIBUTING.md       # 贡献指南
+-- LICENSE               # MIT 许可证
+-- README.md             # 英文项目介绍
+-- README.zh-CN.md       # 中文项目介绍
+-- SECURITY.md           # 安全披露说明
+-- TODO.md               # 项目任务清单
```

## 路线图

- 增加适合初学者的静态站点部署实验
- 增加前端框架部署实验
- 增加环境变量和密钥处理练习
- 增加 CI 构建和预览部署实验
- 增加常见部署失败的排查指南

当前任务清单见 [TODO.zh-CN.md](TODO.zh-CN.md)。

## 如何贡献

欢迎贡献。你可以通过这些方式参与：

- 添加新的实验
- 改进已有实验
- 反馈不清楚的说明
- 分享部署失败案例
- 修复错别字或失效链接

提交 Pull Request 前，请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可证

本项目基于 [MIT License](LICENSE) 开源。
