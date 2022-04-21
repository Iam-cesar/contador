import { render, screen } from '@testing-library/react'
import Button from './index'

test('Should contain data test selector', async () => {
  render(<Button />)

  const result = await screen.findByTestId('app-button')

  expect(result).toBeDefined()
})