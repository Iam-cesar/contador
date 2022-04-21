import React from 'react'
import { CounterContainer } from './style'
import { useCounter } from '../../../../hooks/useCounter'

export default function Counter () {
  const { counter } = useCounter()

  return (
    <CounterContainer data-testid='app-counter' >
      <span data-testid='counter-state'>{counter}</span>
    </CounterContainer>
  )
}