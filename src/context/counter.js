import { createContext, useState } from 'react'

export const CounterContext = createContext(0)

export function CounterProvider ({ children }) {
  const [counter, setCounter] = useState(0)
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  )
}