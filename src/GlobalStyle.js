import { createGlobalStyle } from "styled-components";
import background from "./images/background.png"

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
    font-family: 'Lato', sans-serif;
    background-image: url("${background}");
    background-size: cover;
    background-position: inherit;
    }
`;