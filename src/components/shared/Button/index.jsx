import React from 'react'
import { ButtonContainer } from './style'

export default function Button ({ children, onClick }) {
  return (
    <ButtonContainer onClick={onClick} data-testid='app-button'>
      {children}
    </ButtonContainer>
  )
}