import { render, screen } from '@testing-library/react'
import ScreenCounter from './index'

test('Should render title of section counter', async () => {
  render(<ScreenCounter />)

  const result = await screen.findByText('App Contador 3000')

  expect(result).toBeInTheDocument()
})