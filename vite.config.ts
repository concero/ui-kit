import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import precss from 'precss'
import stylelint from 'vite-plugin-stylelint'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import svgr from 'vite-plugin-svgr'

const convertColorsToCurrentColorPlugin = {
	name: 'convertColorsToCurrentColor',
	description: 'Convert all fill and stroke colors to currentColor for monochrome SVGs.',
	//@ts-expect-error
	fn: (_, __, { path }) => {
		return {
			element: {
				//@ts-expect-error
				enter: (node, parentNode) => {
					const filePath = path

					if (filePath && filePath.includes('/monochrome/')) {
						if (node.attributes.fill && node.attributes.fill !== 'none') {
							node.attributes.fill = 'currentColor'
						}

						if (node.attributes.stroke && node.attributes.stroke !== 'none') {
							node.attributes.stroke = 'currentColor'
						}
					}
				},
			},
		}
	},
}

export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		dts({ tsconfigPath: './tsconfig.app.json' }),
		cssInjectedByJsPlugin(),
		stylelint({
			fix: true,
			include: ['./src/**/*.css', './src/**/*.pcss'],
			configFile: './.stylelintrc.json',
			emitErrorAsWarning: true,
		}),
		svgr({
			svgrOptions: {
				plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
				svgo: true,
				svgoConfig: {
					path: 'monochrome',
					plugins: [
						//@ts-ignore
						convertColorsToCurrentColorPlugin,
					],
					floatPrecision: 4,
				},
			},
		}),
	],
	build: {
		copyPublicDir: true,
		lib: {
			entry: path.resolve('src', 'lib', 'index.ts'),
			name: '@concero/ui-kit',
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

				assetFileNames: 'concero-ui.css',
			},
		},
	},
	css: {
		postcss: {
			plugins: [precss()],
		},
	},
})
