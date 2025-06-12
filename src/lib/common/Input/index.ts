import { Input as BaseInput } from './Input/Input'
export type { TInputProps, TInputSize } from './Input/Input'
import { OTP } from './OTP/OTP'
import { TextArea } from './TextArea/TextArea'

type InputType = typeof BaseInput & {
	OTP: typeof OTP
	TextArea: typeof TextArea
}

const Input = BaseInput as InputType

Input.OTP = OTP
Input.TextArea = TextArea

export { Input }
