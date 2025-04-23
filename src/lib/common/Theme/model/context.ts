import { createContext } from 'react'
import { TThemeContext } from './model'

export const ThemeContext = createContext<Partial<TThemeContext>>({
	theme: 'light',
	toggleTheme: () => console.warn('ThemeContext: toggleTheme used outside of ThemeProvider'),
	setTheme: theme => console.warn(`ThemeContext: setTheme(${theme}) used outside of ThemeProvider`),
})
