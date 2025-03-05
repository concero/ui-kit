import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
	component: Spinner,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
/**
 * Displays all available spinner types in a single row.
 */
export const AllTypes: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
			<Spinner type="dark" />
			<Spinner type="light" />
			<Spinner type="gray" />
			<Spinner type="danger" />
		</div>
	),
}
