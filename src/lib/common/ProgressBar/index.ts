import { ProgressBar as BaseProgressBar } from './ProgressBar'
import { ProgressLine } from './ProgressLine/ProgressLine'

type TProgressType = typeof BaseProgressBar & {
	Line: typeof ProgressLine
}
export const ProgressBar = BaseProgressBar as TProgressType

ProgressBar.Line = ProgressLine
