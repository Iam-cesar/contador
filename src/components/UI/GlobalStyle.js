import { createGlobalStyle } from 'styled-components'

export const GlobaStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 62.5%;
  }

  body{
    display: grid;
    place-items: center;
    height: 80vmin;
  }

  span {
    font-size: 1.8rem;
  }

  h1{
    font-size: 2.4rem;
  }
`