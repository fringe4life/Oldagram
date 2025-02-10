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
}) satisfies UserConfig