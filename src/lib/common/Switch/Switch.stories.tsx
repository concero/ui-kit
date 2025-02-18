import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
	component: Switch,
	argTypes: {
		disabled: {
			control: 'boolean',
		},
		checked: {
			control: 'boolean',
		},
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const LeftLabel: Story = {
	args: {
		leftLabel: 'Title of this switch',
	},
}
export const RightLabel: Story = {
	args: {
		rightLabel: 'Title of this switch',
	},
}
