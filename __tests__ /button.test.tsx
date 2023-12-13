import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Button } from '../src/stories/components/button/Button'

test('renders button correctly', () => {
  render(<Button label="Click me please"></Button>)
  expect(screen.getByText('Hello')).toBeInTheDocument()
})
