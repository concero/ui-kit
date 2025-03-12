import clsx from 'clsx'
import cls from './Input.module.pcss'
import { ComponentProps, forwardRef, ReactNode, useId, useRef, useState } from 'react'
import { useCombinedRef } from '@/lib/utils/hooks/useCombinedRef/useCombinedRef'
export type TInputSize = 'm' | 'l' | 'xl'
type TClassname = string
type TCountConfig = {
	max?: number
	strategy?: (value: string) => number
}
export type TInputProps = {
	className?: string
	size?: TInputSize
	icon?: React.ReactNode
	iconHint?: React.ReactNode
	placeholder?: string
	labelText?: string
	subLabelText?: string
	count?: TCountConfig
	hintText?: string | ReactNode
	value?: string
	id?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	isDisabled?: boolean
	isHovered?: boolean
	isPressed?: boolean
	isFocused?: boolean
	isError?: boolean
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
	inputProps?: Omit<
		ComponentProps<'input'>,
		'className' | 'onClick' | 'ref' | 'onChange' | 'placeholder' | 'value' | 'id'
	>
}
// TODO: Need to implement supported text formats, numbers, and characters.
export const Input = forwardRef<HTMLInputElement, TInputProps>((props, ref) => {
	const {
		className,
		size = 'm',
		icon,
		iconHint,
		placeholder,
		labelText,
		subLabelText,
		count,
		hintText,
		value,
		onChange,
		id,
		isDisabled = false,
		isHovered,
		isPressed,
		isFocused,
		isError,
		onClick,
		inputProps,
	} = props
	//Inner states
	const [innerValue, setInnerValue] = useState(value ?? '')
	const counterRef = useRef(0)
	const inputRef = useRef<HTMLInputElement>(null)
	const combinedRef = useCombinedRef(ref, inputRef)
	const inputGeneratedId = useId()
	const inputId = id ?? inputGeneratedId
	const showHeader = true
	const showFooter = true

	//The counting is done outside the functions, in the component body,
	// so that if onChange returns the same string, the counter does not increment.
	const valueForCount = value ?? innerValue
	if (count?.strategy) {
		counterRef.current = count.strategy(valueForCount)
	} else {
		counterRef.current = valueForCount.length
	}
	// Handlers
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!isDisabled) {
			const value = e.target.value
			setInnerValue(value)
			onChange?.(e)
		}
	}
	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!isDisabled && inputRef.current) {
			inputRef.current.focus()
		}
		onClick?.(e)
	}
	const sizeMap: Record<TInputSize, TClassname> = {
		m: cls.size_m,
		l: cls.size_l,
		xl: cls.size_xl,
	}
	return (
		<div className={cls.input_wrap}>
			{showHeader && (
				<div className={cls.header_input}>
					<div className={cls.label_wrap}>
						<span className={cls.label_text}>{labelText}</span>
						<span className={cls.sublabel_text}>{subLabelText}</span>
					</div>
					{count && (
						<span className={cls.word_counter}>
							{counterRef.current}/{count.max}
						</span>
					)}
				</div>
			)}
			<div
				tabIndex={isDisabled ? -1 : 0}
				role="textbox"
				aria-invalid={isError}
				aria-disabled={isDisabled}
				aria-label={placeholder || 'Text input'}
				onKeyDown={e => {
					if (!isDisabled && inputRef.current) {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault()
							inputRef.current.focus()
						}
						inputRef.current.focus()
					}
				}}
				className={clsx(
					cls.input_field,
					sizeMap[size],
					{
						[cls.is_hovered]: isHovered,
						[cls.is_pressed]: isPressed,
						[cls.is_focused]: isFocused,
						[cls.is_disabled]: isDisabled,
						[cls.is_error]: isError,
					},

					className,
				)}
				onClick={handleClick}
			>
				<input
					tabIndex={-1}
					id={inputId}
					spellCheck={false}
					value={value ?? innerValue}
					onChange={handleChange}
					type="text"
					ref={combinedRef}
					className={cls.input}
					placeholder={placeholder}
					{...inputProps}
				/>
				{icon && <div className={cls.icon}>{icon}</div>}
			</div>

			{showFooter && (
				<div className={cls.footer_input}>
					{iconHint && <span className={cls.icon_footer}>{iconHint}</span>}
					<span className={cls.hint_footer}>{hintText}</span>
				</div>
			)}
		</div>
	)
})
