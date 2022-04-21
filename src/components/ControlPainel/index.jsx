import React, { useContext } from 'react'
import Screen from '../shared/Screen'
import Button from '../shared/Button'

import { CounterContext } from '../../context/counter'

export default function ControlPainel () {
  const { setCounter } = useContext(CounterContext)

  const add = () => {
    setCounter(prev => prev + 1)
  }

  const decrease = () => {
    setCounter(prev => prev - 1)
  }

  return (
    <Screen title={'Painel de controle'}>
      <div className='control-painel__button__container'>
        <Button onClick={() => decrease()}>Diminuir</Button>
        <Button onClick={() => add()}>Acrescentar</Button>
      </div>
    </Screen>
  )
}

