import { render, screen } from '@testing-library/react'
import ControlPainel from './index'

test('Should render title for painel controler', async () => {
  render(<ControlPainel />)

  const result = await screen.findByText('Painel de controle')

  expect(result).toBeInTheDocument()
})

test('Should have acrescentar button in the DOM', async () => {
  render(<ControlPainel />)

  const result = await screen.findByText('Acrescentar')

  expect(result).toBeInTheDocument()
})

test('Should have Diminuir button in the DOM', async () => {
  render(<ControlPainel />)

  const result = await screen.findByText('Diminuir')

  expect(result).toBeInTheDocument()
})

