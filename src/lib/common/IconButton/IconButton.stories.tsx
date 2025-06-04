import type { Meta, StoryObj } from '@storybook/react-vite'
import Plus from '@/lib/assets/icons/monochrome/Plus.svg?react'
import { IconButton, TIconButtonSize, TIconButtonVariant } from './IconButton'
import { UnionToTuple } from '@/lib/utils/types/UnionToTuple'
const sizes: UnionToTuple<TIconButtonSize> = ['s', 'm', 'l', 'xl']

const variants: UnionToTuple<TIconButtonVariant> = [
	'primary',
	'secondary_color',
	'secondary',
	'tetrary_color',
	'tetrary',
	'danger',
]
const meta: Meta<typeof IconButton> = {
	component: IconButton,
	tags: ['autodocs'],
	argTypes: {
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
		size: 's',
		children: <Plus />,
		onClick: () => alert('click'),
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
		variant: 'danger',
		children: <Plus />,
	},
}
export const Disabled: Story = {
	args: {
		size: 's',
		disabled: true,
		children: <Plus />,
	},
}
/**Attempt to render all IconButton types without pseudo-classes (no focus/active/hover states). */
export const AllVariants: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
			{variants.map(variant => (
				<div key={variant} style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
					{sizes.map(size => (
						<div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
							<IconButton key={`${variant}-${size}`} variant={variant} size={size}>
								<Plus />
							</IconButton>

							<IconButton variant={variant} size={size} isFocused>
								<Plus />
							</IconButton>
							<IconButton variant={variant} size={size} isHovered>
								<Plus />
							</IconButton>
							<IconButton variant={variant} size={size} isPressed>
								<Plus />
							</IconButton>
							<IconButton variant={variant} size={size} isLoading>
								<Plus />
							</IconButton>
							<IconButton variant={variant} size={size} disabled>
								<Plus />
							</IconButton>
						</div>
					))}
				</div>
			))}
		</div>
	),
}
