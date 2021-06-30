import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline-color: ${props => props.theme.colors.purple};
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.darkGray};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
