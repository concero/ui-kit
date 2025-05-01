import { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { themeList, TTheme, TThemeContext } from '../model/model'
import { ThemeContext } from '../model/context'
import clsx from 'clsx'
import cls from './ThemeProvider.module.pcss'
interface IThemeProviderProps {
	/**
	 * The initial theme for the application. If not provided, the theme will be determined
	 * based on the value stored in localStorage or the system's preferred color scheme.
	 */
	initialTheme?: TTheme

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
	storageSettings = {
		persist: true,
		storageKey: defaultStorageKey,
	},
	className,
}: PropsWithChildren<IThemeProviderProps>) => {
	const persist = storageSettings.persist ?? defaultPersist
	const storageKey = storageSettings.storageKey ?? defaultStorageKey

	const [theme, setThemeState] = useState<TTheme>(() => {
		// Initiate theme from locaStorage
		if (persist && typeof window !== 'undefined') {
			try {
				const savedTheme = localStorage.getItem(storageKey)

				if (savedTheme !== null && typeof savedTheme === 'string' && themeList.includes(savedTheme as TTheme)) {
					return savedTheme as TTheme
				} else {
					return initialTheme ?? defaultTheme
				}
			} catch (error) {
				console.warn('Error reading theme from localStorage:', error)
				return initialTheme ?? defaultTheme
			}
		}
		return initialTheme ?? defaultTheme
	})

	const setTheme = useCallback(
		(newTheme: TTheme) => {
			if (persist && typeof window !== 'undefined') {
				localStorage.setItem(storageKey, newTheme)
			}
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

		if (!initialTheme && persist) {
			handleChange(mediaQuery as unknown as MediaQueryListEvent)
			mediaQuery.addEventListener('change', handleChange)
		}

		return () => {
			mediaQuery.removeEventListener('change', handleChange)
		}
	}, [initialTheme, persist, setTheme])

	const value: TThemeContext = {
		theme,
		setTheme,
		toggleTheme,
	}

	return (
		<ThemeContext.Provider value={value}>
			<div data-theme={theme} className={clsx(cls.wrap, className)}>
				{children}
			</div>
		</ThemeContext.Provider>
	)
}
