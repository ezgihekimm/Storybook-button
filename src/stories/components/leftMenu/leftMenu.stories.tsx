import type { Meta, StoryObj } from '@storybook/react'
import { LeftMenu } from './leftMenu'

const meta = {
  title: 'Example/LeftMenu',
  component: LeftMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LeftMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
