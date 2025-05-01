import { UnionToTuple } from '@/lib/utils/types/UnionToTuple'

// Be cautious when adding new themes to ThemeProvider. Ensure they are compatible with `document.documentElement.style.colorScheme`.
// Adding unsupported themes may lead to unexpected behavior.
export type TTheme = 'light' | 'dark'

export const themeList: UnionToTuple<TTheme> = ['light', 'dark']

export type TThemeContext = {
	theme: TTheme
	setTheme: (newTheme: TTheme) => void
	toggleTheme: () => void
}
