import '../../../public/styles/concero/index.css'
import '../assets/fonts/DM_Sans/typography-woff.css'
import { StoryFn } from '@storybook/react-vite'

export const StyleDecorator = (StoryComponent: StoryFn) => {
	return (
		<>
			<StoryComponent />
		</>
	)
}
