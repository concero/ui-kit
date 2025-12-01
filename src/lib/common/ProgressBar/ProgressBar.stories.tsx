import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProgressBar } from './ProgressBar'

const meta = {
	component: ProgressBar,
	tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>

export default meta

type Story = StoryObj<typeof ProgressBar>

export const Segmented: Story = {
	args: {
		variant: 'segmented',
		value: 7,
		maxSegments: 10,
		segmentGap: 2,
		description: {
			title: 'Progress',
			current: 7,
			max: 10,
		},
	},
}

export const Solid: Story = {
	args: {
		variant: 'solid',
		value: 65,
		description: {
			title: 'Completion',
			current: 65,
			max: 100,
		},
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
		description: {
			title: 'With Tag',
			current: 80,
			max: 100,
		},
	},
}

export const Loading: Story = {
	args: {
		variant: 'solid',
		value: 0,
		isLoading: true,
		description: {
			title: 'Loading...',
			current: '—',
			max: 100,
		},
	},
}

export const Error: Story = {
	args: {
		variant: 'segmented',
		value: 0,
		maxSegments: 10,
		error: {
			isError: true,
			title: 'Data failed',
			description: 'Please retry or check connection.',
		},
		description: {
			title: 'Upload progress',
			current: 4,
			max: 10,
		},
	},
}
