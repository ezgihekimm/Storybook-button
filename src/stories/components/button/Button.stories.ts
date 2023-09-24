import type { Meta, StoryObj } from '@storybook/react'

import ExampleIcon from '../../assets/exampleIcon'
import { Button } from './Button'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Filled: Story = {
  args: {
    type: 'filled',
    size: 'md',
    label: 'Button',
    iconPosition: 'none',
    disabled: false,
    IconSource: ExampleIcon,

    // loading: false,
  },
}

// export const FilledWithLeftIcon: Story = {
//   args: {
//     type: 'filled',
//     label: 'Button',
//     size: 'md',
//     IconSource: ExampleIcon,
//     // IconLoadingSource: LoadingIcon,
//     iconPosition: 'left',
//     disabled: false,
//   },
// }

// export const FilledWithRightIcon: Story = {
//   args: {
//     type: 'filled',
//     label: 'Button',
//     size: 'md',
//     IconSource: ExampleIcon,
//     iconPosition: 'right',
//     disabled: false,
//   },
// }

// export const FilledWithOnlyIcon: Story = {
//   args: {
//     type: 'filled',
//     label: 'Button',
//     size: 'md',
//     IconSource: ExampleIcon,
//     iconPosition: 'only',
//     disabled: false,
//   },
// }

export const Pill: Story = {
  args: {
    type: 'pill',
    size: 'md',
    label: 'Button',
    iconPosition: 'none',
    disabled: false,
  },
}

// export const PillWithLeftIcon: Story = {
//   args: {
//     type: 'pill',
//     label: 'Button',
//     size: 'md',
//     IconSource: ExampleIcon,
//     iconPosition: 'left',
//     disabled: false,
//   },
// }

// export const PillWithRightIcon: Story = {
//   args: {
//     type: 'pill',
//     label: 'Button',
//     size: 'md',
//     IconSource: ExampleIcon,
//     iconPosition: 'right',
//     disabled: false,
//   },
// }

// export const PillWithOnlyIcon: Story = {
//   args: {
//     type: 'pill',
//     label: 'Button',
//     size: 'md',
//     IconSource: ExampleIcon,
//     iconPosition: 'only',
//     disabled: false,
//   },
// }

export const Outline: Story = {
  args: {
    type: 'outline',
    size: 'md',
    label: 'Button',
    iconPosition: 'none',
    disabled: false,
  },
}

// export const OutlineWithLeftIcon: Story = {
//   args: {
//     type: 'outline',
//     label: 'Button',
//     size: 'md',
//     IconSource: ExampleIcon,
//     iconPosition: 'left',
//     disabled: false,
//   },
// }

// export const OutlineWithRightIcon: Story = {
//   args: {
//     type: 'outline',
//     label: 'Button',
//     size: 'md',
//     IconSource: ExampleIcon,
//     iconPosition: 'right',
//     disabled: false,
//   },
// }

// export const OutlineWithOnlyIcon: Story = {
//   args: {
//     type: 'outline',
//     label: 'Button',
//     size: 'md',
//     IconSource: ExampleIcon,
//     iconPosition: 'only',
//     disabled: false,
//   },
// }

export const Link: Story = {
  args: {
    type: 'link',
    size: 'md',
    label: 'Button',
    iconPosition: 'none',
    disabled: false,
  },
}

// export const LinkWithLeftIcon: Story = {
//   args: {
//     type: 'link',
//     label: 'Button',
//     size: 'md',
//     IconSource: ExampleIcon,
//     iconPosition: 'left',
//     disabled: false,
//   },
// }

// export const LinkWithRightIcon: Story = {
//   args: {
//     type: 'link',
//     label: 'Button',
//     size: 'md',
//     IconSource: ExampleIcon,
//     iconPosition: 'right',
//     disabled: false,
//   },
// }

// export const LinkWithOnlyIcon: Story = {
//   args: {
//     type: 'link',
//     label: 'Button',
//     size: 'md',
//     IconSource: ExampleIcon,
//     iconPosition: 'only',
//     disabled: false,
//   },
// }
