import type { Preview } from '@storybook/react-vite'
import { StyleDecorator } from '../src/lib/storybook/StyleDecorator'
import { ThemeDecorator } from '../src/lib/storybook/ThemeDecorator'
import { type TTheme } from '../src/lib'
const themes: TTheme[] = ['light', 'dark']
const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	globalTypes: {
		theme: {
			description: 'Global theme for components',
			defaultValue: 'light',
			toolbar: {
				title: 'Theme',
				icon: 'paintbrush',
				items: themes,
				dynamicTitle: true,
			},
		},
	},
	decorators: [StyleDecorator, ThemeDecorator],
}

export default preview
