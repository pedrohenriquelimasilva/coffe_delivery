import { createGlobalStyle } from 'styled-components'

export const GlobalStyleComponent = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-500']};
  }

  body{
    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
`
