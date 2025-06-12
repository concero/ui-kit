import clsx from 'clsx'
import cls from './MetaInput.module.pcss'
import { TInputProps } from '../Input/Input'
import { PropsWithChildren } from 'react'
import { TCountConfig } from '../model/types'

type MetaInput = PropsWithChildren<
	{
		count?: { currentValue?: number } & TCountConfig
	} & Pick<
		TInputProps,
		'classNameWrap' | 'iconHint' | 'labelText' | 'subLabelText' | 'hintText' | 'isError' | 'isSuccess'
	>
>

export const MetaInput = (props: MetaInput) => {
	const { classNameWrap, iconHint, labelText, subLabelText, count, hintText, isError, isSuccess, children } = props

	const showHeader = Boolean(labelText || subLabelText || count)
	const showFooter = Boolean(hintText || iconHint)
	return (
		<div className={clsx(cls.input_wrap, classNameWrap)}>
			{showHeader && (
				<div className={cls.header_input}>
					<div className={cls.label_wrap}>
						<span className={cls.label_text}>{labelText}</span>
						<span className={cls.sublabel_text}>{subLabelText}</span>
					</div>
					{count && (
						<span className={cls.word_counter}>
							{count.currentValue}/{count.max}
						</span>
					)}
				</div>
			)}
			{children}
			{showFooter && (
				<div
					className={clsx(cls.footer_input, {
						[cls.hint_error_state]: isError,
						[cls.hint_success_state]: isSuccess,
					})}
				>
					{iconHint && <span className={cls.icon_footer}>{iconHint}</span>}
					<span className={cls.hint_footer}>{hintText}</span>
				</div>
			)}
		</div>
	)
}
