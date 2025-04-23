import { useContext } from 'react'
import { TThemeContext, TTheme } from '../model/model'
import { ThemeContext } from '../model/context'

export const useTheme = (): TThemeContext => {
	const context = useContext(ThemeContext) as Partial<TThemeContext> & Required<Pick<TThemeContext, 'theme'>>

	if (!context.setTheme || !context.toggleTheme) {
		console.warn('useTheme: used outside of ThemeProvider. Default values are provided')
		return {
			theme: context.theme || 'light',
			setTheme: (theme: TTheme) => console.warn(`ThemeContext: setTheme(${theme}) used outside of ThemeProvider`),
			toggleTheme: () => console.warn('ThemeContext: toggleTheme used outside of ThemeProvider'),
		}
	}

	return context as TThemeContext
}
