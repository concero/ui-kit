import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextArea } from './TextArea'
import Plus from '@/lib/assets/icons/monochrome/Plus.svg?react'
const meta: Meta<typeof TextArea> = {
	component: TextArea,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		placeholder: 'TextArea',
	},
}
export const PrimaryFull: Story = {
	args: {
		icon: <Plus />,
		iconHint: <Plus />,
		placeholder: 'Placeholder',
		hintText: 'Hint text',
		count: {
			max: 10,
		},
		labelText: 'Label',
		subLabelText: 'Help text',
	},
}
export const Variants: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '50px' }}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
				<TextArea
					size="m"
					icon={<Plus />}
					placeholder="Medium"
					iconHint={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					hintText="Hint text"
				/>
				<TextArea
					size="m"
					isFocused
					placeholder="Focused"
					icon={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					iconHint={<Plus />}
					hintText="Hint text"
				/>
				<TextArea
					size="m"
					isHovered
					placeholder="Hovered"
					icon={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					iconHint={<Plus />}
					hintText="Hint text"
				/>
				<TextArea
					size="m"
					isPressed
					placeholder="Pressed"
					icon={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					iconHint={<Plus />}
					hintText="Hint text"
				/>
				<TextArea
					size="m"
					isError
					placeholder="Error"
					icon={<Plus />}
					iconHint={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					hintText="Hint text"
				/>
				<TextArea
					size="m"
					isSuccess
					placeholder="Success"
					icon={<Plus />}
					iconHint={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					hintText="Hint text"
				/>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
				<TextArea
					size="l"
					icon={<Plus />}
					placeholder="Large"
					iconHint={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					hintText="Hint text"
				/>
				<TextArea
					size="l"
					isFocused
					placeholder="Focused"
					icon={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					iconHint={<Plus />}
					hintText="Hint text"
				/>
				<TextArea
					size="l"
					isHovered
					placeholder="Hovered"
					icon={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					iconHint={<Plus />}
					hintText="Hint text"
				/>
				<TextArea
					size="l"
					isPressed
					placeholder="Pressed"
					icon={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					iconHint={<Plus />}
					hintText="Hint text"
				/>
				<TextArea
					size="l"
					isError
					placeholder="Error"
					icon={<Plus />}
					iconHint={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					hintText="Hint text"
				/>
				<TextArea
					size="l"
					isSuccess
					placeholder="Success"
					icon={<Plus />}
					iconHint={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					hintText="Hint text"
				/>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
				<TextArea
					size="xl"
					icon={<Plus />}
					placeholder="Extra Large"
					iconHint={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					hintText="Hint text"
				/>
				<TextArea
					size="xl"
					isFocused
					placeholder="Focused"
					icon={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					iconHint={<Plus />}
					hintText="Hint text"
				/>
				<TextArea
					size="xl"
					isHovered
					placeholder="Hovered"
					icon={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					iconHint={<Plus />}
					hintText="Hint text"
				/>
				<TextArea
					size="xl"
					isPressed
					placeholder="Pressed"
					icon={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					iconHint={<Plus />}
					hintText="Hint text"
				/>
				<TextArea
					size="xl"
					isError
					placeholder="Error"
					icon={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					iconHint={<Plus />}
					hintText="Hint text"
				/>
				<TextArea
					size="xl"
					isSuccess
					placeholder="Success"
					icon={<Plus />}
					labelText="Label"
					subLabelText="Help text"
					count={{
						max: 10,
					}}
					iconHint={<Plus />}
					hintText="Hint text"
				/>
			</div>
		</div>
	),
}
