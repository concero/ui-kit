import type { Meta, StoryObj } from '@storybook/react'
import { Tag, TTagSize, TTagVariant } from './Tag'
import { UnionToTuple } from '@/lib/utils/types/UnionToTuple'
const sizes: UnionToTuple<TTagSize> = ['s', 'm']

const variants: UnionToTuple<TTagVariant> = ['branded', 'positive', 'negative', 'warning', 'neutral']
const meta: Meta<typeof Tag> = {
	component: Tag,
	tags: ['autodocs'],
	argTypes: {
		filled: {
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
		children: 'Tag',
	},
}

export const AllVariants: Story = {
	render: () => (
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 100px)', gap: '16px' }}>
			{sizes.map(size => (
				<div key={size} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
					{variants.map(variant => (
						<Tag key={variant} size={size} variant={variant}>
							Tag
						</Tag>
					))}
				</div>
			))}
			{sizes.map(size => (
				<div key={size + '-filled'} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
					{variants.map(variant => (
						<Tag key={variant + '-filled'} size={size} variant={variant} filled>
							Tag
						</Tag>
					))}
				</div>
			))}
		</div>
	),
}
