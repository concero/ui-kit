/* eslint-disable @typescript-eslint/no-deprecated */
import BrandedDarkBgSpinner from '@/lib/assets/icons/spinners/BrandedDarkBgSpinner.svg?react'
import BrandedLightBgSpinner from '@/lib/assets/icons/spinners/BrandedLightBgSpinner.svg?react'
import GraySpinner from '@/lib/assets/icons/spinners/GraySpinner.svg?react'
import DangerSpinner from '@/lib/assets/icons/spinners/DangerSpinner.svg?react'
import cls from './Spinner.module.pcss'
import { ReactElement } from 'react'
import clsx from 'clsx'

export type TSpinnerType = 'dark' | 'light' | 'gray' | 'danger'

export type TSpinnerProps = {
	type?: TSpinnerType
	className?: string
	svgProps?: Omit<React.SVGProps<SVGSVGElement>, 'className'>
}

export const Spinner = (props: TSpinnerProps): JSX.Element => {
	const { type = 'light', className, svgProps } = props
	const SpinnerMap: Record<TSpinnerType, ReactElement> = {
		dark: <BrandedDarkBgSpinner className={clsx(cls.spinner, className)} {...svgProps} />,
		light: <BrandedLightBgSpinner className={clsx(cls.spinner, className)} {...svgProps} />,
		gray: <GraySpinner className={clsx(cls.spinner, className)} {...svgProps} />,
		danger: <DangerSpinner className={clsx(cls.spinner, className)} {...svgProps} />,
	}
	const SelectedSpinner = SpinnerMap[type]

	return SelectedSpinner
}
