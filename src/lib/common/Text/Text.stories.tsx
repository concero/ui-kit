import { VStack } from '../Stack'
import { Text } from './Text'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Text> = {
	component: Text,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Text>

export const Primary: Story = {
	args: {
		variant: 'heading_xxxxlarge',
		children: 'The quick brown fox jumps over the lazy dog.',
	},
}
export const AnotherTag: Story = {
	args: {
		variant: 'heading_xxxxlarge',
		children: 'The quick brown fox jumps over the lazy dog.',
		color: '#ff2255',
		as: 'textarea',
	},
}
export const PresetColor: Story = {
	args: {
		variant: 'heading_xxxxlarge',
		children: 'The quick brown fox jumps over the lazy dog.',
		color: 'accent-900',
	},
}
export const VarColor: Story = {
	args: {
		variant: 'heading_xxxxlarge',
		children: 'The quick brown fox jumps over the lazy dog.',
		color: 'var(--color-danger-600)',
	},
}
export const CustomColor: Story = {
	args: {
		variant: 'heading_xxxxlarge',
		children: 'The quick brown fox jumps over the lazy dog.',
		color: 'yellow',
	},
}
export const SecondCustomColor: Story = {
	args: {
		variant: 'heading_xxxxlarge',
		children: 'The quick brown fox jumps over the lazy dog.',
		color: '#ff2255',
	},
}
export const AllVariants: Story = {
	render: () => (
		<VStack gap="space_2">
			<Text variant="body_small">Body Small</Text>
			<Text variant="body_medium">Body Medium</Text>
			<Text variant="body_large">Body Large</Text>
			<Text variant="body_xlarge">Body X-Large</Text>
			<Text variant="button_medium">Button Medium</Text>
			<Text variant="button_large">Button Large</Text>
			<Text variant="button_xlarge">Button X-Large</Text>
			<Text variant="heading_small">Heading Small</Text>
			<Text variant="heading_medium">Heading Medium</Text>
			<Text variant="heading_large">Heading Large</Text>
			<Text variant="heading_xlarge">Heading X-Large</Text>
			<Text variant="heading_xxlarge">Heading XX-Large</Text>
			<Text variant="heading_xxxlarge">Heading XXX-Large</Text>
			<Text variant="heading_xxxxlarge">Heading XXXX-Large</Text>
		</VStack>
	),
}
