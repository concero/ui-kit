import { forwardRef, type ComponentProps, type PropsWithChildren } from 'react'
import cls from './IconButton.module.pcss'
import clsx from 'clsx'
import { Spinner, TSpinnerType } from '../Spinner/Spinner'

type TClassname = string
export type TIconButtonSize = 's' | 'm' | 'l' | 'xl'
export type TIconButtonVariant = 'primary' | 'secondary_color' | 'secondary' | 'tetrary_color' | 'tetrary' | 'danger'
export interface IButtonProps {
	size?: TIconButtonSize
	variant?: TIconButtonVariant
	className?: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	htmlButtonProps?: Omit<ComponentProps<'button'>, 'disabled' | 'className' | 'onClick'>
	disabled?: boolean
	isLoading?: boolean
	isHovered?: boolean
	isPressed?: boolean
	isFocused?: boolean
}
export type TIconButtonProps = PropsWithChildren<IButtonProps>

export const IconButton = forwardRef<HTMLButtonElement, TIconButtonProps>((props: TIconButtonProps, ref) => {
	const {
		children,
		className,
		variant = 'primary',
		size = 'm',
		isLoading = false,
		isHovered,
		isPressed,
		isFocused,
		disabled,
		onClick,
		htmlButtonProps,
	} = props
	const sizeMap: Record<TIconButtonSize, TClassname> = {
		l: cls.size_l,
		s: cls.size_s,
		m: cls.size_m,
		xl: cls.size_xl,
	}
	const variantMap: Record<TIconButtonVariant, TClassname> = {
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
					[cls.is_hovered]: isHovered,
					[cls.is_pressed]: isPressed,
					[cls.is_focused]: isFocused,
				},
				className,
			)}
			onClick={onClick}
			disabled={disabled}
			{...htmlButtonProps}
		>
			<span className={cls.inner_content}>{isLoading ? <Spinner type={typeSpinner} /> : children}</span>
		</button>
	)
})
