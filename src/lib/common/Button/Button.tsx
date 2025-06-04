// TODO: Delete after 3 versions of showTrailIcon
/* eslint-disable @typescript-eslint/no-deprecated */
import { forwardRef, ReactNode, type ComponentProps, type PropsWithChildren } from 'react'
import cls from './Button.module.pcss'
import clsx from 'clsx'
import { Spinner, TSpinnerType } from '../Spinner/Spinner'
import TrailArrow from '@/lib/assets/icons/monochrome/TrailArrow.svg?react'
type TClassname = string
export type TButtonSize = 's' | 'm' | 'l' | 'xl'
export type TButtonVariant = 'primary' | 'secondary_color' | 'secondary' | 'tetrary_color' | 'tetrary' | 'danger'
type ButtonOrDiv = 'button' | 'div'

interface IButtonProps {
	size?: TButtonSize
	variant?: TButtonVariant
	leftIcon?: ReactNode
	rightIcon?: ReactNode
	className?: string
	isFull?: boolean
	/**@deprecated */
	showTrailIcon?: boolean
	trailIcon?: {
		show: boolean
		icon?: ReactNode
	}
	isLoading?: boolean
	isHovered?: boolean
	isPressed?: boolean
	isFocused?: boolean
	isDisabled?: boolean
	onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>
	buttonProps?: Omit<ComponentProps<'button'>, 'className' | 'onClick' | 'ref'>
	divProps?: Omit<ComponentProps<'div'>, 'className' | 'onClick' | 'ref'>
	as?: ButtonOrDiv
}
export type TButtonProps = PropsWithChildren<IButtonProps>

export const Button = forwardRef((props: TButtonProps, ref) => {
	const {
		children,
		className,
		variant = 'primary',
		size = 'm',
		isLoading = false,
		leftIcon,
		rightIcon,
		isFull,
		showTrailIcon,
		trailIcon,
		isHovered,
		isPressed,
		isFocused,
		isDisabled,
		onClick,
		buttonProps,
		divProps,
		as: Component = 'button',
	} = props
	const sizeMap: Record<TButtonSize, TClassname> = {
		l: cls.size_l,
		s: cls.size_s,
		m: cls.size_m,
		xl: cls.size_xl,
	}
	const variantMap: Record<TButtonVariant, TClassname> = {
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
		<Component
			//@ts-expect-error ref should be correct
			ref={ref}
			className={clsx(
				cls.button,
				sizeMap[size],
				variantMap[variant],
				{
					[cls.loading]: isLoading,
					[cls.is_full]: isFull,
					[cls.is_hovered]: isHovered,
					[cls.is_pressed]: isPressed,
					[cls.is_focused]: isFocused,
					[cls.is_disabled]: isDisabled,
				},
				className,
			)}
			onClick={onClick}
			{...(Component === 'button' ? buttonProps : {})}
			{...(Component === 'div' ? divProps : {})}
		>
			{!isLoading && leftIcon && <span className={cls.left_icon_wrap}>{leftIcon}</span>}
			<span className={cls.inner_content}>{isLoading ? <Spinner type={typeSpinner} /> : children}</span>
			{!isLoading && rightIcon && <span className={cls.right_icon_wrap}>{rightIcon}</span>}
			{!isLoading && (showTrailIcon || trailIcon?.show) && (
				<span className={cls.trail_icon_wrap}>
					{trailIcon?.icon || <TrailArrow className={cls.trail_icon} />}
				</span>
			)}
		</Component>
	)
})
