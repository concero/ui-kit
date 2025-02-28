import { useState, HTMLProps, useId, forwardRef } from 'react'
import cls from './Checkbox.module.pcss'
import clsx from 'clsx'
export type TCheckboxProps = Omit<HTMLProps<HTMLDivElement>, 'onChange' | 'disabled' | 'className'> & {
	checked?: boolean
	/**Alias for checked */
	value?: boolean
	onChange?: (checked: boolean) => void
	className?: string
	disabled?: boolean
	label?: string | number
	id?: string | number
}

export const Checkbox = forwardRef<HTMLDivElement, TCheckboxProps>((props: TCheckboxProps, ref) => {
	const { className, disabled, checked, value, onChange, id, label, ...otherProps } = props
	const [internalChecked, setInternalChecked] = useState(checked ?? value ?? false)
	const checkboxGeneratedId = useId()
	const checkboxId = id ?? checkboxGeneratedId

	const handleClick = () => {
		if (disabled) return
		const nextChecked = checked ?? !internalChecked
		setInternalChecked(!internalChecked)
		onChange?.(nextChecked)
	}

	return (
		<div className={clsx(cls.wrap_with_label)} ref={ref}>
			<div
				className={clsx(
					cls.checkbox,
					{
						[cls.checked]: checked ?? internalChecked,
						[cls.disabled]: disabled,
					},
					className,
				)}
				aria-disabled={disabled}
				onClick={handleClick}
				tabIndex={0}
				role="checkbox"
				aria-checked={checked ?? internalChecked}
				id={checkboxId}
				{...otherProps}
			>
				<div className={cls.inner}></div>
			</div>
			{label ? (
				<label
					onClick={handleClick}
					htmlFor={checkboxId}
					className={clsx(cls.label, { [cls.label_disabled]: disabled }, [])}
				>
					{label}
				</label>
			) : null}
		</div>
	)
})
