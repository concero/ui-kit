import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import precss from 'precss'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
export default defineConfig({
	plugins: [react(), tsconfigPaths(), dts({ tsconfigPath: './tsconfig.app.json' }), cssInjectedByJsPlugin()],
	build: {
		lib: {
			entry: path.resolve('src', 'lib', 'index.ts'),
			name: '@Concero/ui',
			fileName: format => `index.${format}.js`,
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
				assetFileNames: 'concero-ui-vite.css',
			},
		},
	},
	css: {
		postcss: {
			plugins: [precss()],
		},
	},
})
