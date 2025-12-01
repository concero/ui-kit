import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProgressLine } from './ProgressLine'

const meta: Meta<typeof ProgressLine> = {
	component: ProgressLine,
	tags: ['autodocs'],
} satisfies Meta<typeof ProgressLine>
export default meta

type Story = StoryObj<typeof ProgressLine>

export const Segmented: Story = {
	args: {
		variant: 'segmented',
		value: 7,
		maxSegments: 10,
		segmentGap: 2,
	},
}

export const Solid: Story = {
	args: {
		variant: 'solid',
		value: 65,
	},
}

export const SolidWithTag: Story = {
	args: {
		variant: 'solid',
		value: 80,
		tag: {
			show: true,
			transform: v => `${v}%`,
		},
	},
}
