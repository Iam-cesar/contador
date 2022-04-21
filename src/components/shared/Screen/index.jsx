import React from 'react'
import { ScreenContainer } from './style'

export default function Screen ({ title, children }) {
  return (
    <ScreenContainer>
      <h1 data-testid='app-title' >{title}</h1>
      {children}
    </ScreenContainer>
  )
}