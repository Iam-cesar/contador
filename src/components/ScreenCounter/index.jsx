import React from 'react'
import Screen from '../shared/Screen'
import Counter from './components/Counter'

export default function ScreenCounter () {
  return (
    <Screen className='app__mostrador' title={'App Contador 3000'}>
      <Counter />
    </Screen>
  )
}

