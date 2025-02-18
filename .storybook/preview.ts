import type { Preview } from '@storybook/react'
import '../public/styles/concero/index.css'
import '../src/lib/assets/fonts/DM_Sans/typography-woff.css'
import '../src/lib/styles/variables.pcss'
const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
