import { forwardRef } from 'react'
import { MetaProgressBar, TMetaProgressBarProps } from './MetaProgressBar/MetaProgressBar'
import { ProgressLine, TProgressLineProps } from './ProgressLine/ProgressLine'
import { OmitTyped } from '@/lib/utils/types/utils'

type TProgressBarProps = OmitTyped<TMetaProgressBarProps, 'children'> & TProgressLineProps

export const ProgressBar = forwardRef<HTMLDivElement, TProgressBarProps>((props, ref) => {
	const { value, description, error, isLoading, className } = props
	return (
		<MetaProgressBar
			isLoading={isLoading}
			error={{
				isError: Boolean(error),
				...error,
			}}
			description={description}
		>
			{props.variant == 'solid' && (
				<ProgressLine className={className} ref={ref} value={value} variant={'solid'} tag={props.tag} />
			)}
			{props.variant == 'segmented' && (
				<ProgressLine
					className={className}
					ref={ref}
					value={value}
					variant={'segmented'}
					maxSegments={props.maxSegments}
					segmentGap={props.segmentGap}
				/>
			)}
		</MetaProgressBar>
	)
})
