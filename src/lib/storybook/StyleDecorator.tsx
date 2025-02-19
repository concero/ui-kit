import '../../../public/fonts/DM_Sans/typography-woff.css'
import '../../../public/styles/concero/index.css'
import '../styles/variables.pcss'
import { StoryFn } from '@storybook/react'

export const StyleDecorator = (StoryComponent: StoryFn) => {
	return (
		<>
			<StoryComponent />
		</>
	)
}
