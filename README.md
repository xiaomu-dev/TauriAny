# Tauri Any
Tauri universal template, freely use any frontend framework.
一款可自由更换任意前端框架的 Tauri 桌面应用模板

## ✨ 功能
- 前后端完全解耦：src/ 放置完整独立前端工程，src-tauri/ 存放 Tauri Rust 逻辑
- 兼容全部 Vite 前端项目：Vue / React / Svelte / Vanilla 原生 JS 直接复制到 src/ 即可使用

## 📦 环境与运行

### 我的环境
- node.js = 25.0.0
- pnpm = 11.9.0
- rust = 1.96.0

### 本地开发使用步骤
- 将你完整的 Vite 前端项目复制到项目根目录 src/
- 调整 `src/vite.config.js`，增加 Tauri 专用配置（下方附标准示例）
- 运行命令启动

### 命令
  ```bash
# 安装前端依赖
pnpm web:install
# 单独启动前端页面 : 确保你的前端有 dev 命令
pnpm web:dev
# 单独打包前端页面 : 确保你的前端有 build 命令
pnpm web:build

# 安装tauri
pnpm install
# 启动tauri : 确保你的前端有 dev 命令
pnpm tauri dev
# 打包tauri : 确保你的前端有 build 命令
pnpm tauri build

# 如果需要运行的不是 dev 和 build
# 请自行修改 前端命令 或 /package.json 或 /src-tauri/tauri.conf.json
# 三选一 修改 即可运行
  ```

### 成品产物
- 绿色免安装：`\src-tauri\target\release\tauri-any.exe`
- NSIS安装包: `\src-tauri\target\release\bundle\nsis\tauri-any_0.1.0_x64-setup.exe`
- MSI安装包: `\src-tauri\target\release\bundle\msi\tauri-any_0.1.0_x64_en-US.msi`

### Tauri 专用配置

请在 `src/vite.config.js` 中加入以下配置

```js
import { defineConfig } from 'vite';

const host = process.env.TAURI_DEV_HOST;

export default defineConfig(async () => ({
	clearScreen: false,
	server: {
		port: 1420,
		strictPort: true,
		host: host || false,
		hmr: host ? { protocol: 'ws', host, port: 1421 } : undefined,
		watch: { ignored: ['**/src-tauri/**'] },
	},
}));
```

## 🙏 感谢
本项目依赖以下优秀开源项目，在此表示感谢：
- [Tauri](https://tauri.app/) - 跨平台应用框架
- [Vite](https://vite.org/) - 前端工具链
- 前端 JS/TS 依赖清单：`package.json`
- 后端 Rust 依赖清单：`src-tauri/Cargo.toml`

## ⚠️ 重要使用声明
所有违规、违法、侵权使用产生的全部法律责任，均由使用者自行承担，**项目作者不承担任何连带责任与法律责任**。

## 📜 开源协议
[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

**Copyright (c) 2026 xiaomu_dev**

本项目基于 **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International** 协议开源

### 许可范围
✅ **允许**
- 个人本地学习、研究、自用
- 个人修改代码本地使用

❌ **严格禁止**
- 任何形式商业用途
- 软件二次打包售卖、付费分发
- 上架各类应用商店盈利
- 企业内部商用、商业服务使用
- 任何直接或间接盈利变现行为

### 衍生项目约束
基于本项目二次修改、开源分发的衍生作品，**必须沿用本相同协议（CC BY-NC-SA 4.0）**，不得放宽商用限制。

[cc-by-nc-sa]: https://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-shield]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
