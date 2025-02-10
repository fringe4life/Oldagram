import {defineConfig} from "vite"
import type { UserConfig } from "vite"
export default defineConfig({
	plugins: [	],
	build: {
		target: 'esnext',
        outDir: 'dist',
		rollupOptions: {
            input: ['index.html'],
        },
	},
	// include all images in the dist directory for serving them as static assets.
	assetsInclude: ['./images/**.*'],
}) satisfies UserConfig