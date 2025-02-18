import clsx from 'clsx'
import cls from './Tag.module.pcss'
import { forwardRef, PropsWithChildren } from 'react'

type TClassname = string
export type TTagVariant = 'branded' | 'positive' | 'negative' | 'warning' | 'neutral'
export type TTagSize = 's' | 'm'
export type TTagProps = PropsWithChildren<{
	size?: TTagSize
	filled?: boolean
	variant?: TTagVariant
}>

export const Tag = forwardRef<HTMLDivElement, TTagProps>((props: TTagProps, ref) => {
	const { size = 's', filled = false, variant = 'branded', children, ...otherProps } = props

	const sizeMap: Record<TTagSize, TClassname> = {
		m: cls.size_m,
		s: cls.size_s,
	}
	const variantMap: Record<TTagVariant, TClassname> = {
		branded: cls.branded,
		negative: cls.negtive,
		neutral: cls.neutral,
		positive: cls.positive,
		warning: cls.warning,
	}

	return (
		<div
			className={clsx(cls.tag, sizeMap[size], variantMap[variant], { [cls.filled]: filled })}
			ref={ref}
			{...otherProps}
		>
			{children}
		</div>
	)
})
