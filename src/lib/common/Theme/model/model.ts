export type TTheme = 'light' | 'dark'
export type TThemeContext = {
	theme: TTheme
	setTheme: (newTheme: TTheme) => void
	toggleTheme: () => void
}
