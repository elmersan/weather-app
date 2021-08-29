import { createGlobalStyle } from "styled-components";
import configStyle from "./configStyle";
import media from "./mediaQueries";
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
    max-inline-size: 144rem;
    margin: auto;
    padding-inline:1.6rem;
  }

  .show-sidebar{
    transform: translateX(0%);
    opacity:1;
  }

  ${media.desktop}{
    .weather-dashboard{
      display:flex;
    }

    .weather-content,.aside{
      min-inline-size:40rem;
      max-inline-size: 40rem;
    }

    .content-data{
      flex: 1;
      text-align:center;
      padding-inline: 3rem;
    }
  }

  .hide{
    opacity:0;
    transform: translateY(-100%);
    transition:all 0.3s ease-in-out;
  }
`;

export default GlobalStyle;
