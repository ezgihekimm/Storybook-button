import type { Meta, StoryObj } from '@storybook/react'
import { Colors } from './colors'

const meta = {
  title: 'DesignSystems/Colors',
  component: Colors,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Colors>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
