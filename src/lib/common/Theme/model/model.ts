import { UnionToTuple } from '@/lib/utils/types/UnionToTuple'

export type TTheme = 'light' | 'dark'

export const themeList: UnionToTuple<TTheme> = ['light', 'dark']

export type TThemeContext = {
	theme: TTheme
	setTheme: (newTheme: TTheme) => void
	toggleTheme: () => void
}
