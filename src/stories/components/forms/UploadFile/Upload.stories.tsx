import type { Meta, StoryObj } from '@storybook/react'
import { UploadFile } from './Upload'

const meta = {
  title: 'Forms/UploadFile',
  component: UploadFile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UploadFile>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Upload File',
    description: 'PNG, JPG ya da PDF (Maks. 10MB)',
    error: false,
    errorMessage: "Dosya boyutu 10MB'dan büyük olamaz!",
  },
}
