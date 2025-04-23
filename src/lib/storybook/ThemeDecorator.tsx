import { StoryFn } from '@storybook/react'
import { TTheme } from '../common/Theme'
import { useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ThemeDecorator = (StoryComponent: StoryFn, context: any) => {
	const themeName = context.globals.theme as TTheme

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', themeName)

		// Очистка предыдущей темы
		if (themeName === 'light') {
			document.documentElement.removeAttribute('data-theme-dark')
		} else if (themeName === 'dark') {
			document.documentElement.removeAttribute('data-theme-light')
		}
	}, [themeName])

	return (
		<div data-theme={themeName} key={themeName}>
			<StoryComponent />
		</div>
	)
}
