import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
	args: {
		label: 'Label for checkbox',
	},
}

/**
 * Demonstrates all states of the Checkbox component in two columns:
 * - First column: unchecked states
 * - Second column: checked states
 * States include: default, focus, hover, pressed, disabled.
 */
export const AllStates: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '24px' }}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				<h3>Unchecked</h3>
				<Checkbox label="Default" />
				<Checkbox label="Focused" isFocused />
				<Checkbox label="Hovered" isHovered />
				<Checkbox label="Pressed" isPressed />
				<Checkbox label="Disabled" disabled />
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				<h3>Checked</h3>
				<Checkbox label="Default" checked />
				<Checkbox label="Focused" checked isFocused />
				<Checkbox label="Hovered" checked isHovered />
				<Checkbox label="Pressed" checked isPressed />
				<Checkbox label="Disabled" checked disabled />
			</div>
		</div>
	),
}
