import { render, screen } from '@testing-library/react'
import Counter from './index'

test('Should contain data test selector', () => {
  render(<Counter />)

  const result = screen.getByTestId('app-counter')

  expect(result).toBeDefined()
})
