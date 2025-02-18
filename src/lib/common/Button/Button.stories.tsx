import type { Meta, StoryObj } from '@storybook/react'
import Plus from '@/lib/assets/icons/monochrome/Plus.svg?react'
import Refresh from '@/lib/assets/icons/monochrome/Refresh.svg?react'
import { Button, TSize, TVariant } from './Button'
import { UnionToTuple } from '@/lib/utils/types/UnionToTuple'

const sizes: UnionToTuple<TSize> = ['s', 'm', 'l', 'xl']

const variants: UnionToTuple<TVariant> = [
	'primary',
	'secondary_color',
	'secondary',
	'tetrary_color',
	'tetrary',
	'danger',
]
const meta: Meta<typeof Button> = {
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		isFull: {
			control: 'boolean',
		},
		size: {
			control: 'select',
			options: sizes,
			table: {
				defaultValue: {
					summary: sizes[0],
				},
			},
		},
		variant: {
			control: 'select',
			options: variants,
			table: {
				defaultValue: {
					summary: variants[0],
				},
			},
		},
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		isFull: false,
		showTrailIcon: true,
		size: 's',
		leftIcon: <Plus />,
		rightIcon: <Refresh />,
		children: 'Custom value',
	},
}
export const Loading: Story = {
	args: {
		size: 's',
		isLoading: true,
		children: 'Custom value ',
	},
}
export const Danger: Story = {
	args: {
		size: 's',
		showTrailIcon: true,
		variant: 'danger',
		children: 'Custom value',
	},
}
export const Disabled: Story = {
	args: {
		size: 's',
		showTrailIcon: true,
		disabled: true,
		children: 'Custom value',
	},
}
export const IsFull: Story = {
	args: {
		size: 's',
		showTrailIcon: true,
		isFull: true,
		children: 'Custom value',
	},
}
export const OverflowText: Story = {
	args: {
		size: 's',
		showTrailIcon: true,
		children:
			'This is a very long text that should be truncated with an ellipsis to test text overflow handling in the button component.',
	},
	render: args => (
		<div style={{ width: '250px' }}>
			<Button {...args} />
		</div>
	),
}
export const OverflowTextWithIcons: Story = {
	args: {
		size: 's',
		showTrailIcon: true,
		leftIcon: <Plus />,
		rightIcon: <Refresh />,
		children:
			'This is a very long text that should be truncated with an ellipsis to test text overflow handling in the button component.',
	},
	render: args => (
		<div style={{ width: '250px' }}>
			<Button {...args} />
		</div>
	),
}

/**Attempt to render all button types without pseudo-classes (no focus/active/hover states). */
export const AllVariants: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
			{variants.map(variant => (
				<div key={variant} style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
					{sizes.map(size => (
						<div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
							<Button key={`${variant}-${size}`} variant={variant} size={size}>
								{variant} {size}
							</Button>

							<Button variant={variant} size={size} isLoading>
								Loading
							</Button>
							<Button variant={variant} size={size} disabled>
								Disabled
							</Button>
						</div>
					))}
				</div>
			))}
		</div>
	),
}
