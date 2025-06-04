import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'
import { normalizePath } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: ['@storybook/addon-onboarding', '@chromatic-com/storybook', '@storybook/addon-docs'],
	core: {
		builder: '@storybook/builder-vite',
	},
	async viteFinal(config) {
		if (config && config.resolve) {
			config.resolve.alias = {
				...config.resolve.alias,
				'@fonts': path.resolve(__dirname, '../src/lib/assets/fonts/DM_Sans'),
			}
			config.plugins = [
				...(config.plugins || []),
				viteStaticCopy({
					targets: [
						{
							src: normalizePath(
								path.resolve(__dirname, '..', 'src', 'lib', 'assets', 'fonts/DM_Sans/*'),
							),
							dest: 'assets/fonts',
						},
					],
				}),
			]
			return config
		} else {
			return config
		}
	},
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
}
export default config
