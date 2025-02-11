import { useState, type ComponentProps, type PropsWithChildren } from 'react'
import cls from './Button.module.pcss'
export type TButtonProps = ComponentProps<'button'> & PropsWithChildren<object>

export const Button = (props: TButtonProps) => {
	const { children, ...otherProps } = props
	const [state, setState] = useState(0)
	debugger
	return (
		<button className={cls.button} {...otherProps}>
			{children}{state}
		</button>
	)
}
