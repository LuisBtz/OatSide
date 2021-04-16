import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
      --black: #000000;
      --white: #FFFFFF;
      --jumbo-xl: 86.29px;
    }

    body {
        background-color: var(--white);
        font-family: var(--reMed);
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }

    ::selection {
      background: black;
      color: white;
    }
`
