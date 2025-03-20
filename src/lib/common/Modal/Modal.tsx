import { forwardRef, PropsWithChildren, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import cls from './Modal.module.pcss'
import { useCombinedRef } from '@/lib/utils/hooks/useCombinedRef/useCombinedRef'
import { IconButton } from '../IconButton/IconButton'
import CrossIcon from '@/lib/assets/icons/CrossIcon.svg?react'
export type TModalProps = PropsWithChildren<{
	title?: ReactNode | string
	show: boolean
	onClose: () => void
	className?: string
	position?: 'top' | 'bottom' | 'center'
	headless?: boolean
	/**@default false */
	unmountContentOnClose?: boolean
}>

const positionClassMap: Record<'top' | 'bottom' | 'center', string> = {
	top: cls.position_top,
	bottom: cls.position_bottom,
	center: cls.position_center,
}

export const Modal = forwardRef<HTMLElement, TModalProps>(
	(
		{
			title,
			show: initialShow,
			onClose,
			children,
			className,
			position = 'center',
			headless = false,
			unmountContentOnClose = false,
		}: TModalProps,
		ref,
	) => {
		const [isVisible, setIsVisible] = useState(initialShow)
		const modalRef = useRef<HTMLDivElement>(null)
		const combinedRef = useCombinedRef(modalRef, ref)
		const handleEscape = useCallback(
			(event: KeyboardEvent) => {
				if (event.key === 'Escape') {
					onClose()
				}
			},
			[onClose],
		)
		useEffect(() => {
			if (initialShow) {
				setIsVisible(true)
				document.body.style.overflowY = 'hidden'
				window.addEventListener('keydown', handleEscape)
			} else {
				document.body.style.removeProperty('overflow-y')
				if (unmountContentOnClose) {
					const timeoutId = setTimeout(() => {
						setIsVisible(false)
					}, 300) // The animation duration should match the CSS transition duration (0.3s = 300ms)
					return () => clearTimeout(timeoutId)
				}
			}

			return () => {
				window.removeEventListener('keydown', handleEscape)
			}
		}, [initialShow, handleEscape, unmountContentOnClose])
		return (
			<div
				className={`${cls.overlay} ${positionClassMap[position]} ${initialShow ? cls.overlay_show : ''}`}
				onClick={onClose}
			>
				<div
					//@ts-expect-error TODO: Improve typeing
					ref={combinedRef}
					className={`${cls.container} ${className ?? ''} ${initialShow ? cls.container_show : ''} ${headless ? cls.headless : ''}`}
					onClick={e => e.stopPropagation()}
				>
					{!headless && isVisible && (
						<div className={cls.header}>
							{typeof title == 'string' ? <h2 className={cls.title}>{title}</h2> : title}
							<IconButton size="m" variant="secondary" onClick={onClose}>
								<CrossIcon />
							</IconButton>
						</div>
					)}
					{isVisible && children}
				</div>
			</div>
		)
	},
)
