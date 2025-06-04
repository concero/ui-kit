import type { Meta, StoryObj } from '@storybook/react-vite'
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
/**
 * Demonstrates all states of the Switch component in two columns:
 * - First column: unchecked states
 * - Second column: checked states
 * States include: default, focus, hover, pressed, disabled.
 */
export const AllStates: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '24px' }}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				<h3>Unchecked</h3>
				<Switch leftLabel="Default" />
				<Switch leftLabel="Focused" isFocused />
				<Switch leftLabel="Hovered" isHovered />
				<Switch leftLabel="Pressed" isPressed />
				<Switch leftLabel="Disabled" disabled />
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				<h3>Checked</h3>
				<Switch leftLabel="Default" checked />
				<Switch leftLabel="Focused" checked isFocused />
				<Switch leftLabel="Hovered" checked isHovered />
				<Switch leftLabel="Pressed" checked isPressed />
				<Switch leftLabel="Disabled" checked disabled />
			</div>
		</div>
	),
}
