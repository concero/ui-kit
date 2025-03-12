/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { OTP } from './OTP'
import { useState } from 'react'

const meta: Meta<typeof OTP> = {
	component: OTP,
	tags: ['autodocs'],
	argTypes: {
		value: { control: 'text', description: 'Value of the OTP input' },
		numInputs: { control: 'number', description: 'Number of OTP inputs', defaultValue: 4 },
		onChange: { action: 'changed', description: 'Callback when OTP changes' },
		onPaste: { action: 'pasted', description: 'Callback when content is pasted' },
		shouldAutoFocus: { control: 'boolean', description: 'Auto-focus the first input', defaultValue: true },
		placeholder: { control: 'text', description: 'Placeholder for inputs' },
		renderSeparator: { control: 'text', description: 'Separator between inputs' },
		containerStyle: { control: 'object', description: 'Styles for the container' },
		inputType: {
			control: 'select',
			options: ['text', 'tel', 'number'],
			description: 'Type of the input fields',
			defaultValue: 'text',
		},
		skipDefaultStyles: { control: 'boolean', description: 'Disable default styles' },
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	render: () => {
		const [{ otp, numInputs, placeholder, inputType }, setConfig] = useState({
			otp: '',
			numInputs: 5,
			separator: '-',
			placeholder: '',
			inputType: 'text' as const,
		})

		const handleOTPChange = (otp: string) => {
			setConfig(prevConfig => ({ ...prevConfig, otp }))
		}

		return (
			<OTP
				numInputs={numInputs}
				onChange={handleOTPChange}
				value={otp}
				placeholder={placeholder}
				inputType={inputType}
				shouldAutoFocus
			/>
		)
	},
}
