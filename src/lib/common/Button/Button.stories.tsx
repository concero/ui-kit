// TODO: Delete after 3 versions of showTrailIcon

import type { Meta, StoryObj } from '@storybook/react-vite'
import Plus from '@/lib/assets/icons/monochrome/Plus.svg?react'
import Refresh from '@/lib/assets/icons/monochrome/Refresh.svg?react'
import { Button, TButtonSize, TButtonVariant } from './Button'
import { UnionToTuple } from '@/lib/utils/types/UnionToTuple'
import { Switch } from '../Switch/Switch'

const sizes: UnionToTuple<TButtonSize> = ['s', 'm', 'l', 'xl']

const variants: UnionToTuple<TButtonVariant> = [
	'primary',
	'secondary_color',
	'secondary',
	'tetrary_color',
	'tetrary',
	'danger',
]
const as = ['div', 'button']
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
		as: {
			control: 'select',
			options: as,
		},
		isHovered: {
			control: 'boolean',
		},
		isPressed: {
			control: 'boolean',
		},
		isFocused: {
			control: 'boolean',
		},
		isDisabled: {
			control: 'boolean',
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
		onClick: () => alert('Click'),
		children: 'Custom value',
	},
}
export const PrimaryWithAnotherComponent: Story = {
	args: {
		isFull: false,
		showTrailIcon: true,
		size: 's',
		leftIcon: <Plus />,
		rightIcon: <Switch />,
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
		isDisabled: true,
		rightIcon: <Switch />,
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
export const IsFullWithCustomTrail: Story = {
	args: {
		size: 's',
		trailIcon: {
			show: true,
			icon: <Refresh />,
		},
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

export const IconCombinations: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
			{/* Row 1: No icons */}
			<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
				<h4 style={{ margin: 0 }}>No Icons</h4>
				<Button variant={'primary'} size={'m'}>
					Primary
				</Button>
			</div>

			{/* Row 2: Only left icon */}
			<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
				<h4 style={{ margin: 0 }}>Only Left Icon</h4>
				<Button variant={'primary'} size={'m'} leftIcon={<Plus />}>
					Primary
				</Button>
			</div>

			{/* Row 3: Only right icon */}
			<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
				<h4 style={{ margin: 0 }}>Only Right Icon</h4>
				<Button variant={'primary'} size={'m'} rightIcon={<Refresh />}>
					Primary
				</Button>
			</div>

			{/* Row 4: Both icons */}
			<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
				<h4 style={{ margin: 0 }}>Both Icons</h4>
				<Button variant={'primary'} size={'m'} leftIcon={<Plus />} rightIcon={<Refresh />}>
					Primary
				</Button>
			</div>

			{/* Row 5: Only trail icon */}
			<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
				<h4 style={{ margin: 0 }}>Only Trail Icon</h4>
				<Button variant={'primary'} size={'m'} showTrailIcon>
					Primary
				</Button>
			</div>

			{/* Row 6: Left icon + trail icon */}
			<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
				<h4 style={{ margin: 0 }}>Left Icon + Trail Icon</h4>
				<Button variant={'primary'} size={'m'} leftIcon={<Plus />} showTrailIcon>
					Primary
				</Button>
			</div>

			{/* Row 7: Right icon + trail icon */}
			<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
				<h4 style={{ margin: 0 }}>Right Icon + Trail Icon</h4>
				<Button variant={'primary'} size={'m'} rightIcon={<Refresh />} showTrailIcon>
					Primary
				</Button>
			</div>

			{/* Row 8: Both icons + trail icon */}
			<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
				<h4 style={{ margin: 0 }}>Both Icons + Trail Icon</h4>
				<Button variant={'primary'} size={'m'} leftIcon={<Plus />} rightIcon={<Refresh />} showTrailIcon>
					Primary
				</Button>
			</div>
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

							<Button variant={variant} size={size} isFocused>
								Focused
							</Button>
							<Button variant={variant} size={size} isHovered>
								Hovered
							</Button>
							<Button variant={variant} size={size} isPressed>
								Pressed
							</Button>
							<Button variant={variant} size={size} isLoading>
								Loading
							</Button>
							<Button variant={variant} size={size} isDisabled={true}>
								Disabled
							</Button>
						</div>
					))}
				</div>
			))}
		</div>
	),
}
