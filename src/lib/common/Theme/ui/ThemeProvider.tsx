import { PropsWithChildren, useEffect, useState } from 'react'
import { TTheme, TThemeContext } from '../model/model'
import { ThemeContext } from '../model/context'

const THEME_KEY = 'app-theme'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
	const [theme, setTheme] = useState<TTheme>(() => {
		const savedTheme = localStorage.getItem(THEME_KEY)
		return savedTheme && ['light', 'dark'].includes(savedTheme) ? (savedTheme as TTheme) : 'light'
	})
	useEffect(() => {
		localStorage.setItem(THEME_KEY, theme)
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])
	const toggleTheme: TThemeContext['toggleTheme'] = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		document.documentElement.setAttribute('data-theme', newTheme)
		setTheme(newTheme)
	}

	const value: TThemeContext = {
		theme,
		setTheme,
		toggleTheme,
	}

	return (
		<div data-theme={theme}>
			<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
		</div>
	)
}
