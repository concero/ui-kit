import { forwardRef, ReactNode, useId, useState } from 'react'
import cls from './Switch.module.pcss'
import clsx from 'clsx'
export type TSwitchProps = {
	checked?: boolean
	/**Alias for checked */
	value?: boolean
	onChange?: (newState: boolean) => void
	leftLabel?: ReactNode
	rightLabel?: ReactNode
	id?: string | number
	className?: string
	htmlDivProps?: Omit<React.ComponentProps<'div'>, 'className' | 'disabled'>
	disabled?: boolean
	isHovered?: boolean
	isPressed?: boolean
	isFocused?: boolean
}
/**Alias for Toggle  */
export const Switch = forwardRef<HTMLButtonElement, TSwitchProps>((props: TSwitchProps, ref) => {
	const {
		checked,
		onChange,
		value,
		disabled,
		id,
		rightLabel,
		leftLabel,
		htmlDivProps,
		className,
		isHovered,
		isPressed,
		isFocused,
	} = props
	const [internalChecked, setInternalChecked] = useState(checked ?? value ?? false)
	const actualValue = checked ?? value ?? internalChecked

	const switchGeneratedId = useId()
	const switchId = String(id ?? switchGeneratedId)

	const switchHandler = (event: React.MouseEvent<HTMLButtonElement | HTMLLabelElement>) => {
		event.preventDefault()
		if (disabled) return
		setInternalChecked(!actualValue)
		onChange?.(!actualValue)
	}

	return (
		<div className={clsx(cls.wrap_with_label, className)} {...htmlDivProps}>
			{leftLabel ? (
				<label
					onClick={switchHandler}
					htmlFor={String(switchId)}
					className={clsx(cls.label, { [cls.label_disabled]: disabled }, [])}
				>
					{leftLabel}
				</label>
			) : null}
			<button
				id={String(switchId)}
				onClick={switchHandler}
				className={clsx(cls.wrapper, {
					[cls.is_active]: actualValue,
					[cls.is_hovered]: isHovered,
					[cls.is_pressed]: isPressed,
					[cls.is_focused]: isFocused,
				})}
				ref={ref}
				aria-checked={checked ?? internalChecked}
				aria-disabled={disabled}
				disabled={disabled}
			>
				<div></div>
			</button>
			{rightLabel ? (
				<label
					onClick={switchHandler}
					htmlFor={switchId}
					className={clsx(cls.label, { [cls.label_disabled]: disabled }, [])}
				>
					{rightLabel}
				</label>
			) : null}
		</div>
	)
})
