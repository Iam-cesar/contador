import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import App from './App'

test('Initial counter should be 0 (zero)', async () => {
  render(<App />)

  const result = await screen.findByTestId('counter-state')

  expect(result.innerHTML).toBe('0')
})

test('When click on Acrescentar one time, the counter should be 1 (one)', async () => {
  render(<App />)

  const button = await screen.findByText('Acrescentar')

  act(() => {
    button.click()
  })

  const result = await screen.findByTestId('counter-state')

  expect(result.innerHTML).toBe('1')
})

test('When click on Diminuir one time, the counter should be -1 (negative one)', async () => {
  render(<App />)

  const button = await screen.findByText('Diminuir')

  act(() => {
    button.click()
  })

  const result = await screen.findByTestId('counter-state')

  expect(result.innerHTML).toBe('-1')
})