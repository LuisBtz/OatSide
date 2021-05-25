import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
      --black: #000000;
      --white: #FFFFFF;
      --jumbo-xl: 86.29px;
      --amarillo: #F1DE6B;
      --azul: #547BB4;
      --rojo: #CE645B;
    }

    body {
        background-color: var(--white);
        font-family: var(--reMed);
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        overflow-x: hidden;
        @media (min-width:  1500px) {
          font-size: 30px;
        }
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }

    ::selection {
      background: black;
      color: white;
    }

    em, strong, i, b {
      font-weight: normal;
      font-style: normal;
    }
`
