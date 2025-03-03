const Component = () => <span></span>
import cls from './TypographyStories.module.pcss'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Component> = {
	component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Primary: Story = {
	render: () => (
		<div className={cls.wrap}>
			<span className={cls.font_body_small}>Body Small</span>
			<span className={cls.font_body_medium}>Body Medium</span>
			<span className={cls.font_body_large}>Body Large</span>
			<span className={cls.font_body_xlarge}>Body X-Large</span>
			<span className={cls.font_button_medium}>Button Medium</span>
			<span className={cls.font_button_large}>Button Large</span>
			<span className={cls.font_button_xlarge}>Button X-Large</span>
			<span className={cls.font_heading_small}>Heading Small</span>
			<span className={cls.font_heading_medium}>Heading Medium</span>
			<span className={cls.font_heading_large}>Heading Large</span>
			<span className={cls.font_heading_xlarge}>Heading X-Large</span>
			<span className={cls.font_heading_xxlarge}>Heading XX-Large</span>
			<span className={cls.font_heading_xxxlarge}>Heading XXX-Large</span>
			<span className={cls.font_heading_xxxxlarge}>Heading XXXX-Large</span>
		</div>
	),
}
