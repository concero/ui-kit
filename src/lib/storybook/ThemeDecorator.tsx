/* eslint-disable @typescript-eslint/no-deprecated */
import { StoryFn } from '@storybook/react-vite'
import { ThemeProvider, useTheme } from '../common/Theme'
import { useEffect, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ThemeDecorator = (StoryComponent: StoryFn, context: any) => {
	const themeName = context.globals.theme as 'light' | 'dark' | undefined

	return (
		<ThemeProvider initialTheme={themeName ?? 'light'} storageSettings={{ persist: false }}>
			<DynamicThemeSetter themeName={themeName}>
				<StoryComponent />
			</DynamicThemeSetter>
		</ThemeProvider>
	)
}

const DynamicThemeSetter = ({ themeName, children }: { themeName?: 'light' | 'dark'; children: JSX.Element }) => {
	const [isReady, setIsReady] = useState(false)
	const { setTheme } = useTheme()

	useEffect(() => {
		if (themeName) {
			setTheme(themeName)
		}
		setIsReady(true)
	}, [setTheme, themeName])

	return isReady ? <>{children}</> : null
}
