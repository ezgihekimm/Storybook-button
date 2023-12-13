import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { ReactLiveDecorator } from 'storybook-react-live-decorator'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Button component',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const code = `() => (
  <Button
    type="filled"
    size="md"
    label="Button"
    iconPosition="none"
    disabled={false}
    IconSource="PaperAirplane"
    IconLoadingSource="LoadingSolid"
    loading={false}
  ></Button>
)`
export const LiveEdit = {
  decorators: [ReactLiveDecorator({ code, scope: { Button } })],
}

export const ButtonClick: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await userEvent.click(button)
  },
}

export const DisabledButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByRole('button')

    if (!DisabledButton.args?.disabled) {
      throw new Error('Başlangıçta düğme devre dışı değil.')
    }

    const initialButtonDisabledState = DisabledButton.args?.disabled

    await userEvent.click(button)

    const afterClickButtonDisabledState = DisabledButton.args?.disabled

    if (
      DisabledButton.args?.disabled &&
      initialButtonDisabledState === afterClickButtonDisabledState
    ) {
      throw new Error('Devre dışıyken düğme tıklanmamalıydı.')
    }
  },
}

DisabledButton.args = {
  disabled: true,
}

export const Filled: Story = {
  args: {
    type: 'filled',
    size: 'md',
    label: 'Button',
    iconPosition: 'none',
    disabled: false,
    IconSource: 'PaperAirplane',
    IconLoadingSource: 'LoadingSolid',
    loading: false,
  },
}

export const Pill: Story = {
  args: {
    type: 'pill',
    size: 'md',
    label: 'Button',
    iconPosition: 'none',
    disabled: false,
    IconSource: 'PaperAirplane',
    IconLoadingSource: 'LoadingSolid',
  },
}
export const Outline: Story = {
  args: {
    type: 'outline',
    size: 'md',
    label: 'Button',
    iconPosition: 'none',
    disabled: false,
    IconSource: 'PaperAirplane',
    IconLoadingSource: 'LoadingSolid',
  },
}

export const Link: Story = {
  args: {
    type: 'link',
    size: 'md',
    label: 'Button',
    iconPosition: 'none',
    disabled: false,
    IconSource: 'PaperAirplane',
    IconLoadingSource: 'LoadingSolid',
  },
}
