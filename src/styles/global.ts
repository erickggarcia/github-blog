import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['base-border']} ;
    }

    body {
        background: ${(props) => props.theme['base-background']};
        -webkit-font-smoothing: 'antialiased';
        font-family: 'Nunito', sans-serif;
        color: ${props => props.theme['base-title']};
    }
`