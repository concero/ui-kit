import type { Meta, StoryObj } from '@storybook/react-vite'
import { Modal } from './Modal'
import { useState } from 'react'

const meta: Meta<typeof Modal> = {
	component: Modal,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		show: true,
		title: 'Main title of the modal',
		position: 'center',
		headless: false,
		onClose: () => alert('Modal closed'),
		children: <p>Content of modal</p>,
	},
}
export const Headless: Story = {
	args: {
		show: true,
		position: 'center',
		onClose: () => alert('Modal closed'),
		headless: true,
		children: <p>Content of modal</p>,
	},
}

export const Toggle: Story = {
	render: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [isOpen, setIsOpen] = useState(false)

		return (
			<div>
				<button onClick={() => setIsOpen(true)}>Open modal</button>
				<div
					style={{
						zIndex: 10,
						background:
							'linear-gradient(to right, #f4e8e8 1px, transparent 1px), linear-gradient(to bottom, #f4e8e8 1px, transparent 1px), linear-gradient(to right, #ffcccc 50%, transparent 50%), linear-gradient(to bottom, #ffcccc 50%, transparent 50%)',
						backgroundSize: '20px 20px', // Размер ячеек сетки
						minWidth: '100vw',
						minHeight: '100vh',
					}}
				></div>
				<Modal show={isOpen} title="Modal with button" position="center" onClose={() => setIsOpen(false)}>
					<div style={{ backgroundColor: 'yellow', display: 'flex' }}>
						<div>Content of modal.</div>
						<button onClick={() => setIsOpen(false)}>Close modal</button>
					</div>
				</Modal>
			</div>
		)
	},
}
export const ToggleOverflowY: Story = {
	render: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [isOpen, setIsOpen] = useState(false)

		return (
			<div>
				<button onClick={() => setIsOpen(true)}>Open modal</button>
				<div
					style={{
						zIndex: 10,
						background:
							'linear-gradient(to right, #f4e8e8 1px, transparent 1px), linear-gradient(to bottom, #f4e8e8 1px, transparent 1px), linear-gradient(to right, #ffcccc 50%, transparent 50%), linear-gradient(to bottom, #ffcccc 50%, transparent 50%)',
						backgroundSize: '20px 20px', // Размер ячеек сетки
						minWidth: '100vw',
						minHeight: '100vh',
					}}
				></div>
				<Modal show={isOpen} title="Modal with button" position="center" onClose={() => setIsOpen(false)}>
					<div style={{ backgroundColor: 'yellow', display: 'flex' }}>
						<div style={{ height: '1200px' }}>Content of modфцвфцвфцвфцвфцвal.</div>
						<button onClick={() => setIsOpen(false)}>Close modal</button>
					</div>
				</Modal>
			</div>
		)
	},
}
export const ToggleOverflowYPrepare: Story = {
	render: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [isOpen, setIsOpen] = useState(false)

		return (
			<div>
				<button onClick={() => setIsOpen(true)}>Open modal</button>
				<div
					style={{
						zIndex: 10,
						background:
							'linear-gradient(to right, #f4e8e8 1px, transparent 1px), linear-gradient(to bottom, #f4e8e8 1px, transparent 1px), linear-gradient(to right, #ffcccc 50%, transparent 50%), linear-gradient(to bottom, #ffcccc 50%, transparent 50%)',
						backgroundSize: '20px 20px', // Размер ячеек сетки
						minWidth: '100vw',
						minHeight: '100vh',
					}}
				></div>
				<Modal show={isOpen} title="Modal with button" position="center" onClose={() => setIsOpen(false)}>
					<div style={{ backgroundColor: 'yellow', display: 'flex', maxHeight: '100%', overflow: 'auto' }}>
						<div style={{ height: '1200px' }}>Content of modфцвфцвфцвфцвфцвal.</div>
						<button onClick={() => setIsOpen(false)}>Close modal</button>
					</div>
				</Modal>
			</div>
		)
	},
}
export const PrimaryWithToggleWithUnmount: Story = {
	render: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [isOpen, setIsOpen] = useState(false)

		return (
			<div>
				<button onClick={() => setIsOpen(true)}>Open modal</button>
				<Modal
					show={isOpen}
					title="Modal with button"
					position="center"
					onClose={() => setIsOpen(false)}
					unmountContentOnClose
				>
					<div style={{ backgroundColor: 'yellow', display: 'flex' }}>
						<p>Content of modal.</p>
						<button onClick={() => setIsOpen(false)}>Close modal</button>
					</div>
				</Modal>
			</div>
		)
	},
}
export const HeadlessWithToggle: Story = {
	render: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [isOpen, setIsOpen] = useState(false)

		return (
			<div>
				<button onClick={() => setIsOpen(true)}>Open modal</button>
				<Modal
					show={isOpen}
					headless={true}
					position="center"
					onClose={() => setIsOpen(false)}
					unmountContentOnClose
				>
					<div style={{ backgroundColor: 'yellow', display: 'flex' }}>
						<p>Content of modal.</p>
						<button onClick={() => setIsOpen(false)}>Close modal</button>
					</div>
				</Modal>
			</div>
		)
	},
}
