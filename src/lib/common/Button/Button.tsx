import { forwardRef, ReactNode, type ComponentProps, type PropsWithChildren } from 'react'
import cls from './Button.module.pcss'
import clsx from 'clsx'
import { Spinner, TSpinnerType } from '../Spinner/Spinner'
import TrailArrow from '@/lib/assets/icons/monochrome/TrailArrow.svg?react'
type TClassname = string
export type TSize = 's' | 'm' | 'l' | 'xl'
export type TVariant = 'primary' | 'secondary_color' | 'secondary' | 'tetrary_color' | 'tetrary' | 'danger'
export interface IButtonProps {
	size?: TSize
	isLoading?: boolean
	variant?: TVariant
	leftIcon?: ReactNode
	rightIcon?: ReactNode
	className?: string
	isFull?: boolean
	showTrailIcon?: boolean
}
export type TButtonProps = ComponentProps<'button'> & PropsWithChildren<IButtonProps>

export const Button = forwardRef<HTMLButtonElement, TButtonProps>((props: TButtonProps, ref) => {
	const {
		children,
		className,
		variant = 'primary',
		disabled,
		size = 'm',
		isLoading = false,
		leftIcon,
		rightIcon,
		isFull,
		showTrailIcon,
		...otherProps
	} = props
	const sizeMap: Record<TSize, TClassname> = {
		l: cls.size_l,
		s: cls.size_s,
		m: cls.size_m,
		xl: cls.size_xl,
	}
	const variantMap: Record<TVariant, TClassname> = {
		primary: cls.primary,
		danger: cls.danger,
		secondary_color: cls.secondary_color,
		secondary: cls.secondary,
		tetrary_color: cls.tetrary_color,
		tetrary: cls.tetrary,
	}
	let typeSpinner: TSpinnerType = 'light'
	switch (variant) {
		case 'primary':
			typeSpinner = 'dark'
			break
		case 'secondary_color':
			typeSpinner = 'light'
			break
		case 'secondary':
			typeSpinner = 'gray'
			break
		case 'tetrary_color':
			typeSpinner = 'light'
			break
		case 'tetrary':
			typeSpinner = 'gray'
			break
		case 'danger':
			typeSpinner = 'danger'
			break
	}
	return (
		<button
			ref={ref}
			className={clsx(
				cls.button,
				sizeMap[size],
				variantMap[variant],
				{
					[cls.loading]: isLoading,
					[cls.is_full]: isFull,
				},
				className,
			)}
			disabled={disabled}
			{...otherProps}
		>
			{!isLoading && leftIcon}
			<span className={cls.inner_content}>{isLoading ? <Spinner type={typeSpinner} /> : children}</span>
			{!isLoading && rightIcon}
			{showTrailIcon && (
				<span className={cls.trail_icon_wrap}>
					<TrailArrow className={cls.trail_icon} />
				</span>
			)}
		</button>
	)
})
