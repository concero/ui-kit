import { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { themeList, TTheme, TThemeContext } from '../model/model'
import { ThemeContext } from '../model/context'
interface IThemeProviderProps {
	/**
	 * The initial theme for the application. If not provided, the theme will be determined
	 * based on the value stored in localStorage or the system's preferred color scheme.
	 */
	initialTheme?: TTheme

	/**
	 * Whether to automatically adopt the system's preferred color scheme (dark/light)
	 * when no initialTheme or saved theme is available.
	 * If false, will fallback to defaultTheme instead of checking system preference.
	 * @default true
	 */
	useSystemTheme?: boolean

	/**
	 * Settings for managing theme persistence in localStorage.
	 * */
	storageSettings?: {
		/**
		 * Whether to persist the selected theme in localStorage.
		 * If true, the theme will be saved and restored on page reload.
		 * @default true
		 */
		persist?: boolean

		/**
		 * The key under which the theme will be stored in localStorage.
		 * @default 'app_theme'
		 */
		storageKey?: string
	}
	className?: string
}
const defaultTheme: TTheme = 'light'
const defaultStorageKey = 'app_theme'
const defaultPersist = true

export const ThemeProvider = ({
	children,
	initialTheme,
	useSystemTheme = true,
	storageSettings = {
		persist: true,
		storageKey: defaultStorageKey,
	},
}: PropsWithChildren<IThemeProviderProps>) => {
	const persist = storageSettings.persist ?? defaultPersist
	const storageKey = storageSettings.storageKey ?? defaultStorageKey

	const [theme, setThemeState] = useState<TTheme>(() => {
		// Check localStorage if persistence is enabled
		if (persist && typeof window !== 'undefined') {
			try {
				const savedTheme = localStorage.getItem(storageKey)

				if (savedTheme !== null && typeof savedTheme === 'string' && themeList.includes(savedTheme as TTheme)) {
					return savedTheme as TTheme
				}
			} catch (error) {
				console.warn('Error reading theme from localStorage:', error)
				return initialTheme ?? defaultTheme
			}
		}
		if (initialTheme) return initialTheme

		if (useSystemTheme && typeof window !== 'undefined') {
			const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
			return isSystemDark ? 'dark' : 'light'
		}
		return defaultTheme
	})

	const setTheme = useCallback(
		(newTheme: TTheme) => {
			if (persist && typeof window !== 'undefined') {
				localStorage.setItem(storageKey, newTheme)
			}
			document.documentElement.setAttribute('data-theme', newTheme)
			document.documentElement.style.colorScheme = newTheme
			setThemeState(newTheme)
		},
		[persist, storageKey],
	)

	const toggleTheme = () => {
		const themes = themeList
		const currentIndex = themes.indexOf(theme)
		const nextIndex = (currentIndex + 1) % themes.length
		setTheme(themes[nextIndex])
	}

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		const handleChange = (e: MediaQueryListEvent) => {
			setTheme(e.matches ? 'dark' : 'light')
		}

		// Only subscribe to system theme changes if:
		// - No initial theme provided
		// - Persistence is enabled
		// - System theme adoption is enabled
		if (!initialTheme && persist && useSystemTheme) {
			handleChange(mediaQuery as unknown as MediaQueryListEvent)
			mediaQuery.addEventListener('change', handleChange)
		}

		return () => {
			mediaQuery.removeEventListener('change', handleChange)
		}
	}, [initialTheme, persist, setTheme, useSystemTheme])

	const value: TThemeContext = {
		theme,
		setTheme,
		toggleTheme,
	}

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
