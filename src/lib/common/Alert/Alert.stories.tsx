import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from './Alert'
import Plus from '@/lib/assets/icons/monochrome/Plus.svg?react'
const meta: Meta<typeof Alert> = {
	component: Alert,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		title: 'MainTItle',
		description: 'Its my description',
	},
}
export const PrimaryWithCusomIcon: Story = {
	args: {
		title: 'MainTItle',
		description: 'Its my description',
		icon: <Plus />,
	},
}
export const SafeOverflow: Story = {
	args: {
		title: 'MainTItle123123213123123123123123123123123123123123',
		description:
			'Its my descriptio nasdas dasdasd asdkajsdhi usdbhilasd jbhasidagb sdoiasgbdoiuadby oasiudbyas ouid suiodyagbs uodayb sduaывыывы выввывфв цafddfsfsefsefyb',
	},
}
/** */
export const AgressiveOverflow: Story = {
	args: {
		title: 'MainTItle123123213123123123123123123123123123123123',
		description:
			'Its my descriptio nasdas dasdasd asdkajsdhi usdbhilasd jbhasidagb sdawdawdawdawddoiasgbdoiuadby oasiudbyas ouid suiodyagbs uodayb sawdawdawdawduaывыывы выввывфв цafddfsfsefsefyawdawdawdawdab',
	},
}
