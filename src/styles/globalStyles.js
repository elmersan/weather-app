import { createGlobalStyle } from "styled-components";
import configStyle from "./configStyle";
const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body{
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    font: ${configStyle.text.body2};
  }

  .App{
    background: ${configStyle.colors.Black};
  }

  .wrapper {
    max-inline-size: 115.8rem;
    margin: auto;
    padding-inline:1.6rem;
  }

  .show-sidebar{
    transform: translateX(0%);
    opacity:1;
  }
`;

export default GlobalStyle;
