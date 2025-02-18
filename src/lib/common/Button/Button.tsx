import { forwardRef, ReactNode, type ComponentProps, type PropsWithChildren } from 'react'
import cls from './Button.module.pcss'
import clsx from 'clsx'
import { Spinner } from '../Spinner/Spinner'
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
			<span className={cls.inner_content}>{isLoading ? <Spinner /> : children}</span>
			{!isLoading && rightIcon}
			{showTrailIcon && (
				<span className={cls.trail_icon}>
					<TrailArrow />
				</span>
			)}
		</button>
	)
})
