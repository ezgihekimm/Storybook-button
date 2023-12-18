import { render } from '@testing-library/react'
import React from 'react'
import { Button } from '../stories/components/button/Button'

describe('Button', () => {
  test('renders Button component', () => {
    render(<Button label="Click me please" />)
  })
})
