import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    background: #0c0c0f;
    box-sizing: border-box;
    transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease;

    font-family: Playfair Display, serif;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #263238;
      margin-right: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: #fcfc62;
      margin-right: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #fdfd4a;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: #0c0c0f;
  }

  #root {
    height: 100vh;
    width: 100vw;
    position: relative;
  }
`;