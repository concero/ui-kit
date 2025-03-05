import clsx from 'clsx'
import Bolt from '@/lib/assets/icons/monochrome/Bolt.svg?react'
import cls from './Alert.module.pcss'

type TAlertType = 'neutral' | 'warning' | 'negative' | 'positive' | 'branded'
type TAlertProps = {
	type: TAlertType
	title?: string
	description?: string
} & Omit<React.ComponentProps<'div'>, 'title'>
type TClassname = string
export const Alert = (props: TAlertProps) => {
	const { type = 'branded', title, description, ...otherProps } = props

	const typeMap: Record<TAlertType, TClassname> = {
		branded: cls.branded,
		negative: cls.negative,
		neutral: cls.neutral,
		positive: cls.positive,
		warning: cls.warning,
	}
	return (
		<div className={clsx(cls.alert_body_wrap, typeMap[type])} {...otherProps}>
			<div>
				<AlertIcon type={type} />
			</div>
			<div className={cls.alert_body}>
				<span className={cls.title} title={title}>
					{title}
				</span>
				<span className={cls.description}>{description}</span>
			</div>
		</div>
	)
}

export const AlertIcon = (props: Pick<TAlertProps, 'type'>) => {
	const { type = 'branded' } = props

	const typeMap: Record<TAlertType, TClassname> = {
		branded: cls.branded,
		negative: cls.negative,
		neutral: cls.neutral,
		positive: cls.positive,
		warning: cls.warning,
	}
	return (
		<div className={clsx(cls.icon_wrap, typeMap[type])}>
			<Bolt />
		</div>
	)
}
