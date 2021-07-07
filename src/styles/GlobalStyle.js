import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  html, body, #app, #app>div{
    width: 100%;
    height: 100%;
  }

`;

export default GlobalStyle;
