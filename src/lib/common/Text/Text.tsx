import { HintedString, OmitTyped } from '@/lib/utils/types/utils'
import cls from './Text.module.pcss'
import { CSSProperties, HTMLAttributes } from 'react'

type FontVariant =
	| 'body_small'
	| 'body_medium'
	| 'body_large'
	| 'body_xlarge'
	| 'button_medium'
	| 'button_large'
	| 'button_xlarge'
	| 'heading_small'
	| 'heading_medium'
	| 'heading_large'
	| 'heading_xlarge'
	| 'heading_xxlarge'
	| 'heading_xxxlarge'
	| 'heading_xxxxlarge'
type TColorName = 'accent' | 'gray' | 'success' | 'warning' | 'danger'

type TColorIntensity = 25 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
type ThemeColorKey = `${TColorName}-${TColorIntensity}`

interface TextProps {
	as?: keyof HTMLElementTagNameMap
	variant?: FontVariant
	ellipsis?: boolean
	className?: string
	children: React.ReactNode
	// @ts-expect-error: TODO: Fix types
	color?: HintedString<ThemeColorKey, CSSProperties['color']>
	htmlProps?: OmitTyped<HTMLAttributes<HTMLElement>, 'className' | 'color' | 'children'>
}

const isThemeColor = (value: string): value is ThemeColorKey => /^(accent|gray|success|warning|danger)-\d+$/.test(value)

export const Text = (props: TextProps) => {
	const { as, variant, children, className, ellipsis, color, htmlProps } = props

	const Component = as || 'span'

	let style: CSSProperties | undefined

	if (color) {
		if (isThemeColor(color)) {
			// 'accent-500' -> 'var(--color-accent-500)'
			style = { color: `var(--color-${color})` }
		} else {
			// '#fff', 'red', 'rgb(...)'
			style = { color }
		}
	}

	const classes = `${cls[variant ?? '']} ${ellipsis ? cls.ellipsis : ''} ${className ?? ''}`.trim()

	return (
		<Component className={classes} style={style} {...htmlProps}>
			{children}
		</Component>
	)
}
