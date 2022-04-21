import { screen, render } from '@testing-library/react'
import Screen from './index'

test('Should contain data test selector', () => {
  render(<Screen />)

  const result = screen.getByTestId('app-title')

  expect(result).toBeDefined()

})