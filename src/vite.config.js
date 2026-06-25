import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const host = process.env.TAURI_DEV_HOST;

// https://vite.dev/config/
export default defineConfig(async () => ({
	plugins: [vue()],

	clearScreen: false, // 关闭 vite 清屏，保留rust日志
	server: {
		port: 1420,
		strictPort: true, // 端口被占用直接报错不自动换端口
		host: true,
		hmr: host ? { protocol: 'ws', host, port: 1421 } : undefined,
		watch: { ignored: ['**/src-tauri/**'] },
	},
}));
