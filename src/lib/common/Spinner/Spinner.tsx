/* eslint-disable @typescript-eslint/no-deprecated */
import BrandedDarkBgSpinner from '@/lib/assets/icons/spinners/BrandedDarkBgSpinner.svg?react'
import BrandedLightBgSpinner from '@/lib/assets/icons/spinners/BrandedLightBgSpinner.svg?react'
import GraySpinner from '@/lib/assets/icons/spinners/GraySpinner.svg?react'
import DangerSpinner from '@/lib/assets/icons/spinners/DangerSpinner.svg?react'
import cls from './Spinner.module.pcss'
import { ReactElement } from 'react'

export type TSpinnerType = 'dark' | 'light' | 'gray' | 'danger'

export type TSpinnerProps = {
	type?: TSpinnerType
}

const SpinnerMap: Record<TSpinnerType, ReactElement> = {
	dark: <BrandedDarkBgSpinner className={cls.spinner} />,
	light: <BrandedLightBgSpinner className={cls.spinner} />,
	gray: <GraySpinner className={cls.spinner} />,
	danger: <DangerSpinner className={cls.spinner} />,
}

export const Spinner = (props: TSpinnerProps): JSX.Element => {
	const { type = 'light' } = props
	const SelectedSpinner = SpinnerMap[type]

	return SelectedSpinner
}
